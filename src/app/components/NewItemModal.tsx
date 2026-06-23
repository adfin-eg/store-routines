import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "motion/react";

interface NewItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (data: any) => void;
}

export function NewItemModal({ isOpen, onClose, onCreate }: NewItemModalProps) {
  const [gtinMode, setGtinMode] = useState<"generate" | "enter">("generate");
  const [itemName, setItemName] = useState("");
  const [itemGroup, setItemGroup] = useState("");
  const [itemSubgroup, setItemSubgroup] = useState("");
  const [supplier, setSupplier] = useState("");

  const [showBorder, setShowBorder] = useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const checkScroll = () => {
      if (contentRef.current) {
        const { scrollHeight, clientHeight } = contentRef.current;
        setShowBorder(scrollHeight > clientHeight);
      }
    };

    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') {
      e.currentTarget.select();
    }
  };

  const RadioIcon = ({ active }: { active: boolean }) => (
    <div className={`relative shrink-0 size-[16px] rounded-full transition-colors flex items-center justify-center ${active ? 'bg-[#595959]' : 'bg-white border border-[#ccc]'}`}>
      {active && (
        <div className="size-[6px] rounded-full bg-white" />
      )}
    </div>
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[20000] flex items-start justify-center pt-[15vh]">
        {/* Backdrop */}
        <Motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/40"
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
            <h2 className="flex-1 text-[16px] font-bold text-[#1A1A1A] tracking-tight uppercase whitespace-nowrap">New item</h2>
          </div>

          {/* Content */}
          <div 
            ref={contentRef}
            className="relative shrink-0 w-full max-h-[60vh] overflow-y-auto custom-scrollbar"
          >
            <div className="flex flex-col items-start pb-[20px] px-[30px] relative w-full">
              
              {/* Radio Group */}
              <div className="flex flex-col items-start pb-[10px] pt-[8px] relative shrink-0 w-full gap-[2px]">
                {/* Generate GTIN */}
                <div 
                  className="flex gap-[10px] items-center cursor-pointer group py-[2px] select-none"
                  onClick={() => setGtinMode("generate")}
                >
                  <RadioIcon active={gtinMode === "generate"} />
                  <p className="font-roboto font-normal text-[#1A1A1A] text-[14px]">
                    Generate GTIN
                  </p>
                </div>

                {/* Enter GTIN */}
                <div 
                  className="flex gap-[10px] items-center cursor-pointer group py-[2px] select-none"
                  onClick={() => setGtinMode("enter")}
                >
                  <RadioIcon active={gtinMode === "enter"} />
                  <p className="font-roboto font-normal text-[#1A1A1A] text-[14px]">
                    Enter GTIN
                  </p>
                </div>
              </div>

              {/* Item Name */}
              <div className="flex flex-col gap-[2px] items-start pb-[10px] relative shrink-0 w-full mt-2">
                <div className="flex font-roboto font-normal gap-[3px] items-start leading-[normal] relative shrink-0 text-[14px] w-full">
                  <p className="relative shrink-0 text-[#f4635b]">*</p>
                  <p className="flex-1 min-h-px min-w-px relative text-[#666666] whitespace-pre-wrap">Item name</p>
                </div>
                <div className="h-[30px] relative shrink-0 w-full">
                  <input 
                    type="text"
                    autoFocus
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="selection:bg-[#373737] selection:text-white absolute bg-white border border-[#ccc] inset-0 px-[8px] font-roboto text-[14px] text-[#1A1A1A] focus:outline-none focus:border-2 focus:border-[#373737]"
                  />
                </div>
              </div>

              {/* Item Group */}
              <div className="flex flex-col gap-[2px] items-start pb-[10px] relative shrink-0 w-full">
                <div className="flex font-roboto font-normal gap-[3px] items-start leading-[normal] relative shrink-0 text-[14px] w-full">
                  <p className="relative shrink-0 text-[#f4635b]">*</p>
                  <p className="flex-1 min-h-px min-w-px relative text-[#666666] whitespace-pre-wrap">Item group</p>
                </div>
                <div className="bg-white h-[30px] relative shrink-0 w-full group">
                  <select 
                    value={itemGroup}
                    onChange={(e) => setItemGroup(e.target.value)}
                    className="absolute bg-white border border-[#ccc] inset-0 px-[8px] font-roboto text-[14px] text-[#1A1A1A] focus:outline-none focus:border-[#ccc] appearance-none w-full cursor-pointer pr-[30px]"
                  >
                    <option value=""></option>
                    <option value="Dairy">Dairy</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                  </select>
                  <div className="pointer-events-none absolute right-[4px] top-1/2 -translate-y-1/2 size-[20px] flex items-center justify-center">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path d="M9 1L5 5L1 1H9Z" fill="#1A1A1A" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Item Subgroup */}
              <div className="flex flex-col gap-[2px] items-start pb-[10px] relative shrink-0 w-full">
                <div className="flex items-start relative shrink-0 w-full font-roboto text-[14px]">
                  <p className="flex-1 font-normal text-[#666666] whitespace-pre-wrap">Item subgroup</p>
                </div>
                <div className="bg-white h-[30px] relative shrink-0 w-full">
                  <select 
                    value={itemSubgroup}
                    onChange={(e) => setItemSubgroup(e.target.value)}
                    className="absolute bg-white border border-[#ccc] inset-0 px-[8px] font-roboto text-[14px] text-[#1A1A1A] focus:outline-none focus:border-[#ccc] appearance-none w-full cursor-pointer pr-[30px]"
                  >
                    <option value=""></option>
                    <option value="Milk">Milk</option>
                    <option value="Soda">Soda</option>
                    <option value="Chips">Chips</option>
                  </select>
                  <div className="pointer-events-none absolute right-[4px] top-1/2 -translate-y-1/2 size-[20px] flex items-center justify-center">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path d="M9 1L5 5L1 1H9Z" fill="#1A1A1A" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Supplier */}
              <div className="flex flex-col gap-[2px] items-start pb-[10px] relative shrink-0 w-full">
                <div className="flex font-roboto font-normal gap-[3px] items-start leading-[normal] relative shrink-0 text-[14px] w-full">
                  <p className="relative shrink-0 text-[#f4635b]">*</p>
                  <p className="flex-1 min-h-px min-w-px relative text-[#666666] whitespace-pre-wrap">Supplier</p>
                </div>
                <div className="bg-white h-[30px] relative shrink-0 w-full">
                  <select 
                    value={supplier}
                    onChange={(e) => setSupplier(e.target.value)}
                    className="absolute bg-white border border-[#ccc] inset-0 px-[8px] font-roboto text-[14px] text-[#1A1A1A] focus:outline-none focus:border-[#ccc] appearance-none w-full cursor-pointer pr-[30px]"
                  >
                    <option value=""></option>
                    <option value="Supplier A">Supplier A</option>
                    <option value="Supplier B">Supplier B</option>
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

          {/* Toolbar */}
          <div className={`bg-white ${showBorder ? "border-t border-[#CCCCCC]" : ""} relative shrink-0 w-full`}>
            <div className="flex flex-row items-center justify-end px-[20px] pb-[20px] pt-[10px] gap-[8px]">
              <button 
                onClick={onClose}
                className="h-[30px] px-[15px] flex items-center justify-center text-[13px] font-semibold uppercase tracking-[0px] rounded-full transition-colors leading-none font-roboto-condensed cursor-pointer bg-[#EAEAEA] text-[#1A1A1A] hover:bg-[#E0E0E0] whitespace-nowrap"
              >
                cancel
              </button>
              <button 
                onClick={() => onCreate({ itemName, itemGroup, itemSubgroup, supplier, gtinMode })}
                className="h-[30px] px-[15px] flex items-center justify-center text-[13px] font-semibold uppercase tracking-[0px] rounded-full transition-colors leading-none font-roboto-condensed cursor-pointer bg-[#1C7862] text-white hover:bg-[#248E73] border border-[#1C7862] hover:border-[#248E73] whitespace-nowrap"
              >
                Create
              </button>
            </div>
          </div>
        </Motion.div>
      </div>
    </AnimatePresence>
  );
}
