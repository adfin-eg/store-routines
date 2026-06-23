import React, { useState, useMemo, useEffect } from "react";
import svgPathsMain from "@/imports/svg-16ystvll8u";
import svgPathsCalendar from "@/imports/svg-lbuqdinfsp";
import svgPathsMore from "@/imports/svg-oqev7ygrue";
import { ColumnSelector } from "@/app/components/ColumnSelector";
import { FilterMenu } from "@/app/components/FilterMenu";
import * as Popover from "@radix-ui/react-popover";

const initialColumns = [
  { id: "actions", label: "+", width: 56, sticky: true },
  { id: "storeGroupLevel", label: "STORE GROUP LEVEL", width: 170, sticky: true },
  { id: "storeGroupCode", label: "STORE GROUP CODE", width: 170, sticky: true },
  { id: "storeGroupName", label: "STORE GROUP NAME", width: 200, sticky: true },
  { id: "status", label: "STATUS", width: 170 },
  { id: "validFrom", label: "VALID FROM", width: 180, sortable: true },
  { id: "validTo", label: "VALID TO", width: 180 },
  { id: "retailPrice", label: "RETAIL PRICE", width: 140 },
  { id: "wholesalePrice", label: "WHOLESALE PRICE", width: 160 },
  { id: "netPrice", label: "NET PRICE", width: 140 },
  { id: "rpWoVat", label: "RETAIL PRICE EXCL. VAT", width: 180 },
  { id: "supplDisc", label: "SUPPLIER DISCOUNT %", width: 170 },
];

const mockStorePriceData = [
  {
    id: 1,
    storeGroupLevel: "Store",
    storeGroupCode: "1",
    storeGroupName: "Demo test store",
    status: "Active",
    validFrom: "19.12.2025 07:18",
    validTo: "",
    wholesalePrice: "212.60 NOK",
    netPrice: "223.23 NOK",
    rpWoVat: "16.00 NOK",
    retailPrice: "20.00 NOK",
    supplDisc: "",
  },
  {
    id: 2,
    storeGroupLevel: "Store",
    storeGroupCode: "1000",
    storeGroupName: "Demo Store Trond...",
    status: "Active",
    validFrom: "19.12.2025 07:18",
    validTo: "",
    wholesalePrice: "212.60 NOK",
    netPrice: "223.23 NOK",
    rpWoVat: "16.00 NOK",
    retailPrice: "20.00 NOK",
    supplDisc: "",
  },
];

