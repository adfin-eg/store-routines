import React from "react";
import { useModified } from "@/app/contexts/ModifiedContext";

export function SecondaryButton({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="h-[30px] px-[15px] flex items-center justify-center text-[13px] font-bold uppercase tracking-[0px] rounded-full transition-colors leading-none font-roboto-condensed border-2 border-[#373737] text-[#1A1A1A] hover:bg-[#F4F6F7] cursor-pointer whitespace-nowrap"
    >
      {children}
    </button>
  );
}

export function DarkSecondaryButton({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="h-[30px] px-[15px] flex items-center justify-center text-[13px] font-semibold uppercase tracking-[0px] rounded-full transition-colors leading-none font-roboto-condensed bg-[#595959] text-[#ffffff] hover:bg-[#696969] cursor-pointer whitespace-nowrap"
    >
      {children}
    </button>
  );
}

export function TextInput({ defaultValue, className = "", onChange, id }: { defaultValue?: string, className?: string, onChange?: (val: string) => void, id?: string }) {
  const internalId = React.useId();
  const [value, setValue] = React.useState(defaultValue || "");
  const modified = useModified();

  React.useEffect(() => {
    setValue(defaultValue || "");
  }, [defaultValue]);

  return (
    <div className={`relative h-[30px] w-full ${className}`}>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onChange?.(e.target.value);
          modified?.notifyChange(id || internalId);
        }}
        className="selection:bg-[#373737] selection:text-white w-full h-full bg-white border border-[#ccc] px-[8px] text-[14px] text-[#1a1a1a] font-['Roboto',sans-serif] focus:outline-none focus:border-2 focus:border-[#373737] focus:ring-0"
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
      />
    </div>
  );
}

export function Checkbox({ label, defaultChecked = false, className = "", onChange, id }: { label: string, defaultChecked?: boolean, className?: string, onChange?: (val: boolean) => void, id?: string }) {
  const internalId = React.useId();
  const [checked, setChecked] = React.useState(defaultChecked);
  const modified = useModified();
  return (
    <div 
      className={`content-stretch flex gap-[10px] items-center py-[6px] pl-[2px] relative w-full cursor-pointer select-none group ${className}`}
      onClick={() => {
        const newVal = !checked;
        setChecked(newVal);
        onChange?.(newVal);
        modified?.notifyChange(id || internalId);
      }}
    >
      <div className={`relative shrink-0 size-[16px] transition-colors ${checked ? 'bg-[#595959]' : 'bg-white border border-[#ccc]'}`}>
        {checked && (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="size-[12px]" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 6L5 8.5L9.5 4" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
            </svg>
          </div>
        )}
      </div>
      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
        <p className="flex-[1_0_0] font-['Roboto',sans-serif] font-normal leading-[normal] min-h-px min-w-px relative text-[#1a1a1a] text-[14px] whitespace-pre-wrap">
          {label}
        </p>
      </div>
    </div>
  );
}

export function RadioButton({ label, checked = false, onChange, className = "", id }: { label: string, checked?: boolean, onChange?: () => void, className?: string, id?: string }) {
  const internalId = React.useId();
  const modified = useModified();
  return (
    <div 
      className={`content-stretch flex gap-[10px] items-center py-[6px] pl-[2px] relative w-full cursor-pointer select-none group ${className}`}
      onClick={() => {
        onChange?.();
        modified?.notifyChange(id || internalId);
      }}
    >
      <div className={`relative shrink-0 size-[16px] rounded-full transition-colors flex items-center justify-center ${checked ? 'bg-[#595959]' : 'bg-white border border-[#ccc]'}`}>
        {checked && (
          <div className="size-[6px] rounded-full bg-white" />
        )}
      </div>
      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
        <p className="flex-[1_0_0] font-['Roboto',sans-serif] font-normal leading-[normal] min-h-px min-w-px relative text-[#1a1a1a] text-[14px] whitespace-pre-wrap">
          {label}
        </p>
      </div>
    </div>
  );
}

