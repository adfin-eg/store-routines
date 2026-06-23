import React, { useMemo, useState, useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import svgPathsMain from "@/imports/svg-16ystvll8u";
import svgPathsCalendar from "@/imports/svg-lbuqdinfsp";
import svgPathsMore from "@/imports/svg-oqev7ygrue";
import { FilterMenu } from "@/app/components/FilterMenu";
import * as Popover from "@radix-ui/react-popover";

import { Plus, Check, X } from "lucide-react";

export interface LocalValuesGridHandle {
  save: () => void;
  cancel: () => void;
}

interface LocalValueRow {
  id: number;
  local: boolean;
  field: string;
  hqValue: string;
  localValue: string;
  isNewManual?: boolean;
}

const localFields = [
  "Alarm item",
  "Auto replenishment",
  "Available in store",
  "Best before",
  "Can be ordered",
  "Change VAT",
  "Country of origin",
  "Item declaration",
  "Item type",
  "Label text 2",
  "Phase in date",
  "Phase out date",
  "Scale label",
  "Self service",
  "Self service weights",
  "Shelf life (days)",
  "Special group",
  "Stop sale",
  "Stop sale reason code",
  "Tara (kg)",
  "Weight control"
];

const booleanFields = [
  "Alarm item",
  "Auto replenishment",
  "Available in store",
  "Best before",
  "Can be ordered",
  "Change VAT",
  "Self service",
  "Self service weights",
  "Stop sale",
  "Weight control"
];

const initialColumns = [
  { id: "actions", label: "", width: 56, fixed: true },
  { id: "field", label: "Attribute", width: 0 },
  { id: "localValue", label: "LOCAL VALUE", width: 0 },
  { id: "hqValue", label: "HQ VALUE", width: 0 },
];

const GridDropdown = ({ value, options, onChange, disabled, onTriggerClick, autoFocus }: { value: string, options: string[], onChange: (val: string) => void, disabled: boolean, onTriggerClick?: () => void, autoFocus?: boolean }) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    optionsRef.current = new Array(options.length).fill(null);
  }, [options]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (index + 1) % options.length;
      optionsRef.current[nextIndex]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = (index - 1 + options.length) % options.length;
      optionsRef.current[prevIndex]?.focus();
    } else if (e.key === "Enter" || e.key === " ") {
      // Stop Enter from bubbling to Footer save action
      e.nativeEvent.stopPropagation();
    }
  };

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button 
          ref={triggerRef}
          autoFocus={autoFocus}
          className={`w-full h-[30px] bg-white border border-[#CCCCCC] pl-2 pr-[3px] text-[14px] font-normal flex items-center justify-between text-[#1A1A1A] cursor-pointer focus:outline-none focus:border-2 focus:border-[#373737] ${disabled ? "opacity-50 pointer-events-none" : ""}`}
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => {
            onTriggerClick?.();
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              // Trigger click is handled by Radix to open, but we need to focus first item
              // Radix usually handles this if we don't prevent it, but let's be safe
            }
          }}
        >
          <span className="truncate font-normal">{value}</span>
          <div className="size-5 flex items-center justify-center shrink-0">
            <svg className="size-[10px]" viewBox="0 0 10 6" fill="none">
              <path d="M9 1L5 5L1 1H9Z" fill="#1A1A1A" />
            </svg>
          </div>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content 
          className="z-[9999] bg-white border border-[#CCCCCC] shadow-md w-[var(--radix-popover-trigger-width)] outline-none overflow-y-auto max-h-[152px] py-1"
          align="start"
          sideOffset={-1}
          onCloseAutoFocus={(e) => {
            // Ensure focus returns to trigger
            e.preventDefault();
            triggerRef.current?.focus();
          }}
          onPointerDownOutside={(e) => {
            e.stopPropagation();
          }}
        >
          {options.map((opt, index) => (
            <Popover.Close key={opt} asChild>
              <button
                ref={(el) => (optionsRef.current[index] = el)}
                className="w-full px-4 py-2 text-[14px] font-normal hover:bg-[#EAEAEA] focus:bg-[#EAEAEA] cursor-pointer text-[#1A1A1A] text-left outline-none border-none bg-transparent"
                onClick={(e) => {
                  onChange(opt);
                }}
                onKeyDown={(e) => handleKeyDown(e, index)}
              >
                {opt}
              </button>
            </Popover.Close>
          ))}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

const GridCheckbox = ({ checked, onChange, disabled, autoFocus }: { checked: boolean, onChange: (val: boolean) => void, disabled?: boolean, autoFocus?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (autoFocus && ref.current) {
      ref.current.focus();
    }
  }, [autoFocus]);

  return (
    <div 
      ref={ref}
      tabIndex={disabled ? -1 : 0}
      className={`size-[16px] flex items-center justify-center border transition-colors outline-none focus-visible:border-2 focus-visible:border-[#373737] ${disabled ? "cursor-default opacity-80" : "cursor-pointer"} ${checked ? (disabled ? "bg-[#7A7A7A] border-[#7A7A7A]" : "bg-[#595959] border-[#595959]") : "bg-white border-[#CCCCCC]"}`}
      onClick={() => !disabled && onChange(!checked)}
      onKeyDown={(e) => {
        if (e.key === " ") {
          e.preventDefault();
          !disabled && onChange(!checked);
        }
      }}
    >
      {checked && (
        <svg className="size-[12px]" viewBox="0 0 12 12" fill="none">
          <path d="M2.5 6L5 8.5L9.5 4" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
        </svg>
      )}
    </div>
  );
};

