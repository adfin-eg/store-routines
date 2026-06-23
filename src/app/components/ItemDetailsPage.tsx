import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import Fieldsets from "@/imports/Fieldsets";
import { StorePriceGrid } from "./StorePriceGrid";
import { ModifiedProvider, useModified } from "@/app/contexts/ModifiedContext";

function SaveHandler({ saveTrigger }: { saveTrigger: number }) {
  const context = useModified();
  const resetModified = context?.resetModified;
  
  useEffect(() => {
    if (saveTrigger > 0 && resetModified) {
      resetModified();
    }
  }, [saveTrigger, resetModified]);
  
  return null;
}

function ItemChangeHandler({ itemId }: { itemId: any }) {
  const context = useModified();
  const resetModified = context?.resetModified;
  
  useEffect(() => {
    if (resetModified) {
      resetModified();
    }
  }, [itemId, resetModified]);
  
  return null;
}

export function ItemDetailsPage({ 
  isPopup = false, 
  isStoreRoutines = false, 
  itemName = "", 
  itemGtin = "", 
  item,
  onModified,
  saveTrigger = 0
}: { 
  isPopup?: boolean, 
  isStoreRoutines?: boolean, 
  itemName?: string, 
  itemGtin?: string, 
  item?: any,
  onModified?: (count: number) => void,
  saveTrigger?: number
}) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "details";

  return (
    <ModifiedProvider onCountChange={onModified}>
      <SaveHandler saveTrigger={saveTrigger} />
      <ItemChangeHandler itemId={item?.id} />
      <div 
        className={`flex-1 bg-white overflow-hidden flex flex-col ${!isPopup ? "" : ""}`}
      >
        {activeTab === "details" ? (
          <div className="flex-1 overflow-y-auto overflow-x-hidden">
            <div className="p-[30px]">
              <Fieldsets itemName={itemName} itemGtin={itemGtin} item={item} hideActions={isStoreRoutines} />
            </div>
          </div>
        ) : activeTab === "local-values" ? (
          <div className="flex-1 overflow-y-auto">
            <div className="p-[30px]">
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col overflow-hidden p-0">
            <StorePriceGrid selectedItem={item} />
          </div>
        )}
      </div>
    </ModifiedProvider>
  );
}
