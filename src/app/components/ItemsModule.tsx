import React, { useState } from "react";
import { useSearchParams } from "react-router";
import FilterIcon from "@/imports/Icon-9-4205";
import { ItemGroupPanel } from "./ItemGroupPanel";
import { ItemsGrid } from "./ItemsGrid";

export const ItemsModule = ({ 
  isItemPanelOpen, 
  setIsItemPanelOpen, 
  gridRef, 
  onOpenItemDetails, 
  onSelectionChange, 
  onDataChange,
  data,
  currentWindowStates,
  onApplyWindowStates,
  hideFilter = false, 
  isPromotionGrid = false 
}: {
  isItemPanelOpen: boolean;
  setIsItemPanelOpen: (open: boolean) => void;
  gridRef: React.RefObject<any>;
  onOpenItemDetails: () => void;
  onSelectionChange: (items: any[]) => void;
  onDataChange: (items: any[]) => void;
  data: any[];
  currentWindowStates?: Record<string, any>;
  onApplyWindowStates?: (states: Record<string, any>) => void;
  hideFilter?: boolean;
  isPromotionGrid?: boolean;
}) => {
  const [searchParams] = useSearchParams();
  
  const [selectedGroupIds, setSelectedGroupIds] = useState<Set<string>>(new Set());
  const [expandedGroupIds, setExpandedGroupIds] = useState<Set<string>>(new Set());
  const [gridFilterCount, setGridFilterCount] = useState(0);
  const [gridFilters, setGridFilters] = useState<Record<string, string>>(() => {
    const gtin = searchParams.get("gtin");
    if (gtin) return { gtin };
    return {};
  });
  const [gridFilterModes, setGridFilterModes] = useState<Record<string, string>>({});
  const filterCount = selectedGroupIds.size + gridFilterCount;
  
  const handleClearAll = () => {
    setGridFilters({});
    setGridFilterModes({});
    setSelectedGroupIds(new Set());
    setExpandedGroupIds(new Set());
  };

  return (
    <div className="flex-1 flex flex-row overflow-hidden min-w-0 relative bg-white">
      {!hideFilter && (
        <ItemGroupPanel 
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
          presetKey="items_filter_presets"
          gridFilters={gridFilters}
          onGridFiltersChange={setGridFilters}
          gridFilterModes={gridFilterModes}
          onGridFilterModesChange={setGridFilterModes}
          showPresets={false}
        />
      )}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0 pt-[30px] pb-[30px] px-[30px]">
        {!hideFilter && (
          <div className="mb-[10px] flex justify-start gap-2">
            <button onClick={() => setIsItemPanelOpen(!isItemPanelOpen)} className="h-[30px] px-4 flex items-center justify-center rounded-full bg-[#EAEAEA] hover:bg-[#E0E0E0] transition-colors cursor-pointer relative min-w-[50px] whitespace-nowrap">
              <div className="w-[14px] h-[11.5px] scale-[1.1]"><FilterIcon /></div>
            {filterCount > 0 && <span className="absolute -top-[8px] -right-[10px] flex items-center justify-center bg-[#373737] text-white text-[12px] font-bold rounded-full min-w-[22px] h-[22px] px-1 border-2 border-white">{filterCount}</span>}
            </button>
          </div>
        )}
        <ItemsGrid 
          ref={gridRef} 
          onOpenItemDetails={onOpenItemDetails} 
          onSelectionChange={onSelectionChange} 
          onDataChange={onDataChange}
          selectedGroupIds={selectedGroupIds}
          onFilterCountChange={setGridFilterCount}
          isPromotionGrid={isPromotionGrid}
          data={data}
          filters={gridFilters}
          onFiltersChange={setGridFilters}
          filterModes={gridFilterModes}
          onFilterModesChange={setGridFilterModes}
        />
      </div>
    </div>
  );
};