interface LocalValuesGridProps {
  filterAttribute?: string;
  itemName?: string;
  itemArea?: string;
  initialHasOverrides?: boolean;
  onOverridesChange?: (hasAny: boolean) => void;
  filters: Record<string, string>;
  onFiltersChange: (filters: Record<string, string>) => void;
  onOpenDeclaration?: () => void;
  onModified?: (count: number) => void;
  onRemove?: () => void;
  showMultiSelectMessage?: boolean;
}

const ActionCell = ({ row, onRemove, onOpenDeclaration, isSelected }: { row: LocalValueRow, onRemove: (id: number) => void, onOpenDeclaration?: () => void, isSelected?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`flex items-center justify-start transition-opacity overflow-hidden pl-2 ${isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
      <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
        <Popover.Trigger asChild>
          <div className={`size-[24px] flex items-center justify-center cursor-pointer outline-none transition-colors rounded ${isSelected ? "hover:bg-[#C3E8DA]" : "hover:bg-[#EAEAEA]"}`}>
            <svg className="size-[18px]" viewBox="0 0 20 20" fill="none">
              <path d={svgPathsMore.p2d3e5d00} fill="#1A1A1A" />
            </svg>
          </div>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            align="start"
            side="bottom"
            sideOffset={4}
            onOpenAutoFocus={(e) => e.preventDefault()}
            className="z-[10000] bg-white border border-[#CCCCCC] shadow-lg min-w-[max-content] outline-none whitespace-nowrap"
          >
            <div className="flex flex-col py-1">
              {row.field === "Item declaration" ? (
                <button
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    onOpenDeclaration?.();
                    setIsOpen(false);
                  }}
                  className="text-left text-[14px] font-normal text-[#1A1A1A] hover:bg-[#EAEAEA] transition-colors relative outline-none cursor-pointer flex items-center h-[36px] px-4 w-full"
                >
                  Edit
                </button>
              ) : (
                <button
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    onRemove(row.id);
                    setIsOpen(false);
                  }}
                  className="text-left text-[14px] font-normal text-[#1A1A1A] hover:bg-[#EAEAEA] transition-colors relative outline-none cursor-pointer flex items-center h-[36px] px-4 w-full"
                >
                  Remove
                </button>
              )}
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};

export const LocalValuesGrid = forwardRef<LocalValuesGridHandle, LocalValuesGridProps>(({ 
  filterAttribute, 
  itemName, 
  itemArea,
  initialHasOverrides = false, 
  onOverridesChange,
  filters,
  onFiltersChange,
  onOpenDeclaration,
  onModified,
  onRemove,
  showMultiSelectMessage
}, ref) => {
  const [filterModes, setFilterModes] = useState<Record<string, string>>({});
  const [openMenuColumn, setOpenMenuColumn] = useState<string | null>(null);
  const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);
  const [addSearchTerm, setAddSearchTerm] = useState("");
  const addInputRef = useRef<HTMLInputElement>(null);
  const addListRef = useRef<HTMLDivElement>(null);
  const addOptionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isAddMenuOpen && addListRef.current) {
      addListRef.current.scrollTop = addListRef.current.scrollHeight;
    }
    if (!isAddMenuOpen) {
      addOptionsRef.current = [];
    }
  }, [isAddMenuOpen]);

  const handleAddInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.nativeEvent.stopPropagation();
      // If there's only one option, maybe add it? Or just do nothing.
      // For now, just prevent saving.
      return;
    }
    
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') {
      e.stopPropagation();
      e.preventDefault();
      (e.target as HTMLInputElement).select();
      return;
    }
    
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (filteredAddOptions.length > 0) {
        addOptionsRef.current[filteredAddOptions.length - 1]?.focus();
      }
    } else if (e.key === 'Escape') {
      setIsAddMenuOpen(false);
    }
  };

  const handleAddOptionKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.nativeEvent.stopPropagation();
      addRow(filteredAddOptions[index]);
      setIsAddMenuOpen(false);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (index === 0) {
        // Just stop at the top
      } else {
        addOptionsRef.current[index - 1]?.focus();
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (index === filteredAddOptions.length - 1) {
        addInputRef.current?.focus();
      } else {
        addOptionsRef.current[index + 1]?.focus();
      }
    } else if (e.key === 'Escape') {
      setIsAddMenuOpen(false);
      addInputRef.current?.focus();
    }
  };
  
  const [lastAddedId, setLastAddedId] = useState<number | null>(null);
  const [isModified, setIsModified] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Set<number>>(() => {
    if (filterAttribute) {
      const lowerFilter = filterAttribute.toLowerCase();
      // We need to find the ID of the attribute if it was included in the initial data
      // Since data is initialized above, we can't easily access it here in the same block 
      // if it's not captured. 
      // But wait, the ID is index + 1 in the initializer.
      const index = localFields.findIndex(f => f.toLowerCase() === lowerFilter);
      if (index !== -1) {
        return new Set([index + 1]);
      }
    }
    return new Set();
  });

  const countries = ["Norway", "Denmark", "Spain", "Argentina", "Netherlands", "France", "Poland"];

  const [data, setData] = useState<LocalValueRow[]>(() => {
    let initialData: LocalValueRow[] = [];
    
    // Deterministic "random" based on itemName or gtin
    const seedString = (itemName || "") + (itemArea || "");
    const getSeed = (str: string) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
      }
      return Math.abs(hash);
    };
    const seed = getSeed(seedString);
    
    // Simple deterministic pseudo-random
    const pseudoRandom = (offset: number) => {
      const x = Math.sin(seed + offset) * 10000;
      return x - Math.floor(x);
    };

    let localIndices = new Set<number>();
    
    if (filterAttribute) {
      const idx = localFields.findIndex(f => f.toLowerCase() === filterAttribute.toLowerCase());
      if (idx !== -1) localIndices.add(idx);
    }
    
    const isProduce = (itemArea && (itemArea.includes("05") || itemArea.includes("Fruit & vegetables"))) || 
                     (itemName && ["apple", "banana", "lettuce", "carrot", "cucumber", "blueberry", "blueberries", "avocado", "sweet potato", "cherry tomato"].some(p => itemName.toLowerCase().includes(p)));

    if (initialHasOverrides || isProduce) {
      if (isProduce) {
        const originIndex = localFields.indexOf("Country of origin");
        const labelIndex = localFields.indexOf("Label text 2");
        if (originIndex !== -1) localIndices.add(originIndex);
        if (labelIndex !== -1) localIndices.add(labelIndex);
      }
      
      const targetCount = (seed % 4) + 2; // 2 to 5
      let attempts = 0;
      while (localIndices.size < targetCount && attempts < 50) {
        localIndices.add(Math.floor(pseudoRandom(attempts) * localFields.length));
        attempts++;
      }
    }

    localFields.forEach((field, index) => {
      if (!localIndices.has(index)) return;

      const id = index + 1;
      const isBoolean = booleanFields.includes(field);
      
      let hqValue = "";
      let localValue = "";

      const fieldSeed = getSeed(field + seedString);
      const fieldRandom = (offset: number) => {
        const x = Math.sin(fieldSeed + offset) * 10000;
        return x - Math.floor(x);
      };

      if (isBoolean) {
        if (field === "Self service") {
          hqValue = "Yes";
          localValue = "No";
        } else {
          hqValue = fieldRandom(1) > 0.5 ? "Yes" : "No";
          localValue = hqValue === "Yes" ? "No" : "Yes";
        }
      } else {
        if (field === "Label text 2") {
          hqValue = itemName ? `${itemName} *` : "Standard Label *";
          const countryIdx = Math.floor(fieldRandom(2) * countries.length);
          localValue = hqValue.replace(" *", ` ${countries[countryIdx]}`);
        } else if (field === "Country of origin") {
          const hqIdx = Math.floor(fieldRandom(3) * countries.length);
          const localIdx = (hqIdx + 1 + Math.floor(fieldRandom(4) * (countries.length - 1))) % countries.length;
          hqValue = countries[hqIdx];
          localValue = countries[localIdx];
        } else if (field === "Item type") {
          hqValue = "Special item";
          localValue = "Standard item";
        } else if (field === "Scale label") {
          hqValue = "Label 1";
          localValue = "Label 2";
        } else if (field === "Shelf life (days)") {
          hqValue = "10";
          localValue = "15";
        } else if (field === "Special group") {
          hqValue = "Dangerous goods";
          localValue = "Standard group";
        } else if (field === "Stop sale reason code") {
          hqValue = "Out of stock";
          localValue = "Discontinued";
        } else if (field === "Tara (kg)") {
          hqValue = "1.00";
          localValue = "1.25";
        } else if (field.toLowerCase().includes("date")) {
          hqValue = "01.01.2026";
          localValue = "15.02.2026";
        } else if (field.toLowerCase().includes("kg") || field.toLowerCase().includes("days")) {
          hqValue = "1.000";
          localValue = "1.250";
        } else {
          const state = Math.floor(fieldRandom(5) * 3);
          hqValue = state === 0 ? "Enabled" : state === 1 ? "None" : "Standard";
          localValue = hqValue === "Enabled" ? "Standard" : hqValue === "None" ? "Enabled" : "None";
        }
      }

      initialData.push({
        id,
        local: true,
        field,
        hqValue,
        localValue
      });
    });

    return initialData;
  });

  const [savedData, setSavedData] = useState<LocalValueRow[]>(data);

  const modificationCount = useMemo(() => {
    let count = 0;
    data.forEach(row => {
      const savedRow = savedData.find(r => r.id === row.id);
      if (!savedRow) {
        count++;
      } else if (row.localValue !== savedRow.localValue) {
        count++;
      }
    });
    return count;
  }, [data, savedData]);

  const handleSave = () => {
    setSavedData([...data]);
    setIsModified(false);
    setSelectedIds(new Set());
    setLastAddedId(null);
  };

  const handleCancel = () => {
    setData([...savedData]);
    setIsModified(false);
  };

  useImperativeHandle(ref, () => ({
    save: handleSave,
    cancel: handleCancel
  }));

  const columns = useMemo(() => {
    return initialColumns;
  }, []);

  // Scroll to bottom when a new row is manually added
  useEffect(() => {
    if (lastAddedId && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      // Reset lastAddedId after scrolling to prevent unwanted scrolling on subsequent data changes
      setLastAddedId(null);
    }
  }, [data.length, lastAddedId]);

  // Component is keyed by itemName and selectedItemId in App.tsx, 
  // so it remounts on item change. No need for itemName effect which was causing 
  // synchronization issues between data and savedData on mount.

  const lastReportedRef = useRef<boolean | null>(null);
  const lastModifiedCountRef = useRef<number>(0);
  const lastSelectedIndexRef = useRef<number | null>(null);

  useEffect(() => {
    if (lastModifiedCountRef.current !== modificationCount) {
      lastModifiedCountRef.current = modificationCount;
      onModified?.(modificationCount);
    }
  }, [modificationCount, onModified]);

  useEffect(() => {
    const hasAnyLocal = data.length > 0;
    if (lastReportedRef.current !== hasAnyLocal) {
      lastReportedRef.current = hasAnyLocal;
      onOverridesChange?.(hasAnyLocal);
    }
  }, [data, onOverridesChange]);

  const removeRow = (id: number) => {
    setData(prev => {
      const newData = prev.filter(row => row.id !== id);
      setSavedData(newData);
      return newData;
    });
    onRemove?.();
  };

  const addRow = (fieldName: string, isManualAdd: boolean = true) => {
    if (data.find(r => r.field === fieldName)) return;

    const index = localFields.indexOf(fieldName);
    const id = Date.now() + Math.floor(Math.random() * 1000); // Unique ID
    const isBoolean = booleanFields.includes(fieldName);
    
    let hqValue = "";

    if (isBoolean) {
      if (fieldName === "Self service") {
        hqValue = "Yes";
      } else {
        hqValue = Math.random() > 0.5 ? "Yes" : "No";
      }
    } else {
      if (fieldName === "Label text 2") {
        hqValue = itemName ? `${itemName} *` : "Organic Product *";
      } else if (fieldName === "Country of origin") {
        hqValue = countries[Math.floor(Math.random() * countries.length)];
      } else if (fieldName === "Item type") {
        hqValue = "Special item";
      } else if (fieldName === "Scale label") {
        hqValue = "Label 1";
      } else if (fieldName === "Shelf life (days)") {
        hqValue = "10";
      } else if (fieldName === "Special group") {
        hqValue = "Dangerous goods";
      } else if (fieldName === "Stop sale reason code") {
        hqValue = "Out of stock";
      } else if (fieldName.toLowerCase().includes("date")) {
        hqValue = "01.01.2024";
      } else if (fieldName.toLowerCase().includes("kg") || fieldName.toLowerCase().includes("days")) {
        hqValue = "1.000";
      } else {
        hqValue = index % 3 === 0 ? "Enabled" : index % 3 === 1 ? "None" : "Standard";
      }
    }

    // Pre-fill with HQ value (or specialized local value for Label text 2)
    let localValue = hqValue;
    if (fieldName === "Label text 2") {
      const randomCountry = countries[Math.floor(Math.random() * countries.length)];
      localValue = hqValue.replace(" *", ` ${randomCountry}`);
    } else if (fieldName === "Country of origin") {
      localValue = countries[Math.floor(Math.random() * countries.length)];
      if (localValue === hqValue) {
        localValue = countries[(countries.indexOf(hqValue) + 1) % countries.length];
      }
    }

    const newRow: LocalValueRow = {
      id,
      local: true,
      field: fieldName,
      hqValue,
      localValue,
      isNewManual: isManualAdd
    };

    if (isManualAdd) {
      setLastAddedId(id);
      setSelectedIds(new Set([id]));
      setData(prev => [...prev, newRow]);
      setIsModified(true);
    } else {
      setData(prev => {
        const newData = [...prev, newRow];
        return newData.sort((a, b) => a.field.localeCompare(b.field));
      });
      setSavedData(prev => {
        const newData = [...prev, newRow];
        return newData.sort((a, b) => a.field.localeCompare(b.field));
      });
    }
  };

  const handleLocalValueChange = (id: number, newValue: string) => {
    setData(prev => prev.map(row => {
      if (row.id === id) {
        return { ...row, localValue: newValue };
      }
      return row;
    }));
    setIsModified(true);
  };

  const getFieldType = (field: string) => {
    if (field === "Item declaration") return "link";
    if (booleanFields.includes(field)) return "boolean";
    if (field.toLowerCase().includes("date")) return "date";
    if (field.toLowerCase().includes("kg") || field.toLowerCase().includes("days")) return "number";
    if (field === "Scale label" || field === "Item type" || field === "Country of origin") return "dropdown";
    return "text";
  };

  const getDropdownOptions = (field: string) => {
    if (booleanFields.includes(field)) return ["Yes", "No"];
    if (field === "Country of origin") return ["Norway", "Denmark", "Spain", "Argentina", "Netherlands", "France", "Poland"];
    if (field === "Scale label") return ["Label 1", "Label 2"];
    if (field === "Item type") return ["Special item", "Standard item"];
    return [];
  };

  const filteredData = useMemo(() => {
    const result = data
      .filter(row => {
        for (const [colId, filterValue] of Object.entries(filters)) {
          if (!filterValue) continue;
          if (colId === "actions") continue;
          const value = String(row[colId as keyof LocalValueRow]).toLowerCase();
          const search = filterValue.toLowerCase();
          
          // Boolean filter handling for text search
          if (booleanFields.includes(row.field)) {
            if (search === "yes" && value !== "yes") return false;
            if (search === "no" && value !== "no") return false;
            if (search !== "yes" && search !== "no" && !value.includes(search)) return false;
          } else {
            if (!value.includes(search)) return false;
          }
        }
        return true;
      });

    return [...result].sort((a, b) => {
      // 1. Sort by filter matching if applicable (Highest priority)
      if (filterAttribute) {
        const lowerFilter = filterAttribute.toLowerCase();
        const aIsMatch = a.field.toLowerCase() === lowerFilter;
        const bIsMatch = b.field.toLowerCase() === lowerFilter;
        if (aIsMatch && !bIsMatch) return -1;
        if (!aIsMatch && bIsMatch) return 1;
      }

      // 2. Then sort by field type priority
      const getPriority = (field: string) => {
        const type = getFieldType(field);
        if (type === "text" || type === "number") return 1;
        if (type === "date") return 2;
        if (type === "dropdown") return 3;
        if (type === "link") return 4;
        if (type === "boolean") return 5;
        return 6;
      };

      const pA = getPriority(a.field);
      const pB = getPriority(b.field);

      if (pA !== pB) return pA - pB;

      // 3. Finally sort alphabetically within the same priority
      return a.field.localeCompare(b.field);
    });
  }, [data, filters, filterAttribute, savedData]);

  useEffect(() => {
    const handleKeyDownGlobal = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) return;

      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        if (!filteredData || filteredData.length === 0) return;
        e.preventDefault();
        
        let nextIndex = 0;
        const currentIndex = lastSelectedIndexRef.current;
        
        if (currentIndex !== null) {
          if (e.key === 'ArrowUp') nextIndex = Math.max(0, currentIndex - 1);
          else nextIndex = Math.min(filteredData.length - 1, currentIndex + 1);
        }

        const nextRow = filteredData[nextIndex];
        if (nextRow) {
          setSelectedIds(new Set([nextRow.id]));
          lastSelectedIndexRef.current = nextIndex;
          
          const rowEl = document.getElementById(`local-row-${nextRow.id}`);
          if (rowEl) rowEl.scrollIntoView({ block: 'nearest', behavior: 'auto' });
        }
      }
    };
    window.addEventListener('keydown', handleKeyDownGlobal);
    return () => window.removeEventListener('keydown', handleKeyDownGlobal);
  }, [filteredData]);

  useEffect(() => {
    if (filterAttribute) {
      const lowerFilter = filterAttribute.toLowerCase();
      // Only add if it's missing AND we are not in the first render (initializer handled that)
      // or if the filterAttribute prop actually changed to something new
      setData(prev => {
        const existingRow = prev.find(r => r.field.toLowerCase() === lowerFilter);
        if (!existingRow) {
          const exactMatch = localFields.find(f => f.toLowerCase() === lowerFilter);
          if (exactMatch) {
            const index = localFields.indexOf(exactMatch);
            const id = Date.now() + Math.floor(Math.random() * 1000);
            const isBoolean = booleanFields.includes(exactMatch);
            
            // For reactive updates while open, we can use simpler generation 
            // since the main deterministic set was already built.
            let hqValue = isBoolean ? (exactMatch === "Self service" ? "Yes" : "No") : "Standard";
            if (exactMatch.toLowerCase().includes("date")) hqValue = "01.01.2026";
            
            const newRow: LocalValueRow = {
              id,
              local: true,
              field: exactMatch,
              hqValue,
              localValue: hqValue,
              isNewManual: false
            };
            
            const newData = [...prev, newRow];
            setSavedData(newData);
            setSelectedIds(new Set([id]));
            return newData;
          }
        } else {
          // If it exists, just ensure it's selected
          setSelectedIds(new Set([existingRow.id]));
        }
        return prev;
      });
    }
  }, [filterAttribute]);

  const availableFields = useMemo(() => {
    return localFields.filter(f => f !== "Item declaration" && !data.find(r => r.field === f));
  }, [data]);

  const filteredAddOptions = useMemo(() => {
    const options = [...availableFields]
      .filter(f => f.toLowerCase().includes(addSearchTerm.toLowerCase()))
      .reverse();
    addOptionsRef.current = new Array(options.length).fill(null);
    return options;
  }, [availableFields, addSearchTerm]);

  return (
    <div 
      className="flex-1 flex flex-col overflow-hidden bg-white relative group/root"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) setSelectedIds(new Set());
      }}
    >
      <div 
        className="flex-1 overflow-auto relative overscroll-none min-h-0" 
        ref={scrollRef}
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) setSelectedIds(new Set());
        }}
      >
        <table 
          className="border-separate border-spacing-0 table-fixed w-full"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setSelectedIds(new Set());
          }}
        >
          <colgroup>
            <col style={{ width: "56px" }}/>
            <col style={{ width: "calc((100% - 56px) / 3)" }}/>
            <col style={{ width: "calc((100% - 56px) / 3)" }}/>
            <col style={{ width: "calc((100% - 56px) / 3)" }}/>
          </colgroup>
          <thead>
            <tr className="h-[30px] bg-[#595959]">
              {columns.map((col, idx) => {
                const isSticky = col.id === "actions";
                return (
                  <th
                    key={col.id}
                    className={`${col.id === 'actions' ? 'p-0' : 'px-2'} ${idx !== columns.length - 1 ? "border-r border-r-white" : ""} text-[#ffffff] font-medium uppercase tracking-wider sticky top-0 bg-[#595959] relative overflow-visible text-left text-[13px] ${isSticky ? "left-0 z-[60]" : ""}`}
                    style={{ 
                      zIndex: isSticky ? 60 : 50 - idx
                    }}
                  >
                    <div className={`${col.id === 'actions' ? 'font-normal h-full w-full flex items-center justify-start pl-2' : 'truncate flex items-center gap-1 pl-2'}`}>
                      {col.label}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="selection:bg-[#373737] selection:text-white select-none">
            {showMultiSelectMessage || data.length === 0 ? (
              <tr className="h-[48px] bg-white">
                <td 
                  colSpan={columns.length} 
                  className="px-4 text-sm text-[#1A1A1A] border-b border-[#CCCCCC] text-center"
                >
                  {showMultiSelectMessage ? "Select a single item" : "No records available"}
                </td>
              </tr>
            ) : filteredData.length === 0 ? (
              <tr className="h-[48px] bg-white">
                <td 
                  colSpan={columns.length} 
                  className="px-4 text-sm text-[#999999] italic border-b border-[#CCCCCC] text-center"
                >
                  No matching records
                </td>
              </tr>
            ) : (
              filteredData.map((row, index) => {
                const isSelected = selectedIds.has(row.id);
                return (
                  <tr
                    key={row.id}
                    id={`local-row-${row.id}`}
                    onClick={(e) => {
                      if (e.ctrlKey || e.metaKey) {
                        const newSelected = new Set(selectedIds);
                        if (newSelected.has(row.id)) newSelected.delete(row.id);
                        else newSelected.add(row.id);
                        setSelectedIds(newSelected);
                        lastSelectedIndexRef.current = index;
                      } else {
                        setSelectedIds(new Set([row.id]));
                        lastSelectedIndexRef.current = index;
                      }
                    }}
                    className={`h-[48px] group ${isSelected ? "bg-[#D2F6E8]" : "bg-white hover:bg-[#F7F7F7]"}`}
                  >
                  {columns.map((col) => {
                    const isActions = col.id === "actions";
                    return (
                      <td
                        key={`${row.id}-${col.id}`}
                        className={`text-sm text-[#1A1A1A] border-b ${isSelected ? "border-[#AFCDBF]" : "border-[#CCCCCC]"} ${isSelected ? "bg-[#D2F6E8]" : "bg-white group-hover:bg-[#F7F7F7]"} relative cursor-default font-normal px-2 ${isActions ? "sticky left-0 z-20" : ""}`}
                        style={{ 
                          height: "48px"
                        }}
                      >
                        {isActions ? (
                          <ActionCell row={row} onRemove={removeRow} onOpenDeclaration={onOpenDeclaration} isSelected={isSelected} />
                        ) : col.id === "localValue" ? (
                          <div className="w-full flex items-center py-1 h-full">
                            {getFieldType(row.field) === "link" ? (
                              <div className="w-full flex items-center h-[30px] pl-2">
                                <button 
                                  className="underline underline-offset-[4px] decoration-1 decoration-[#1A1A1A] cursor-pointer text-[#1A1A1A] font-normal text-[14px] leading-none pt-[1px]"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (row.field === "Item declaration") {
                                      onOpenDeclaration?.();
                                    }
                                  }}
                                >
                                  Edit
                                </button>
                              </div>
                            ) : getFieldType(row.field) === "boolean" ? (
                              <div className="w-full flex items-center justify-start pl-2 h-[30px]">
                                <GridCheckbox 
                                  checked={row.localValue === "Yes"} 
                                  onChange={(checked) => handleLocalValueChange(row.id, checked ? "Yes" : "No")}
                                  disabled={!row.local}
                                  autoFocus={row.id === lastAddedId}
                                />
                              </div>
                            ) : getFieldType(row.field) === "dropdown" ? (
                              <GridDropdown 
                                value={row.localValue} 
                                options={getDropdownOptions(row.field)} 
                                onChange={(val) => handleLocalValueChange(row.id, val)}
                                disabled={!row.local}
                                autoFocus={row.id === lastAddedId}
                              />
                            ) : getFieldType(row.field) === "date" ? (
                              <div className="relative w-full h-[30px] flex items-center">
                                <input
                                  type="text"
                                  autoFocus={row.id === lastAddedId}
                                  className="selection:bg-[#373737] selection:text-white w-full h-full bg-white border border-[#CCCCCC] pl-2 pr-7 text-[14px] font-normal focus:outline-none focus:border-2 focus:border-[#373737] text-[#1A1A1A]"
                                  placeholder="dd.mm.yyyy"
                                  value={row.localValue}
                                  onKeyDown={(e) => {
                                    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') {
                                      e.stopPropagation();
                                      (e.target as HTMLInputElement).select();
                                      e.preventDefault();
                                    }
                                  }}
                                  onFocus={(e) => {
                                    const target = e.target;
                                    setTimeout(() => {
                                      target.select();
                                    }, 0);
                                  }}
                                  onMouseDown={(e) => {
                                    if (document.activeElement !== e.currentTarget) {
                                      e.currentTarget.focus();
                                      e.preventDefault();
                                    }
                                  }}
                                  onChange={(e) => handleLocalValueChange(row.id, e.target.value)}
                                  disabled={!row.local}
                                />
                                <div className="absolute right-0.5 pointer-events-none size-5 flex items-center justify-center mr-[4px]">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d={svgPathsCalendar.p5c6fb00} fill="#1A1A1A" />
                                  </svg>
                                </div>
                              </div>
                            ) : getFieldType(row.field) === "number" ? (
                              <div className="relative w-full h-[30px] flex items-center">
                                <input
                                  type="number"
                                  autoFocus={row.id === lastAddedId}
                                  step="any"
                                  className="selection:bg-[#373737] selection:text-white w-full h-full bg-white border border-[#CCCCCC] pl-2 pr-[28px] text-[14px] font-normal focus:outline-none focus:z-30 focus:border-2 focus:border-[#373737] text-[#1A1A1A] relative"
                                  value={row.localValue.replace(/[^\d.]/g, '')}
                                  onKeyDown={(e) => {
                                    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') {
                                      e.stopPropagation();
                                      (e.target as HTMLInputElement).select();
                                      e.preventDefault();
                                    }
                                  }}
                                  onFocus={(e) => {
                                    const target = e.target;
                                    setTimeout(() => {
                                      target.select();
                                    }, 0);
                                  }}
                                  onMouseDown={(e) => {
                                    if (document.activeElement !== e.currentTarget) {
                                      e.currentTarget.focus();
                                      e.preventDefault();
                                    }
                                  }}
                                  onChange={(e) => handleLocalValueChange(row.id, e.target.value)}
                                  disabled={!row.local}
                                />
                                <div className="absolute right-[1px] top-[1px] bottom-[1px] w-[26px] flex flex-col z-20">
                                  <button 
                                    className="flex-1 flex items-end justify-center pb-[2px] bg-white cursor-pointer outline-none"
                                    onClick={() => {
                                      const val = parseFloat(row.localValue) || 0;
                                      handleLocalValueChange(row.id, (val + 1).toString());
                                    }}
                                    disabled={!row.local}
                                  >
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="rotate-180">
                                      <path d="M9 1L5 5L1 1H9Z" fill="#1A1A1A" />
                                    </svg>
                                  </button>
                                  <button 
                                    className="flex-1 flex items-start justify-center pt-[2px] bg-white cursor-pointer outline-none"
                                    onClick={() => {
                                      const val = parseFloat(row.localValue) || 0;
                                      handleLocalValueChange(row.id, Math.max(0, val - 1).toString());
                                    }}
                                    disabled={!row.local}
                                  >
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                                      <path d="M9 1L5 5L1 1H9Z" fill="#1A1A1A" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <input
                                type="text"
                                autoFocus={row.id === lastAddedId}
                                className="selection:bg-[#373737] selection:text-white w-full h-[30px] bg-white border border-[#CCCCCC] pl-2 pr-[3px] text-[14px] font-normal focus:outline-none focus:border-2 focus:border-[#373737] text-[#1A1A1A]"
                                value={row.localValue}
                                onKeyDown={(e) => {
                                  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') {
                                    e.stopPropagation();
                                    (e.target as HTMLInputElement).select();
                                    e.preventDefault();
                                    }
                                  }}
                                  onFocus={(e) => {
                                    const target = e.target;
                                    setTimeout(() => {
                                      target.select();
                                    }, 0);
                                  }}
                                  onMouseDown={(e) => {
                                    if (document.activeElement !== e.currentTarget) {
                                      e.currentTarget.focus();
                                      e.preventDefault();
                                    }
                                  }}
                                  onChange={(e) => handleLocalValueChange(row.id, e.target.value)}
                                  disabled={!row.local}
                                />
                              )}
                            </div>
                          ) : col.id === "hqValue" ? (
                            <div className="w-full flex items-center h-[30px] pl-2">
                              {getFieldType(row.field) === "link" ? (
                                <button 
                                  className="underline underline-offset-[4px] decoration-1 decoration-[#1A1A1A] cursor-pointer text-[#1A1A1A] font-normal text-[14px] leading-none pt-[1px]"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (row.field === "Item declaration") {
                                      onOpenDeclaration?.();
                                    }
                                  }}
                                >
                                  View
                                </button>
                              ) : getFieldType(row.field) === "boolean" ? (
                                <GridCheckbox 
                                  checked={row.hqValue === "Yes"} 
                                  onChange={() => {}} 
                                  disabled={true}
                                />
                              ) : (
                                <div className="truncate select-none h-full flex items-center pt-[1px] leading-none">
                                  {row[col.id as keyof LocalValueRow]}
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="truncate select-none h-[30px] flex items-center pl-2 pt-[1px] leading-none">{row[col.id as keyof LocalValueRow]}</div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Floating Add Button */}
      <div className={`absolute ${isModified ? 'bottom-[20px]' : 'bottom-5'} right-5 transition-all duration-200 z-50`}>
        <Popover.Root open={isAddMenuOpen} onOpenChange={(open) => {
          setIsAddMenuOpen(open);
          if (!open) setAddSearchTerm("");
        }}>
          <Popover.Trigger asChild>
            <button 
              className="size-[40px] bg-[#373737] hover:bg-[#474747] text-white rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all active:scale-95 outline-none"
              title="Add local value"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !isAddMenuOpen) {
                  // Prevent the button from being "clicked" (which opens the menu)
                  e.preventDefault();
                  // Blur the button so the Footer's global Enter listener 
                  // doesn't see a focused button and allows the save action
                  e.currentTarget.blur();
                }
              }}
            >
              <Plus className="size-5" />
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              align="end"
              alignOffset={-2.5}
              side="left"
              sideOffset={12}
              onOpenAutoFocus={(e) => {
                e.preventDefault();
                addInputRef.current?.focus();
              }}
              onCloseAutoFocus={(e) => {
                if (lastAddedId) {
                  // If we just added a row, the input in that row will have autoFocus.
                  // Prevent Radix from stealing focus back to the Add button.
                  e.preventDefault();
                  // Reset lastAddedId after a short delay to allow the focus to settle
                  setTimeout(() => setLastAddedId(null), 100);
                }
              }}
              className="z-[10000] bg-white border border-[#CCCCCC] shadow-[0px_2px_10px_rgba(0,0,0,0.1)] w-[240px] outline-none overflow-hidden flex flex-col"
            >
              {/* Attributes List */}
              <div 
                ref={addListRef}
                className="max-h-[298px] overflow-y-auto no-scrollbar py-[5px] order-1"
              >
                {filteredAddOptions.length > 0 ? (
                  filteredAddOptions.map((fieldName, index) => (
                    <div
                      key={fieldName}
                      ref={(el) => (addOptionsRef.current[index] = el)}
                      tabIndex={0}
                      onClick={() => {
                        addRow(fieldName);
                        setIsAddMenuOpen(false);
                      }}
                      onKeyDown={(e) => handleAddOptionKeyDown(e, index)}
                      className="h-[36px] flex items-center px-[16px] cursor-pointer hover:bg-[#EAEAEA] focus:bg-[#EAEAEA] outline-none group transition-colors select-none"
                    >
                      <span className="text-[14px] text-[#1A1A1A] font-roboto truncate">
                        {fieldName}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="h-[36px] flex items-center px-[16px] text-[14px] text-[#1A1A1A]">
                    No results
                  </div>
                )}
              </div>

              {/* Search Header - Now at the bottom */}
              <div className="px-[8px] py-[7.5px] border-t border-[#CCCCCC] order-2 bg-white">
                <input
                  ref={addInputRef}
                  type="text"
                  placeholder=""
                  autoFocus
                  value={addSearchTerm}
                  onChange={(e) => setAddSearchTerm(e.target.value)}
                  onFocus={(e) => {
                    const target = e.target;
                    setTimeout(() => {
                      (target as HTMLInputElement).select();
                    }, 0);
                  }}
                  onKeyDown={handleAddInputKeyDown}
                  className="selection:bg-[#373737] selection:text-white w-full h-[30px] bg-white border border-[#CCCCCC] px-[8px] text-[14px] font-roboto focus:outline-none focus:border-2 focus:border-[#373737] text-[#1A1A1A]"
                />
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </div>
  );
});