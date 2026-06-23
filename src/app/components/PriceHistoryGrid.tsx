import React, { useState, useMemo, useEffect } from "react";
import svgPathsMain from "@/imports/svg-16ystvll8u";
import svgPathsMore from "@/imports/svg-oqev7ygrue";
import svgPathsCalendar from "@/imports/svg-lbuqdinfsp";
import svgPathsEdit from "@/imports/svg-4f8idnkp17";
import { FilterMenu } from "@/app/components/FilterMenu";
import { ColumnSelector } from "@/app/components/ColumnSelector";

const initialColumns = [
  { id: "actions", label: "+", width: 50 },
  { id: "priceType", label: "TYPE", width: 140 },
  { id: "price", label: "PRICE", width: 140, align: "right" },
  { id: "validFrom", label: "VALID FROM", width: 180, sortable: true },
  { id: "validTo", label: "VALID TO", width: 180 },
  { id: "netPrice", label: "NET PRICE", width: 140, align: "right" },
  { id: "grossProfit", label: "GROSS PROFIT", width: 140, align: "right" },
  { id: "grossProfitPercent", label: "GROSS PROFIT %", width: 140, align: "right" },
];

export function PriceHistoryGrid({ selectedItem, showMultiSelectMessage }: { selectedItem?: any, showMultiSelectMessage?: boolean }) {
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [filterModes, setFilterModes] = useState<Record<string, string>>({});
  const [openMenuColumn, setOpenMenuColumn] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const gridRef = React.useRef<HTMLDivElement>(null);

  const mockPriceHistoryData = useMemo(() => {
    if (!selectedItem) return [];

    const seed = (selectedItem.id || 1);
    const modSeed = seed % 12;
    const basePrice = parseFloat(String(selectedItem.retailPrice || "20.50").replace(",", "."));
    const baseWholesale = parseFloat(String(selectedItem.wholesalePrice || "16.50").replace(",", "."));

    // Vary row count: between 3 and 8 rows
    const rowCount = 3 + (seed % 6);

    const pad = (n: number) => String(n).padStart(2, '0');
    
    const rows = [];
    for (let i = 0; i < rowCount; i++) {
      const rowSeed = (seed + i) % 24;
      const year = 2023 + Math.floor(rowSeed / 12);
      const month = (rowSeed % 12) + 1;
      const isPromo = (seed + i) % 4 === 0;
      const isMember = (seed + i) % 7 === 0;
      
      const price = isMember 
        ? (basePrice * (0.75 - (i * 0.01))).toFixed(2).replace(".", ",")
        : isPromo 
          ? (basePrice * (0.85 - (i * 0.01))).toFixed(2).replace(".", ",")
          : (basePrice - 0.5 - (i * 0.2)).toFixed(2).replace(".", ",");

      const netPrice = (baseWholesale - 0.2 - (i * 0.1)).toFixed(2).replace(".", ",");
      const pNum = parseFloat(price.replace(",", "."));
      const nNum = parseFloat(netPrice.replace(",", "."));
      const gp = (pNum - nNum).toFixed(2).replace(".", ",");
      const gpp = (pNum > 0 ? ((pNum - nNum) / pNum) * 100 : 0).toFixed(1) + "%";

      rows.push({
        id: i + 1,
        validFrom: `${pad(1 + (i % 28))}.${pad(month)}.${year} 00:00`,
        validTo: `${pad(1 + (i % 28))}.${pad(month)}.${year} 23:59`,
        priceType: isMember ? "Member" : (isPromo ? "Promotion" : "Ordinary"),
        price,
        netPrice,
        grossProfit: gp,
        grossProfitPercent: gpp,
      });
    }

    // Sort by date descending
    return rows.sort((a, b) => {
      const dateA = new Date(a.validFrom.split(' ')[0].split('.').reverse().join('-')).getTime();
      const dateB = new Date(b.validFrom.split(' ')[0].split('.').reverse().join('-')).getTime();
      return dateB - dateA;
    });
  }, [selectedItem]);

  const [visibleColumnIds, setVisibleColumnIds] = useState<string[]>(() => 
    initialColumns.map(col => col.id)
  );

  const toggleColumn = (id: string) => {
    setVisibleColumnIds(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const gridData = useMemo(() => {
    return mockPriceHistoryData.filter(row => {
      return Object.entries(filters).every(([colId, filterValue]) => {
        if (!filterValue) return true;
        const cellValue = String(row[colId as keyof typeof row] || "").toLowerCase();
        const searchVal = filterValue.toLowerCase();
        
        const mode = filterModes[colId] || "Contains";
        if (mode === "Contains") return cellValue.includes(searchVal);
        if (mode === "Starts with") return cellValue.startsWith(searchVal);
        if (mode === "Ends with") return cellValue.endsWith(searchVal);
        if (mode === "Equals") return cellValue === searchVal;
        return true;
      });
    });
  }, [mockPriceHistoryData, filters, filterModes]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (gridRef.current && !gridRef.current.contains(event.target as Node)) {
        setSelectedId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    const items = initialColumns
      .filter(col => visibleColumnIds.includes(col.id))
      .map((col) => {
        const width = columnWidths[col.id] || col.width;
        const sticky = col.id === "actions" || col.id === "priceType" || col.id === "price";
        const res = { ...col, width, sticky, offset: sticky ? currentOffset : 0 };
        if (sticky) currentOffset += width;
        return res;
      });
    const lastStickyIdx = items.reduce((acc, col, i) => col.sticky ? i : acc, -1);
    return items.map((col, i) => ({ ...col, isLastSticky: i === lastStickyIdx }));
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
    <div ref={gridRef} className="flex-1 flex flex-col overflow-hidden bg-white selection:bg-[#373737] selection:text-white">
      <div className="flex-1 overflow-auto relative overscroll-none">
        <table className="border-separate border-spacing-0 table-fixed w-max">
          <thead>
            <tr className="h-[30px] bg-[#595959]">
              {columns.map((col, idx) => (
                <th
                  key={col.id}
                  className={`${col.id === "actions" ? "p-0" : "px-4"} text-[#ffffff] font-medium uppercase tracking-wider sticky top-0 bg-[#595959] relative overflow-visible ${col.align === "right" ? "text-right" : "text-left"} text-[13px] ${col.sticky ? "z-[60]" : "z-50"} ${col.sticky && !(col as any).isLastSticky ? "border-r border-r-white" : (col as any).isLastSticky ? "border-r border-r-[#CCCCCC]" : (idx !== columns.length - 1 ? "border-r border-r-white" : "")}`}
                  style={{ 
                    width: `${col.width}px`,
                    minWidth: `${col.width}px`,
                    left: col.sticky ? `${col.offset}px` : undefined,
                    transform: col.sticky ? "translateZ(0)" : undefined,
                    WebkitTransform: col.sticky ? "translateZ(0)" : undefined,
                    willChange: col.sticky ? "transform, left" : undefined
                  }}
                >
                  <div className={`flex items-center gap-1 truncate ${col.align === "right" ? "justify-end" : ""} ${col.id === "actions" ? "px-4 justify-start h-full w-full" : ""}`}>
                    {col.id === 'actions' ? (
                      <ColumnSelector 
                        columns={initialColumns}
                        visibleColumnIds={visibleColumnIds}
                        onToggle={toggleColumn}
                        trigger={
                          <div className="w-full h-full flex items-center justify-start cursor-pointer">
                            <div className="w-[24px] flex items-center justify-center text-[18px] font-normal">
                              <span>{col.label}</span>
                            </div>
                          </div>
                        }
                      />
                    ) : (
                      <>
                        {col.label}
                        {(col as any).sortable && (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                            <path d="M11 7L7.5 3L4 7H7V14H8V7H11Z" fill="#FFFFFF" />
                          </svg>
                        )}
                      </>
                    )}
                  </div>
                  
                  {col.id !== "actions" && idx !== columns.length - 1 && (
                    <div 
                      className="absolute top-0 right-[-6px] bottom-0 w-[12px] cursor-col-resize z-[70]"
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
                  className={`${col.id === "actions" ? "px-4" : "px-[5px]"} border-b border-[#CCCCCC] sticky top-[30px] bg-[#F4F6F7] ${col.sticky ? "z-50" : "z-40"} ${col.sticky && !(col as any).isLastSticky ? "border-r border-r-white" : (col as any).isLastSticky ? "border-r border-r-[#CCCCCC]" : (idx !== columns.length - 1 ? "border-r border-r-white" : "")}`}
                  style={{ 
                    width: `${col.width}px`,
                    minWidth: `${col.width}px`,
                    left: col.sticky ? `${col.offset}px` : undefined,
                    transform: col.sticky ? "translateZ(0)" : undefined,
                    WebkitTransform: col.sticky ? "translateZ(0)" : undefined,
                    willChange: col.sticky ? "transform, left" : undefined
                  }}
                >
                  {col.id !== "actions" && (
                    <div className="flex items-center gap-1 h-full py-2">
                      <div className="relative flex-1 flex items-center">
                        {col.id === "priceType" ? (
                          <div className="relative flex-1 h-[30px]">
                            <select
                              className="w-full h-full bg-white border border-[#CCCCCC] pl-2 pr-5 text-[14px] font-normal focus:outline-none focus:border-2 focus:border-[#373737] text-[#1A1A1A] appearance-none cursor-pointer"
                              value={filters[col.id] || ""}
                              onChange={(e) => setFilters({ ...filters, [col.id]: e.target.value })}
                            >
                              <option value=""></option>
                              <option value="Ordinary">Ordinary</option>
                              <option value="Promotion">Promotion</option>
                              <option value="Member">Member</option>
                            </select>
                            <div className="absolute right-[2px] top-0 bottom-0 w-5 flex items-center justify-center pointer-events-none">
                              <svg className="size-[10px]" viewBox="0 0 10 6" fill="none">
                                <path d="M9 1L5 5L1 1H9Z" fill="#1A1A1A" />
                              </svg>
                            </div>
                          </div>
                        ) : (
                          <input
                            type="text"
                            className={`selection:bg-[#373737] selection:text-white w-full h-[30px] bg-white border border-[#CCCCCC] px-2 text-[14px] focus:outline-none focus:border-2 focus:border-[#373737] text-[#1A1A1A] placeholder:text-[#1A1A1A] placeholder:opacity-100 ${
                              col.id === "validFrom" || col.id === "validTo" ? "pr-7" : ""
                            } ${col.align === "right" ? "text-right" : "text-left"}`}
                            placeholder={col.id === "validFrom" || col.id === "validTo" ? "dd.mm.yyyy" : ""}
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
                        )}
                        
                        {(col.id === "validFrom" || col.id === "validTo") && (
                          <div className="absolute right-0.5 pointer-events-none size-5 flex items-center justify-center mr-[4px]">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d={svgPathsCalendar.p5c6fb00} fill="#1A1A1A" />
                            </svg>
                          </div>
                        )}
                      </div>
                      
                      {col.id !== "priceType" && (
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
                      )}
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
              gridData.map((row) => {
                const isSelected = selectedId === row.id;
                return (
                  <tr
                    key={row.id}
                    onClick={() => setSelectedId(row.id)}
                    className={`h-[40px] group transition-colors ${isSelected ? "bg-[#D2F6E8]" : "bg-white hover:bg-[#F7F7F7]"}`}
                  >
                    {columns.map((col, idx) => (
                      <td
                        key={`${row.id}-${col.id}`}
                        className={`px-4 text-sm text-[#1A1A1A] border-b ${isSelected ? "border-[#AFCDBF]" : "border-[#CCCCCC]"} transition-colors ${isSelected ? "bg-[#D2F6E8]" : "bg-white group-hover:bg-[#F7F7F7]"} ${col.align === "right" ? "text-right" : "text-left"} ${col.sticky ? "sticky z-20" : ""} ${col.sticky && !(col as any).isLastSticky ? "border-r border-r-white" : (col as any).isLastSticky ? (isSelected ? "border-r border-r-[#AFCDBF]" : "border-r border-r-[#CCCCCC]") : (idx !== columns.length - 1 ? "border-r border-r-white" : "")} ${col.id === "actions" ? "border-r-0" : ""}`}
                        style={{ 
                          width: `${col.width}px`,
                          minWidth: `${col.width}px`,
                          left: col.sticky ? `${col.offset}px` : undefined,
                          transform: col.sticky ? "translateZ(0)" : undefined,
                          WebkitTransform: col.sticky ? "translateZ(0)" : undefined,
                          willChange: col.sticky ? "transform, left" : undefined
                        }}
                      >
                        {col.id === "actions" ? (
                          <div className={`flex items-center justify-start transition-opacity ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                            {/* Action buttons hidden for history rows */}
                          </div>
                        ) : (col.id === "validFrom" || col.id === "validTo") ? (
                          <div className="truncate w-full pb-[2px]">
                            {(() => {
                              const value = row[col.id as keyof typeof row] as string;
                              if (!value) return null;
                              const parts = value.split(' ');
                              const displayContent = parts.length === 2 ? (
                                <>
                                  <span>{parts[0]}</span>
                                  <span className="text-[#999999] ml-1.5">{parts[1]}</span>
                                </>
                              ) : value;

                              return displayContent;
                            })()}
                          </div>
                        ) : (
                          <div className={`truncate w-full ${col.id === "price" && (row.priceType === "Promotion" || row.priceType === "Member") ? "text-[#D32F2F]" : ""}`}>
                            {row[col.id as keyof typeof row]}
                          </div>
                        )}
                      </td>
                    ))}
                </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}