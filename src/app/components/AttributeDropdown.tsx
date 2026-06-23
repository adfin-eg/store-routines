import React, { useState, useMemo, useRef } from "react";
import * as Popover from "@radix-ui/react-popover";
import { X } from "lucide-react";

interface AttributeDropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
}

export function AttributeDropdown({
  value,
  onChange,
  options,
  placeholder = "Select field",
}: AttributeDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const optionsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const [renderedValue, setRenderedValue] = useState(value);

  const filteredOptions = useMemo(() => {
    const filtered = options.filter(option =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Reset options ref array size when options change
    optionsRef.current = new Array(filtered.length).fill(null);
    return filtered;
  }, [options, searchTerm]);

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (searchTerm) {
      setSearchTerm("");
    } else {
      onChange("");
    }
    inputRef.current?.focus();
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      setRenderedValue(value);
    }
    if (!open) {
      setSearchTerm("");
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      setRenderedValue(value);
    }
  }, [isOpen, value]);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    // Use a small delay to ensure the value prop has updated from parent state
    // and the cursor position is calculated on the final string
    setTimeout(() => {
      const val = inputRef.current?.value || "";
      inputRef.current?.setSelectionRange(val.length, val.length);
    }, 50);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !searchTerm && value) {
      onChange("");
      setSearchTerm("");
      return;
    }

    if (e.key === "Enter") {
      e.nativeEvent.stopPropagation();
      return;
    }

    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') {
      e.currentTarget.select();
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      }
      // Focus the first option after a short delay to ensure it's rendered/visible
      setTimeout(() => {
        optionsRef.current[0]?.focus();
      }, 0);
    }
  };

  const handleOptionKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.nativeEvent.stopPropagation();
      onChange(filteredOptions[index]);
      setIsOpen(false);
      setSearchTerm("");
      inputRef.current?.focus();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (index + 1) % filteredOptions.length;
      optionsRef.current[nextIndex]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (index === 0) {
        inputRef.current?.focus();
      } else {
        const prevIndex = (index - 1 + filteredOptions.length) % filteredOptions.length;
        optionsRef.current[prevIndex]?.focus();
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
      inputRef.current?.focus();
    }
  };

  return (
    <Popover.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Popover.Trigger asChild>
        <div 
          className="relative w-[240px] h-[30px] bg-white border border-[#ccc] flex items-center pl-[8px] pr-[2px] cursor-pointer transition-colors"
          onClick={() => {
            inputRef.current?.focus();
          }}
        >
          <input
            ref={inputRef}
            type="text"
            className={`w-full h-full font-roboto text-[14px] outline-none border-none bg-transparent placeholder:opacity-100 selection:bg-[#373737] selection:text-white cursor-text ${
              !(isOpen || isFocused) && !value && placeholder === "All" ? "text-[#1A1A1A] placeholder:text-[#1A1A1A]" : "text-[#1A1A1A] placeholder:text-[#1A1A1A]"
            }`}
            placeholder={(isOpen || isFocused) ? "" : (value ? "" : placeholder)}
            value={searchTerm || value || ""}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              if (!isOpen) setIsOpen(true);
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleInputKeyDown}
          />
          <div className="flex items-center gap-1">
            {(value || searchTerm) && (
              <button
                onClick={handleClear}
                className="size-[20px] flex items-center justify-center hover:bg-[#F7F7F7] rounded-full transition-colors cursor-pointer"
              >
                <X className={`text-[#1A1A1A] ${searchTerm ? "size-3.5 stroke-[2.5px]" : "size-4 stroke-[2.5px]"}`} />
              </button>
            )}
            <div className="size-[20px] flex items-center justify-center">
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="transition-transform duration-200">
                <path d="M9 1L5 5L1 1H9Z" fill="#1A1A1A" />
              </svg>
            </div>
          </div>
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="start"
          sideOffset={-1}
          onOpenAutoFocus={(e) => e.preventDefault()}
          className="z-[10000] bg-white border border-[#CCCCCC] shadow-lg w-[240px] outline-none"
        >
          <div className="flex flex-col py-1 max-h-[224px] overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <button
                  key={option}
                  ref={(el) => (optionsRef.current[index] = el)}
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                    setSearchTerm("");
                    setTimeout(() => {
                      inputRef.current?.focus();
                    }, 0);
                  }}
                  onKeyDown={(e) => handleOptionKeyDown(e, index)}
                  className={`text-left text-[14px] font-normal text-[#1A1A1A] relative outline-none cursor-pointer flex items-center h-[36px] min-h-[36px] w-[calc(100%-2px)] ml-[1px] px-[16px] hover:bg-[#EAEAEA] focus:bg-[#EAEAEA] group ${
                    renderedValue === option 
                      ? "bg-[#FFFFFF] border-[2px] border-[#373737] px-[14px] -ml-[0px]" 
                      : "bg-white border-0"
                  }`}
                >
                  <span className={renderedValue === option ? "-ml-[2px]" : ""}>
                    {option}
                  </span>
                </button>
              ))
            ) : (
              <div className="px-4 py-3 text-[13px] text-[#666666] italic bg-white">
                No matching attributes found
              </div>
            )}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
