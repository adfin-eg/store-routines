import React, { useRef, useEffect, useState, useImperativeHandle, forwardRef, useCallback, useMemo } from "react";
import svgPaths from "../../imports/svg-36puc3ib0h";

interface NutritionField {
  id: number;
  label: string;
  value: string;
  indent?: boolean;
}

const NUTRITION_FIELDS_CONFIG: NutritionField[] = [
  { id: 1, label: "Energy kJ", value: "137,00" },
  { id: 2, label: "Energy kcal", value: "32,00" },
  { id: 3, label: "Fat", value: "0,40" },
  { id: 4, label: "of which saturated", value: "0,10", indent: true },
  { id: 5, label: "of which monounsaturated", value: "0,00", indent: true },
  { id: 6, label: "of which polyunsaturated", value: "0,00", indent: true },
  { id: 7, label: "Carbohydrates", value: "4,00" },
  { id: 8, label: "of which sugars", value: "4,00", indent: true },
  { id: 9, label: "of which polyols", value: "0,00", indent: true },
  { id: 10, label: "of which starch", value: "0,00", indent: true },
  { id: 11, label: "Dietary fiber", value: "0,00" },
  { id: 13, label: "Salt", value: "0,03" },
  { id: 12, label: "Protein", value: "2,30" },
];

const ALLERGEN_FIELDS_CONFIG = [
  "Wheat gluten", "Rye gluten", "Barley gluten", "Oat gluten", "Khorasan wheat", "Spelt gluten",
  "Crustaceans", "Egg", "Fish", "Soy", "Milk", "Nuts", "Almonds", "Hazelnuts",
  "Walnuts", "Cashew nuts", "Peanuts", "Pecan nuts", "Brazil nuts", "Pistachio nuts",
  "Macadamia nuts", "Celery", "Mustard", "Sesame seeds", "SO2/sulphite", "Lupin", "Molluscs"
];