export function SelectInput({ defaultValue, options = [], className = "", onChange, id }: { defaultValue?: string, options?: string[], className?: string, onChange?: (val: string) => void, id?: string }) {
  const internalId = React.useId();
  const [value, setValue] = React.useState(defaultValue || "");
  const modified = useModified();

  return (
    <div className={`relative h-[30px] w-full ${className}`}>
      <select
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onChange?.(e.target.value);
          modified?.notifyChange(id || internalId);
        }}
        className="appearance-none w-full h-full bg-white border border-[#ccc] px-[8px] pr-[30px] text-[14px] text-[#1a1a1a] font-['Roboto',sans-serif] focus:outline-none focus:border-2 focus:border-[#373737] cursor-pointer"
      >
        {defaultValue && !options.includes(defaultValue) && <option value={defaultValue}>{defaultValue}</option>}
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute right-[2px] top-1/2 -translate-y-1/2 size-[20px] flex items-center justify-center">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="size-[10px]">
          <path d="M9 1L5 5L1 1H9Z" fill="#1A1A1A" />
        </svg>
      </div>
    </div>
  );
}



function Header() {
  return (
    <div className="content-stretch flex items-start overflow-clip pb-[10px] relative shrink-0 w-[240px]" data-name="Header 1">
      <p className="flex-[1_0_0] font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[19px] min-h-px min-w-px relative text-[#1a1a1a] text-[16px] uppercase whitespace-pre-wrap">serial number</p>
    </div>
  );
}

function Input({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="absolute inset-[19px_0_10px_0]" data-name="Input">
      <SelectInput defaultValue={defaultValue || "UPC"} options={["UPC", "EAN", "GTIN", "SKU"]} />
    </div>
  );
}

function Field1() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Field">
      <p className="absolute pointer-events-none font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Serial number type
      </p>
      <Input />
    </div>
  );
}

function Field() {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Field">
      <Field1 />
    </div>
  );
}

export function FieldsetSerialNumber() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Fieldset/Serial number">
      <Header />
      <Field />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex items-start overflow-clip pb-[10px] relative shrink-0 w-[240px]" data-name="Header 1">
      <p className="flex-[1_0_0] font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[19px] min-h-px min-w-px relative text-[#1a1a1a] text-[16px] uppercase whitespace-pre-wrap">product classification</p>
    </div>
  );
}

function Input1({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="absolute inset-[19px_0_10px_0]" data-name="Input">
      <TextInput defaultValue={defaultValue} />
    </div>
  );
}

function Field2() {
  return (
    <div className="h-[61px] overflow-clip relative shrink-0 w-[240px]" data-name="Field">
      <p className="absolute pointer-events-none font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        EN standard
      </p>
      <Input1 />
    </div>
  );
}

function Input2({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="absolute inset-[19px_0_10px_0]" data-name="Input">
      <TextInput defaultValue={defaultValue} />
    </div>
  );
}

function Field3() {
  return (
    <div className="h-[61px] overflow-clip relative shrink-0 w-[240px]" data-name="Field">
      <p className="absolute pointer-events-none font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Environment label
      </p>
      <Input2 />
    </div>
  );
}

function Input3({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="absolute inset-[19px_0_10px_0]" data-name="Input">
      <TextInput defaultValue={defaultValue} />
    </div>
  );
}

function Field4() {
  return (
    <div className="h-[61px] overflow-clip relative shrink-0 w-[240px]" data-name="Field">
      <p className="absolute pointer-events-none font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        ADR classification
      </p>
      <Input3 />
    </div>
  );
}

function Input4({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="absolute inset-[19px_0_10px_0]" data-name="Input">
      <SelectInput defaultValue={defaultValue || "Food"} options={["Food", "Non-Food", "Textiles", "Electronics"]} />
    </div>
  );
}

