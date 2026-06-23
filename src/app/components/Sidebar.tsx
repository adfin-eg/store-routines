import React from "react";
import svgPaths from "@/imports/svg-9my1zp13fs";
import IconRetailVersion from "@/imports/Logo-13-2219";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isOpen?: boolean;
  isSelected?: boolean;
  showActiveBg?: boolean;
  onClick?: () => void;
  iconInset?: string;
  viewBox: string;
}

function SidebarItem({ 
  icon, 
  label, 
  isOpen, 
  isSelected, 
  showActiveBg, 
  onClick,
  iconInset,
  viewBox
}: SidebarItemProps) {
  return (
    <div
      onClick={onClick}
      className={`relative flex flex-col items-center h-[74px] w-full cursor-pointer transition-colors group select-none ${
        showActiveBg ? "bg-[#262626]" : "hover:bg-[#3A3A3A]"
      }`}
    >
      {isSelected && (
        <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-white" />
      )}
      
      {/* Icon Container - Exactly 30x30 at 11.75px from top */}
      <div className="relative size-[30px] mt-[11.75px] flex items-center justify-center">
        <div className={`w-full h-full relative ${iconInset || ""}`}>
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox={viewBox}
          >
            <path 
              d={icon as string} 
              className={`transition-colors ${
                isOpen || showActiveBg
                  ? "fill-white" 
                  : "fill-[#CCCCCC] group-hover:fill-white"
              }`} 
            />
          </svg>
        </div>
      </div>

      {/* Label - Exactly at 45.75px from top */}
      <span
        className={`mt-[5px] text-[12px] font-semibold leading-[16.5px] uppercase tracking-[0px] text-center px-1 font-roboto-condensed transition-colors ${
          isOpen || showActiveBg
            ? "text-white" 
            : "text-[#CCCCCC] group-hover:text-white"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export function Sidebar({ onToggleMenu, openMenu, selectedModule }: { 
  onToggleMenu: (label: string) => void; 
  openMenu: string | null;
  selectedModule: string;
}) {
  const isAnyMenuOpen = openMenu !== null;

  const items = [
    { label: "Home", path: svgPaths.p9307580, viewBox: "0 0 32 32" },
    { label: "Items", path: svgPaths.p983a600, viewBox: "0 0 32 32" },
    { label: "Inventory", path: svgPaths.p116da700, viewBox: "0 0 24 25.4988", inset: "p-[1.5px_3px_3px_3px]" },
    { label: "Purchase", path: svgPaths.p1f31aa00, viewBox: "0 0 32 32" },
    { label: "Promotion", path: svgPaths.p22465d80, viewBox: "0 0 24 21", inset: "p-[4.5px_2.4px_4.5px_2.4px]" },
    { label: "Store", path: svgPaths.p30952540, viewBox: "0 0 23.6147 21", inset: "p-[4.5px_3.1px_4.5px_3.2px]" },
    { label: "Loyalty", path: svgPaths.p22066480, viewBox: "0 0 24 24.0047", inset: "p-[2.4px]" },
    { label: "Customer", path: svgPaths.p654ff80, viewBox: "0 0 32 32" },
    { label: "Reporting", path: svgPaths.p8f95700, viewBox: "0 0 25.379 19.5", inset: "p-[4.5px_1.6px_6px_3px]" },
    { label: "System", path: svgPaths.p1e62b800, viewBox: "0 0 32 32" },
  ];

  const topItems = items.filter(item => item.label !== "System");
  const bottomItem = items.find(item => item.label === "System");

  return (
    <div className="w-[95px] bg-[#373737] flex flex-col items-center h-full shrink-0 z-[500] relative">
      {/* Logo Area - Exactly 80px height with 16px top padding */}
      <div className="w-full h-[80px] flex justify-center pt-[16px]">
         <div className="size-[44px] flex items-center justify-center">
            <IconRetailVersion />
         </div>
      </div>

      <div className="flex-1 w-full flex flex-col items-center overflow-y-auto no-scrollbar overscroll-none">
        {topItems.map((item) => (
          <SidebarItem 
            key={item.label}
            icon={item.path} 
            viewBox={item.viewBox}
            label={item.label} 
            isOpen={openMenu === item.label}
            isSelected={selectedModule === item.label}
            showActiveBg={isAnyMenuOpen ? openMenu === item.label : selectedModule === item.label}
            onClick={() => onToggleMenu(item.label)}
            iconInset={item.inset}
          />
        ))}
      </div>

      {bottomItem && (
        <div className="w-full pb-[5px]">
          <SidebarItem 
            key={bottomItem.label}
            icon={bottomItem.path} 
            viewBox={bottomItem.viewBox}
            label={bottomItem.label} 
            isOpen={openMenu === bottomItem.label}
            isSelected={selectedModule === bottomItem.label}
            showActiveBg={isAnyMenuOpen ? openMenu === bottomItem.label : selectedModule === bottomItem.label}
            onClick={() => onToggleMenu(bottomItem.label)}
            iconInset={bottomItem.inset}
          />
        </div>
      )}
    </div>
  );
}
