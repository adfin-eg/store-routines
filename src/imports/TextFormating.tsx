import svgPaths from "./svg-36puc3ib0h";

function Bold() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="bold">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="bold">
          <path d={svgPaths.p354fd080} fill="var(--fill-0, #424242)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <Bold />
    </div>
  );
}

function BaseButtonGroupFirstMedium() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center p-[7px] relative rounded-bl-[4px] rounded-tl-[4px] shrink-0" data-name="_Base Button Group - First / Medium" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.02) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.04) 100%), linear-gradient(90deg, rgb(245, 245, 245) 0%, rgb(245, 245, 245) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
      <Icon />
    </div>
  );
}

function ButtonGroupButtons() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-1px] relative shrink-0" data-name="ButtonGroup Buttons">
      <BaseButtonGroupFirstMedium />
    </div>
  );
}

function Italic() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="italic">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="italic">
          <path d={svgPaths.p1f5cd700} fill="var(--fill-0, #424242)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <Italic />
    </div>
  );
}

function BaseButtonGroupMiddleMedium() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center p-[7px] relative shrink-0" data-name="_Base Button Group - Middle / Medium" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.02) 100%), linear-gradient(90deg, rgb(245, 245, 245) 0%, rgb(245, 245, 245) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none" />
      <Icon1 />
    </div>
  );
}

function ButtonGroupButtons1() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-1px] relative shrink-0" data-name="ButtonGroup Buttons">
      <BaseButtonGroupMiddleMedium />
    </div>
  );
}

function Underline() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="underline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="underline">
          <g id="vector">
            <path d="M4 13H12V14H4V13Z" fill="var(--fill-0, #424242)" />
            <path d={svgPaths.p33a48b80} fill="var(--fill-0, #424242)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <Underline />
    </div>
  );
}

function BaseButtonGroupMiddleMedium1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center p-[7px] relative shrink-0" data-name="_Base Button Group - Middle / Medium" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.02) 100%), linear-gradient(90deg, rgb(245, 245, 245) 0%, rgb(245, 245, 245) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none" />
      <Icon2 />
    </div>
  );
}

function ButtonGroupButtons2() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-1px] relative shrink-0" data-name="ButtonGroup Buttons">
      <BaseButtonGroupMiddleMedium1 />
    </div>
  );
}

function Strikethrough() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="strikethrough">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="strikethrough">
          <path d={svgPaths.p2886dcf0} fill="var(--fill-0, #424242)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <Strikethrough />
    </div>
  );
}

function BaseButtonGroupLastMedium() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center p-[7px] relative rounded-br-[4px] rounded-tr-[4px] shrink-0" data-name="_Base Button Group - Last / Medium" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.02) 100%), linear-gradient(90deg, rgb(245, 245, 245) 0%, rgb(245, 245, 245) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
      <Icon3 />
    </div>
  );
}

function ButtonGroupButtons3() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-1px] relative shrink-0" data-name="ButtonGroup Buttons">
      <BaseButtonGroupLastMedium />
    </div>
  );
}

export default function TextFormating() {
  return (
    <div className="content-stretch flex items-start pr-px relative size-full" data-name="Text Formating">
      <ButtonGroupButtons />
      <ButtonGroupButtons1 />
      <ButtonGroupButtons2 />
      <ButtonGroupButtons3 />
    </div>
  );
}