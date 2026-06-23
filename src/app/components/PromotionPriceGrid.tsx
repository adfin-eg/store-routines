import React, { useState, useEffect, useRef } from "react";
import KendoIcon from "@/imports/KendoIcon";
import svgPaths from "@/imports/svg-906eoku7oi";
import svgPathsCalendar from "@/imports/svg-lbuqdinfsp";
import svgPathsClock from "@/imports/svg-wmdnznvu55";
import svgPathsMore from "@/imports/svg-oqev7ygrue";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "./ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import * as PopoverPrimitive from "@radix-ui/react-popover";

interface RowProps {
  label: string;
  subLabel?: string;
  percent?: string;
  amount: string;
  amount2?: string;
  isHeader?: boolean;
  isInput?: boolean;
  hasPercentInput?: boolean;
  isHighlight?: boolean;
  isSection?: boolean;
  isItalic?: boolean;
  isDual?: boolean;
  autoFocus?: boolean;
  noBorder?: boolean;
  onChange?: (val: string) => void;
  onPercentChange?: (val: string) => void;
  renderMiddleContent?: React.ReactNode;
  compareValue?: string;
  hideLabel?: boolean;
}

const PriceRow: React.FC<RowProps> = ({ 
  label, 
  subLabel,
  percent, 
  amount, 
  isHeader, 
  isInput, 
  hasPercentInput, 
  isSection,
  isItalic,
  isDual,
  autoFocus,
  noBorder,
  onChange,
  onPercentChange,
  renderMiddleContent,
  compareValue,
  hideLabel
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const parseValue = (val?: string) => {
    if (!val) return 0;
    return parseFloat(val.replace(',', '.').replace(/[−-]/g, '-').replace(/[^0-9.-]/g, '')) || 0;
  };

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
        if (inputRef.current) {
          inputRef.current.setSelectionRange(0, inputRef.current.value.length);
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [autoFocus]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') {
      e.currentTarget.select();
    }
  };

  const isNegative = (val?: string) => {
    if (!val) return false;
    return val.includes('−') || val.includes('-');
  };

  const percentIsNegative = isNegative(percent);
  const amountIsNegative = isNegative(amount);

  if (isSection) {
    return (
      <div className="bg-[#E6E6E6] h-[32px] flex items-center px-4 w-full">
        {!hideLabel && <p className="font-bold text-[#373737] text-[14px]">{label}</p>}
      </div>
    );
  }

  const currentCompareVal = parseValue(compareValue);
  const val1 = 95.00;
  const val2 = 129.00;

  if (isDual && hideLabel) {
    return (
      <div className={`flex items-center w-full border-b border-[#CCCCCC] bg-white h-[62px]`}>
        <div className="flex-[2] h-full" />
      </div>
    );
  }

  return (
    <div className={`flex items-center w-full ${noBorder ? "" : "border-b"} ${isHeader ? "border-none bg-[#E6E6E6] h-[32px]" : `border-[#CCCCCC] bg-white ${isDual || subLabel ? 'h-[62px]' : 'h-[42px]'}`}`}>
      {!hideLabel && (
        <div className={`flex-1 min-w-0 h-full flex items-center pl-4 pr-4 ${isHeader ? "border-r-2 border-[#FFFFFF]" : ""}`}>
          {isDual ? (
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-[12px] min-w-0">
                <p className="text-[14px] text-[#373737] leading-tight italic truncate whitespace-nowrap">Lowest price</p>
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="size-[15px] cursor-pointer outline-none border-none bg-transparent p-0 flex items-center justify-center shrink-0">
                      <KendoIcon />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent side="top" sideOffset={10} className="max-w-[420px] w-auto bg-[#373737] text-white border-none rounded-sm px-6 py-3 text-[14px] z-[9999] text-wrap text-left shadow-none">
                    Check lowest price 30 days to ensure the offer is genuine and meets regulatory requirements
                    <PopoverPrimitive.Arrow className="fill-[#373737] w-[14px] h-[7px]" />
                  </PopoverContent>
                </Popover>
              </div>
              <p className="text-[14px] leading-tight mt-1 opacity-0" aria-hidden="true">Spacer</p>
            </div>
          ) : (
            <div className="flex flex-col justify-center min-w-0">
              <p className={`${isHeader ? "text-[14px] font-bold" : "text-[14px]"} ${isItalic ? "italic" : ""} text-[#373737] leading-tight truncate whitespace-nowrap`}>
                {label}
              </p>
              {subLabel && (
                <p className="text-[12px] text-[#666666] leading-tight mt-0.5 truncate whitespace-nowrap">
                  {subLabel}
                </p>
              )}
            </div>
          )}
        </div>
      )}
      
      <div className="flex-[2] h-full flex">
        <div className={`flex-1 h-full flex items-center ${hideLabel ? "pl-2 pr-[5px]" : "px-[5px]"} ${isHeader ? "border-r-2 border-[#FFFFFF]" : ""}`}>
          {isDual ? (
            <div className="w-full flex flex-col px-2">
              <p className={`text-[14px] leading-tight italic ${val1 < currentCompareVal ? 'text-[#D32F2F]' : 'text-[#373737] line-through decoration-[#373737] decoration-1'}`}>Last 30 days</p>
              <p className={`text-[14px] leading-tight italic mt-1 ${val2 < currentCompareVal ? 'text-[#D32F2F]' : 'text-[#373737] line-through decoration-[#373737] decoration-1'}`}>Next 30 days</p>
            </div>
          ) : (
            isHeader ? (
              <div className="w-full flex justify-end pr-[13px]">
                {!hideLabel && <p className="font-bold text-[#373737] text-[14px]">%</p>}
              </div>
            ) : renderMiddleContent ? (
              <div className="w-full flex justify-start h-[30px] items-center p-[0px]">
                {renderMiddleContent}
              </div>
            ) : hasPercentInput ? (
              <div className="w-full relative h-[30px]">
                <input 
                  type="text"
                  value={percent}
                  onChange={(e) => onPercentChange?.(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className={`w-full h-full border border-[#CCCCCC] bg-white text-right pl-2 pr-[20px] text-[14px] text-[#373737] outline-none focus:border-2 focus:border-[#373737] focus:pr-[19px] selection:bg-[#373737] selection:text-white`}
                  onFocus={(e) => {
                    const target = e.target;
                    setTimeout(() => {
                      target.setSelectionRange(0, target.value.length);
                    }, 0);
                  }}
                />
                <div className="absolute right-2 top-0 h-full flex items-center pointer-events-none">
                  <span className="text-[14px] text-[#373737]">%</span>
                </div>
              </div>
            ) : percent ? (
              <div className="w-full flex justify-end h-[30px] items-center px-2">
                <span className={`text-[14px] ${percentIsNegative ? "text-[#D32F2F]" : "text-[#373737]"}`}>{percent} %</span>
              </div>
            ) : null
          )}
        </div>

        <div className={`flex-1 flex items-center ${hideLabel ? "pl-2 pr-[5px]" : "px-[5px]"}`}>
          {isDual ? (
            <div className="w-full flex flex-col items-end px-2">
              <p className={`text-[14px] leading-tight italic ${val1 < currentCompareVal ? 'text-[#D32F2F]' : 'text-[#373737] line-through decoration-[#373737] decoration-1'}`}>95,00</p>
              <p className={`text-[14px] leading-tight italic mt-1 ${val2 < currentCompareVal ? 'text-[#D32F2F]' : 'text-[#373737] line-through decoration-[#373737] decoration-1'}`}>129,00</p>
            </div>
          ) : (
            isHeader ? (
              <div className="w-full flex justify-end pr-[13px]">
                {!hideLabel && <p className="font-bold text-[#373737] text-[14px]">Amount</p>}
              </div>
            ) : isInput ? (
              <input 
                ref={inputRef}
                type="text"
                value={amount}
                onChange={(e) => onChange?.(e.target.value)}
                onKeyDown={handleKeyDown}
                className={`w-full h-[30px] border border-[#CCCCCC] bg-white flex items-center text-right px-2 text-[14px] text-[#373737] outline-none focus:border-2 focus:border-[#373737] focus:px-[7px] selection:bg-[#373737] selection:text-white`}
                onFocus={(e) => {
                  const target = e.target;
                  setTimeout(() => {
                    target.setSelectionRange(0, target.value.length);
                  }, 0);
                }}
              />
            ) : (
              <div className="w-full flex justify-end h-[30px] items-center px-2">
                <span className={`text-[14px] ${amountIsNegative ? "text-[#D32F2F]" : "text-[#373737]"}`}>{amount}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

const InputField: React.FC<{ label: string; value: string; type: 'date' | 'time' }> = ({ label, value, type }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') {
      e.currentTarget.select();
    }
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="relative w-full h-[30px] flex items-center">
        <input 
          type="text"
          defaultValue={value}
          onKeyDown={handleKeyDown}
          placeholder={type === 'date' ? "dd.mm.yyyy" : type === 'time' ? "hh:mm" : ""}
          className="selection:bg-[#373737] selection:text-white w-full h-full bg-white border border-[#CCCCCC] pl-2 pr-7 text-[14px] text-[#373737] outline-none focus:border-2 focus:border-[#373737]"
          onFocus={(e) => {
            const target = e.target;
            setTimeout(() => {
              target.setSelectionRange(0, target.value.length);
            }, 0);
          }}
        />
        <div className="absolute right-0.5 pointer-events-none size-5 flex items-center justify-center mr-[4px]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            {type === 'date' ? (
              <path d={svgPathsCalendar.p5c6fb00} fill="#373737" />
            ) : (
              <>
                <path d="M8 4H7V9H12V8H8V4Z" fill="#373737" />
                <path d={svgPathsClock.p37c7c00} fill="#373737" />
              </>
            )}
          </svg>
        </div>
      </div>
    </div>
  );
};

interface PromotionPriceGridProps {
  showReference: boolean;
  onShowReferenceChange: (show: boolean) => void;
}

export function PromotionPriceGrid({ showReference, onShowReferenceChange }: PromotionPriceGridProps) {
  const [isMemberOffer, setIsMemberOffer] = useState(false);
  const [promotionPrice, setPromotionPrice] = useState("119,80");
  const [isRounded, setIsRounded] = useState(false);

  // Initial values based on isMemberOffer
  const [ordinaryNetPrice, setOrdinaryNetPrice] = useState("10,00");
  const [promotionNetPrice, setPromotionNetPrice] = useState("10,00");
  const [grossProfitPercent, setGrossProfitPercent] = useState("+55,00");
  const [grossProfitAmount, setGrossProfitAmount] = useState("+5,50");
  const [retailPriceExclVat, setRetailPriceExclVat] = useState("15,50");
  const [vatAmount, setVatAmount] = useState("+3,88");
  const [retailPrice, setRetailPrice] = useState("19,38");

  useEffect(() => {
    if (isMemberOffer) {
      setOrdinaryNetPrice("9,20");
      setPromotionNetPrice("9,20");
      setGrossProfitPercent("+52,17");
      setGrossProfitAmount("+4,80");
      setRetailPriceExclVat("14,00");
      setVatAmount("+3,50");
      setRetailPrice("17,50");
      setPromotionPrice("99,90");
    } else {
      setOrdinaryNetPrice("10,00");
      setPromotionNetPrice("10,00");
      setGrossProfitPercent("+55,00");
      setGrossProfitAmount("+5,50");
      setRetailPriceExclVat("15,50");
      setVatAmount("+3,88");
      setRetailPrice("19,38");
      setPromotionPrice("119,80");
    }
  }, [isMemberOffer]);

  const parseValue = (val: string) => {
    return parseFloat(val.replace(',', '.').replace(/[^0-9.]/g, '')) || 0;
  };

  const formatPrice = (num: number) => {
    return num.toFixed(2).replace('.', ',');
  };

  useEffect(() => {
    if (isRounded) {
      const currentPriceNum = parseValue(promotionPrice);
      const roundedPriceNum = Math.round(currentPriceNum);
      const roundedPriceStr = formatPrice(roundedPriceNum);
      if (roundedPriceStr !== promotionPrice) {
        setPromotionPrice(roundedPriceStr);
      }
    }
  }, [isRounded, promotionPrice]);

  const renderContent = (isStatic: boolean = false) => (
    <div className={`flex flex-col min-w-0 ${isStatic ? "pointer-events-none" : ""}`}>
      {/* Offer Section */}
      <div className="flex flex-col">
        <div className="bg-[#E6E6E6] h-[32px] flex items-center">
          <div className="flex-1 pl-4 min-w-0">
            <p className="font-bold text-[#1a1a1a] text-[14px] truncate">
              {isStatic ? (isMemberOffer ? "Previous offer" : "Active offer") : "Offer details"}
            </p>
          </div>
          {!isStatic && (
            <>
              <div className="flex-1" />
              <div className="flex-1 flex justify-end items-center pr-[12px]">
                <PopoverPrimitive.Root>
                  <PopoverPrimitive.Trigger asChild>
                    <button className="h-[24px] w-[24px] flex items-center justify-center hover:bg-[#D9D9D9] transition-colors outline-none cursor-pointer rounded">
                      <svg className="size-[18px]" viewBox="0 0 20 20" fill="none">
                        <path d={svgPathsMore.p2d3e5d00} fill="#373737" />
                      </svg>
                    </button>
                  </PopoverPrimitive.Trigger>
                  <PopoverPrimitive.Portal>
                    <PopoverPrimitive.Content
                      align="end"
                      side="bottom"
                      sideOffset={0}
                      alignOffset={-4}
                      className="z-[10000] bg-white border border-[#CCCCCC] shadow-lg min-w-[150px] outline-none"
                    >
                      <div className="flex flex-col py-1">
                        <PopoverPrimitive.Close asChild>
                          <button
                            className="text-left text-[14px] font-normal text-[#1A1A1A] hover:bg-[#EAEAEA] px-4 py-2 cursor-pointer transition-colors outline-none border-none bg-transparent w-full"
                            onClick={() => onShowReferenceChange(!showReference)}
                          >
                            {showReference ? "Hide reference" : "Show reference"}
                          </button>
                        </PopoverPrimitive.Close>
                      </div>
                    </PopoverPrimitive.Content>
                  </PopoverPrimitive.Portal>
                </PopoverPrimitive.Root>
              </div>
            </>
          )}
        </div>
        
        <div className="flex flex-col">
          {/* Valid From Row */}
          <div className="flex items-center w-full h-[42px] border-b border-[#CCCCCC] bg-white">
            {!isStatic && (
              <div className="flex-1 min-w-0 h-full flex items-center pl-4 pr-4">
                <p className="text-[14px] text-[#373737] leading-tight truncate whitespace-nowrap">Valid from</p>
              </div>
            )}
            <div className={`flex-1 h-full flex items-center ${isStatic ? "pl-2 pr-[5px]" : "px-[5px]"}`}>
              {isStatic ? (
                <div className="w-full h-[30px] flex items-center px-2 text-[14px] text-[#373737]">
                  {isMemberOffer ? "18.01.2026" : "08.02.2026"}
                </div>
              ) : (
                <InputField label="Date" value="15.02.2026" type="date" />
              )}
            </div>
            <div className={`flex-1 h-full flex items-center ${isStatic ? "pl-2 pr-[5px]" : "px-[5px]"}`}>
              {isStatic ? (
                <div className="w-full h-[30px] flex items-center px-2 text-[14px] text-[#373737]">00:00</div>
              ) : (
                <InputField label="Time" value="00:00" type="time" />
              )}
            </div>
          </div>

          {/* Valid To Row */}
          <div className="flex items-center w-full h-[42px] border-b border-[#CCCCCC] bg-white">
            {!isStatic && (
              <div className="flex-1 min-w-0 h-full flex items-center pl-4 pr-4">
                <p className="text-[14px] text-[#373737] leading-tight truncate whitespace-nowrap">Valid to</p>
              </div>
            )}
            <div className={`flex-1 h-full flex items-center ${isStatic ? "pl-2 pr-[5px]" : "px-[5px]"}`}>
              {isStatic ? (
                <div className="w-full h-[30px] flex items-center px-2 text-[14px] text-[#373737]">
                  {isMemberOffer ? "25.01.2026" : "15.02.2026"}
                </div>
              ) : (
                <InputField label="Date" value="22.02.2026" type="date" />
              )}
            </div>
            <div className={`flex-1 h-full flex items-center ${isStatic ? "pl-2 pr-[5px]" : "px-[5px]"}`}>
              {isStatic ? (
                <div className="w-full h-[30px] flex items-center px-2 text-[14px] text-[#373737]">23:59</div>
              ) : (
                <InputField label="Time" value="23:59" type="time" />
              )}
            </div>
          </div>

          {/* Reason Code Row */}
          <div className="flex items-center w-full h-[42px] border-b border-[#CCCCCC] bg-white">
            {!isStatic && (
              <div className="flex-1 min-w-0 h-full flex items-center pl-4 pr-4">
                <p className="text-[14px] text-[#373737] leading-tight truncate whitespace-nowrap">Discount reason</p>
              </div>
            )}
            <div className={`flex-[2] h-full flex items-center ${isStatic ? "pl-2 pr-[5px]" : "px-[5px]"}`}>
              {isStatic ? (
                <div className="w-full h-[30px] flex items-center px-2 text-[14px] text-[#373737]">None</div>
              ) : (
                <div className="relative w-full h-[30px] flex items-center">
                  <select 
                    className="w-full h-full bg-white border border-[#CCCCCC] px-[8px] font-roboto text-[14px] text-[#373737] outline-none focus:border-[#373737] focus:border-2 appearance-none cursor-pointer pr-[30px]"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>None</option>
                    <option value="001">001 - Seasonal Clearance</option>
                    <option value="002">002 - Competitive Matching</option>
                    <option value="003">003 - Stock Rotation</option>
                  </select>
                  <div className="pointer-events-none absolute right-[4px] top-1/2 -translate-y-1/2 size-[20px] flex items-center justify-center">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path d="M9 1L5 5L1 1H9Z" fill="#373737" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Member Offer Row */}
          <div className="flex items-center w-full h-[42px] bg-white">
            {!isStatic ? (
              <>
                <div className="flex-1 h-full flex items-center pl-4 pr-4"></div>
                <div className="flex-[2] min-w-0 h-full flex items-center px-[5px]">
                  <div className="flex items-center">
                    <div 
                      className={`relative shrink-0 size-[16px] mr-3 transition-colors cursor-pointer flex items-center justify-center border mb-[1px] ${
                        !isMemberOffer ? "bg-white border-[#CCCCCC]" : "bg-[#595959] border-[#595959]"
                      }`}
                      onClick={() => setIsMemberOffer(!isMemberOffer)}
                    >
                      {isMemberOffer && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="size-[12px]" viewBox="0 0 12 12" fill="none">
                            <path d="M2.5 6L5 8.5L9.5 4" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <span 
                      className="text-[14px] text-[#373737] cursor-pointer select-none whitespace-nowrap leading-none truncate"
                      onClick={() => setIsMemberOffer(!isMemberOffer)}
                    >
                      Member offer
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex-[2] min-w-0 h-full flex items-center px-4 py-[0px]">
                  <div className="flex items-center">
                    <div 
                      className={`relative shrink-0 size-[16px] mr-3 flex items-center justify-center border mb-[1px] opacity-80 ${
                        !isMemberOffer ? "bg-white border-[#CCCCCC]" : "bg-[#7A7A7A] border-[#7A7A7A]"
                      }`}
                    >
                      {isMemberOffer && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="size-[12px]" viewBox="0 0 12 12" fill="none">
                            <path d="M2.5 6L5 8.5L9.5 4" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <span className="text-[14px] text-[#373737] select-none whitespace-nowrap leading-none truncate">
                      Member offer
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Cost Price Section */}
      <div className="flex flex-col">
        <div className="border-b-2 border-[#FFFFFF]">
          <PriceRow label="Price element" amount="Amount" isHeader hideLabel={isStatic} />
        </div>
        <PriceRow label="Cost price" amount="" isSection hideLabel={isStatic} />
        <PriceRow 
          label="Ordinary net price" 
          amount={isStatic ? (isMemberOffer ? "9,20" : "10,00") : ordinaryNetPrice} 
          onChange={(val) => !isStatic && setOrdinaryNetPrice(val)}
          isInput={!isStatic}
          hideLabel={isStatic} 
        />
        <PriceRow 
          label="Kickback supplier" 
          percent="0,00" 
          amount="0,00" 
          hasPercentInput={!isStatic} 
          isInput={!isStatic} 
          hideLabel={isStatic} 
        />
        <PriceRow 
          label="Promotion supplier net price" 
          amount="0,00" 
          isInput={!isStatic} 
          hideLabel={isStatic} 
        />
        <PriceRow 
          label="Kickback chain" 
          percent="0,00" 
          amount="0,00" 
          hasPercentInput={!isStatic} 
          isInput={!isStatic} 
          hideLabel={isStatic} 
        />
        <PriceRow 
          label="Promotion net price" 
          amount={isStatic ? (isMemberOffer ? "9,20" : "10,00") : promotionNetPrice} 
          onChange={(val) => !isStatic && setPromotionNetPrice(val)}
          isInput={!isStatic}
          noBorder 
          hideLabel={isStatic} 
        />
      </div>

      {/* Sales Price Section */}
      <div className="flex flex-col">
        <PriceRow label="Sales price" amount="" isSection hideLabel={isStatic} />
        <PriceRow 
          label="Gross profit" 
          percent={isStatic ? (isMemberOffer ? "+52,17" : "+55,00") : grossProfitPercent} 
          amount={isStatic ? (isMemberOffer ? "+4,80" : "+5,50") : grossProfitAmount} 
          hasPercentInput={!isStatic} 
          isInput={!isStatic} 
          onChange={(val) => !isStatic && setGrossProfitAmount(val)}
          onPercentChange={(val) => !isStatic && setGrossProfitPercent(val)}
          hideLabel={isStatic} 
        />
        <PriceRow 
          label="Retail price excl. VAT" 
          amount={isStatic ? (isMemberOffer ? "14,00" : "15,50") : retailPriceExclVat} 
          isInput={!isStatic} 
          onChange={(val) => !isStatic && setRetailPriceExclVat(val)}
          hideLabel={isStatic} 
        />
        <PriceRow 
          label="VAT (1)" 
          percent={isStatic ? (isMemberOffer ? "+25,00" : "+25,00") : "+25,00"} 
          amount={isStatic ? (isMemberOffer ? "+3,50" : "+3,88") : vatAmount} 
          isInput={!isStatic}
          onChange={(val) => !isStatic && setVatAmount(val)}
          hideLabel={isStatic} 
        />
        <PriceRow 
          label="Retail price" 
          amount={isStatic ? (isMemberOffer ? "17,50" : "19,38") : retailPrice} 
          isInput={!isStatic} 
          onChange={(val) => !isStatic && setRetailPrice(val)}
          hideLabel={isStatic} 
        />
        <PriceRow 
          label="Promotion discount" 
          percent="−0,00" 
          amount="0,00" 
          hasPercentInput={!isStatic} 
          isInput={!isStatic} 
          hideLabel={isStatic} 
        />
        <PriceRow 
          label="" 
          amount="" 
          isDual 
          compareValue={isStatic ? (isMemberOffer ? "99,90" : promotionPrice) : promotionPrice} 
          hideLabel={isStatic} 
        />
        <PriceRow 
          label="Promotion price" 
          amount={isStatic ? (isMemberOffer ? "99,90" : "119,80") : promotionPrice} 
          onChange={(val) => {
            if (isStatic) return;
            if (isRounded) {
              const num = parseValue(val);
              setPromotionPrice(formatPrice(Math.round(num)));
            } else {
              setPromotionPrice(val);
            }
          }} 
          isInput={!isStatic} 
          noBorder
          hideLabel={isStatic}
          renderMiddleContent={!isStatic ? (
            <div className="flex items-center h-full">
              <div 
                className={`relative shrink-0 size-[16px] mr-3 transition-colors cursor-pointer flex items-center justify-center border mb-[1px] ${
                  !isRounded ? "bg-white border-[#CCCCCC]" : "bg-[#595959] border-[#595959]"
                }`}
                onClick={() => setIsRounded(!isRounded)}
              >
                {isRounded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="size-[12px]" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6L5 8.5L9.5 4" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
                    </svg>
                  </div>
                )}
              </div>
              <span 
                className="text-[14px] text-[#373737] cursor-pointer select-none whitespace-nowrap leading-none"
                onClick={() => setIsRounded(!isRounded)}
              >
                Use rounding
              </span>
            </div>
          ) : null}
        />
      </div>
    </div>
  );

  return (
    <TooltipProvider delayDuration={200}>
      <div className="flex-1 overflow-y-auto selection:bg-[#373737] selection:text-white promotion-grid-container h-full select-none">
        <div className="flex bg-white font-roboto p-[10px] min-h-full">
          {/* Main Column */}
          <div className={`${showReference ? "flex-[3]" : "flex-1"} min-w-0`}>
            {renderContent(false)}
          </div>

          {showReference && (
            <>
              {/* 10px Clear Horizontal Spacer */}
              <div className="w-[10px] shrink-0 bg-transparent" />

              {/* Compare Column */}
              <div className="flex-[2] min-w-0">
                {renderContent(true)}
              </div>
            </>
          )}
        </div>
      </div>
    </TooltipProvider>
  );
}
