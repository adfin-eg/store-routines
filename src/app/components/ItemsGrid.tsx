import React, { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import svgPathsMain from "@/imports/svg-16ystvll8u";
import svgPathsMore from "@/imports/svg-oqev7ygrue";
import svgPathsEdit from "@/imports/svg-4f8idnkp17";
import svgPathsCalendar from "@/imports/svg-lbuqdinfsp";
import ActionIcon from "@/imports/ActionIcon-13-986";
import { FilterMenu } from "@/app/components/FilterMenu";
import * as Popover from "@radix-ui/react-popover";
import { ColumnSelector } from "@/app/components/ColumnSelector";
import { Check, X } from "lucide-react";

const LOCAL_FIELDS = [
  "Alarm item",
  "Auto replenishment",
  "Available in store",
  "Best before",
  "Can be ordered",
  "Change VAT",
  "Country of origin",
  "Item declaration",
  "Item type",
  "Label text 2",
  "Phase in date",
  "Phase out date",
  "Scale label",
  "Self service",
  "Self service weights",
  "Shelf life (days)",
  "Special group",
  "Stop sale",
  "Stop sale reason code",
  "Tara (kg)",
  "Weight control",
];

function getLocalValueFields(row: any): string[] {
  const itemName = row.itemText || "";
  const itemArea = row.itemArea || "";
  const seedString = itemName + itemArea;

  const getSeed = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  };

  const seed = getSeed(seedString);
  const pseudoRandom = (offset: number) => {
    const x = Math.sin(seed + offset) * 10000;
    return x - Math.floor(x);
  };

  const isProduce =
    (itemArea && (itemArea.includes("05") || itemArea.includes("Fruit & vegetables"))) ||
    (itemName && ["apple", "banana", "lettuce", "carrot", "cucumber", "blueberry", "blueberries", "avocado", "sweet potato", "cherry tomato"].some(p => itemName.toLowerCase().includes(p)));

  const initialHasOverrides = row.isLocalValues ?? false;

  if (!initialHasOverrides && !isProduce) return [];

  const localIndices = new Set<number>();

  if (isProduce) {
    const originIndex = LOCAL_FIELDS.indexOf("Country of origin");
    const labelIndex = LOCAL_FIELDS.indexOf("Label text 2");
    if (originIndex !== -1) localIndices.add(originIndex);
    if (labelIndex !== -1) localIndices.add(labelIndex);
  }

  const targetCount = (seed % 4) + 2;
  let attempts = 0;
  while (localIndices.size < targetCount && attempts < 50) {
    localIndices.add(Math.floor(pseudoRandom(attempts) * LOCAL_FIELDS.length));
    attempts++;
  }

  return Array.from(localIndices).sort((a, b) => a - b).map(i => LOCAL_FIELDS[i]);
}

export interface ItemsGridHandle {
  selectFirstRow: () => void;
  setSelectedById: (id: number) => void;
  clearFilters: () => void;
  getFilteredData: () => any[];
}

const defaultColumns = [
  { id: "actions", label: "+", width: 50, sticky: true },
  { id: "gtin", label: "GTIN", width: 120, sticky: true },
  { id: "itemText", label: "ITEM TEXT", width: 300, sticky: true },
  { id: "profilePrice", label: "PROFILE PRICE", width: 140 },
  { id: "retailPrice", label: "ORDINARY PRICE", width: 140 },
  { id: "retailPriceExclVat", label: "ORDINARY PRICE EXCL. VAT", width: 180 },
  { id: "wholesalePrice", label: "WHOLESALE PRICE", width: 140 },
  { id: "assortment", label: "ASSORTMENT", width: 140 },
  { id: "itemNumber", label: "ITEM NUMBER", width: 120 },
  { id: "modelNo", label: "MODEL NO.", width: 120 },
  { id: "qtyInPack", label: "QTY. IN PACKAGE", width: 140 },
  { id: "department", label: "DEPARTMENT", width: 150 },
  { id: "color", label: "COLOR", width: 120 },
  { id: "size", label: "SIZE", width: 120 },
  { id: "brand", label: "BRAND", width: 150 },
  { id: "itemAreaNo", label: "ITEM AREA NO.", width: 140 },
  { id: "itemArea", label: "ITEM AREA", width: 150 },
  { id: "itemGroupNo", label: "ITEM GROUP NO.", width: 120 },
  { id: "itemGroup", label: "ITEM GROUP", width: 200 },
  { id: "itemSubGroupNo", label: "ITEM SUBGROUP NO.", width: 140 },
  { id: "itemSubGroup", label: "ITEM SUBGROUP", width: 220 },
  { id: "isLocalValues", label: "LOCAL VALUES", width: 120 },
  { id: "localValues", label: "LOCAL VALUES", width: 240 },
];

