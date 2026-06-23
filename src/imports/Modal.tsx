function ModalHeader() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip pb-[20px] pt-[16px] px-[30px] relative shrink-0 w-[300px]" data-name="// Modal: Header">
      <p className="flex-[1_0_0] font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[19px] min-h-px min-w-px relative text-[#1a1a1a] text-[16px] uppercase whitespace-pre-wrap">New item</p>
    </div>
  );
}

function Ellipse() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Ellipse">
      <div className="absolute inset-[-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Ellipse">
            <rect height="17" rx="8.5" stroke="var(--stroke-0, #B3B3B3)" width="17" x="0.5" y="0.5" />
            <circle cx="9" cy="9" fill="var(--fill-0, #808080)" id="Ellipse_2" r="5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Selector() {
  return (
    <div className="content-stretch flex gap-[10px] items-start pb-[10px] relative shrink-0 w-[240px]" data-name="Selector">
      <Ellipse />
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px relative text-[#1a1a1a] text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Generate GTIN
      </p>
    </div>
  );
}

function Ellipse1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Ellipse">
      <div className="absolute inset-[-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Ellipse">
            <rect fill="var(--fill-0, #F4F5F6)" height="17" rx="8.5" width="17" x="0.5" y="0.5" />
            <rect height="17" rx="8.5" stroke="var(--stroke-0, #B3B3B3)" width="17" x="0.5" y="0.5" />
            <circle cx="9" cy="9" fill="var(--fill-0, #F4F5F6)" id="Ellipse_2" r="5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Selector1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start pb-[10px] relative shrink-0 w-[240px]" data-name="Selector">
      <Ellipse1 />
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px relative text-[#1a1a1a] text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Enter GTIN
      </p>
    </div>
  );
}

function RadioButtonGroup() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[10px] pt-[8px] relative shrink-0 w-full" data-name="Radio button group">
      <Selector />
      <Selector1 />
    </div>
  );
}

function FieldLabel() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[3px] items-start leading-[normal] relative shrink-0 text-[14px] w-full" data-name="// Field label">
      <p className="relative shrink-0 text-[#f4635b]" style={{ fontVariationSettings: "'wdth' 100" }}>
        *
      </p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#666] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Item name
      </p>
    </div>
  );
}

function Input() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Input">
      <div className="absolute bg-white border border-[#e58108] border-solid inset-0" data-name="Field" />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[8px_10px_7px_10px] leading-[normal] text-[#1a1a1a] text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        &nbsp;
      </p>
    </div>
  );
}

function TextField() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start pb-[10px] relative shrink-0 w-full" data-name="Text field 7">
      <FieldLabel />
      <Input />
    </div>
  );
}

function FieldLabel1() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[3px] items-start leading-[normal] relative shrink-0 text-[14px] w-full" data-name="// Field label">
      <p className="relative shrink-0 text-[#f4635b]" style={{ fontVariationSettings: "'wdth' 100" }}>
        *
      </p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#666] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Item group
      </p>
    </div>
  );
}

function ActionIcon() {
  return (
    <div className="-translate-y-1/2 absolute right-[6px] size-[20px] top-1/2" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="4" id="mask0_9_1588" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="8" x="6" y="8">
            <path d="M14 8L10 12L6 8H14Z" fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_9_1588)">
            <rect fill="var(--fill-0, #666666)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[32px] relative shrink-0 w-full" data-name="Input">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[8px_10px_7px_10px] leading-[normal] text-[#1a1a1a] text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          &nbsp;
        </p>
        <ActionIcon />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Field() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start pb-[10px] relative shrink-0 w-full" data-name="Field">
      <FieldLabel1 />
      <Input1 />
    </div>
  );
}

function FieldLabel2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="// Field label">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px relative text-[#666] text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Item subgroup
      </p>
    </div>
  );
}

function ActionIcon1() {
  return (
    <div className="-translate-y-1/2 absolute right-[6px] size-[20px] top-1/2" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="4" id="mask0_9_1588" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="8" x="6" y="8">
            <path d="M14 8L10 12L6 8H14Z" fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_9_1588)">
            <rect fill="var(--fill-0, #666666)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[32px] relative shrink-0 w-full" data-name="Input">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[8px_10px_7px_10px] leading-[normal] text-[#1a1a1a] text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          &nbsp;
        </p>
        <ActionIcon1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Field1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start pb-[10px] relative shrink-0 w-full" data-name="Field">
      <FieldLabel2 />
      <Input2 />
    </div>
  );
}

function FieldLabel3() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[3px] items-start leading-[normal] relative shrink-0 text-[14px] w-full" data-name="// Field label">
      <p className="relative shrink-0 text-[#f4635b]" style={{ fontVariationSettings: "'wdth' 100" }}>
        *
      </p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-[#666] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Supplier
      </p>
    </div>
  );
}

function ActionIcon2() {
  return (
    <div className="-translate-y-1/2 absolute right-[6px] size-[20px] top-1/2" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="4" id="mask0_9_1588" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="8" x="6" y="8">
            <path d="M14 8L10 12L6 8H14Z" fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_9_1588)">
            <rect fill="var(--fill-0, #666666)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white h-[32px] relative shrink-0 w-full" data-name="Input">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[8px_10px_7px_10px] leading-[normal] text-[#1a1a1a] text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          &nbsp;
        </p>
        <ActionIcon2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Field2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start pb-[10px] relative shrink-0 w-full" data-name="Field">
      <FieldLabel3 />
      <Input3 />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start pb-[20px] px-[30px] relative w-full">
        <RadioButtonGroup />
        <TextField />
        <Field />
        <Field1 />
        <Field2 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(51,51,51,0.8)] content-stretch flex h-[24px] items-center px-[12px] py-[5px] relative shrink-0" data-name="Button">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[14px] opacity-90 relative shrink-0 text-[#e5e5e5] text-[12px] text-center text-shadow-[0px_0px_4px_rgba(0,0,0,0.5)] uppercase">cancel</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_rgba(0,0,0,0.2)]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#e58108] content-stretch flex h-[24px] items-center px-[12px] py-[5px] relative shrink-0" data-name="Button">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[14px] opacity-90 relative shrink-0 text-[12px] text-center text-shadow-[0px_0px_4px_rgba(0,0,0,0.5)] text-white uppercase">Create</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_rgba(0,0,0,0.2)]" />
    </div>
  );
}

function Toolbar() {
  return (
    <div className="bg-[#666] relative shrink-0 w-full" data-name="Toolbar">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end px-[20px] py-[10px] relative w-full">
          <Button />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

export default function Modal() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="Modal">
      <ModalHeader />
      <Content />
      <Toolbar />
    </div>
  );
}