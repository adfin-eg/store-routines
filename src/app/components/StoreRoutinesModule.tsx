import React, { useState, useMemo, useRef } from "react";
import { Plus } from "lucide-react";
import FilterIcon from "@/imports/Icon-9-4205";
import { ItemGroupPanel, ItemGroupPanelHandle } from "./ItemGroupPanel";
import { StoreRoutinesGrid, STORE_ROUTINES_COLUMNS } from "./StoreRoutinesGrid";

interface QuickFilterPreset {
  name: string;
  filters: Record<string, string>;
  filterModes?: Record<string, string>;
  selectedIds?: string[];
  expandedIds?: string[];
  columnIds?: string[];
}

const DEFAULT_COLUMN_IDS = STORE_ROUTINES_COLUMNS.map(c => c.id);

// "All" preset order: same as default, but with "memberPrice" moved right after "promotionPrice".
const ALL_COLUMN_IDS = (() => {
  const ids = DEFAULT_COLUMN_IDS.filter(id => id !== "memberPrice");
  const idx = ids.indexOf("promotionPrice");
  if (idx !== -1) ids.splice(idx + 1, 0, "memberPrice");
  return ids;
})();

const PROMOTIONS_FIRST_COLS = [
  "actions", "gtin", "itemText",
  "promotionPrice", "promotionPriceFlag", "mix", "memberOffer",
  "promotionStart", "promotionEnd", "memberOfferStart", "memberOfferEnd",
];
const PROMOTIONS_COLUMN_IDS = [
  ...PROMOTIONS_FIRST_COLS,
  ...DEFAULT_COLUMN_IDS.filter(id => !PROMOTIONS_FIRST_COLS.includes(id)),
];

const DEFAULT_QUICK_FILTER_PRESETS: QuickFilterPreset[] = [
  { name: "All", filters: {}, selectedIds: [], expandedIds: [], columnIds: ALL_COLUMN_IDS },
  { name: "Promotions", filters: { promotion: "true" }, selectedIds: [], expandedIds: [], columnIds: PROMOTIONS_COLUMN_IDS },
  { name: "Local values", filters: { localValues: "true" }, selectedIds: [], expandedIds: [], columnIds: (() => {
    const first = ["actions", "gtin", "itemText", "localValuesList", "retailPrice", "memberPrice"];
    return [...first, ...DEFAULT_COLUMN_IDS.filter(id => !first.includes(id))];
  })() },
  { name: "Local items", filters: { localItem: "true" }, selectedIds: [], expandedIds: [], columnIds: DEFAULT_COLUMN_IDS },
];

interface ActionButtonProps {
  children: React.ReactNode;
  isPrimary?: boolean;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  hasIcon?: boolean;
  draggable?: boolean;
  onDragStart?: React.DragEventHandler<HTMLButtonElement>;
  onDragOver?: React.DragEventHandler<HTMLButtonElement>;
  onDrop?: React.DragEventHandler<HTMLButtonElement>;
  onDragEnd?: React.DragEventHandler<HTMLButtonElement>;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  isPrimary = false,
  isActive = false,
  className = "",
  onClick,
  disabled,
  hasIcon = false,
  draggable,
  onDragStart,
  onDragOver,
  onDrop,
  onDragEnd
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
      className={`h-[30px] flex items-center justify-center text-[13px] font-semibold uppercase tracking-[0px] rounded-full transition-colors leading-none font-roboto-condensed cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed px-[15px] min-w-[50px] border whitespace-nowrap ${
      isPrimary 
        ? "bg-[#1C7862] text-white hover:bg-[#248E73] border-[#1C7862] hover:border-[#248E73]" 
        : isActive
          ? "bg-[#373737] text-white border-[#373737] hover:bg-[#373737]"
          : "bg-[#EAEAEA] text-[#1A1A1A] border-transparent hover:bg-[#E0E0E0]"
    } ${hasIcon ? "gap-1.5" : ""} ${className}`}
    >
      {children}
    </button>
  );
};