const promotionColumns = [
  { id: "actions", label: "+", width: 56, sticky: true },
  { id: "availableIn", label: "AVAILABLE IN", width: 140, sticky: true },
  { id: "storeGroupName", label: "STORE GROUP NAME", width: 180, sticky: true },
  { id: "gtin", label: "GTIN", width: 140, sticky: true },
  { id: "itemText", label: "ITEM TEXT", width: 180, sticky: true },
  { id: "promotionId", label: "PROMOTION ID", width: 80 },
  { id: "promotionName", label: "PROMOTION NAME", width: 200 },
  { id: "offerId", label: "OFFER ID", width: 100 },
  { id: "offerName", label: "OFFER NAME", width: 160 },
  { id: "storeGroupId", label: "STORE GROUP CODE", width: 140 },
  { id: "modelNo", label: "MODEL NUMBER", width: 140 },
  { id: "offerGroup", label: "OFFER GROUP", width: 140 },
  { id: "validFrom", label: "VALID FROM", width: 160 },
];

export interface ItemsGridProps {
  onOpenItemDetails?: (item?: any) => void;
  onSelectionChange?: (selectedItems: any[]) => void;
  onFilterCountChange?: (count: number) => void;
  onDataChange?: (data: any[]) => void;
  selectedGroupIds?: Set<string>;
  isPromotionGrid?: boolean;
  data: any[];
  filters?: Record<string, string>;
  onFiltersChange?: (filters: Record<string, string>) => void;
  filterModes?: Record<string, string>;
  onFilterModesChange?: (modes: Record<string, string>) => void;
}