function FormattingToolbar({ onCommand, resetKey }: { onCommand: (cmd: string) => void, resetKey: any }) {
  const [activeStates, setActiveStates] = React.useState<Record<string, boolean>>({
    bold: false,
    italic: false,
    underline: false,
    strikeThrough: false
  });

  useEffect(() => {
    setActiveStates({
      bold: false,
      italic: false,
      underline: false,
      strikeThrough: false
    });
  }, [resetKey]);

  const checkStates = React.useCallback(() => {
    setActiveStates({
      bold: document.queryCommandState('bold'),
      italic: document.queryCommandState('italic'),
      underline: document.queryCommandState('underline'),
      strikeThrough: document.queryCommandState('strikeThrough')
    });
  }, []);

  useEffect(() => {
    const handleSelectionChange = () => {
      checkStates();
    };
    document.addEventListener('selectionchange', handleSelectionChange);
    return () => document.removeEventListener('selectionchange', handleSelectionChange);
  }, [checkStates]);

  const handleAction = (e: React.MouseEvent, cmd: string) => {
    e.preventDefault(); // Prevent focus loss
    onCommand(cmd);
    checkStates();
  };

  const btnGroupClass = "content-stretch flex items-center justify-center mr-[-1px] relative shrink-0 cursor-pointer";
  const innerBaseClass = "content-stretch flex gap-[4px] items-center justify-center p-[7px] relative shrink-0";
  const borderOverlayClass = "absolute border border-[#CCCCCC] border-solid inset-0 pointer-events-none";

  const getBtnStyle = (isActive: boolean) => ({
    backgroundColor: isActive ? "#EAEAEA" : "#FFFFFF"
  });

  return (
    <div className="flex items-start mb-2" data-name="Text Formating">
      {/* Bold */}
      <div className={btnGroupClass} onMouseDown={(e) => handleAction(e, 'bold')}>
        <div className={`${innerBaseClass} rounded-bl-[4px] rounded-tl-[4px]`} style={getBtnStyle(activeStates.bold)}>
          <div className={`${borderOverlayClass} rounded-bl-[4px] rounded-tl-[4px]`} />
          <div className="relative shrink-0 size-[16px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.p354fd080} fill="#1A1A1A" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Italic */}
      <div className={btnGroupClass} onMouseDown={(e) => handleAction(e, 'italic')}>
        <div className={innerBaseClass} style={getBtnStyle(activeStates.italic)}>
          <div className={borderOverlayClass} />
          <div className="relative shrink-0 size-[16px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.p1f5cd700} fill="#1A1A1A" />
            </svg>
          </div>
        </div>
      </div>

      {/* Underline */}
      <div className={btnGroupClass} onMouseDown={(e) => handleAction(e, 'underline')}>
        <div className={`${innerBaseClass} rounded-br-[4px] rounded-tr-[4px]`} style={getBtnStyle(activeStates.underline)}>
          <div className={`${borderOverlayClass} rounded-br-[4px] rounded-tr-[4px]`} />
          <div className="relative shrink-0 size-[16px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d="M4 13H12V14H4V13Z" fill="#1A1A1A" />
              <path d={svgPaths.p33a48b80} fill="#1A1A1A" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

const SectionCard = ({ title, children, width = "360px", className = "", noScroll = false }: { title: string; children: React.ReactNode, width?: string, className?: string, noScroll?: boolean }) => (
  <div className={`flex flex-col bg-white pt-[20px] pb-0 px-0 m-0 shrink-0 h-full overflow-hidden ${className}`} style={{ width }}>
    <div className="text-[16px] font-bold text-[#1A1A1A] font-roboto-condensed mb-[10px] uppercase leading-[19px] shrink-0 px-[20px]">{title}</div>
    <div className={`flex-1 flex flex-col ${noScroll ? 'overflow-hidden' : 'overflow-y-auto custom-scrollbar'}`}>
      <div className={`px-[20px] pt-[4px] pb-[20px] flex flex-col ${noScroll ? 'flex-1 overflow-hidden' : 'min-h-full'}`}>
        {children}
      </div>
    </div>
  </div>
);

interface ItemDeclarationProps {
  onModified?: (count: number) => void;
}

export interface ItemDeclarationHandle {
  save: () => void;
  cancel: () => void;
}

export const ItemDeclaration = forwardRef<ItemDeclarationHandle, ItemDeclarationProps>(({ onModified }, ref) => {
  const editorRef = useRef<HTMLDivElement>(null);

  // Initial Configuration
  const initialWeight = `<b>SPARERIBS KRYDDADE</b><br><b>KALLA</b> Ingredienser: Spareribs (revben av gris 88%, vatten, salt, kryddor (<b>cayenne</b>, ingefära, paprika, peppar, spiskummin, vitlök, libbsticka, oregano antioxidationsmedel (E331,E316), druvsocker, konserveringsmedel E262, socker, lök, kryddextrakt, naturlig arom), grillsås (honung (<b>apelsinblom</b>), vatten, tomatpuré, socker, vinäger, SOYASÅS (SOJABÖNOR, <b>majsmjöl</b>, färgämne (sockerkulör)), salt, paprika, modifierad majsstärkelse, lök, <b>chilipeppar</b>, curry (gurkmeja, koriander, bockhornsklöver, dillfrö, nejlika, chili), konserveringsmedel (E202,E211), nejlika, rapsolja, extrakt av kryddor), grillkrydda (salt, paprika, dextrose, <b>majsmjöl</b>, socker, svartpeppar, <b>chilipeppar</b>, lök, vitlök, rosmarin, maltodextrin, jästextrakt, klumpförebyggande medel E551, färgämne (extrakt av paprika)) och rapsolja.`;
  const initialNutrition = useMemo(() => {
    const obj: Record<number, string> = {};
    NUTRITION_FIELDS_CONFIG.forEach(f => {
      obj[f.id] = f.value;
    });
    return obj;
  }, []);
  const initialAllergens = useMemo(() => {
    const obj: Record<string, string> = {};
    
    // Create a shuffled copy of labels to pick random ones for specific statuses
    const shuffledLabels = [...ALLERGEN_FIELDS_CONFIG].sort(() => Math.random() - 0.5);
    
    // Pick 3-5 "Contains"
    const containsCount = Math.floor(Math.random() * 3) + 3; // 3 to 5
    const containsLabels = shuffledLabels.slice(0, containsCount);
    
    // Pick 3-5 "Might contain"
    const mightContainCount = Math.floor(Math.random() * 3) + 3; // 3 to 5
    const mightContainLabels = shuffledLabels.slice(containsCount, containsCount + mightContainCount);
    
    const remainingLabels = shuffledLabels.slice(containsCount + mightContainCount);

    ALLERGEN_FIELDS_CONFIG.forEach(label => {
      if (containsLabels.includes(label)) {
        obj[label] = "Contains";
      } else if (mightContainLabels.includes(label)) {
        obj[label] = "Might contain";
      } else {
        // 50/50 for "Does not contain" and "Unknown"
        obj[label] = Math.random() > 0.5 ? "Does not contain" : "Unknown";
      }
    });
    return obj;
  }, []);

  // Saved State (represents the database state)
  const [savedWeight, setSavedWeight] = useState(initialWeight);
  const [savedNutrition, setSavedNutrition] = useState(initialNutrition);
  const [savedAllergens, setSavedAllergens] = useState(initialAllergens);

  // Current Working State
  const [weight, setWeight] = useState(initialWeight);
  const [nutrition, setNutrition] = useState(initialNutrition);
  const [allergens, setAllergens] = useState(initialAllergens);

  const modificationCount = useMemo(() => {
    let count = 0;
    
    // Check weight
    if (weight !== savedWeight) {
      count++;
    }
    
    // Check nutrition
    Object.keys(nutrition).forEach(key => {
      const id = parseInt(key);
      if (nutrition[id] !== savedNutrition[id]) {
        count++;
      }
    });

    // Check allergens
    Object.keys(allergens).forEach(key => {
      if (allergens[key] !== savedAllergens[key]) {
        count++;
      }
    });

    return count;
  }, [weight, nutrition, allergens, savedWeight, savedNutrition, savedAllergens]);

  useEffect(() => {
    onModified?.(modificationCount);
  }, [modificationCount, onModified]);

  useImperativeHandle(ref, () => ({
    save: () => {
      setSavedWeight(weight);
      setSavedNutrition(nutrition);
      setSavedAllergens(allergens);
    },
    cancel: () => {
      setWeight(savedWeight);
      setNutrition(savedNutrition);
      setAllergens(savedAllergens);
      if (editorRef.current) {
        editorRef.current.innerHTML = savedWeight;
      }
    }
  }));

  const handleWeightInput = (e: React.FormEvent<HTMLDivElement>) => {
    setWeight(e.currentTarget.innerHTML);
  };

  const handleNutritionChange = (id: number, value: string) => {
    setNutrition(prev => ({ ...prev, [id]: value }));
  };

  const handleAllergenChange = (label: string, value: string) => {
    setAllergens(prev => ({ ...prev, [label]: value }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement | HTMLDivElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') {
      if (editorRef.current && e.currentTarget === editorRef.current) {
        const range = document.createRange();
        range.selectNodeContents(editorRef.current);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
        e.preventDefault();
      } else if ('select' in e.currentTarget) {
        (e.currentTarget as any).select();
      }
    }
  };

  const handleFormatting = (command: string) => {
    document.execCommand(command, false);
    editorRef.current?.focus();
    if (editorRef.current) {
      setWeight(editorRef.current.innerHTML);
    }
  };

  const formatDecimal = (value: string | number) => {
    const num = typeof value === 'string' ? parseFloat(value.replace(',', '.')) : value;
    if (isNaN(num)) return value.toString();
    return num.toFixed(2).replace('.', ',');
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>, id: number) => {
    const formatted = formatDecimal(e.target.value);
    e.target.value = formatted;
    handleNutritionChange(id, formatted);
  };

  const inputClasses = "w-full h-full border border-[#CCCCCC] px-[8px] font-roboto text-[14px] text-[#1A1A1A] focus:outline-none focus:border-2 focus:border-[#373737] selection:bg-[#373737] selection:text-white bg-white";
  const dropdownClasses = "absolute inset-0 w-full h-full bg-white border border-[#CCCCCC] px-[8px] pr-[30px] font-roboto text-[14px] text-[#1A1A1A] appearance-none focus:outline-none focus:border-2 focus:border-[#373737] cursor-pointer";

  return (
    <div className="flex flex-row gap-[10px] p-[10px] h-full bg-[#F4F6F7] overflow-hidden">
      {/* Weight declaration Section */}
      <SectionCard title="Weight declaration" noScroll={true}>
        <FormattingToolbar onCommand={handleFormatting} resetKey={savedWeight} />
        <div 
          ref={editorRef}
          contentEditable
          spellCheck={false}
          onInput={handleWeightInput}
          onKeyDown={handleKeyDown}
          className="w-full flex-1 p-2 border border-[#CCCCCC] bg-white font-roboto text-[14px] text-[#1A1A1A] focus:outline-none selection:bg-[#373737] selection:text-white overflow-y-auto cursor-text custom-scrollbar"
          style={{ whiteSpace: 'pre-wrap' }}
          dangerouslySetInnerHTML={{ __html: savedWeight }}
        />
      </SectionCard>

      {/* Nutrition Section */}
      <SectionCard title="Nutrition">
        <div className="flex flex-col gap-1">
          {NUTRITION_FIELDS_CONFIG.map((field) => (
            <div key={field.id} className="flex items-center h-[30px] gap-0">
              <span className={`shrink-0 text-[14px] text-[#1A1A1A] font-roboto ${field.indent ? 'pl-4' : ''}`}>
                {field.label}
              </span>
              <div className="flex-1 min-w-[10px] h-full flex items-center px-[6px]">
                <div 
                  className="w-full mt-[8px] h-[1px]" 
                  style={{ 
                    backgroundImage: 'linear-gradient(to right, #1A1A1A 50%, transparent 50%)',
                    backgroundSize: '6px 1px',
                    backgroundRepeat: 'repeat-x'
                  }} 
                />
              </div>
              <div className="w-[100px] h-full relative shrink-0">
                <input 
                  type="text" 
                  onKeyDown={handleKeyDown}
                  onBlur={(e) => handleBlur(e, field.id)}
                  onChange={(e) => handleNutritionChange(field.id, e.target.value)}
                  className={`${inputClasses} text-right`}
                  value={nutrition[field.id]}
                />
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Allergens Section */}
      <SectionCard title="Allergens">
        <div className="flex flex-col gap-1">
          {ALLERGEN_FIELDS_CONFIG.map((label) => (
            <div key={label} className="flex items-center gap-0 h-[30px]">
              <span className="shrink-0 text-[14px] text-[#1A1A1A] font-roboto truncate">{label}</span>
              <div className="flex-1 min-w-[10px] h-full flex items-center px-[6px]">
                <div 
                  className="w-full mt-[8px] h-[1px]" 
                  style={{ 
                    backgroundImage: 'linear-gradient(to right, #1A1A1A 50%, transparent 50%)',
                    backgroundSize: '6px 1px',
                    backgroundRepeat: 'repeat-x'
                  }} 
                />
              </div>
              <div className="relative w-[180px] h-full shrink-0">
                <select 
                  className={dropdownClasses}
                  value={allergens[label]}
                  onChange={(e) => handleAllergenChange(label, e.target.value)}
                >
                  <option>Unknown</option>
                  <option>Contains</option>
                  <option>Does not contain</option>
                  <option>Might contain</option>
                </select>
                <div className="pointer-events-none absolute right-[4px] top-1/2 -translate-y-1/2 size-[20px] flex items-center justify-center">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M9 1L5 5L1 1H9Z" fill="#1A1A1A" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
});