import React from "react";
import * as Popover from "@radix-ui/react-popover";

interface FilterMenuProps {
  trigger: React.ReactNode;
  activeOption: string;
  onOptionSelect: (option: string) => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const options = ["Is equal to", "Contains", "Starts with"];

export function FilterMenu({
  trigger,
  activeOption,
  onOptionSelect,
  isOpen,
  onOpenChange,
}: FilterMenuProps) {
  const [renderedOption, setRenderedOption] = React.useState(activeOption);

  React.useEffect(() => {
    if (isOpen) {
      setRenderedOption(activeOption);
    }
  }, [isOpen, activeOption]);

  return (
    <Popover.Root open={isOpen} onOpenChange={onOpenChange}>
      <Popover.Trigger asChild>
        {trigger}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="start"
          sideOffset={-1}
          onOpenAutoFocus={(e) => e.preventDefault()}
          className="z-[3000] bg-white border border-[#CCCCCC] shadow-lg min-w-[150px] outline-none"
        >
          <div className="flex flex-col py-1">
            {options.map((option, idx) => (
                <button
                  key={option}
                  onClick={() => {
                    onOptionSelect(option);
                    onOpenChange(false);
                  }}
                  className={`text-left text-[14px] font-normal text-[#1A1A1A] relative outline-none cursor-pointer flex items-center h-[36px] w-[calc(100%-2px)] ml-[1px] px-[16px] hover:bg-[#EAEAEA] group ${
                    renderedOption === option 
                      ? "bg-[#FFFFFF] border-[2px] border-[#373737] px-[14px]" 
                      : "bg-white border-0"
                  }`}
                >
                  <span className={`${renderedOption === option ? "-ml-[2px]" : ""}`}>
                    {option}
                  </span>
                </button>
            ))}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