function LocalValuesMultiselect({ value, onChange }: { value: string; onChange: (val: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const selected = useMemo(() => new Set(value.split("|").filter(Boolean)), [value]);

  const toggle = (field: string) => {
    const next = new Set(selected);
    if (next.has(field)) next.delete(field);
    else next.add(field);
    onChange(Array.from(next).join("|"));
  };

  const clear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange("");
  };

  const displayText = selected.size === 0 ? "" : Array.from(selected).join(", ");

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        <div className="w-full h-[30px] bg-white border border-[#CCCCCC] flex items-center pl-2 pr-1 cursor-pointer gap-1 select-none">
          <span className="flex-1 text-[14px] text-[#1A1A1A] truncate min-w-0">
            {displayText}
          </span>
          {selected.size > 0 && (
            <button onClick={clear} className="shrink-0 size-[20px] flex items-center justify-center hover:bg-[#F7F7F7] rounded-full">
              <X className="size-3.5 stroke-[2.5px] text-[#1A1A1A]" />
            </button>
          )}
          <div className="shrink-0 size-[20px] flex items-center justify-center">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M9 1L5 5L1 1H9Z" fill="#1A1A1A" />
            </svg>
          </div>
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="start"
          sideOffset={-1}
          onOpenAutoFocus={(e) => e.preventDefault()}
          className="z-[10000] bg-white border border-[#CCCCCC] shadow-lg outline-none"
          style={{ width: "var(--radix-popover-trigger-width)" }}
        >
          <div className="flex flex-col py-1 max-h-[224px] overflow-y-auto">
            {LOCAL_FIELDS.map((field) => {
              const isChecked = selected.has(field);
              return (
                <button
                  key={field}
                  onClick={() => toggle(field)}
                  className={`text-left text-[14px] font-normal text-[#1A1A1A] relative outline-none cursor-pointer flex items-center h-[36px] min-h-[36px] w-[calc(100%-2px)] ml-[1px] px-[16px] hover:bg-[#EAEAEA] focus:bg-[#EAEAEA] gap-2 ${
                    isChecked ? "bg-[#FFFFFF] border-[2px] border-[#373737] px-[14px]" : "bg-white"
                  }`}
                >
                  <div className={`shrink-0 w-[16px] h-[16px] border flex items-center justify-center ${isChecked ? "bg-[#373737] border-[#373737]" : "border-[#CCCCCC] bg-white"}`}>
                    {isChecked && <Check className="w-[11px] h-[11px] text-white stroke-[3px]" />}
                  </div>
                  <span className={isChecked ? "-ml-[2px]" : ""}>{field}</span>
                </button>
              );
            })}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export const ItemsGrid = React.forwardRef<ItemsGridHandle, ItemsGridProps>(({
  onOpenItemDetails,
  onSelectionChange,
  onFilterCountChange,
  onDataChange,
  selectedGroupIds = new Set(),
  isPromotionGrid = false,
  data,
  filters: propsFilters,
  onFiltersChange,
  filterModes: propsFilterModes,
  onFilterModesChange
}, ref) => {
  const navigate = useNavigate();
  const initialColumns = isPromotionGrid ? promotionColumns : defaultColumns;
  
  const [visibleColumnIds, setVisibleColumnIds] = useState<string[]>(() =>
    initialColumns.map(col => col.id).filter(id => !["profilePrice", "retailPriceExclVat", "wholesalePrice"].includes(id))
  );

  const toggleColumn = (id: string) => {
    setVisibleColumnIds(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const lastStickyIndex = useMemo(() => {
    let last = -1;
    initialColumns.filter(c => visibleColumnIds.includes(c.id)).forEach((col, idxIter) => {
      if (col.sticky) last = idxIter;
    });
    return last;
  }, [initialColumns, visibleColumnIds]);

  const [internalFilters, setInternalFilters] = useState<Record<string, string>>(() => {
    const params = new URLSearchParams(window.location.search);
    const gtin = params.get("gtin");
    if (gtin) return { gtin };
    return {};
  });
  const [internalFilterModes, setInternalFilterModes] = useState<Record<string, string>>({});

  const filters = propsFilters || internalFilters;
  const setFilters = (newFilters: Record<string, string> | ((prev: Record<string, string>) => Record<string, string>)) => {
    if (onFiltersChange) {
      if (typeof newFilters === 'function') {
        onFiltersChange(newFilters(filters));
      } else {
        onFiltersChange(newFilters);
      }
    } else {
      setInternalFilters(newFilters);
    }
  };

  const filterModes = propsFilterModes || internalFilterModes;
  const setFilterModes = (newModes: Record<string, string> | ((prev: Record<string, string>) => Record<string, string>)) => {
    if (onFilterModesChange) {
      if (typeof newModes === 'function') {
        onFilterModesChange(newModes(filterModes));
      } else {
        onFilterModesChange(newModes);
      }
    } else {
      setInternalFilterModes(newModes);
    }
  };
  const [openMenuColumn, setOpenMenuColumn] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());
  const [lastSelectedIndex, setLastSelectedIndex] = useState<number | null>(null);

  // Calculate and notify parent of filter count
  const lastCountRef = useRef<number>(0);
  useEffect(() => {
    if (onFilterCountChange) {
      const manualFilterCount = Object.values(filters).filter(v => !!v).length;
      if (lastCountRef.current !== manualFilterCount) {
        lastCountRef.current = manualFilterCount;
        onFilterCountChange(manualFilterCount);
      }
    }
  }, [filters, onFilterCountChange]);

  const getCellValue = (row: any, colId: string) => {
    if (row[colId] !== undefined) return row[colId];
    
    // Mock values for promotion-specific columns
    switch (colId) {
      case "availableIn":
        const locations = ["Selected profiles", "Selected stores", "All stores"];
        return locations[row.id % locations.length];
      case "storeGroupId":
        return row.id % 4 === 0 ? "33" : row.id % 4 === 1 ? "2" : row.id % 4 === 2 ? "8" : "1";
      case "storeGroupName":
        const groups = ["Demo-Shops Sweden", "Demo-Shops Norway", "Demo-shops Germany", "Demo test store"];
        return groups[row.id % groups.length];
      case "promotionId":
        return (5000 + row.id).toString();
      case "promotionName":
        const promos = ["Demo Promotions Sweden", "Week 18", "Campaign 2022.21.12", "Week 45-1"];
        return promos[row.id % promos.length];
      case "offerId":
        return (1700 + row.id).toString();
      case "offerGroup":
        return "Offer items";
      case "offerName":
        return row.isMix ? "3 for 2" : "Promotion price";
      case "validFrom":
        return "19.09.2023 15:42";
      default:
        return "-";
    }
  };

  const filteredData = useMemo(() => {
    let baseData = data || [];
    
    // In non-promotion grids, ensure each item (by GTIN) only appears once
    if (!isPromotionGrid) {
      const seenGtins = new Set<string>();
      baseData = baseData.filter(row => {
        if (!row || !row.gtin) return false;
        if (seenGtins.has(row.gtin)) return false;
        seenGtins.add(row.gtin);
        return true;
      });
    }

    return baseData.filter(row => {
      if (!row) return false;
      // 0. Base Filter for Promotion Grid
      if (isPromotionGrid && !row.isPromotion) return false;

      // 1. Filter by Item Group Panel
      if (selectedGroupIds.size > 0) {
        const itemSgNo = String(row.itemSubGroupNo || "");
        const itemGNo = String(row.itemGroupNo || "");
        const itemANo = String(row.itemAreaNo || "");
        
        const isSelected = selectedGroupIds.has(itemSgNo) || 
                           selectedGroupIds.has(itemGNo) || 
                           selectedGroupIds.has(itemANo);
        
        if (!isSelected) return false;
      }

      // 2. Filter by Grid Column Filters
      return Object.entries(filters).every(([colId, filterValue]) => {
        if (!filterValue) return true;

        if (colId === "localValues") {
          const selected = filterValue.split("|").filter(Boolean);
          if (selected.length === 0) return true;
          const rowFields = getLocalValueFields(row);
          return selected.every(s => rowFields.includes(s));
        }

        if (colId === "isLocalValues") {
          const cellValue = row.isLocalValues ? "y" : "n";
          return cellValue.includes(filterValue.toLowerCase());
        }

        const cellValue = String(getCellValue(row, colId) || "").toLowerCase();
        const searchStr = filterValue.toLowerCase();
        const mode = filterModes[colId] || "Contains";

        switch (mode) {
          case "Contains": return cellValue.includes(searchStr);
          case "Starts with": return cellValue.startsWith(searchStr);
          case "Ends with": return cellValue.endsWith(searchStr);
          case "Equals": return cellValue === searchStr;
          default: return cellValue.includes(searchStr);
        }
      });
    });
  }, [filters, filterModes, selectedGroupIds, isPromotionGrid, data]);

  // Sync filtered data to parent
  const lastFilteredDataRef = useRef<any[]>([]);
  useEffect(() => {
    if (onDataChange) {
      // Only notify if the content actually changed (shallow check for performance)
      const isSame = filteredData.length === lastFilteredDataRef.current.length && 
                     filteredData.every((item, i) => item.id === lastFilteredDataRef.current[i]?.id);
      
      if (!isSame) {
        lastFilteredDataRef.current = filteredData;
        onDataChange(filteredData);
      }
    }
  }, [filteredData, onDataChange]);

  React.useImperativeHandle(ref, () => ({
    selectFirstRow: () => {
      if (filteredData.length > 0) {
        const firstItem = filteredData[0];
        setSelectedIds(new Set([firstItem.id]));
        setLastSelectedIndex(0);
        onSelectionChange?.([firstItem]);
      }
    },
    setSelectedById: (id: number) => {
      const indexFound = filteredData.findIndex(item => item.id === id);
      if (indexFound !== -1) {
        setSelectedIds(new Set([id]));
        setLastSelectedIndex(indexFound);
        
        // Find the row element and scroll to it if not visible
        const rowElement = document.getElementById(`row-${id}`);
        if (rowElement) {
          rowElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    },
    clearFilters: () => {
      setFilters({});
    },
    getFilteredData: () => filteredData
  }));

  // Sync selection change to parent
  useEffect(() => {
    if (onSelectionChange) {
      const selectedItems = filteredData.filter(item => selectedIds.has(item.id));
      onSelectionChange(selectedItems);
    }
  }, [selectedIds, onSelectionChange, filteredData]);
  
  // Resizing state
  const [columnWidths, setColumnWidths] = useState<Record<string, number>>(() => {
    const widths: Record<string, number> = {};
    initialColumns.forEach(col => {
      widths[col.id] = col.width;
    });
    return widths;
  });

  const columns = useMemo(() => {
    let currentOffset = 0;
    return initialColumns
      .filter(col => visibleColumnIds.includes(col.id))
      .map((col) => {
        const width = columnWidths[col.id] || col.width;
        const offset = col.sticky ? currentOffset : undefined;
        if (col.sticky) currentOffset += width;
        return { ...col, width, offset };
      });
  }, [columnWidths, initialColumns, visibleColumnIds]);

  useEffect(() => {
    const widths: Record<string, number> = {};
    initialColumns.forEach(col => {
      widths[col.id] = col.width;
    });
    setColumnWidths(widths);
  }, [initialColumns]);

  const [resizingCol, setResizingCol] = useState<{ id: string, startX: number, startWidth: number } | null>(null);

  useEffect(() => {
    if (!resizingCol) return;

    const onMouseMove = (e: MouseEvent) => {
      const delta = e.clientX - resizingCol.startX;
      setColumnWidths(prev => ({
        ...prev,
        [resizingCol.id]: Math.max(50, resizingCol.startWidth + delta)
      }));
    };

    const onMouseUp = () => setResizingCol(null);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [resizingCol]);

  const handleRowClick = (e: React.MouseEvent, rowIdx: number, row: any) => {
    // If we're clicking inside a popover or its content, don't change selection
    if ((e.target as HTMLElement).closest('[data-radix-popper-content-wrapper]')) return;
    
    if (e.shiftKey) {
      window.getSelection()?.removeAllRanges();
    }

    let newSelectedIds = new Set(selectedIds);

    if (e.shiftKey && lastSelectedIndex !== null) {
      const start = Math.min(lastSelectedIndex, rowIdx);
      const end = Math.max(lastSelectedIndex, rowIdx);
      
      if (!e.ctrlKey && !e.metaKey) {
        newSelectedIds.clear();
      }
      
      for (let i = start; i <= end; i++) {
        if (filteredData[i]) {
          newSelectedIds.add(filteredData[i].id);
        }
      }
    } else if (e.ctrlKey || e.metaKey) {
      if (newSelectedIds.has(row.id)) {
        newSelectedIds.delete(row.id);
      } else {
        newSelectedIds.add(row.id);
      }
      setLastSelectedIndex(rowIdx);
    } else {
      newSelectedIds = new Set([row.id]);
      setLastSelectedIndex(rowIdx);
    }

    setSelectedIds(newSelectedIds);
  };

  const handleRowDoubleClick = (row: any, rowIdx: number) => {
    // Select the row first to set the context for the details page
    setSelectedIds(new Set([row.id]));
    setLastSelectedIndex(rowIdx);
    onSelectionChange?.([row]);
    
    if (onOpenItemDetails) {
      onOpenItemDetails(row);
    } else {
      navigate("/item-details");
    }
  };

  useEffect(() => {
    const handleKeyDownGlobal = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) return;

      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        if (!filteredData || filteredData.length === 0) return;

        e.preventDefault();
        
        let nextIndex = 0;
        if (lastSelectedIndex !== null) {
          if (e.key === 'ArrowUp') {
            nextIndex = Math.max(0, lastSelectedIndex - 1);
          } else {
            nextIndex = Math.min(filteredData.length - 1, lastSelectedIndex + 1);
          }
        }

        const nextRow = filteredData[nextIndex];
        if (nextRow) {
          setSelectedIds(new Set([nextRow.id]));
          setLastSelectedIndex(nextIndex);
          onSelectionChange?.([nextRow]);
          
          const rowEl = document.getElementById(`row-${nextRow.id}`);
          if (rowEl) {
            rowEl.scrollIntoView({ block: 'nearest', behavior: 'auto' });
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDownGlobal);
    return () => window.removeEventListener('keydown', handleKeyDownGlobal);
  }, [filteredData, lastSelectedIndex, onSelectionChange]);

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-white border-t border-white">
      {/* Table Container */}
      <div className="flex-1 overflow-auto relative overscroll-none">
        <table className="border-separate border-spacing-0 table-fixed w-max">
          <thead>
            {/* Main Header Labels */}
            <tr className="h-[30px] bg-[#595959]">
              {columns.map((col, headIdx) => (
                <th
                  key={col.id}
                  className={`${col.id === 'actions' ? 'p-0' : 'px-4'} ${headIdx !== columns.length - 1 ? "border-r" : ""} text-[#ffffff] font-medium uppercase tracking-wider sticky top-0 bg-[#595959] relative overflow-visible ${
                    col.id === "actions" ? "text-left text-[18px]" : "text-left text-[13px]"
                  } ${headIdx < lastStickyIndex ? "border-r-white" : headIdx === lastStickyIndex ? "border-r-[#CCCCCC]" : (headIdx !== columns.length - 1 ? "border-r-white" : "")}`}
                  style={{ 
                    width: `${col.width}px`,
                    minWidth: `${col.width}px`,
                    left: col.sticky ? `${col.offset}px` : undefined,
                    zIndex: col.sticky ? 150 - headIdx : 50 - headIdx,
                    transform: col.sticky ? "translateZ(0)" : undefined,
                    WebkitTransform: col.sticky ? "translateZ(0)" : undefined,
                    willChange: col.sticky ? "transform, left" : undefined
                  }}
                >
                  <div className={`${col.id === 'actions' ? 'font-normal h-full w-full' : 'truncate'}`}>
                    {col.id === 'actions' ? (
                      <ColumnSelector 
                        columns={initialColumns}
                        visibleColumnIds={visibleColumnIds}
                        onToggle={toggleColumn}
                        trigger={
                          <div className="w-full h-full flex items-center justify-start px-4 cursor-pointer">
                            <div className="w-[24px] flex items-center justify-center">
                              <span>{col.label}</span>
                            </div>
                          </div>
                        }
                      />
                    ) : col.label}
                  </div>
                  
                  {/* Resize Handle */}
                  {col.id !== "actions" && headIdx !== columns.length - 1 && (
                    <div 
                      className="absolute top-0 right-[-6px] bottom-0 w-[12px] cursor-col-resize z-[60]"
                      onMouseDown={(e) => {
                        e.stopPropagation();
                        setResizingCol({ id: col.id, startX: e.clientX, startWidth: col.width });
                      }}
                    />
                  )}
                </th>
              ))}
            </tr>

            {/* Filter Inputs Row */}
            <tr className="h-[45px] bg-[#F4F6F7]">
              {columns.map((col, filterIdx) => (
                <th
                  key={`filter-${col.id}`}
                  className={`px-[5px] ${filterIdx !== columns.length - 1 ? "border-r" : ""} border-b border-[#CCCCCC] sticky top-[30px] bg-[#F4F6F7] ${
                    col.sticky ? "z-60" : "z-40"
                  } ${filterIdx < lastStickyIndex ? "border-r-white" : filterIdx === lastStickyIndex ? "border-r-[#CCCCCC]" : (filterIdx !== columns.length - 1 ? "border-r-white" : "")}`}
                  style={{ 
                    width: `${col.width}px`,
                    minWidth: `${col.width}px`,
                    left: col.sticky ? `${col.offset}px` : undefined,
                    transform: col.sticky ? "translateZ(0)" : undefined,
                    WebkitTransform: col.sticky ? "translateZ(0)" : undefined,
                    willChange: col.sticky ? "transform, left" : undefined
                  }}
                >
                  {col.id !== "actions" && (
                    <div className="flex items-center gap-1 h-full py-2">
                      <div className="relative flex-1">
                        {col.id === "localValues" ? (
                          <LocalValuesMultiselect
                            value={filters[col.id] || ""}
                            onChange={(val) => setFilters({ ...filters, [col.id]: val })}
                          />
                        ) : col.id === "assortment" ? (
                           <div className="w-full h-[30px] bg-white border border-[#CCCCCC] pl-2 pr-0.5 text-[14px] flex items-center justify-between cursor-pointer">
                              <span className="text-[#1A1A1A]">{filters[col.id] || ""}</span>
                              <svg className="size-5" viewBox="0 0 20 20" fill="none">
                                <path d="M14 8L10 12L6 8H14Z" fill="#3A3A3A" />
                              </svg>
                           </div>
                        ) : (
                          <input
                            type="text"
                            className={`selection:bg-[#373737] selection:text-white w-full h-[30px] bg-white border border-[#CCCCCC] px-2 text-[14px] focus:outline-none focus:border-2 focus:border-[#373737] text-[#1A1A1A] ${
                              col.id === "validFrom" ? "pr-7" : ""
                            }`}
                            placeholder={col.id === "validFrom" ? "dd.mm.yyyy" : ""}
                            value={filters[col.id] || ""}
                            onKeyDown={(e) => {
                              if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') {
                                e.stopPropagation();
                                e.preventDefault();
                                const target = e.target as HTMLInputElement;
                                target.setSelectionRange(0, target.value.length);
                              }
                            }}
                            onFocus={(e) => {
                              const target = e.target;
                              setTimeout(() => {
                                (target as HTMLInputElement).setSelectionRange(0, (target as HTMLInputElement).value.length);
                              }, 0);
                            }}
                            onChange={(e) =>
                               setFilters({ ...filters, [col.id]: e.target.value })
                            }
                          />
                        )}
                        {col.id === "validFrom" && (
                          <div className="absolute right-0.5 pointer-events-none size-5 flex items-center justify-center mr-[4px]">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d={svgPathsCalendar.p5c6fb00} fill="#1A1A1A" />
                            </svg>
                          </div>
                        )}
                      </div>
                      {col.id !== "assortment" && col.id !== "localValues" && (
                        <FilterMenu
                          isOpen={openMenuColumn === col.id}
                          onOpenChange={(open) => setOpenMenuColumn(open ? col.id : null)}
                          activeOption={filterModes[col.id] || "Contains"}
                          onOptionSelect={(option) => setFilterModes({ ...filterModes, [col.id]: option })}
                          trigger={
                            <button className="w-[30px] h-[30px] shrink-0 bg-white border border-[#CCCCCC] flex items-center justify-center transition-colors hover:bg-[#F7F7F7] cursor-pointer outline-none focus:outline-none">
                              <svg className="size-4" viewBox="0 0 20 20" fill="none">
                                <path d={svgPathsMain.p25e92080} fill="#3A3A3A" />
                              </svg>
                            </button>
                          }
                        />
                      )}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="select-none selection:bg-[#373737] selection:text-white">
            {(() => {
              const selectedIndicesList = Array.from(selectedIds)
                .map(id => filteredData.findIndex(row => row.id === id))
                .filter(idxItem => idxItem !== -1);
              const topmostSelectedIndexVal = selectedIndicesList.length > 0 ? Math.min(...selectedIndicesList) : null;

              if (filteredData.length === 0) {
                return (
                  <tr className="h-[40px] bg-white">
                    <td 
                      colSpan={columns.length} 
                      className="px-4 text-sm text-[#1A1A1A] border-b border-[#CCCCCC] text-center"
                    >
                      No records available
                    </td>
                  </tr>
                );
              }

              return filteredData.map((row, index) => {
                const isSelected = selectedIds.has(row.id);
                const isTopmostSelected = index === topmostSelectedIndexVal;
                // In promotions grid, hide action icon when multiple items are selected
                const showActionsAlways = isTopmostSelected && (isPromotionGrid ? selectedIds.size === 1 : true);
                const showActionsOnHover = !isSelected;

                return (
                  <tr
                    key={row.id}
                    id={`row-${row.id}`}
                    onClick={(e) => handleRowClick(e, index, row)}
                    onDoubleClick={() => handleRowDoubleClick(row, index)}
                    className={`h-[40px] group ${
                      isSelected ? "bg-[#D2F6E8]" : "bg-white hover:bg-[#F7F7F7]"
                    }`}
                  >
                    {columns.map((col, colIdx) => (
                      <td
                        key={`${row.id}-${col.id}`}
                        className={`px-4 text-sm text-[#1A1A1A] border-b ${isSelected ? "border-[#AFCDBF]" : "border-[#CCCCCC]"} ${
                          col.sticky ? "sticky z-20" : ""
                        } ${isSelected ? "bg-[#D2F6E8]" : "bg-white group-hover:bg-[#F7F7F7]"} ${
                          col.sticky && colIdx < lastStickyIndex ? "border-r border-r-white" : ""
                        } ${colIdx === lastStickyIndex ? (isSelected ? "border-r border-r-[#AFCDBF]" : "border-r border-r-[#CCCCCC]") : ""} ${
                          isPromotionGrid && ["actions", "availableIn", "storeGroupName", "gtin"].includes(col.id) ? "border-r-0" : ""
                        } ${
                          !isPromotionGrid && ["actions", "gtin"].includes(col.id) ? "border-r-0" : ""
                        }`}
                        style={{ 
                          width: `${col.width}px`,
                          minWidth: `${col.width}px`,
                          left: col.sticky ? `${col.offset}px` : undefined,
                          transform: col.sticky ? "translateZ(0)" : undefined,
                          WebkitTransform: col.sticky ? "translateZ(0)" : undefined,
                          willChange: col.sticky ? "transform, left" : undefined
                        }}
                      >
                        {col.id === "actions" ? (
                          <div className={`flex items-center justify-start transition-opacity overflow-hidden ${
                            showActionsAlways ? "opacity-100" : "opacity-0"
                          } ${showActionsOnHover ? "group-hover:opacity-100" : ""}`}>
                            {isPromotionGrid ? (
                              <button 
                                onClick={(e) => { 
                                  e.stopPropagation(); 
                                  setSelectedIds(new Set([row.id]));
                                  setLastSelectedIndex(index);
                                  onSelectionChange?.([row]);
                                  // onOpenItemDetails?.(row); // Disabled for now
                                }}
                                className={`size-[24px] flex items-center justify-center ${isSelected ? 'hover:bg-[#C3E8DA]' : 'hover:bg-[#EAEAEA]'} rounded transition-colors cursor-pointer outline-none border-none bg-transparent`}
                              >
                                <div className="w-[20px] h-[20px] flex items-center justify-center">
                                  <ActionIcon />
                                </div>
                              </button>
                            ) : (
                              <Popover.Root>
                                <Popover.Trigger asChild>
                                  <button className={`size-[24px] flex items-center justify-center ${isSelected ? 'hover:bg-[#C3E8DA]' : 'hover:bg-[#EAEAEA]'} rounded transition-colors cursor-pointer outline-none border-none bg-transparent`}>
                                    <svg className="size-[18px]" viewBox="0 0 20 20" fill="none">
                                      <path d={svgPathsMore.p2d3e5d00} fill="#1A1A1A" />
                                    </svg>
                                  </button>
                                </Popover.Trigger>
                                <Popover.Portal>
                                  <Popover.Content
                                    align="start"
                                    side="bottom"
                                    sideOffset={4}
                                    onOpenAutoFocus={(e) => e.preventDefault()}
                                    className="z-[10000] bg-white border border-[#CCCCCC] shadow-lg min-w-[150px] outline-none"
                                  >
                                    <div className="flex flex-col py-1">
                                      {row.isPromotion && (
                                        <button
                                          onClick={(e) => { 
                                            e.stopPropagation(); 
                                            navigate(`/items-in-promotions?gtin=${row.gtin}`);
                                          }}
                                          className="text-left text-[14px] font-normal text-[#1A1A1A] hover:bg-[#EAEAEA] focus:border-[2px] focus:border-[#373737] relative outline-none cursor-pointer flex items-center h-[36px] w-[calc(100%-2px)] ml-[1px] pl-4 focus:pl-[14px]"
                                        >
                                          View promotions
                                        </button>
                                      )}
                      <button
                        onClick={(e) => { e.stopPropagation(); }}
                        className="text-left text-[14px] font-normal text-[#1A1A1A] hover:bg-[#EAEAEA] focus:border-[2px] focus:border-[#373737] relative outline-none cursor-pointer flex items-center h-[36px] w-[calc(100%-2px)] ml-[1px] pl-4 focus:pl-[14px]"
                      >
                        <span className="group-focus:-ml-[2px]">Export item</span>
                      </button>
                                    </div>
                                  </Popover.Content>
                                </Popover.Portal>
                              </Popover.Root>
                            )}
                          </div>
                        ) : (isPromotionGrid ? ["promotionName", "offerName", "offerGroup", "itemText"] : ["itemNumber", "itemText"]).includes(col.id) ? (
                          <div className="truncate w-full pb-[6px] translate-y-[3px]">
                            <span 
                              className="underline underline-offset-[4px] decoration-1 decoration-[#1A1A1A] cursor-pointer"
                              onClick={(e) => {
                                e.stopPropagation();
                                // Select this row immediately to update the application state
                                setSelectedIds(new Set([row.id]));
                                setLastSelectedIndex(index);
                                onSelectionChange?.([row]);
                                
                                // Link should lead to item details full page instead of popup
                                navigate("/item-details");
                              }}
                            >
                              {getCellValue(row, col.id)}
                            </span>
                          </div>
                        ) : col.id === "itemArea" || col.id === "itemGroup" || col.id === "itemSubGroup" ? (
                          <div className="truncate w-full">
                            {(() => {
                              const val = String(getCellValue(row, col.id) || "");
                              return val.includes(" - ") ? val.split(" - ")[1] : val;
                            })()}
                          </div>
                        ) : col.id === "isLocalValues" ? (
                          <div className="truncate w-full">
                            {row.isLocalValues ? "Y" : "N"}
                          </div>
                        ) : col.id === "localValues" ? (
                          <div className="truncate w-full text-[#1A1A1A]">
                            {getLocalValueFields(row).join(", ")}
                          </div>
                        ) : (
                          <div className="truncate w-full">
                            {getCellValue(row, col.id)}
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                );
              });
            })()}
          </tbody>
        </table>
      </div>
    </div>
  );
});