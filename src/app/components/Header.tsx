import React, { useState, useEffect } from "react";
import { useLocation, Link, useSearchParams } from "react-router";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import breadcrumbSvgPaths from "@/imports/svg-9eaca977ir";
import svgPathsBell from "@/imports/svg-rt0k425s7c";

export function Header({ 
  itemName, 
  itemNumber,
  isSelectStoreOpen,
  setIsSelectStoreOpen,
  currentStore,
  onOpenUserPreferences
}: { 
  itemName?: string, 
  itemNumber?: string | number,
  isSelectStoreOpen?: boolean,
  setIsSelectStoreOpen?: (open: boolean) => void,
  currentStore?: string,
  onOpenUserPreferences?: () => void
}) {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "details";
  const isDetailsPage = location.pathname === "/item-details";
  const isStoreRoutinesPage = location.pathname === "/store-routines";
  const isItemsInPromotionsPage = location.pathname === "/items-in-promotions";
  
  const [notificationState, setNotificationState] = useState(0); // 0: off, 1: "1", 2: "3+"
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid triggering when user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      
      if (e.key.toLowerCase() === "n") {
        setNotificationState(prev => (prev + 1) % 3);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Use default values if none provided
  const displayItemName = itemName || (isDetailsPage ? "Pepsi Max 0.33L" : "");
  const displayItemNumber = itemNumber !== undefined ? itemNumber.toString() : (isDetailsPage ? "100001604" : "");

  return (
    <div className="bg-[#37836E] flex flex-col shrink-0 relative z-[100]">
      {/* Main header row: Breadcrumbs and User Actions */}
      <div className={`flex justify-between items-start pl-[30px] pr-[10px] pt-[30px] ${isDetailsPage ? "pb-[0px]" : "pb-[20px]"}`}>
        {/* Breadcrumbs Section */}
        <div className="flex gap-[20px] items-start relative" data-name="Breadcrumb">
          {/* Previous level */}
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Previous level">
            <Link 
              to={isStoreRoutinesPage ? "/store-routines" : isItemsInPromotionsPage ? "/items-in-promotions" : "/items"} 
              className={`font-['Roboto:Light',sans-serif] font-light leading-[26.25px] relative shrink-0 text-[21px] transition-colors select-none ${
                isDetailsPage ? "text-[rgba(255,255,255,0.8)] hover:text-white" : "text-white"
              }`}
            >
              {isStoreRoutinesPage ? "Store routines" : isItemsInPromotionsPage ? "Items in promotions" : "Items"}
            </Link>
          </div>
          
          {isDetailsPage && (
            <>
              {/* Chevron */}
              <div className="h-[27px] relative shrink-0 w-[6px]" data-name="Chevron">
                <div className="absolute inset-[0_-11.79%_0_-5.89%] flex items-center">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.06066 27">
                    <g id="Chevron">
                      <path d={breadcrumbSvgPaths.p124d0a00} id="Vector" stroke="white" />
                    </g>
                  </svg>
                </div>
              </div>
              
              {/* Viewed level */}
              <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Viewed level">
                <div className="content-stretch flex flex-col items-start relative shrink-0 gap-[2px]" data-name="Viewed level">
                  {/* Viewed level (Item Name) */}
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Viewed level">
                    <p className="font-['Roboto:Light',sans-serif] font-light leading-[26.25px] relative shrink-0 text-[21px] text-white">
                      {displayItemName}
                    </p>
                  </div>
                  {/* Information (Item ID) */}
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Information">
                    <p className="font-['Roboto:Light',sans-serif] font-light leading-[22.5px] relative shrink-0 text-[15px] text-white">
                      {displayItemNumber}
                    </p>
                  </div>
                </div>
                
                {/* Status */}
                <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status">
                  <p className="font-['Roboto:Light',sans-serif] font-light leading-[26.25px] relative shrink-0 text-[21px] text-[rgba(255,255,255,0.8)]">
                    (Draft)
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* User Context and Actions Section */}
        <div className="flex items-center gap-[20px] h-[24px]">
          {/* Store Context (Store Routines only) */}
          {isStoreRoutinesPage && (
            <button 
              onClick={() => setIsSelectStoreOpen?.(true)}
              className="text-white text-[14px] font-normal underline underline-offset-[5px] decoration-1 decoration-white cursor-pointer outline-none mr-[20px] whitespace-nowrap"
            >
              {currentStore || "1000 – EG Retail Grilstad"}
            </button>
          )}

          {/* Notifications */}
          <div className="relative w-[32px] h-[32px] flex items-center justify-center rounded-full hover:bg-white/10 cursor-pointer transition-all">
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
              <path d={svgPathsBell.p37ecce20} fill="white" />
            </svg>
            {notificationState > 0 && (
              <span className={`absolute -top-[5px] left-[14px] flex items-center justify-center bg-[#373737] text-white text-[12px] font-bold rounded-full min-w-[22px] h-[22px] ${notificationState === 1 ? "px-1" : "px-[6px]"} border-2 border-[#37836E]`}>
                {notificationState === 1 ? "1" : "3+"}
              </span>
            )}
          </div>

          {/* User Profile Dropdown */}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <div className="flex items-center px-1 py-1 rounded-full hover:bg-white/10 cursor-pointer transition-all group outline-none">
                <div className="h-[24px] w-[40px] rounded-full bg-[#285F4F] flex items-center justify-center shrink-0">
                  <span className="text-white text-[13px] font-normal font-roboto uppercase leading-none">MA</span>
                </div>
                <div className="size-[20px] flex items-center justify-center ml-0">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M9 1L5 5L1 1H9Z" fill="#FFFFFF" />
                  </svg>
                </div>
              </div>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content 
                className="z-[10000] bg-white border border-[#CCCCCC] shadow-lg outline-none overflow-hidden min-w-[220px]"
                align="end"
                sideOffset={4}
              >
                <DropdownMenu.Item 
                  onClick={onOpenUserPreferences}
                  className="h-[36px] px-4 flex items-center text-[14px] font-roboto font-normal text-[#1A1A1A] outline-none cursor-pointer focus:bg-[#EAEAEA] transition-colors"
                >
                  Preferences
                </DropdownMenu.Item>
                <div className="h-[1px] bg-[#EAEAEA] mx-0" />
                <DropdownMenu.Item 
                  className="h-[36px] px-4 flex items-center text-[14px] font-roboto font-normal text-[#1A1A1A] outline-none cursor-pointer focus:bg-[#EAEAEA] transition-colors"
                >
                  Log out
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>

      {/* Tab Row: Details view only */}
      {isDetailsPage && (
        <div className="flex justify-end pr-[20px] mt-auto">
          <div className="flex gap-[4px] items-end">
            {/* Overview */}
            <div className="bg-[#373737] px-[25px] h-[30px] flex items-center justify-center cursor-pointer select-none whitespace-nowrap">
              <span className="text-white text-[12px] font-medium font-roboto text-center uppercase">
                overview
              </span>
            </div>
            
            {/* Details */}
            <Link 
              to="/item-details?tab=details"
              className={`${activeTab === "details" ? "bg-white h-[32px] items-end pb-[5px]" : "bg-[#373737] h-[30px] items-center"} px-[25px] flex justify-center cursor-pointer transition-all select-none whitespace-nowrap`}
            >
              <span className={`${activeTab === "details" ? "text-black font-bold text-[13px]" : "text-white font-medium text-[12px]"} font-roboto uppercase`}>
                details
              </span>
            </Link>

            {/* Local Values */}
            <Link 
              to="/item-details?tab=local-values"
              className={`${activeTab === "local-values" ? "bg-white h-[32px] items-end pb-[5px]" : "bg-[#373737] h-[30px] items-center"} px-[25px] flex justify-center cursor-pointer transition-all select-none whitespace-nowrap`}
            >
              <span className={`${activeTab === "local-values" ? "text-black font-bold text-[13px]" : "text-white font-medium text-[12px]"} font-roboto uppercase whitespace-nowrap`}>
                Local values
              </span>
            </Link>

            {/* Price */}
            <Link 
              to="/item-details?tab=store-price"
              className={`${activeTab === "store-price" ? "bg-white h-[32px] items-end pb-[5px]" : "bg-[#373737] h-[30px] items-center"} px-[25px] flex justify-center cursor-pointer transition-all select-none whitespace-nowrap`}
            >
              <span className={`${activeTab === "store-price" ? "text-black font-bold text-[13px]" : "text-white font-medium text-[12px]"} font-roboto uppercase whitespace-nowrap`}>
                Ordinary price
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}