function Field5({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="h-[61px] overflow-clip relative shrink-0 w-[240px]" data-name="Field">
      <p className="absolute pointer-events-none font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Item area
      </p>
      <Input4 defaultValue={defaultValue} />
    </div>
  );
}

function Input5({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="absolute inset-[19px_0_10px_0]" data-name="Input">
      <SelectInput defaultValue={defaultValue || "Eat & drink"} options={["Eat & drink", "Household", "Personal care", "Pet food"]} />
    </div>
  );
}

function Field6({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="h-[61px] overflow-clip relative shrink-0 w-[240px]" data-name="Field">
      <p className="absolute pointer-events-none font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Item group
      </p>
      <Input5 defaultValue={defaultValue} />
    </div>
  );
}

function Input6({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="absolute inset-[19px_0_10px_0]" data-name="Input">
      <SelectInput defaultValue={defaultValue || "Drink"} options={["Drink", "Meat", "Vegetables", "Fruit", "Dairy"]} />
    </div>
  );
}

function Field7({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="h-[61px] overflow-clip relative shrink-0 w-[240px]" data-name="Field">
      <p className="absolute pointer-events-none font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Item subgroup
      </p>
      <Input6 defaultValue={defaultValue} />
    </div>
  );
}

function Selector() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="Selector">
      <Checkbox label="Healthy" />
    </div>
  );
}

function Selector2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="Selector">
      <Checkbox label="Ecological" />
    </div>
  );
}

function Selector4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="Selector">
      <Checkbox label="Environmentally friendly" />
    </div>
  );
}

function Selector6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="Selector">
      <Checkbox label="Dangerous goods" />
    </div>
  );
}

export function FieldsetProductClassification({ item }: { item?: any }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Fieldset/Product classification">
      <Header1 />
      <Field2 />
      <Field3 />
      <Field4 />
      <Field5 defaultValue={item?.itemArea || "Food"} />
      <Field6 defaultValue={item?.itemGroup || "Eat & drink"} />
      <Field7 defaultValue={item?.itemSubGroup || "Drink"} />
      <Selector />
      <Selector2 />
      <Selector4 />
      <Selector6 />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex items-start overflow-clip pb-[10px] relative shrink-0 w-[240px]" data-name="Header 1">
      <p className="flex-[1_0_0] font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[19px] min-h-px min-w-px relative text-[#1a1a1a] text-[16px] uppercase whitespace-pre-wrap">related items</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-start pb-[10px] relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        Item has no relations
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 py-2" data-name="Button">
      <DarkSecondaryButton>view all</DarkSecondaryButton>
    </div>
  );
}

function Button() {
  return (
    <Button1 />
  );
}

export function FieldsetRelatedItems({ hideActions = false }: { hideActions?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Fieldset/Related items">
      <Header2 />
      <Frame5 />
      {!hideActions && <Button />}
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex items-start overflow-clip pb-[10px] relative shrink-0 w-[240px]" data-name="Header 1">
      <p className="flex-[1_0_0] font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[19px] min-h-px min-w-px relative text-[#1a1a1a] text-[16px] uppercase whitespace-pre-wrap">season</p>
    </div>
  );
}

function Input7({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="absolute inset-[19px_0_10px_0]" data-name="Input">
      <SelectInput defaultValue={defaultValue || "Summer"} options={["Summer", "Winter", "Spring", "Autumn"]} />
    </div>
  );
}

function Field9() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Field">
      <p className="absolute pointer-events-none font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Season
      </p>
      <Input7 />
    </div>
  );
}

function Field8() {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Field">
      <Field9 />
    </div>
  );
}

function Input8({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="absolute inset-[19px_0_10px_0]" data-name="Input">
      <SelectInput defaultValue={defaultValue || "01"} options={["01", "02", "03", "04"]} />
    </div>
  );
}

function Field11() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Field">
      <p className="absolute pointer-events-none font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Season code
      </p>
      <Input8 />
    </div>
  );
}

