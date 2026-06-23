import React from "react";
import svgPaths from "@/imports/svg-q0vo42fc51";

interface ExpandedMenuProps {
  onClose: () => void;
  onSelect: (item: string) => void;
  menuLabel: string;
  selectedItem?: string;
}

const itemsMenuSections = [
  {
    title: "Items",
    items: [
      "Items",
      "Item segmentation",
      "Item lists",
      "Item group lists",
      "Suppliers",
      "Store assortment",
    ],
  },
  {
    title: "Store",
    items: [
      "Store routines",
      "Label printing",
      "Label lists",
      "Price control",
      "Store prices",
      "Shelf locations",
    ],
    activeItem: "Store routines",
  },
  {
    title: "Food",
    items: ["Ingredients", "Recipe items", "Menus", "Menu groups"],
  },
  {
    title: "Item import",
    items: ["Import", "Items in import", "PRICAT import rules", "Import rules"],
  },
  {
    title: "Setup",
    items: ["Item registers", "System parameters", "Export"],
  },
];

const genericMenuSections = [
  {
    title: "Title",
    items: ["Option 1", "Option 2", "Option 3", "Option 4"],
  },
  {
    title: "Title",
    items: ["Option 5", "Option 6", "Option 7"],
  },
];

const customerMenuSections = [
  {
    title: "Sale",
    items: [
      "Order dispatch dashboard",
      "Service orders",
      "Customer orders",
      "Offers",
    ],
  },
  {
    title: "Customer",
    items: ["Customers", "Customer cards", "Customer groups", "Contacts"],
  },
  {
    title: "System parameters",
    items: ["Customer and member", "Service order"],
  },
];

const systemMenuSections = [
  {
    title: "User management",
    items: ["Users", "User roles", "System parameters"],
  },
  {
    title: "File management",
    items: ["Files"],
  },
  {
    title: "Mobile pos management",
    items: ["Parameters", "Automatic Softpay Login"],
  },
  {
    title: "Pos management",
    items: [
      "Reason codes",
      "POS Units",
      "Default POS Units",
      "POS master data import",
      "POS API price validation",
      "System parameters",
    ],
  },
  {
    title: "Flight management",
    items: ["Flight data"],
  },
  {
    title: "Instore management",
    items: ["Parameters"],
  },
  {
    title: "Payment configuration",
    items: ["Merchants", "Payment providers", "Coopay backup"],
  },
  {
    title: "Pos configuration",
    items: ["Parameters", "Parameter groups", "Configuration groups"],
  },
  {
    title: "Account management",
    items: ["Account configuration", "User accounts"],
  },
  {
    title: "Message distribution",
    items: [
      "Email messages",
      "Text messages",
      "Distribution templates",
      "Accounts",
    ],
  },
];

const inventoryMenuSections = [
  {
    title: "Stock",
    items: ["Stock status", "Transactions", "Temporary storage"],
  },
  {
    title: "Serial number",
    items: ["Serial numbers"],
  },
  {
    title: "Stocktaking",
    items: ["Stocktakings", "Count lists", "Count groups"],
  },
  {
    title: "Fuel control",
    items: ["Tank reading", "Tank fillings", "Nozzles", "Tanks", "Tank groups"],
  },
  {
    title: "Setup",
    items: ["Reason codes", "System parameters", "Virtual stocks"],
  },
];

const procurementMenuSections = [
  {
    title: "Purchasing",
    items: [
      "Purchase orders",
      "Items in purchase orders",
      "Deliveries",
      "Procurement registers",
    ],
  },
];

const loyaltyMenuSections = [
  {
    title: "Member",
    items: [
      "Member identities",
      "Member cards",
      "Member statistics",
      "Member segmentation",
    ],
  },
  {
    title: "Coupon",
    items: ["Coupons", "Coupons (On-premise)"],
  },
  {
    title: "Stamp card",
    items: ["Stamp cards"],
  },
  {
    title: "Bonus",
    items: ["Bonus", "Bonus Rollouts"],
  },
  {
    title: "Setup",
    items: ["Loyalty programs", "Bonus rules", "Marketing distribution"],
  },
  {
    title: "System parameters",
    items: ["Coupon", "Bonus"],
  },
];

