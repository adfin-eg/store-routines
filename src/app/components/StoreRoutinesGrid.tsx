import React, { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import svgPathsMain from "@/imports/svg-16ystvll8u";
import svgPathsMore from "@/imports/svg-oqev7ygrue";
import svgPathsEdit from "@/imports/svg-4f8idnkp17";
import svgPathsCalendar from "@/imports/svg-lbuqdinfsp";
import { FilterMenu } from "@/app/components/FilterMenu";
import * as Popover from "@radix-ui/react-popover";
import { ColumnSelector } from "@/app/components/ColumnSelector";
import { X } from "lucide-react";

const LOCAL_FIELDS = [
  "Alarm item", "Auto replenishment", "Available in store", "Best before",
  "Can be ordered", "Change VAT", "Country of origin", "Item declaration",
  "Item type", "Label text 2", "Phase in date", "Phase out date", "Scale label",
  "Self service", "Self service weights", "Shelf life (days)", "Special group",
  "Stop sale", "Stop sale reason code", "Tara (kg)", "Weight control",
];

function getLocalValueFields(row: any): string[] {
  const itemName = row.itemText || "";
  const itemArea = row.itemArea || "";
  const seedString = itemName + itemArea;
  const getSeed = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) { hash = ((hash << 5) - hash) + str.charCodeAt(i); hash |= 0; }
    return Math.abs(hash);
  };
  const seed = getSeed(seedString);
  const pseudoRandom = (offset: number) => { const x = Math.sin(seed + offset) * 10000; return x - Math.floor(x); };
  const isProduce = (itemArea && (itemArea.includes("05") || itemArea.includes("Fruit & vegetables"))) ||
    (itemName && ["apple","banana","lettuce","carrot","cucumber","blueberry","blueberries","avocado","sweet potato","cherry tomato"].some(p => itemName.toLowerCase().includes(p)));
  if (!row.isLocalValues && !isProduce) return [];
  const localIndices = new Set<number>();
  if (isProduce) {
    const oi = LOCAL_FIELDS.indexOf("Country of origin"); const li = LOCAL_FIELDS.indexOf("Label text 2");
    if (oi !== -1) localIndices.add(oi); if (li !== -1) localIndices.add(li);
  }
  const targetCount = (seed % 4) + 2;
  let attempts = 0;
  while (localIndices.size < targetCount && attempts < 50) { localIndices.add(Math.floor(pseudoRandom(attempts) * LOCAL_FIELDS.length)); attempts++; }
  return Array.from(localIndices).sort((a, b) => a - b).map(i => LOCAL_FIELDS[i]);
}

const PROMOTION_TYPES = ["Central", "Voluntary", "Local"];