export function StorePriceGrid({ selectedItem }: { selectedItem?: any }) {
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [filterModes, setFilterModes] = useState<Record<string, string>>({});
  const [openMenuColumn, setOpenMenuColumn] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const gridRef = React.useRef<HTMLDivElement>(null);

  const gridData = useMemo(() => {
    if (!selectedItem) return [];

    const basePrice = selectedItem.retailPrice || "20.00 NOK";
    const baseWholesale = selectedItem.wholesalePrice || "212.60 NOK";
    const baseNetPrice = selectedItem.netPrice || "223.23 NOK";
    const baseRpWoVat = selectedItem.retailPriceExclVat || "16.00 NOK";

    return [
      {
        id: 1,
        storeGroupLevel: "Store",
        storeGroupCode: "1",
        storeGroupName: "Demo test store",
        status: "Active",
        validFrom: "19.12.2025 07:18",
        validTo: "",
        wholesalePrice: baseWholesale.includes("NOK") ? baseWholesale : `${baseWholesale} NOK`,
        netPrice: baseNetPrice.includes("NOK") ? baseNetPrice : `${baseNetPrice} NOK`,
        rpWoVat: baseRpWoVat.includes("NOK") ? baseRpWoVat : `${baseRpWoVat} NOK`,
        retailPrice: basePrice.includes("NOK") ? basePrice : `${basePrice} NOK`,
        supplDisc: "",
      },
      {
        id: 2,
        storeGroupLevel: "Store",
        storeGroupCode: "1000",
        storeGroupName: "Demo Store Trond...",
        status: "Active",
        validFrom: "19.12.2025 07:18",
        validTo: "",
        wholesalePrice: baseWholesale.includes("NOK") ? baseWholesale : `${baseWholesale} NOK`,
        netPrice: baseNetPrice.includes("NOK") ? baseNetPrice : `${baseNetPrice} NOK`,
        rpWoVat: baseRpWoVat.includes("NOK") ? baseRpWoVat : `${baseRpWoVat} NOK`,
        retailPrice: basePrice.includes("NOK") ? basePrice : `${basePrice} NOK`,
        supplDisc: "",
      },
    ];
  }, [selectedItem]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (gridRef.current && !gridRef.current.contains(event.target as Node)) {
        setSelectedId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [visibleColumnIds, setVisibleColumnIds] = useState<string[]>(() => 
    initialColumns.map(col => col.id)
  );

  const toggleColumn = (id: string) => {
    setVisibleColumnIds(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const [columnWidths, setColumnWidths] = useState<Record<string, number>>(() => {
    const widths: Record<string, number> = {};
    initialColumns.forEach(col => {
      widths[col.id] = col.width;
    });
    return widths;
  });
  const [resizingCol, setResizingCol] = useState<{ id: string, startX: number, startWidth: number } | null>(null);

  const columns = useMemo(() => {
    let currentOffset = 0;
    return initialColumns
      .filter(col => visibleColumnIds.includes(col.id))
      .map((col) => {
        const width = columnWidths[col.id] || col.width;
        const offset = col.sticky ? currentOffset : undefined;
        if (col.sticky) currentOffset += width;
        return { ...col, width, offset };
      });
  }, [columnWidths, visibleColumnIds]);

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
    <div ref={gridRef} className="flex-1 flex flex-col overflow-hidden bg-white selection:bg-[#373737] selection:text-white border-t border-white">
      <div className="flex-1 overflow-auto relative overscroll-none">
        <table className="border-separate border-spacing-0 table-fixed w-max">
          <thead>
            <tr className="h-[30px] bg-[#595959]">
              {columns.map((col, idx) => {
                const isLast = idx === columns.length - 1;
                return (
                  <th
                    key={col.id}
                    className={`px-4 ${!isLast ? "border-r" : ""} text-[#ffffff] font-medium uppercase tracking-wider sticky top-0 bg-[#595959] relative overflow-visible ${
                      col.id === "actions" ? "text-left text-[18px]" : "text-left text-[13px]"
                    } ${idx === 3 ? "border-r-[#CCCCCC]" : (!isLast ? "border-r-white" : "")}`}
                    style={{ 
                      width: `${col.width}px`,
                      minWidth: `${col.width}px`,
                      left: col.sticky ? `${col.offset}px` : undefined,
                      zIndex: col.sticky ? 100 - idx : 50 - idx
                    }}
                  >
                    <div className={`${col.id === 'actions' ? 'font-normal w-full h-full flex items-center justify-start px-4 cursor-pointer' : 'truncate flex items-center gap-1'}`}>
                      {col.id === 'actions' ? (
                        <ColumnSelector 
                          columns={initialColumns}
                          visibleColumnIds={visibleColumnIds}
                          onToggle={toggleColumn}
                          trigger={
                            <div className="w-[24px] flex items-center justify-center">
                              <span>{col.label}</span>
                            </div>
                          }
                        />
                      ) : (
                        <>
                          {col.label}
                          {col.sortable && (
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                              <path d="M11 9L7.5 13L4 9H7V2H8V9H11Z" fill="#FFFFFF" />
                            </svg>
                          )}
                        </>
                      )}
                    </div>
                    
                    {col.id !== "actions" && !isLast && (
                      <div 
                        className="absolute top-0 right-[-6px] bottom-0 w-[12px] cursor-col-resize z-[60]"
                        onMouseDown={(e) => {
                          e.stopPropagation();
                          setResizingCol({ id: col.id, startX: e.clientX, startWidth: col.width });
                        }}
                      />
                    )}
                  </th>
                );
              })}
            </tr>

            <tr className="h-[45px] bg-[#F4F6F7]">
              {columns.map((col, idx) => {
                const isLast = idx === columns.length - 1;
                return (
                  <th
                    key={`filter-${col.id}`}
                    className={`px-[5px] ${!isLast ? "border-r" : ""} border-b border-[#CCCCCC] sticky top-[30px] z-40 bg-[#F4F6F7] ${
                      col.sticky ? "z-50" : ""
                    } ${idx === 3 ? "border-r-[#CCCCCC]" : (!isLast ? "border-r-white" : "")}`}
                    style={{ 
                      width: `${col.width}px`,
                      minWidth: `${col.width}px`,
                      left: col.sticky ? `${col.offset}px` : undefined
                    }}
                  >
                  {col.id !== "actions" && (
                    <div className="flex items-center gap-1 h-full py-2">
                      <div className="relative flex-1 flex items-center">
                        <input
                          type="text"
                          className={`selection:bg-[#373737] selection:text-white w-full h-[30px] bg-white border border-[#CCCCCC] px-2 text-[14px] focus:outline-none focus:border-2 focus:border-[#373737] text-[#1A1A1A] placeholder:text-[#1A1A1A] placeholder:opacity-100 ${
                            col.id === "status" || col.id === "validFrom" || col.id === "validTo" ? "pr-7" : ""
                          }`}
                          placeholder={col.id === "validFrom" || col.id === "validTo" ? "dd.mm.yyyy" : ""}
                          value={filters[col.id] || ""}
                          onKeyDown={(e) => {
                            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') {
                              e.stopPropagation();
                              e.preventDefault();
                              const target = e.target as HTMLInputElement;
                              target.setSelectionRange(0, target.value.length);
                            }
                          }}
                          onFocus={(e) => {
                            const target = e.target;
                            setTimeout(() => {
                              target.setSelectionRange(0, target.value.length);
                            }, 0);
                          }}
                          onChange={(e) => setFilters({ ...filters, [col.id]: e.target.value })}
                        />
                        
                        {/* Internal Icons */}
                        {col.id === "status" && (
                          <div className="absolute right-0.5 pointer-events-none size-5 flex items-center justify-center mr-[4px]">
                            <svg className="size-5" viewBox="0 0 20 20" fill="none">
                              <path d="M14 8L10 12L6 8H14Z" fill="#1A1A1A" />
                            </svg>
                          </div>
                        )}
                        
                        {(col.id === "validFrom" || col.id === "validTo") && (
                          <div className="absolute right-0.5 pointer-events-none size-5 flex items-center justify-center mr-[4px]">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d={svgPathsCalendar.p5c6fb00} fill="#1A1A1A" />
                            </svg>
                          </div>
                        )}
                      </div>
                      
                      {/* Filter Button */}
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
                );
              })}
            </tr>
        </thead>

          <tbody className="select-none">
            {gridData.map((row) => {
              const isSelected = selectedId === row.id;
              return (
                <tr
                  key={row.id}
                  onClick={() => setSelectedId(row.id)}
                  className={`h-[40px] group transition-colors ${isSelected ? "bg-[#D2F6E8]" : "bg-white hover:bg-[#F7F7F7]"}`}
                >
                  {columns.map((col, colIdx) => (
                      <td
                        key={`${row.id}-${col.id}`}
                        className={`px-4 text-sm text-[#1A1A1A] border-b ${isSelected ? "border-[#AFCDBF]" : "border-[#CCCCCC]"} transition-colors ${
                          col.sticky ? "sticky z-10" : ""
                        } ${colIdx === 3 ? (isSelected ? "border-r border-r-[#AFCDBF]" : "border-r border-r-[#CCCCCC]") : ""} ${isSelected ? "bg-[#D2F6E8]" : "bg-white group-hover:bg-[#F7F7F7]"}`}
                        style={{ 
                          width: `${col.width}px`,
                          minWidth: `${col.width}px`,
                          left: col.sticky ? `${col.offset}px` : undefined 
                        }}
                      >
                        {col.id === "actions" ? (
                          <div className={`flex items-center justify-start transition-opacity ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                            <Popover.Root>
                              <Popover.Trigger asChild>
                                <button className={`size-[24px] flex items-center justify-center transition-colors rounded cursor-pointer outline-none border-none bg-transparent ${isSelected ? "hover:bg-[#C3E8DA]" : "hover:bg-[#EAEAEA]"}`}>
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
                                      className="text-left text-[14px] font-normal text-[#1A1A1A] hover:bg-[#EAEAEA] focus:border-[2px] focus:border-[#373737] relative outline-none cursor-pointer flex items-center h-[36px] w-[calc(100%-2px)] ml-[1px] pl-4 focus:pl-[14px]"
                                    >
                                      <span className="group-focus:-ml-[2px]">Edit price</span>
                                    </button>
                                    <button
                                      onClick={(e) => { e.stopPropagation(); }}
                                      className="text-left text-[14px] font-normal text-[#1A1A1A] hover:bg-[#EAEAEA] focus:border-[2px] focus:border-[#373737] relative outline-none cursor-pointer flex items-center h-[36px] w-[calc(100%-2px)] ml-[1px] pl-4 focus:pl-[14px]"
                                    >
                                      <span className="group-focus:-ml-[2px]">Copy price</span>
                                    </button>
                                  </div>
                                </Popover.Content>
                              </Popover.Portal>
                            </Popover.Root>
                          </div>
                        ) : col.id === "validFrom" ? (
                        <span className="underline underline-offset-[5px] decoration-1 decoration-[#1A1A1A] cursor-pointer inline-block pb-[2px]">
                          {row[col.id as keyof typeof row]}
                        </span>
                      ) : (
                        <div className="truncate w-full">
                          {row[col.id as keyof typeof row]}
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