export const StoreRoutinesModule = ({ 
  isItemPanelOpen, 
  setIsItemPanelOpen, 
  gridRef, 
  onOpenItemDetails, 
  onSelectionChange, 
  onDataChange,
  onOpenNewItemModal,
  attributeFilter,
  setAttributeFilter,
  data,
  currentWindowStates,
  onApplyWindowStates,
  currentStore
}: {
  isItemPanelOpen: boolean;
  setIsItemPanelOpen: (open: boolean) => void;
  gridRef: React.RefObject<any>;
  onOpenItemDetails: () => void;
  onSelectionChange: (items: any[]) => void;
  onDataChange: (items: any[]) => void;
  onOpenNewItemModal: () => void;
  attributeFilter: string;
  setAttributeFilter: (val: string) => void;
  data: any[];
  currentWindowStates?: Record<string, any>;
  onApplyWindowStates?: (states: Record<string, any>) => void;
  currentStore?: string;
}) => {
  const panelRef = useRef<ItemGroupPanelHandle>(null);
  const [dragPresetName, setDragPresetName] = useState<string | null>(null);
  const [dragOverPresetName, setDragOverPresetName] = useState<string | null>(null);
  const [selectedGroupIds, setSelectedGroupIds] = useState<Set<string>>(new Set());
  const [expandedGroupIds, setExpandedGroupIds] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<string>("All");
  const [activePresetName, setActivePresetName] = useState<string>("All");
  const [quickFilterPresets, setQuickFilterPresets] = useState<QuickFilterPreset[]>(DEFAULT_QUICK_FILTER_PRESETS);
  const [columnIds, setColumnIds] = useState<string[]>(ALL_COLUMN_IDS);
  const [gridFilterCount, setGridFilterCount] = useState(0);
  const [gridFilters, setGridFilters] = useState<Record<string, string>>({});
  const [gridFilterModes, setGridFilterModes] = useState<Record<string, string>>({});
  const filterCount = (selectedGroupIds.size > 0 ? 1 : 0) + gridFilterCount + (attributeFilter ? 1 : 0);

  const initialPresets = useMemo(() => DEFAULT_QUICK_FILTER_PRESETS.map(p => ({
    name: p.name,
    isQuickFilter: true,
    selectedIds: p.selectedIds ?? [],
    expandedIds: p.expandedIds ?? [],
    filters: p.filters,
    filterModes: p.filterModes ?? {},
    gridColumnIds: p.columnIds,
  })), []);

  const handleClearAll = () => {
    setGridFilters({});
    setGridFilterModes({});
    setAttributeFilter("");
    setSelectedGroupIds(new Set());
    setExpandedGroupIds(new Set());
    setColumnIds(ALL_COLUMN_IDS);
    setActiveTab("All");
  };

  const handleTabChange = (tab: string) => {
    if (tab === "Custom") {
      // Custom ("Other") tab reflects ad-hoc filtering (e.g. left-panel group selection);
      // keep current filters/columns, just mark the tab active and unlink any preset.
      setActiveTab("Custom");
      setActivePresetName("");
      return;
    }
    const preset = quickFilterPresets.find(p => p.name === tab);
    if (!preset) return;
    // Prefer hardcoded filters/columns from DEFAULT_QUICK_FILTER_PRESETS over stored data
    // so built-in presets stay authoritative even if older values are in localStorage.
    const defaultPreset = DEFAULT_QUICK_FILTER_PRESETS.find(p => p.name === tab);
    setActiveTab(tab);
    setActivePresetName(tab);
    setGridFilters(defaultPreset?.filters ?? preset.filters);
    setGridFilterModes(preset.filterModes ?? {});
    // Item hierarchy filtering is detached from presets — leave the current group
    // selection untouched when applying a preset.
    const colIds = defaultPreset?.columnIds ?? preset.columnIds;
    if (colIds) setColumnIds(colIds);
  };

  const handleFiltersChange = (newFilters: Record<string, string>) => {
    setGridFilters(newFilters);
    setActiveTab("Custom");
    setActivePresetName("");
  };

  const handleFilterModesChange = (modes: Record<string, string>) => {
    setGridFilterModes(modes);
    setActiveTab("Custom");
    setActivePresetName("");
  };

  const handleColumnIdsChange = (ids: string[]) => {
    setColumnIds(ids);
    setActiveTab("Custom");
    setActivePresetName("");
  };

  // Use an opaque clone as the drag image so the button preview following the
  // cursor isn't semi-transparent (the browser default ghost is translucent).
  const handleButtonDragStart = (e: React.DragEvent<HTMLButtonElement>, name: string) => {
    const node = e.currentTarget;
    const clone = node.cloneNode(true) as HTMLElement;
    clone.style.position = "absolute";
    clone.style.top = "-9999px";
    clone.style.left = "-9999px";
    clone.style.margin = "0";
    clone.style.opacity = "1";
    document.body.appendChild(clone);
    e.dataTransfer.setDragImage(clone, node.offsetWidth / 2, node.offsetHeight / 2);
    setTimeout(() => { if (clone.parentNode) clone.parentNode.removeChild(clone); }, 0);
    setDragPresetName(name);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", name);
  };

  return (
    <div className="flex-1 flex flex-row overflow-hidden min-w-0 relative bg-white">
      <ItemGroupPanel
        ref={panelRef}
        isOpen={isItemPanelOpen}
        onToggle={() => setIsItemPanelOpen(!isItemPanelOpen)} 
        selectedIds={selectedGroupIds} 
        setSelectedIds={setSelectedGroupIds} 
        expandedIds={expandedGroupIds} 
        setExpandedIds={setExpandedGroupIds}
        onClearAll={handleClearAll}
        data={data}
        currentWindowStates={currentWindowStates}
        onApplyWindowStates={onApplyWindowStates}
        totalFilterCount={filterCount}
        presetKey="store_routines_filter_presets"
        activeTab={activeTab}
        onTabChange={handleTabChange}
        gridFilters={gridFilters}
        onGridFiltersChange={setGridFilters}
        gridFilterModes={gridFilterModes}
        onGridFilterModesChange={setGridFilterModes}
        attributeFilter={attributeFilter}
        onAttributeFilterChange={setAttributeFilter}
        initialPresets={initialPresets}
        onQuickFilterPresetsChange={(presets) =>
          setQuickFilterPresets(presets.map(p => ({
            name: p.name,
            filters: p.filters ?? {},
            filterModes: p.filterModes,
            selectedIds: p.selectedIds,
            expandedIds: p.expandedIds,
            columnIds: p.gridColumnIds,
          })))
        }
        currentGridColumnIds={columnIds}
        onApplyGridColumnIds={setColumnIds}
        activePresetName={activePresetName}
        storeName={currentStore}
      />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0 pt-[30px] pb-[20px] pl-[30px] pr-[30px]">
        <div className="mb-[10px] flex justify-start items-end gap-[30px]">
          <button onClick={() => setIsItemPanelOpen(!isItemPanelOpen)} className="h-[30px] px-4 flex items-center justify-center rounded-full bg-[#EAEAEA] hover:bg-[#E0E0E0] transition-colors cursor-pointer relative min-w-[50px] whitespace-nowrap">
            <div className="w-[14px] h-[11.5px] scale-[1.1]"><FilterIcon /></div>
            {filterCount > 0 && <span className="absolute -top-[8px] -right-[10px] flex items-center justify-center bg-[#373737] text-white text-[12px] font-bold rounded-full min-w-[22px] h-[22px] px-1 border-2 border-white">{filterCount}</span>}
          </button>
          
          <div className="flex gap-2">
            {quickFilterPresets.map(preset => {
              const isDragging = dragPresetName === preset.name;
              const isDropTarget = !!dragPresetName && dragOverPresetName === preset.name && dragPresetName !== preset.name;
              return (
                <div key={preset.name} className="relative flex">
                  {isDropTarget && (
                    <div className="absolute -left-[4px] top-0 bottom-0 w-[2px] bg-[#373737] rounded-full pointer-events-none" />
                  )}
                  <ActionButton
                    isActive={activeTab === preset.name}
                    onClick={() => handleTabChange(preset.name)}
                    draggable
                    onDragStart={(e) => handleButtonDragStart(e, preset.name)}
                    onDragOver={(e) => { e.preventDefault(); e.dataTransfer.dropEffect = "move"; if (dragOverPresetName !== preset.name) setDragOverPresetName(preset.name); }}
                    onDrop={(e) => { e.preventDefault(); panelRef.current?.reorderPresets(e.dataTransfer.getData("text/plain") || dragPresetName, preset.name); setDragPresetName(null); setDragOverPresetName(null); }}
                    onDragEnd={() => { setDragPresetName(null); setDragOverPresetName(null); }}
                    className={isDragging ? "opacity-50" : ""}
                  >
                    {preset.name}
                  </ActionButton>
                </div>
              );
            })}
            {activeTab === "Custom" && (
              <button
                onClick={() => panelRef.current?.openNewQuickActionPreset()}
                className="h-[30px] px-2.5 flex items-center justify-center rounded-full border border-transparent bg-[#EAEAEA] hover:bg-[#E0E0E0] text-[#1A1A1A] cursor-pointer transition-colors"
              >
                <Plus size={16} className="stroke-[3px]" />
              </button>
            )}
          </div>
        </div>
        <StoreRoutinesGrid 
          ref={gridRef} 
          onOpenItemDetails={onOpenItemDetails} 
          onSelectionChange={onSelectionChange} 
          onDataChange={onDataChange}
          selectedGroupIds={selectedGroupIds}
          activeTab={activeTab}
          attributeFilter={attributeFilter}
          onFilterCountChange={setGridFilterCount}
          data={data}
          filters={gridFilters}
          onFiltersChange={handleFiltersChange}
          filterModes={gridFilterModes}
          onFilterModesChange={handleFilterModesChange}
          columnIds={columnIds}
          onColumnIdsChange={handleColumnIdsChange}
        />
      </div>
    </div>
  );
};
