import React, { useState, useMemo, useEffect } from "react";
import svgPathsMain from "@/imports/svg-16ystvll8u";
import svgPathsCalendar from "@/imports/svg-lbuqdinfsp";
import svgPathsMore from "@/imports/svg-oqev7ygrue";
import { FilterMenu } from "@/app/components/FilterMenu";
import * as Popover from "@radix-ui/react-popover";

const initialColumns = [
  { id: "actions", label: "", width: 50 },
  { id: "date", label: "DATE", width: 180, sortable: true },
  { id: "store", label: "STORE", width: 200 },
  { id: "price", label: "PRICE", width: 140 },
  { id: "campaign", label: "CAMPAIGN", width: 250 },
  { id: "type", label: "TYPE", width: 150 },
];

const mockData = [
  {
    id: 1,
    date: "05.02.2026 10:00",
    store: "Store 101 - Oslo",
    price: "19.90 NOK",
    campaign: "Winter Sale 2026",
    type: "Promotion",
  },
  {
    id: 2,
    date: "28.01.2026 09:00",
    store: "Store 101 - Oslo",
    price: "21.50 NOK",
    campaign: "Standard",
    type: "Regular",
  },
  {
    id: 3,
    date: "15.01.2026 14:30",
    store: "Store 101 - Oslo",
    price: "18.50 NOK",
    campaign: "Flash Sale",
    type: "Promotion",
  },
];