function PromotionTypeDropdown({ value, onChange }: { value: string; onChange: (val: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        <div className="w-full h-[30px] bg-white border border-[#CCCCCC] flex items-center pl-2 pr-1 cursor-pointer gap-1 select-none">
          <span className="flex-1 text-[14px] font-normal text-[#1A1A1A] text-left truncate min-w-0">{value}</span>
          {value && (
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={(e) => { e.stopPropagation(); onChange(""); }}
              className="shrink-0 size-[20px] flex items-center justify-center hover:bg-[#F7F7F7] rounded-full"
            >
              <X className="size-3.5 stroke-[2.5px] text-[#1A1A1A]" />
            </button>
          )}
          <div className="shrink-0 size-[20px] flex items-center justify-center">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M9 1L5 5L1 1H9Z" fill="#1A1A1A" /></svg>
          </div>
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content align="start" sideOffset={-1} onOpenAutoFocus={(e) => e.preventDefault()}
          className="z-[10000] bg-white border border-[#CCCCCC] shadow-lg outline-none"
          style={{ width: "var(--radix-popover-trigger-width)" }}>
          <div className="flex flex-col py-1">
            {PROMOTION_TYPES.map((type) => {
              const isSelected = value === type;
              return (
                <button
                  key={type}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => { onChange(isSelected ? "" : type); setIsOpen(false); }}
                  className={`text-left text-[14px] font-normal text-[#1A1A1A] relative outline-none cursor-pointer flex items-center h-[36px] min-h-[36px] w-[calc(100%-2px)] ml-[1px] px-[16px] hover:bg-[#EAEAEA] ${isSelected ? "bg-[#FFFFFF] border-[2px] border-[#373737] px-[14px]" : "bg-white"}`}
                >
                  <span className={isSelected ? "-ml-[2px]" : ""}>{type}</span>
                </button>
              );
            })}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

function LocalValuesDropdown({ value, onChange }: { value: string; onChange: (val: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const clear = (e: React.MouseEvent) => { e.stopPropagation(); onChange(""); };
  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        <div className="w-full h-[30px] bg-white border border-[#CCCCCC] flex items-center pl-2 pr-1 cursor-pointer gap-1 select-none">
          <span className="flex-1 text-[14px] text-[#1A1A1A] truncate min-w-0 font-normal text-left">{value}</span>
          {value && (
            <button onMouseDown={(e) => e.preventDefault()} onClick={clear} className="shrink-0 size-[20px] flex items-center justify-center hover:bg-[#F7F7F7] rounded-full">
              <X className="size-3.5 stroke-[2.5px] text-[#1A1A1A]" />
            </button>
          )}
          <div className="shrink-0 size-[20px] flex items-center justify-center">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M9 1L5 5L1 1H9Z" fill="#1A1A1A" /></svg>
          </div>
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content align="start" sideOffset={-1} onOpenAutoFocus={(e) => e.preventDefault()}
          className="z-[10000] bg-white border border-[#CCCCCC] shadow-lg outline-none"
          style={{ width: "var(--radix-popover-trigger-width)" }}>
          <div className="flex flex-col py-1 max-h-[224px] overflow-y-auto">
            {LOCAL_FIELDS.map((field) => {
              const isSelected = value === field;
              return (
                <button key={field} onMouseDown={(e) => e.preventDefault()} onClick={() => { onChange(isSelected ? "" : field); setIsOpen(false); }}
                  className={`text-left text-[14px] font-normal text-[#1A1A1A] relative outline-none cursor-pointer flex items-center h-[36px] min-h-[36px] w-[calc(100%-2px)] ml-[1px] px-[16px] hover:bg-[#EAEAEA] ${isSelected ? "bg-[#FFFFFF] border-[2px] border-[#373737] px-[14px]" : "bg-white"}`}>
                  <span className={isSelected ? "-ml-[2px]" : ""}>{field}</span>
                </button>
              );
            })}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export interface StoreRoutinesGridHandle {
  selectFirstRow: () => void;
  setSelectedById: (id: number) => void;
  clearFilters: () => void;
  getFilteredData: () => any[];
}

export const STORE_ROUTINES_COLUMNS = [
  { id: "actions", label: "+", width: 50, sticky: true },
  { id: "gtin", label: "GTIN", width: 120, sticky: true },
  { id: "itemText", label: "ITEM TEXT", width: 300, sticky: true },
  { id: "retailPrice", label: "ORDINARY PRICE", width: 140 },
  { id: "promotionPrice", label: "PROMOTION PRICE", width: 140 },
  { id: "promotionStart", label: "PROMOTION START", width: 180 },
  { id: "promotionEnd", label: "PROMOTION END", width: 180 },
  { id: "memberPrice", label: "MEMBER PRICE", width: 140 },
  { id: "memberOfferStart", label: "MEMBER OFFER START", width: 180 },
  { id: "memberOfferEnd", label: "MEMBER OFFER END", width: 180 },
  { id: "profilePrice", label: "PROFILE PRICE", width: 140 },
  { id: "retailPriceExclVat", label: "ORDINARY PRICE EXCL. VAT", width: 180 },
  { id: "wholesalePrice", label: "WHOLESALE PRICE", width: 140 },
  { id: "netPrice", label: "NET PRICE", width: 140 },
  { id: "grossProfit", label: "GROSS PROFIT", width: 140 },
  { id: "grossProfitPercent", label: "GROSS PROFIT %", width: 140 },
  { id: "promotionType", label: "PROMOTION TYPE", width: 160 },
  { id: "promotion", label: "PROMOTION", width: 120 },
  { id: "promotionPriceFlag", label: "PROMOTION PRICE", width: 140 },
  { id: "memberOffer", label: "MEMBER OFFER", width: 140 },
  { id: "mix", label: "MIX", width: 100 },
  { id: "localItem", label: "LOCAL ITEM", width: 140 },
  { id: "localValues", label: "LOCAL VALUES", width: 140 },
  { id: "localValuesList", label: "LOCAL VALUES", width: 240 },
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
];

export interface StoreRoutinesGridProps {
  onOpenItemDetails?: (item?: any) => void;
  onSelectionChange?: (selectedItems: any[]) => void;
  onFilterCountChange?: (count: number) => void;
  onDataChange?: (data: any[]) => void;
  selectedGroupIds?: Set<string>;
  activeTab?: string;
  isMemberOfferFilter?: boolean;
  isMixFilter?: boolean;
  isPromotionPriceFilter?: boolean;
  promotionTypeFilter?: string;
  attributeFilter?: string;
  data: any[];
  filters?: Record<string, string>;
  onFiltersChange?: (filters: Record<string, string>) => void;
  filterModes?: Record<string, string>;
  onFilterModesChange?: (modes: Record<string, string>) => void;
  columnIds?: string[];
  onColumnIdsChange?: (ids: string[]) => void;
}

export const StoreRoutinesGrid = React.forwardRef<StoreRoutinesGridHandle, StoreRoutinesGridProps>(({ 
  onOpenItemDetails,
  onSelectionChange,
  onFilterCountChange,
  onDataChange,
  selectedGroupIds = new Set(),
  activeTab = "All",
  isMemberOfferFilter = false,
  isMixFilter = false,
  isPromotionPriceFilter = false,
  promotionTypeFilter = "",
  attributeFilter = "",
  data,
  filters: propsFilters,
  onFiltersChange,
  filterModes: propsFilterModes,
  onFilterModesChange,
  columnIds: externalColumnIds,
  onColumnIdsChange,
}, ref) => {
  const navigate = useNavigate();

  const [internalColumnIds, setInternalColumnIds] = useState<string[]>(() =>
    STORE_ROUTINES_COLUMNS.map(col => col.id)
  );

  const visibleColumnIds = externalColumnIds ?? internalColumnIds;
  const setVisibleColumnIds = (ids: string[]) => {
    setInternalColumnIds(ids);
    onColumnIdsChange?.(ids);
  };

  const toggleColumn = (id: string) => {
    setVisibleColumnIds(
      visibleColumnIds.includes(id)
        ? visibleColumnIds.filter(c => c !== id)
        : [...visibleColumnIds, id]
    );
  };

  const lastStickyIndex = useMemo(() => {
    const columnMap = new Map(STORE_ROUTINES_COLUMNS.map(c => [c.id, c]));
    let last = -1;
    visibleColumnIds.forEach((id, idx) => {
      if (columnMap.get(id)?.sticky) last = idx;
    });
    return last;
  }, [visibleColumnIds]);

  const [internalFilters, setInternalFilters] = useState<Record<string, string>>({});
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
      const manualFilterCount = Object.values(filters).filter(Boolean).length;
      
      if (lastCountRef.current !== manualFilterCount) {
        lastCountRef.current = manualFilterCount;
        onFilterCountChange(manualFilterCount);
      }
    }
  }, [filters, onFilterCountChange, activeTab, promotionTypeFilter]);

  const filteredData = useMemo(() => {
    let baseData = data || [];
    
    // In Store Routines, each item (by GTIN) only appears once
    const seenGtins = new Set<string>();
    baseData = baseData.filter(row => {
      if (!row || !row.gtin) return false;
      if (seenGtins.has(row.gtin)) return false;
      seenGtins.add(row.gtin);
      return true;
    }).map(row => {
      // Ensure items with both "Local item" and "Promotion" flags have "Local" promotion type
      if (row.isLocalItem && row.isPromotion) {
        return { ...row, promotionType: "Local" };
      }
      return row;
    });

    return baseData.filter(row => {
      if (!row) return false;

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

      // 3. Filter by Grid Column Filters (Manual)
      const columnFiltersPass = Object.entries(filters).every(([colId, filterValue]) => {
        if (!filterValue) return true;
        
        if (colId === "localValuesList") {
          const selected = filterValue.split("|").filter(Boolean);
          if (selected.length === 0) return true;
          return selected.every(s => getLocalValueFields(row).includes(s));
        }

        if (colId === "promotionType") {
          if (!row.isPromotion) return false;
          return filterValue === "Central";
        }

        if (["promotion", "promotionPriceFlag", "memberOffer", "mix", "localValues", "localItem"].includes(colId)) {
          const actualKey = colId === "localValues" ? "isLocalValues" : `is${colId.charAt(0).toUpperCase()}${colId.slice(1)}`;
          const actualValue = row[actualKey as keyof typeof row];
          if (filterValue === "true") return actualValue === true;
          if (filterValue === "false") return actualValue === false;
          return true;
        }

        const cellValue = String(row[colId as keyof typeof row] || "").toLowerCase();
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

      if (!columnFiltersPass) return false;

      // 4. Filter by Attribute (only when Local values tab is active)
      if (activeTab === "Local values" && attributeFilter) {
        // Items in Area 05 (Fruit & vegetables) or specific produce names always have Country of origin and Label text 2
        const isProduce = (String(row.itemAreaNo) === "05" || String(row.itemArea).toLowerCase().includes("fruit") || String(row.itemArea).toLowerCase().includes("vegetables")) ||
                         (row.itemText && ["apple", "banana", "lettuce", "carrot", "cucumber", "blueberry", "blueberries", "avocado", "sweet potato", "cherry tomato", "grapes"].some((p: string) => row.itemText.toLowerCase().includes(p)));
        
        const isMandatoryProduceAttribute = attributeFilter === "Country of origin" || attributeFilter === "Label text 2";
        
        // Guarantee produce items show up for their mandatory attributes
        if (isProduce && isMandatoryProduceAttribute) return true;
        
        // For all other cases, if the item has local values, we simulate which attributes it has
        if (row.isLocalValues) {
          // If we're filtering for a mandatory produce attribute but the item isn't produce, it shouldn't have it
          if (!isProduce && isMandatoryProduceAttribute) return false;

          // For other attributes, use a deterministic seed to simulate specific overrides per item
          // This ensures the filter actually narrows down the list. 
          // We use a broader range for the mock to make it feel like there's data to see.
          const attrHash = attributeFilter.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
          const itemHash = String(row.gtin || row.id).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
          return (itemHash + attrHash) % 4 === 0; // ~25% of items will show for any given attribute
        }

        return false;
      }

      return true;
    });
  }, [filters, filterModes, selectedGroupIds, activeTab, isMemberOfferFilter, isMixFilter, isPromotionPriceFilter, promotionTypeFilter, attributeFilter, data]);

  // Sync filtered data to parent
  const lastFilteredDataRef = React.useRef<any[]>([]);
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
    STORE_ROUTINES_COLUMNS.forEach(col => {
      widths[col.id] = col.width;
    });
    return widths;
  });
  const [resizingCol, setResizingCol] = useState<{ id: string, startX: number, startWidth: number } | null>(null);

  const columns = useMemo(() => {
    const columnMap = new Map(STORE_ROUTINES_COLUMNS.map(col => [col.id, col]));
    let currentOffset = 0;
    return visibleColumnIds
      .map(id => columnMap.get(id))
      .filter((col): col is typeof STORE_ROUTINES_COLUMNS[0] => Boolean(col))
      .map((col) => {
        const width = columnWidths[col.id] || col.width;
        const offset = col.sticky ? currentOffset : undefined;
        if (col.sticky) currentOffset += width;
        return { ...col, width, offset };
      });
  }, [columnWidths, visibleColumnIds]);

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
          if (e.key === 'ArrowUp') nextIndex = Math.max(0, lastSelectedIndex - 1);
          else nextIndex = Math.min(filteredData.length - 1, lastSelectedIndex + 1);
        }

        const nextRow = filteredData[nextIndex];
        if (nextRow) {
          setSelectedIds(new Set([nextRow.id]));
          setLastSelectedIndex(nextIndex);
          onSelectionChange?.([nextRow]);
          
          const rowEl = document.getElementById(`row-${nextRow.id}`);
          if (rowEl) rowEl.scrollIntoView({ block: 'nearest', behavior: 'auto' });
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
                    zIndex: col.sticky ? 100 - headIdx : 50 - headIdx,
                    transform: col.sticky ? "translateZ(0)" : undefined,
                    WebkitTransform: col.sticky ? "translateZ(0)" : undefined,
                    willChange: col.sticky ? "transform, left" : undefined
                  }}
                >
                  <div className={`${col.id === 'actions' ? 'font-normal h-full w-full' : 'truncate'}`}>
                    {col.id === 'actions' ? (
                      <ColumnSelector 
                        columns={STORE_ROUTINES_COLUMNS}
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
                    onClick={["promotion", "promotionPriceFlag", "memberOffer", "mix", "localValues", "localItem"].includes(col.id) && col.id !== "localValuesList" ? (e) => {
                      e.stopPropagation();
                      const current = filters[col.id];
                      const next = !current ? "true" : current === "true" ? "false" : "";
                      setFilters({ ...filters, [col.id]: next });
                    } : undefined}
                    className={`${["promotion", "promotionPriceFlag", "memberOffer", "mix", "localValues", "localItem", "localPromotion"].includes(col.id) && col.id !== "localValuesList" ? "px-4" : "px-[5px]"} ${filterIdx !== columns.length - 1 ? "border-r" : ""} border-b border-[#CCCCCC] sticky top-[30px] z-40 bg-[#F4F6F7] ${
                      col.sticky ? "z-50" : ""
                    } ${filterIdx < lastStickyIndex ? "border-r-white" : filterIdx === lastStickyIndex ? "border-r-[#CCCCCC]" : (filterIdx !== columns.length - 1 ? "border-r-white" : "")} ${
                      ["promotion", "promotionPriceFlag", "memberOffer", "mix", "localValues", "localItem", "localPromotion"].includes(col.id) && col.id !== "localValuesList" ? "cursor-pointer" : ""
                    }`}
                    style={{
                      width: `${col.width}px`,
                      minWidth: col.id === "localValuesList" ? 0 : `${col.width}px`,
                      maxWidth: `${col.width}px`,
                      overflow: col.id === "localValuesList" ? "hidden" : undefined,
                      left: col.sticky ? `${col.offset}px` : undefined,
                      transform: col.sticky ? "translateZ(0)" : undefined,
                      WebkitTransform: col.sticky ? "translateZ(0)" : undefined,
                      willChange: col.sticky ? "transform, left" : undefined
                    }}
                  >
                    {col.id !== "actions" && (
                      <div className="flex items-center gap-1 h-full py-2">
                        <div className="relative flex-1">
                          {col.id === "localValuesList" ? (
                            <LocalValuesDropdown
                              value={filters[col.id] || ""}
                              onChange={(val) => setFilters({ ...filters, [col.id]: val })}
                            />
                          ) : col.id === "promotionType" ? (
                            <PromotionTypeDropdown
                              value={filters[col.id] || ""}
                              onChange={(val) => setFilters({ ...filters, [col.id]: val })}
                            />
                          ) : col.id === "assortment" ? (
                             <div className="w-full h-[30px] bg-white border border-[#CCCCCC] pl-2 pr-[2px] text-[14px] flex items-center justify-between cursor-pointer">
                                <span className="text-[#1A1A1A]">{filters[col.id] || ""}</span>
                                <div className="size-5 flex items-center justify-center">
                                  <svg className="size-[10px]" viewBox="0 0 10 6" fill="none">
                                    <path d="M9 1L5 5L1 1H9Z" fill="#1A1A1A" />
                                  </svg>
                                </div>
                             </div>
                          ) : ["promotionStart", "promotionEnd", "memberOfferStart", "memberOfferEnd"].includes(col.id) ? (
                            <div className="relative w-full h-[30px] flex items-center">
                              <input
                                type="text"
                                className="selection:bg-[#373737] selection:text-white w-full h-full bg-white border border-[#CCCCCC] pl-2 pr-7 text-[14px] focus:outline-none focus:border-2 focus:border-[#373737] text-[#1A1A1A] placeholder:text-[#1A1A1A] placeholder:opacity-100"
                                placeholder="dd.mm.yyyy"
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
                                onChange={(e) => setFilters({ ...filters, [col.id]: e.target.value })}
                              />
                              <div className="absolute right-0.5 pointer-events-none size-5 flex items-center justify-center mr-[4px]">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path d={svgPathsCalendar.p5c6fb00} fill="#1A1A1A" />
                                </svg>
                              </div>
                            </div>
                          ) : ["promotion", "promotionPriceFlag", "memberOffer", "mix", "localValues", "localItem"].includes(col.id) ? (
                            <div className="flex items-center justify-start h-full select-none">
                              <div>
                                {(filters[col.id] === "true") ? (
                                  <div className="size-[16px] bg-[#595959] flex items-center justify-center border border-[#595959]">
                                    <svg className="size-[12px]" viewBox="0 0 12 12" fill="none">
                                      <path d="M2.5 6L5 8.5L9.5 4" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
                                    </svg>
                                  </div>
                                ) : filters[col.id] === "false" ? (
                                  <div className="size-[16px] bg-white border border-[#CCCCCC]" />
                                ) : (
                                  <div className="size-[16px] bg-[#595959] flex items-center justify-center">
                                    <div className="w-[8px] h-0.5 bg-white" />
                                  </div>
                                )}
                              </div>
                            </div>
                          ) : (
                          <input
                            type="text"
                            className="selection:bg-[#373737] selection:text-white w-full h-[30px] bg-white border border-[#CCCCCC] px-2 text-[14px] focus:outline-none focus:border-2 focus:border-[#373737] text-[#1A1A1A] placeholder:text-[#1A1A1A] placeholder:opacity-100"
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
                      </div>
                      {col.id !== "assortment" && col.id !== "localValuesList" && col.id !== "promotionType" && !["promotion", "promotionPriceFlag", "memberOffer", "mix", "localValues", "localItem"].includes(col.id) && (
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
                const showActionsAlways = isTopmostSelected;
                const showActionsOnHover = !isSelected;

                return (
                  <tr
                    key={row.id}
                    id={`row-${row.id}`}
                    onClick={(e) => handleRowClick(e, index, row)}
                    onDoubleClick={() => handleRowDoubleClick(row, index)}
                    className={`h-[40px] group ${
                      isSelected ? "bg-[#E8EBED]" : "bg-white hover:bg-[#F7F7F7]"
                    }`}
                  >
                    {columns.map((col, colIdx) => (
                      <td
                        key={`${row.id}-${col.id}`}
                        className={`px-4 text-sm text-[#1A1A1A] border-b ${isSelected ? "border-[#C2C7CB]" : "border-[#CCCCCC]"} ${
                          col.sticky ? "sticky z-10" : ""
                        } ${isSelected ? "bg-[#E8EBED]" : "bg-white group-hover:bg-[#F7F7F7]"} ${
                          col.sticky && colIdx < lastStickyIndex ? "border-r border-r-white" : ""
                        } ${colIdx === lastStickyIndex ? (isSelected ? "border-r border-r-[#C2C7CB]" : "border-r border-r-[#CCCCCC]") : ""} ${
                          ["actions", "gtin"].includes(col.id) ? "border-r-0" : ""
                        }`}
                        style={{
                          width: `${col.width}px`,
                          minWidth: col.id === "localValuesList" ? 0 : `${col.width}px`,
                          maxWidth: `${col.width}px`,
                          overflow: col.id === "localValuesList" ? "hidden" : undefined,
                          left: col.sticky ? `${col.offset}px` : undefined,
                          transform: col.sticky ? "translateZ(0)" : undefined,
                          WebkitTransform: col.sticky ? "translateZ(0)" : undefined,
                          willChange: col.sticky ? "transform, left" : undefined
                        }}
                      >
                        {col.id === "actions" ? (
                          <div className={`flex items-center justify-start transition-opacity ${
                            showActionsAlways ? "opacity-100" : "opacity-0"
                          } ${showActionsOnHover ? "group-hover:opacity-100" : ""}`}>
                            <Popover.Root>
                              <Popover.Trigger asChild>
                                <button className={`size-[24px] flex items-center justify-center ${isSelected ? 'hover:bg-[#CED3D7]' : 'hover:bg-[#EAEAEA]'} rounded transition-colors cursor-pointer outline-none border-none bg-transparent`}>
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
                                          window.open(`/items-in-promotions?gtin=${row.gtin}`, "_blank");
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
                          </div>
                        ) : col.id === "itemText" || col.id === "itemNumber" ? (
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
                              {row[col.id as keyof typeof row]}
                            </span>
                          </div>
                        ) : ["promotionStart", "promotionEnd", "memberOfferStart", "memberOfferEnd"].includes(col.id) ? (
                          <div className="truncate w-full">
                            {(() => {
                              const value = row[col.id as keyof typeof row] as string;
                              if (!value) return null;
                              const parts = value.split(' ');
                              if (parts.length === 2) {
                                return (
                                  <>
                                    <span>{parts[0]}</span>
                                    <span className="text-[#999999] ml-1.5">{parts[1]}</span>
                                  </>
                                );
                              }
                              return value;
                            })()}
                          </div>
                        ) : ["profilePrice", "retailPrice", "retailPriceExclVat", "promotionPrice", "memberPrice", "wholesalePrice", "netPrice", "grossProfit", "grossProfitPercent"].includes(col.id) ? (
                          <div className={`text-right w-full ${["promotionPrice", "memberPrice"].includes(col.id) ? "text-[#D32F2F]" : ""}`}>
                            {(() => {
                              if (col.id === "promotionPrice" && !row.isPromotionPriceFlag) return "";
                              if (col.id === "memberPrice" && !row.isMemberOffer) return "";
                              if (col.id === "netPrice") {
                                const retailStr = String(row.retailPrice || "").replace(",", ".");
                                const netStr = String(row.netPrice || "").replace(",", ".");
                                const retailVal = parseFloat(retailStr);
                                const netVal = parseFloat(netStr);
                                if (!isNaN(retailVal) && !isNaN(netVal) && retailVal > 0) {
                                  const ratio = netVal / retailVal;
                                  if (ratio < 0.3 || ratio > 1.2) return "";
                                } else {
                                  return "";
                                }
                              }
                              if (col.id === "grossProfit" || col.id === "grossProfitPercent") {
                                const retailExclVatStr = String(row.retailPriceExclVat || "").replace(",", ".");
                                const netStr = String(row.netPrice || "").replace(",", ".");
                                const retailExclVatVal = parseFloat(retailExclVatStr);
                                const netVal = parseFloat(netStr);
                                
                                if (!isNaN(retailExclVatVal) && !isNaN(netVal) && netVal > 0) {
                                  const profit = retailExclVatVal - netVal;
                                  if (col.id === "grossProfit") {
                                    const displayValue = profit.toFixed(2).replace(".", ",");
                                    return <span className={profit < 0 ? "text-[#D32F2F]" : ""}>{displayValue}</span>;
                                  } else {
                                    const margin = (profit / retailExclVatVal) * 100;
                                    const displayValue = margin.toFixed(1).replace(".", ",") + " %";
                                    return <span className={margin < 0 ? "text-[#D32F2F]" : ""}>{displayValue}</span>;
                                  }
                                }
                                return "";
                              }
                              return row[col.id as keyof typeof row];
                            })()}
                          </div>
                        ) : ["promotion", "promotionPriceFlag", "memberOffer", "mix", "localValues", "localItem"].includes(col.id) ? (
                          <div className="w-full flex items-center justify-start py-1">
                            {(() => {
                              const actualKey = col.id === "localValues" ? "isLocalValues" : `is${col.id.charAt(0).toUpperCase()}${col.id.slice(1)}`;
                              const isChecked = row[actualKey as keyof typeof row];
                              return (
                                <div className={`size-[16px] border flex items-center justify-center cursor-default opacity-80 ${
                                  isChecked 
                                    ? "bg-[#7A7A7A] border-[#7A7A7A]" 
                                    : "bg-white border-[#CCCCCC]"
                                }`}>
                                  {isChecked && (
                                    <svg className="size-[12px]" viewBox="0 0 12 12" fill="none">
                                      <path d="M2.5 6L5 8.5L9.5 4" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
                                    </svg>
                                  )}
                                </div>
                              );
                            })()}
                          </div>
                        ) : col.id === "promotionType" ? (
                          <div className="truncate w-full">
                            {row.isPromotion ? "Central" : ""}
                          </div>
                        ) : col.id === "localValuesList" ? (
                          <div className="truncate w-full text-[#1A1A1A]">
                            {getLocalValueFields(row).join(", ")}
                          </div>
                        ) : col.id === "itemArea" || col.id === "itemGroup" || col.id === "itemSubGroup" ? (
                          <div className="truncate w-full">
                            {(() => {
                              const val = String(row[col.id as keyof typeof row] || "");
                              return val.includes(" - ") ? val.split(" - ")[1] : val;
                            })()}
                          </div>
                        ) : (
                          <div className="truncate w-full">
                            {row[col.id as keyof typeof row]}
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
