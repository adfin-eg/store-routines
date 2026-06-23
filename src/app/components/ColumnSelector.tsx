import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";

interface Column {
  id: string;
  label: string;
}

interface ColumnSelectorProps {
  columns: Column[];
  visibleColumnIds: string[];
  onToggle: (columnId: string) => void;
  trigger: React.ReactNode;
}

export function ColumnSelector({ columns, visibleColumnIds, onToggle, trigger }: ColumnSelectorProps) {
  const [search, setSearch] = useState("");

  const toSentenceCase = (str: string) => {
    if (!str) return "";
    if (str.toUpperCase() === "GTIN") return "GTIN";
    const lower = str.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  const filteredColumns = columns
    .filter(col => 
      col.id !== "actions" && 
      col.label &&
      col.label !== "+" &&
      col.label.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => a.label.localeCompare(b.label));

  return (
    <Popover.Root onOpenChange={(open) => {
      if (!open) setSearch("");
    }}>
      <Popover.Trigger asChild>
        {trigger}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="start"
          sideOffset={1}
          alignOffset={0}
          className="z-[10000] bg-white border border-[#CCCCCC] shadow-[0px_2px_10px_rgba(0,0,0,0.1)] w-[240px] outline-none overflow-hidden"
        >
          {/* Search Header */}
          <div className="px-[8px] py-[7.5px] border-b border-[#CCCCCC]">
            <input
              type="text"
              placeholder=""
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={(e) => {
                const target = e.target;
                setTimeout(() => {
                  (target as HTMLInputElement).select();
                }, 0);
              }}
              onKeyDown={(e) => {
                if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') {
                  e.stopPropagation();
                  e.preventDefault();
                  (e.target as HTMLInputElement).select();
                }
              }}
              className="selection:bg-[#373737] selection:text-white w-full h-[30px] bg-white border border-[#CCCCCC] px-[8px] text-[14px] font-roboto focus:outline-none focus:border-2 focus:border-[#373737] text-[#1A1A1A]"
            />
          </div>

          {/* Column List */}
          <div className="max-h-[298px] overflow-y-auto no-scrollbar py-[5px]">
            {filteredColumns.length > 0 ? (
              filteredColumns.map((col) => {
                const isVisible = visibleColumnIds.includes(col.id);
                return (
                  <div
                    key={col.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggle(col.id);
                    }}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onToggle(col.id);
                      }
                    }}
                    className="h-[36px] flex items-center px-[16px] ml-[1px] cursor-pointer hover:bg-[#EAEAEA] focus:border-[2px] focus:border-[#373737] focus:px-[14px] w-[calc(100%-2px)] group select-none outline-none"
                  >
                    <div className={`shrink-0 size-[16px] mr-[10px] flex items-center justify-center border ${
                      isVisible ? "bg-[#595959] border-[#595959]" : "bg-white border-[#CCCCCC]"
                    }`}>
                      {isVisible && (
                        <svg className="size-[12px]" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 6L5 8.5L9.5 4" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
                        </svg>
                      )}
                    </div>
                    <span className="text-[14px] text-[#1A1A1A] font-roboto truncate group-focus:-ml-[2px]">
                      {toSentenceCase(col.label)}
                    </span>
                  </div>
                );
              })
            ) : (
              <div className="h-[36px] flex items-center px-[16px] text-[14px] text-[#1A1A1A]">
                No results
              </div>
            )}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