function Field10() {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Field">
      <Field11 />
    </div>
  );
}

function Input9({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="absolute inset-[19px_0_10px_0]" data-name="Input">
      <SelectInput defaultValue={defaultValue || "Q1"} options={["Q1", "Q2", "Q3", "Q4"]} />
    </div>
  );
}

function Field13() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Field">
      <p className="absolute pointer-events-none font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Quarter code
      </p>
      <Input9 />
    </div>
  );
}

function Field12() {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Field">
      <Field13 />
    </div>
  );
}

function Selector8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="Selector">
      <Checkbox label="All seasons" />
    </div>
  );
}

export function FieldsetSeason() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Fieldset/Season">
      <Header3 />
      <Field8 />
      <Field10 />
      <Field12 />
      <Selector8 />
    </div>
  );
}

function FourthRow() {
  return (
    <div className="content-stretch flex gap-[60px] items-start relative shrink-0" data-name="Fourth row">
      <FieldsetSerialNumber />
      <FieldsetProductClassification />
      <FieldsetRelatedItems />
      <FieldsetSeason />
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex items-start overflow-clip pb-[10px] relative shrink-0 w-[240px]" data-name="Header 1">
      <p className="flex-[1_0_0] font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[19px] min-h-px min-w-px relative text-[#1a1a1a] text-[16px] uppercase whitespace-pre-wrap">food</p>
    </div>
  );
}

function Input10({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="absolute inset-[19px_0_10px_0]" data-name="Input">
      <SelectInput defaultValue={defaultValue || "NO - Norway"} options={["NO - Norway", "SE - Sweden", "DK - Denmark", "FI - Finland", "DE - Germany"]} />
    </div>
  );
}

function Field14() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Field">
      <p className="absolute pointer-events-none font-['Roboto:Regular',sans-serif] font-normal leading-[0] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[normal] text-[#f4635b]">{`* `}</span>
        <span className="leading-[normal]">Country of origin</span>
      </p>
      <Input10 />
    </div>
  );
}

function CountryOfOrigin() {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Country of origin">
      <Field14 />
    </div>
  );
}

function Input11({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="absolute inset-[19px_0_10px_0]" data-name="Input">
      <TextInput defaultValue={defaultValue} />
    </div>
  );
}

function ShelfLife() {
  return (
    <div className="h-[61px] overflow-clip relative shrink-0 w-[240px]" data-name="Shelf life">
      <p className="absolute pointer-events-none font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Shelf life (days)
      </p>
      <Input11 defaultValue="60" />
    </div>
  );
}

function Input12({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="absolute inset-[19px_0_10px_0]" data-name="Input">
      <SelectInput defaultValue={defaultValue || "1-Frysevare"} options={["1-Frysevare", "2-Kjølevare", "3-Tørrvare"]} />
    </div>
  );
}

function Field15() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Field">
      <p className="absolute pointer-events-none font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Scale label
      </p>
      <Input12 />
    </div>
  );
}

function ScaleLabel() {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Scale label">
      <Field15 />
    </div>
  );
}

function Selector10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="Self-service weights">
      <Checkbox label="Self-service weights" />
    </div>
  );
}

function SelfServiceWeights() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="Self-service weights">
      <Selector10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-start pb-[5px] pt-[10px] relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        allergens
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="relative shrink-0 text-[#666] w-[240px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contains
      </p>
      <p className="relative shrink-0 text-[#1a1a1a] w-[240px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        &nbsp;
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="relative shrink-0 text-[#666] w-[240px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Might contain
      </p>
      <p className="relative shrink-0 text-[#1a1a1a] w-[240px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        &nbsp;
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="relative shrink-0 text-[#666] w-[240px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Undefined
      </p>
      <p className="relative shrink-0 text-[#1a1a1a] w-[240px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        &nbsp;
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[8px] items-start leading-[normal] pb-[10px] relative shrink-0 text-[14px] whitespace-pre-wrap p-[0px]">
      <Frame />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 py-2" data-name="Button">
      <DarkSecondaryButton>edit allegrens</DarkSecondaryButton>
    </div>
  );
}