export function Lowest30DaysGrid({ selectedItem, showMultiSelectMessage }: { selectedItem?: any, showMultiSelectMessage?: boolean }) {
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [filterModes, setFilterModes] = useState<Record<string, string>>({});
  const [openMenuColumn, setOpenMenuColumn] = useState<string | null>(null);

  const gridData = useMemo(() => {
    if (!selectedItem) return [];

    const seed = (selectedItem.id || 1);
    const basePrice = parseFloat(String(selectedItem.retailPrice || "20.50").replace(",", "."));
    const pad = (n: number) => String(n).padStart(2, '0');

    // Vary row count: between 2 and 6 rows
    const rowCount = 2 + (seed % 5);

    const rows = [];
    for (let i = 0; i < rowCount; i++) {
      const rowSeed = (seed + i) % 12;
      const isPromo = (seed + i) % 3 === 0;
      
      rows.push({
        id: i + 1,
        date: `${pad(1 + (i * 3) % 28)}.${pad(rowSeed + 1)}.2026 10:00`,
        store: (seed + i) % 2 === 0 ? "Store 101 - Oslo" : "Store 1000 - Trondheim",
        price: (basePrice * (isPromo ? 0.8 + (i * 0.01) : 1)).toFixed(2).replace(".", ",") + " NOK",
        campaign: isPromo ? `Seasonal Sale ${2025 + (i % 2)}` : "Standard",
        type: isPromo ? "Promotion" : "Regular",
      });
    }

    return rows;
  }, [selectedItem]);
  const [columnWidths, setColumnWidths] = useState<Record<string, number>>(() => {
    const widths: Record<string, number> = {};
    initialColumns.forEach(col => {
      widths[col.id] = col.width;
    });
    return widths;
  });
  const [resizingCol, setResizingCol] = useState<{ id: string, startX: number, startWidth: number } | null>(null);

  const columns = useMemo(() => {
    return initialColumns.map((col) => {
      const width = columnWidths[col.id];
      return { ...col, width };
    });
  }, [columnWidths]);

  useEffect(() => {
    if (!resizingCol) return;
    const onMouseMove = (e: MouseEvent) => {
      const delta = e.clientX - resizingCol.startX;
      setColumnWidths(prev => ({
        ...prev,
        [resizingCol.id]: Math.max(50, resizingCol.startWidth + delta)
      }));
    };
    const onMouseUp = () => setResizingCol(null);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [resizingCol]);

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-white selection:bg-[#373737] selection:text-white">
      <div className="flex-1 overflow-auto relative overscroll-none">
        <table className="border-separate border-spacing-0 table-fixed w-max">
          <thead>
            <tr className="h-[30px] bg-[#595959]">
              {columns.map((col, idx) => (
                <th
                  key={col.id}
                  className={`px-4 ${idx !== columns.length - 1 ? "border-r border-r-white" : ""} text-[#ffffff] font-medium uppercase tracking-wider sticky top-0 bg-[#595959] relative overflow-visible text-left text-[13px]`}
                  style={{ 
                    width: `${col.width}px`,
                    minWidth: `${col.width}px`,
                    zIndex: 50 - idx
                  }}
                >
                  <div className="flex items-center gap-1 truncate">
                    {col.label}
                    {col.sortable && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                        <path d="M11 9L7.5 13L4 9H7V2H8V9H11Z" fill="#FFFFFF" />
                      </svg>
                    )}
                  </div>
                  
                  {idx !== columns.length - 1 && (
                    <div 
                      className="absolute top-0 right-[-6px] bottom-0 w-[12px] cursor-col-resize z-[60]"
                      onMouseDown={(e) => {
                        e.stopPropagation();
                        setResizingCol({ id: col.id, startX: e.clientX, startWidth: col.width });
                      }}
                    />
                  )}
                </th>
              ))}
            </tr>

            <tr className="h-[45px] bg-[#F4F6F7]">
              {columns.map((col, idx) => (
                <th
                  key={`filter-${col.id}`}
                  className={`px-[5px] ${idx !== columns.length - 1 ? "border-r border-r-white" : ""} border-b border-[#CCCCCC] sticky top-[30px] z-40 bg-[#F4F6F7]`}
                  style={{ 
                    width: `${col.width}px`,
                    minWidth: `${col.width}px`,
                  }}
                >
                  {col.id !== "actions" && (
                    <div className="flex items-center gap-1 h-full py-2">
                      <div className="relative flex-1 flex items-center">
                        <input
                          type="text"
                          className={`selection:bg-[#373737] selection:text-white w-full h-[30px] bg-white border border-[#CCCCCC] px-2 text-[14px] focus:outline-none focus:border-2 focus:border-[#373737] text-[#1A1A1A] placeholder:text-[#1A1A1A] placeholder:opacity-100 ${
                            col.id === "date" ? "pr-7" : ""
                          }`}
                          placeholder={col.id === "date" ? "dd.mm.yyyy" : ""}
                          value={filters[col.id] || ""}
                          onKeyDown={(e) => {
                            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') {
                              e.stopPropagation();
                              e.preventDefault();
                              (e.target as HTMLInputElement).select();
                            }
                          }}
                          onFocus={(e) => {
                            const target = e.target;
                            setTimeout(() => {
                              (target as HTMLInputElement).select();
                            }, 0);
                          }}
                          onChange={(e) => setFilters({ ...filters, [col.id]: e.target.value })}
                        />
                        
                        {col.id === "date" && (
                          <div className="absolute right-0.5 pointer-events-none size-5 flex items-center justify-center mr-[4px]">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d={svgPathsCalendar.p5c6fb00} fill="#1A1A1A" />
                            </svg>
                          </div>
                        )}
                      </div>
                      
                      <FilterMenu
                        isOpen={openMenuColumn === col.id}
                        onOpenChange={(open) => setOpenMenuColumn(open ? col.id : null)}
                        activeOption={filterModes[col.id] || "Contains"}
                        onOptionSelect={(option) => setFilterModes({ ...filterModes, [col.id]: option })}
                        trigger={
                          <button className="w-[30px] h-[30px] shrink-0 bg-white border border-[#CCCCCC] flex items-center justify-center transition-colors hover:bg-[#F7F7F7] cursor-pointer outline-none focus:outline-none">
                            <svg className="size-4" viewBox="0 0 20 20" fill="none">
                              <path d={svgPathsMain.p25e92080} fill="#1A1A1A" />
                            </svg>
                          </button>
                        }
                      />
                    </div>
                  )}
                </th>
              ))}
            </tr>
        </thead>

          <tbody className="select-none">
            {showMultiSelectMessage || gridData.length === 0 ? (
              <tr className="h-[40px] bg-white">
                <td 
                  colSpan={columns.length} 
                  className="px-4 text-sm text-[#1A1A1A] border-b border-[#CCCCCC] text-center"
                >
                  {showMultiSelectMessage ? "Select a single item" : "No records available"}
                </td>
              </tr>
            ) : (
              gridData.map((row) => (
                <tr
                  key={row.id}
                  className="h-[40px] bg-white hover:bg-[#F7F7F7] group"
                >
                {columns.map((col) => (
                  <td
                    key={`${row.id}-${col.id}`}
                    className="px-4 text-sm text-[#1A1A1A] border-b border-[#CCCCCC] bg-white group-hover:bg-[#F7F7F7]"
                    style={{ 
                      width: `${col.width}px`,
                      minWidth: `${col.width}px`,
                    }}
                  >
                    {col.id === "actions" ? (
                      <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Popover.Root>
                          <Popover.Trigger asChild>
                            <button className="size-[24px] flex items-center justify-center hover:bg-[#EAEAEA] rounded transition-colors cursor-pointer outline-none border-none bg-transparent">
                              <svg className="size-[18px]" viewBox="0 0 20 20" fill="none">
                                <path d={svgPathsMore.p2d3e5d00} fill="#1A1A1A" />
                              </svg>
                            </button>
                          </Popover.Trigger>
                          <Popover.Portal>
                            <Popover.Content
                              align="start"
                              side="bottom"
                              sideOffset={4}
                              onOpenAutoFocus={(e) => e.preventDefault()}
                              className="z-[10000] bg-white border border-[#CCCCCC] shadow-lg min-w-[150px] outline-none"
                            >
                              <div className="flex flex-col py-1">
                                <button
                                  onClick={(e) => { e.stopPropagation(); }}
                                  className="text-left text-[14px] font-normal text-[#1A1A1A] hover:bg-[#EAEAEA] transition-colors relative outline-none cursor-pointer flex items-center h-[36px] w-full pl-4"
                                >
                                  View details
                                </button>
                                <button
                                  onClick={(e) => { e.stopPropagation(); }}
                                  className="text-left text-[14px] font-normal text-[#1A1A1A] hover:bg-[#EAEAEA] transition-colors relative outline-none cursor-pointer flex items-center h-[36px] w-full pl-4"
                                >
                                  Compare prices
                                </button>
                              </div>
                            </Popover.Content>
                          </Popover.Portal>
                        </Popover.Root>
                      </div>
                    ) : (
                      <div className="truncate w-full">
                        {row[col.id as keyof typeof row]}
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
}