const reportingMenuSections = [
  {
    title: "Reporting",
    items: ["Dashboards"],
  },
  {
    title: "Budget",
    items: ["Budget"],
  },
  {
    title: "Settlement",
    items: ["EOBD log"],
  },
  {
    title: "Admin",
    items: ["Import log"],
  },
];

const storeMenuSections = [
  {
    title: "Store groups",
    items: [
      "All stores",
      "Stores",
      "All teams",
      "Teams",
      "All profiles",
      "Profiles",
      "All Regions",
      "Profile groups",
      "Companies",
    ],
  },
  {
    title: "Setup",
    items: ["Postal codes", "Export all stores", "Opening hours", "Store registers"],
  },
];

const promotionMenuSections = [
  {
    title: "Promotions",
    items: ["Promotions", "Items in promotions", "Promotion offers"],
  },
  {
    title: "Price",
    items: ["Price rules", "Price lock", "Temporary net price"],
  },
  {
    title: "Setup",
    items: ["Promotion registers", "System parameters"],
  },
];

export function ExpandedMenu({ onClose, onSelect, menuLabel, selectedItem }: ExpandedMenuProps) {
  let sections = genericMenuSections;
  if (menuLabel === "Items") {
    sections = itemsMenuSections;
  } else if (menuLabel === "Inventory") {
    sections = inventoryMenuSections;
  } else if (menuLabel === "Purchase") {
    sections = procurementMenuSections;
  } else if (menuLabel === "Promotion") {
    sections = promotionMenuSections;
  } else if (menuLabel === "Store") {
    sections = storeMenuSections;
  } else if (menuLabel === "Loyalty") {
    sections = loyaltyMenuSections;
  } else if (menuLabel === "Customer") {
    sections = customerMenuSections;
  } else if (menuLabel === "Reporting") {
    sections = reportingMenuSections;
  } else if (menuLabel === "System") {
    sections = systemMenuSections;
  }

  return (
    <div className="w-[250px] h-full bg-[#262626] flex flex-col pt-[24px] pb-[14px] overflow-y-auto no-scrollbar relative shadow-[1px_0_4px_rgba(0,0,0,0.3)] z-[5000]">
      {/* Back Button */}
      <div 
        className="flex items-center gap-[8px] pl-[18px] mb-[28px] cursor-pointer hover:opacity-80 group select-none"
        onClick={onClose}
      >
        <div className="h-[14px] w-[10px] flex items-center justify-center translate-y-[-0.5px]">
          <svg className="size-full" viewBox="0 0 10.6569 15.6569" fill="none">
            <path 
              d={svgPaths.p5fcb480} 
              stroke="#CCCCCC" 
              strokeLinecap="square" 
              strokeWidth="4" 
            />
          </svg>
        </div>
        <span className="font-semibold text-[#CCCCCC] text-[15px] font-roboto">
          Back
        </span>
      </div>

      {/* Menu Sections */}
      <div className="flex flex-col gap-[20px]">
        {sections.map((section, idx) => (
          <div key={`${section.title}-${idx}`} className="flex flex-col">
            <h3 className="text-[#7E7E7E] text-[12px] font-semibold uppercase font-roboto-condensed mb-[4px] pl-[18px]">
              {section.title}
            </h3>
            <div className="flex flex-col">
              {section.items.map((item) => {
                const isActive = item === selectedItem;
                return (
                  <div 
                    key={item} 
                    className="h-[24px] flex items-center cursor-pointer transition-colors hover:bg-[#161515] group pl-[38px] select-none"
                    onClick={() => onSelect(item)}
                  >
                    <p className="relative text-[14px] font-semibold font-roboto transition-colors text-[#CCCCCC] group-hover:text-white">
                      {item}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
