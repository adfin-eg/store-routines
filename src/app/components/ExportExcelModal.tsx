import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "motion/react";

interface ExportExcelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ExportExcelModal({ isOpen, onClose }: ExportExcelModalProps) {
  const [fileName, setFileName] = useState("Export_Data");

  const handleExport = () => {
    // In a real app, this would trigger the export logic
    console.log(`Exporting to ${fileName}.xlsx`);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[30000] flex items-start justify-center pt-[25vh]">
          <Motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40"
          />
          
          <Motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="bg-white flex flex-col items-start relative shadow-[0px_2px_15px_0px_rgba(0,0,0,0.3)] w-[450px] z-10"
          >
            <div className="bg-white flex items-center overflow-clip pb-[12px] pt-[16px] px-[30px] relative shrink-0 w-full">
              <h2 className="flex-1 text-[16px] font-bold text-[#1A1A1A] tracking-tight uppercase whitespace-nowrap font-roboto-condensed">
                Export to Excel
              </h2>
            </div>

            <div className="relative shrink-0 w-full">
              <div className="flex flex-col items-start pb-[20px] px-[30px] relative w-full">
                <div className="flex flex-col gap-[2px] items-start relative shrink-0 w-full mt-2">
                  <div className="flex font-roboto font-normal items-start leading-[normal] relative shrink-0 text-[14px] w-full">
                    <p className="min-h-px min-w-px relative text-[#f4635b] whitespace-pre-wrap">
                      <span className="leading-[normal]">*</span>
                      <span className="leading-[normal] text-[#666666]">{` File name`}</span>
                    </p>
                  </div>
                  <div className="h-[30px] relative shrink-0 w-full">
                    <input 
                      type="text"
                      autoFocus
                      value={fileName}
                      onFocus={(e) => e.currentTarget.select()}
                      onChange={(e) => setFileName(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleExport();
                        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') e.currentTarget.select();
                      }}
                      className="selection:bg-[#373737] selection:text-white absolute bg-white border border-[#ccc] inset-0 px-[8px] font-roboto text-[14px] text-[#1A1A1A] focus:outline-none focus:border-2 focus:border-[#373737]"
                    />
                  </div>
                </div>
                
                <p className="text-[12px] text-[#666666] mt-3 font-roboto">
                  The exported file will contain the current grid view and any applied filters.
                </p>
              </div>
            </div>

            <div className="bg-white relative shrink-0 w-full">
              <div className="flex flex-row items-center justify-end px-[20px] pb-[20px] pt-[10px] gap-[8px]">
                <button 
                  onClick={onClose}
                  className="h-[30px] px-[15px] flex items-center justify-center text-[13px] font-semibold uppercase tracking-[0px] rounded-full transition-colors leading-none font-roboto-condensed cursor-pointer bg-[#EAEAEA] text-[#1A1A1A] hover:bg-[#E0E0E0] whitespace-nowrap"
                >
                  cancel
                </button>
                <button 
                  onClick={handleExport}
                  className="h-[30px] px-[15px] flex items-center justify-center text-[13px] font-semibold uppercase tracking-[0px] rounded-full transition-colors leading-none font-roboto-condensed cursor-pointer bg-[#1C7862] text-white hover:bg-[#248E73] border border-[#1C7862] hover:border-[#248E73] whitespace-nowrap"
                >
                  Export
                </button>
              </div>
            </div>
          </Motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