function Button2() {
  return (
    <Button3 />
  );
}

function Allergens({ hideActions }: { hideActions?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start pb-[10px] relative shrink-0" data-name="Allergens">
      <Frame11 />
      <Frame8 />
      {!hideActions && <Button2 />}
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-start pb-[5px] pt-[10px] relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        nutrition
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-start leading-[normal] left-0 text-[14px] top-0">
      <p className="relative shrink-0 text-[#1a1a1a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Energy (kJ)
      </p>
      <p className="relative shrink-0 text-[#999] w-[240px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        .................................................................
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-end left-[200px] top-0 w-[40px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1a1a1a] text-[14px] text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        979
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-[240px]">
      <Frame15 />
      <Frame14 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-start leading-[normal] left-0 text-[14px] top-0">
      <p className="relative shrink-0 text-[#1a1a1a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Energy (kcal)
      </p>
      <p className="relative shrink-0 text-[#999] w-[240px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        .................................................................
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-end left-[200px] top-0 w-[40px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1a1a1a] text-[14px] text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        235
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-[240px]">
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex items-start left-0 top-0">
      <p className="leading-[0] relative shrink-0 text-[#1a1a1a] text-[0px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Fats
        </span>
        <span className="leading-[normal]">{`, `}</span>
        <span className="leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>
          total
        </span>
      </p>
      <p className="leading-[normal] relative shrink-0 text-[#999] w-[240px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        .................................................................
      </p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[3px] items-center justify-end leading-[normal] left-[200px] text-[#1a1a1a] text-right top-0 w-[40px]">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        14
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        g
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="font-['Roboto:Regular',sans-serif] font-normal h-[16px] overflow-clip relative shrink-0 text-[14px] w-[240px]">
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute content-stretch flex items-start left-0 top-0">
      <p className="leading-[0] relative shrink-0 text-[#1a1a1a] text-[0px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>
          - of this saturated fatty acid
        </span>
        <span className="leading-[normal]">{` `}</span>
      </p>
      <p className="leading-[normal] relative shrink-0 text-[#999] w-[240px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        .................................................................
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[3px] items-center justify-end leading-[normal] left-[200px] text-[#1a1a1a] text-right top-0 w-[40px]">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        3,9
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        g
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="font-['Roboto:Regular',sans-serif] font-normal h-[16px] overflow-clip relative shrink-0 text-[14px] w-[240px]">
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-start leading-[normal] left-0 text-[14px] top-[16px]">
      <p className="relative shrink-0 text-[#1a1a1a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        acid
      </p>
      <p className="relative shrink-0 text-[#999] w-[240px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        .................................................................
      </p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute content-stretch flex items-start left-0 top-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1a1a1a] text-[14px] w-[200px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        - of this monounsaturated fatty
      </p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute bg-white content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[3px] items-start justify-end leading-[normal] left-[200px] text-[#1a1a1a] text-[14px] text-right top-[16px] w-[40px]">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        10,1
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        g
      </p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-[240px]">
      <Frame26 />
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute content-stretch flex items-start left-0 top-0">
      <p className="leading-[0] relative shrink-0 text-[#1a1a1a] text-[0px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Carbohydrates
        </span>
        <span className="leading-[normal]">{`, `}</span>
        <span className="leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>
          total
        </span>
      </p>
      <p className="leading-[normal] relative shrink-0 text-[#999] w-[240px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        .................................................................
      </p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[3px] items-center justify-end leading-[normal] left-[200px] text-[#1a1a1a] text-right top-0 w-[40px]">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        17,0
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        g
      </p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="font-['Roboto:Regular',sans-serif] font-normal h-[16px] overflow-clip relative shrink-0 text-[14px] w-[240px]">
      <Frame30 />
      <Frame31 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute content-stretch flex items-start left-0 top-0">
      <p className="relative shrink-0 text-[#1a1a1a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        - of this saccharides
      </p>
      <p className="relative shrink-0 text-[#999] w-[240px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        .................................................................
      </p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[3px] items-center justify-end left-[200px] text-[#1a1a1a] text-right top-0 w-[40px]">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        3,6
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        g
      </p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="font-['Roboto:Regular',sans-serif] font-normal h-[16px] leading-[normal] overflow-clip relative shrink-0 text-[14px] w-[240px]">
      <Frame33 />
      <Frame34 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute content-stretch flex items-start left-0 top-0">
      <p className="relative shrink-0 text-[#1a1a1a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        - of this starch
      </p>
      <p className="relative shrink-0 text-[#999] w-[240px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        .................................................................
      </p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[3px] items-center justify-end left-[200px] text-[#1a1a1a] text-right top-0 w-[40px]">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        13,4
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        g
      </p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="font-['Roboto:Regular',sans-serif] font-normal h-[16px] leading-[normal] overflow-clip relative shrink-0 text-[14px] w-[240px]">
      <Frame36 />
      <Frame37 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute content-stretch flex items-start left-0 top-0">
      <p className="relative shrink-0 text-[#1a1a1a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fiber
      </p>
      <p className="relative shrink-0 text-[#999] w-[240px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        .................................................................
      </p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[3px] items-center justify-end left-[200px] text-[#1a1a1a] text-right top-0 w-[40px]">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        19,0
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        g
      </p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="font-['Roboto:Regular',sans-serif] font-normal h-[16px] leading-[normal] overflow-clip relative shrink-0 text-[14px] w-[240px]">
      <Frame39 />
      <Frame40 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute content-stretch flex items-start left-0 top-0">
      <p className="relative shrink-0 text-[#1a1a1a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Proteins
      </p>
      <p className="relative shrink-0 text-[#999] w-[240px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        .................................................................
      </p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[3px] items-center justify-end left-[200px] text-[#1a1a1a] text-right top-0 w-[40px]">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        10,0
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        g
      </p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="font-['Roboto:Regular',sans-serif] font-normal h-[16px] leading-[normal] overflow-clip relative shrink-0 text-[14px] w-[240px]">
      <Frame42 />
      <Frame43 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute content-stretch flex items-start left-0 top-0">
      <p className="relative shrink-0 text-[#1a1a1a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Salt
      </p>
      <p className="relative shrink-0 text-[#999] w-[240px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        .................................................................
      </p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[3px] items-center justify-end left-[200px] text-[#1a1a1a] text-right top-0 w-[40px]">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        0,9
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        g
      </p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="font-['Roboto:Regular',sans-serif] font-normal h-[16px] leading-[normal] overflow-clip relative shrink-0 text-[14px] w-[240px]">
      <Frame45 />
      <Frame46 />
    </div>
  );
}

function NutritionComponent() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[10px] relative shrink-0" data-name="Nutrition component">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#666] text-[14px] w-[240px] whitespace-pre-wrap mb-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nutritional contents per 100 g
      </p>
      <Frame13 />
      <Frame16 />
      <Frame38 />
      <Frame41 />
      <Frame44 />
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 py-2" data-name="Button">
      <DarkSecondaryButton>edit nutrition</DarkSecondaryButton>
    </div>
  );
}

function Button4() {
  return (
    <Button5 />
  );
}

function Nutrition({ hideActions }: { hideActions?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start pb-[10px] relative shrink-0" data-name="Nutrition">
      <Frame12 />
      <NutritionComponent />
      {!hideActions && <Button4 />}
    </div>
  );
}

export function FieldsetFood({ hideActions = false }: { hideActions?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Fieldset">
      <Header4 />
      <CountryOfOrigin />
      <ShelfLife />
      <ScaleLabel />
      <SelfServiceWeights />
      <Allergens hideActions={hideActions} />
      <Nutrition hideActions={hideActions} />
    </div>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex items-start overflow-clip pb-[10px] relative shrink-0 w-[240px]" data-name="Header 1">
      <p className="flex-[1_0_0] font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[19px] min-h-px min-w-px relative text-[#1a1a1a] text-[16px] uppercase whitespace-pre-wrap">Product information</p>
    </div>
  );
}

function Selector11() {
  return (
    <div className="content-stretch flex gap-[10px] items-start pb-[15px] pt-[5px] relative shrink-0 w-[240px]" data-name="Selector">
      <Checkbox label="Publish to web" />
    </div>
  );
}

function FieldNormal() {
  return (
    <div className="bg-white relative shrink-0 w-full min-h-[100px]" data-name="Field / Normal">
      <textarea 
        className="selection:bg-[#373737] selection:text-white w-full h-[100px] border border-[#ccc] p-2 text-[14px] text-[#1a1a1a] font-['Roboto',sans-serif] focus:outline-none focus:border-2 focus:border-[#373737]"
        defaultValue=""
      />
    </div>
  );
}

export function BigTextField() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[10px] relative shrink-0 w-full" data-name="Big text field">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#666] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Product features
      </p>
      <FieldNormal />
    </div>
  );
}

function FieldNormal1() {
  return (
    <div className="bg-white relative shrink-0 w-full min-h-[100px]" data-name="Field / Normal">
      <textarea 
        className="selection:bg-[#373737] selection:text-white w-full h-[100px] border border-[#ccc] p-2 text-[14px] text-[#1a1a1a] font-['Roboto',sans-serif] focus:outline-none focus:border-2 focus:border-[#373737]"
        defaultValue=""
      />
    </div>
  );
}

export function BigTextField1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[10px] relative shrink-0 w-full" data-name="Big text field">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#666] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Advertisement information
      </p>
      <FieldNormal1 />
    </div>
  );
}

function FieldNormal2() {
  return (
    <div className="bg-white relative shrink-0 w-full min-h-[100px]" data-name="Field / Normal">
      <textarea 
        className="selection:bg-[#373737] selection:text-white w-full h-[100px] border border-[#ccc] p-2 text-[14px] text-[#1a1a1a] font-['Roboto',sans-serif] focus:outline-none focus:border-2 focus:border-[#373737]"
        defaultValue=""
      />
    </div>
  );
}

export function BigTextField2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[10px] relative shrink-0 w-full" data-name="Big text field">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#666] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Technical information
      </p>
      <FieldNormal2 />
    </div>
  );
}

function FieldNormal3() {
  return (
    <div className="bg-white relative shrink-0 w-full min-h-[100px]" data-name="Field / Normal">
      <textarea 
        className="selection:bg-[#373737] selection:text-white w-full h-[100px] border border-[#ccc] p-2 text-[14px] text-[#1a1a1a] font-['Roboto',sans-serif] focus:outline-none focus:border-2 focus:border-[#373737]"
        defaultValue=""
      />
    </div>
  );
}

function BigTextField3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[10px] relative shrink-0 w-full" data-name="Big text field">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#666] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Weight declaration
      </p>
      <FieldNormal3 />
    </div>
  );
}

export function FieldsetProductInformation() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Fieldset/Product information">
      <Header5 />
      <Selector11 />
      <BigTextField />
      <BigTextField1 />
      <BigTextField2 />
      <BigTextField3 />
    </div>
  );
}

function SixthRow() {
  return (
    <div className="content-stretch flex gap-[60px] items-start relative shrink-0" data-name="Sixth row">
      <Fieldset />
      <FieldsetProductInformation />
    </div>
  );
}

export default function Fieldsets() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[30px] relative size-full" data-name="Fieldsets">
      <FourthRow />
      <SixthRow />
    </div>
  );
}