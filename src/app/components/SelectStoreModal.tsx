import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "motion/react";

interface SelectStoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (store: string) => void;
  currentStore: string;
}

const STORES = [
  "1000 – EG Retail Grilstad",
  "1001 – EG Retail Trondheim",
  "1002 – EG Retail Stavanger",
  "1003 – EG Retail Oslo",
  "1004 – EG Retail Bergen"
];

export function SelectStoreModal({ isOpen, onClose, onSelect, currentStore }: SelectStoreModalProps) {
  const [selectedStore, setSelectedStore] = useState(currentStore);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[1000000] flex items-start justify-center pt-[25vh]">
        {/* Backdrop */}
        <Motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50"
        />
        
        {/* Modal Container */}
        <Motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="bg-white flex flex-col items-start relative shadow-[0px_2px_15px_0px_rgba(0,0,0,0.3)] w-[450px] z-10"
        >
          {/* Header */}
          <div className="bg-white flex items-center overflow-clip pb-[12px] pt-[16px] px-[30px] relative shrink-0 w-full">
            <h2 className="flex-1 text-[16px] font-bold text-[#1A1A1A] tracking-tight uppercase whitespace-nowrap">
              Select store
            </h2>
          </div>

          {/* Content */}
          <div className="relative shrink-0 w-full">
            <div className="flex flex-col items-start pb-[20px] px-[30px] relative w-full">
              <div className="flex flex-col gap-[2px] items-start relative shrink-0 w-full mt-2">
                <div className="flex font-roboto font-normal items-start leading-[normal] relative shrink-0 text-[14px] w-full">
                  <p className="min-h-px min-w-px relative text-[#666666] whitespace-pre-wrap">
                    Store
                  </p>
                </div>
                <div className="bg-white h-[30px] relative shrink-0 w-full group">
                  <select 
                    value={selectedStore}
                    onChange={(e) => setSelectedStore(e.target.value)}
                    className="absolute bg-white border border-[#ccc] inset-0 px-[8px] font-roboto text-[14px] text-[#1A1A1A] focus:outline-none focus:border-[#ccc] appearance-none w-full cursor-pointer pr-[30px]"
                  >
                    {STORES.map(store => (
                      <option key={store} value={store}>{store}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-[4px] top-1/2 -translate-y-1/2 size-[20px] flex items-center justify-center">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path d="M9 1L5 5L1 1H9Z" fill="#1A1A1A" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-white relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-end px-[20px] pb-[20px] pt-[10px] gap-[8px]">
              <button 
                onClick={onClose}
                className="h-[30px] px-[15px] flex items-center justify-center text-[13px] font-semibold uppercase tracking-[0px] rounded-full transition-colors leading-none font-roboto-condensed cursor-pointer bg-[#EAEAEA] text-[#1A1A1A] hover:bg-[#E0E0E0] whitespace-nowrap"
              >
                cancel
              </button>
              <button 
                onClick={() => {
                  onSelect(selectedStore);
                  onClose();
                }}
                className="h-[30px] px-[15px] flex items-center justify-center text-[13px] font-semibold uppercase tracking-[0px] rounded-full transition-colors leading-none font-roboto-condensed cursor-pointer bg-[#1C7862] text-white hover:bg-[#248E73] border border-[#1C7862] hover:border-[#248E73] whitespace-nowrap"
              >
                Save
              </button>
            </div>
          </div>
        </Motion.div>
      </div>
    </AnimatePresence>
  );
}