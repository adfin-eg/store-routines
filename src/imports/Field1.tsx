function Paragraph() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[0] left-0 text-[#f4635b] text-[14px] top-0 w-[87px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[normal]">*</span>
        <span className="leading-[normal] text-[#666]">{` Model name`}</span>
      </p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white h-[30px] relative shrink-0 w-full" data-name="TextInput">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[10px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#1a1a1a] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Pepsi Max 0.33L
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function Field() {
  return (
    <div className="content-stretch flex flex-col gap-[2.5px] items-start relative size-full" data-name="Field1">
      <Paragraph />
      <TextInput />
    </div>
  );
}