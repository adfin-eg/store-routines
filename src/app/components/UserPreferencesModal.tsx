import React from "react";
import { motion as Motion, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";

interface UserPreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  showHeader: boolean;
  onToggleHeader: () => void;
}

export const UserPreferencesModal: React.FC<UserPreferencesModalProps> = ({ 
  isOpen, 
  onClose,
  showHeader,
  onToggleHeader
}) => {
  const [showBorder, setShowBorder] = React.useState(false);
  const [selectedColor, setSelectedColor] = React.useState("#1C7862");
  const contentRef = React.useRef<HTMLDivElement>(null);

  const predefinedColors = [
    { name: "Green", value: "#1C7862" },
    { name: "Blue", value: "#78d7fa" },
    { name: "Red", value: "#DA0025" },
    { name: "Navy", value: "#00346B" },
  ];

  React.useEffect(() => {
    const checkScroll = () => {
      if (contentRef.current) {
        const { scrollHeight, clientHeight } = contentRef.current;
        setShowBorder(scrollHeight > clientHeight);
      }
    };

    if (isOpen) {
      checkScroll();
      window.addEventListener("resize", checkScroll);
    }
    return () => window.removeEventListener("resize", checkScroll);
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[20000] flex items-start justify-center pt-[25vh]">
          {/* Backdrop */}
          <Motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40"
          />
          
          {/* Modal Container */}
          <Motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="bg-white flex flex-col items-start relative shadow-[0px_2px_15px_0px_rgba(0,0,0,0.3)] w-[450px] z-10"
            onKeyDown={handleKeyDown}
          >
            {/* Header */}
            <div className="bg-white flex items-center overflow-clip pb-[12px] pt-[16px] px-[30px] relative shrink-0 w-full">
              <h2 className="flex-1 text-[16px] font-bold text-[#1A1A1A] tracking-tight uppercase whitespace-nowrap">
                Preferences
              </h2>
            </div>

            {/* Content */}
            <div 
              ref={contentRef}
              className="relative shrink-0 w-full max-h-[60vh] overflow-y-auto custom-scrollbar"
            >
              <div className="flex flex-col items-start pb-[20px] px-[30px] relative w-full">
                
                {/* Show Header Toggle */}
                <div 
                  className="flex items-center justify-between group py-[10px] cursor-pointer select-none w-full"
                  onClick={onToggleHeader}
                >
                  <div className="flex-1 text-[14px] text-[#1A1A1A] leading-none font-normal font-roboto whitespace-nowrap">
                    Show application header
                  </div>
                  <div className={`w-[32px] h-[18px] rounded-full relative transition-colors duration-200 ${showHeader ? 'bg-[#595959]' : 'bg-[#CCCCCC]'}`}>
                    <div className={`absolute top-[2px] size-[14px] bg-white rounded-full transition-all duration-200 ${showHeader ? 'left-[16px]' : 'left-[2px]'}`} />
                  </div>
                </div>

                {/* Color Picker */}
                <div className="w-full mt-[20px]">
                  <h3 className="text-[14px] font-bold text-[#1A1A1A] leading-none font-roboto mb-[12px]">
                    UI color
                  </h3>
                  <div className="flex flex-wrap gap-[10px]">
                    {predefinedColors.map(color => (
                      <div 
                        key={color.value}
                        className="relative cursor-pointer group"
                        onClick={() => setSelectedColor(color.value)}
                        title={color.name}
                      >
                        <div 
                          className={`w-[28px] h-[28px] rounded-full transition-all ${
                            selectedColor === color.value 
                              ? 'ring-2 ring-[#1A1A1A] ring-offset-2' 
                              : 'ring-1 ring-[#CCCCCC] hover:ring-[#999999]'
                          }`}
                          style={{ backgroundColor: color.value }}
                        >
                          {selectedColor === color.value && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Check className="w-[14px] h-[14px] text-white drop-shadow-md" strokeWidth={3} />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Toolbar / Footer */}
            <div className={`bg-white ${showBorder ? "border-t border-[#CCCCCC]" : ""} relative shrink-0 w-full`}>
              <div className="flex flex-row items-center justify-end px-[20px] pb-[20px] pt-[10px] gap-[8px]">
                <button 
                  onClick={onClose}
                  className="h-[30px] px-[15px] flex items-center justify-center text-[13px] font-semibold uppercase tracking-[0px] rounded-full transition-colors leading-none font-roboto-condensed cursor-pointer bg-[#EAEAEA] text-[#1A1A1A] hover:bg-[#E0E0E0] whitespace-nowrap"
                >
                  cancel
                </button>
                <button 
                  onClick={onClose}
                  className="h-[30px] px-[15px] flex items-center justify-center text-[13px] font-semibold uppercase tracking-[0px] rounded-full transition-colors leading-none font-roboto-condensed cursor-pointer bg-[#1C7862] text-white hover:bg-[#248E73] border border-[#1C7862] hover:border-[#248E73] whitespace-nowrap"
                >
                  Save
                </button>
              </div>
            </div>
          </Motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};