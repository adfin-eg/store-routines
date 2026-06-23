import svgPaths from "./svg-16ystvll8u";

function Notifications24Px() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="notifications-24px 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="notifications-24px 1">
          <path d={svgPaths.p37ecce20} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ActionIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <path d="M14 9H6L10 13L14 9Z" fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Username() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[10px] relative shrink-0" data-name="Username">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-right text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Monika Aakvik
      </p>
      <ActionIcon />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center justify-center right-[4px] top-[11px]" data-name="Menu">
      <Notifications24Px />
      <Username />
    </div>
  );
}

function ContextUserStoreEtc() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="// Context , user store etc">
      <Menu />
    </div>
  );
}

function ViewedLevel() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Viewed level">
      <p className="font-['Roboto:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[24px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Store routines
      </p>
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="content-stretch flex gap-[15px] items-start justify-center pl-[30px] py-[10px] relative shrink-0" data-name="Breadcrumb">
      <ViewedLevel />
    </div>
  );
}

function BreadcrumbAndUserContext() {
  return (
    <div className="bg-[#558d69] content-stretch flex flex-col items-start overflow-clip pb-[10px] relative shrink-0 w-full" data-name="Breadcrumb and user context">
      <ContextUserStoreEtc />
      <Breadcrumb />
    </div>
  );
}

function TabRow() {
  return <div className="bg-[#558d69] h-[24px] shrink-0 w-full" data-name="Tab row" />;
}

function Header() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[2]" data-name="Header">
      <BreadcrumbAndUserContext />
      <TabRow />
    </div>
  );
}

function GridHeader() {
  return (
    <div className="bg-[#595959] h-[28px] overflow-clip relative shrink-0 w-[90px]" data-name="// Grid header">
      <div className="-translate-y-1/2 absolute bg-white h-[10px] right-[16px] top-[calc(50%+2px)] w-[2px]" />
      <div className="-translate-y-1/2 absolute bg-white h-[2px] right-[12px] top-[calc(50%+2px)] w-[10px]" />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function FilterRow() {
  return (
    <div className="bg-[#f4f6f7] h-[45px] relative shrink-0 w-[90px]" data-name="// Filter row">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_white,inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Cell() {
  return (
    <div className="bg-white h-[43px] relative shrink-0 w-[90px]" data-name="// Cell">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function ActionIcon1() {
  return (
    <div className="-translate-y-1/2 absolute right-[20px] size-[20px] top-[calc(50%+0.5px)]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="4" id="mask0_1_6573" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="2" y="8">
            <path d={svgPaths.p2d3e5d00} fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_1_6573)">
            <rect fill="var(--fill-0, #666666)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ActionIcon2() {
  return (
    <div className="-translate-y-1/2 absolute right-[50px] size-[20px] top-[calc(50%+0.5px)]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="14" id="mask0_1_6580" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="3" y="3">
            <path d={svgPaths.pda24580} fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_1_6580)">
            <rect fill="var(--fill-0, #666666)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Cell1() {
  return (
    <div className="bg-[#e8ecee] h-[43px] overflow-clip relative shrink-0 w-[90px]" data-name="// Cell">
      <ActionIcon1 />
      <ActionIcon2 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#b3b3b3,inset_0px_1px_0px_0px_#b3b3b3]" />
    </div>
  );
}

function Cell2() {
  return (
    <div className="bg-white h-[43px] relative shrink-0 w-[90px]" data-name="// Cell">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell3() {
  return (
    <div className="bg-white h-[43px] relative shrink-0 w-[90px]" data-name="// Cell">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell4() {
  return (
    <div className="bg-white h-[43px] relative shrink-0 w-[90px]" data-name="// Cell">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell5() {
  return (
    <div className="bg-white h-[43px] relative shrink-0 w-[90px]" data-name="// Cell">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell6() {
  return (
    <div className="bg-white h-[43px] relative shrink-0 w-[90px]" data-name="// Cell">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell7() {
  return (
    <div className="bg-white h-[43px] relative shrink-0 w-[90px]" data-name="// Cell">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell8() {
  return (
    <div className="bg-white h-[43px] relative shrink-0 w-[90px]" data-name="// Cell">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell9() {
  return (
    <div className="bg-white h-[43px] relative shrink-0 w-[90px]" data-name="// Cell">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell10() {
  return (
    <div className="bg-white h-[43px] relative shrink-0 w-[90px]" data-name="// Cell">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell11() {
  return (
    <div className="bg-white h-[43px] relative shrink-0 w-[90px]" data-name="// Cell">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell12() {
  return (
    <div className="bg-white h-[43px] relative shrink-0 w-[90px]" data-name="// Cell">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell13() {
  return (
    <div className="bg-white h-[43px] relative shrink-0 w-[90px]" data-name="// Cell">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell14() {
  return (
    <div className="bg-white h-[43px] relative shrink-0 w-[90px]" data-name="// Cell">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell15() {
  return (
    <div className="bg-white h-[43px] relative shrink-0 w-[90px]" data-name="// Cell">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell16() {
  return (
    <div className="bg-white h-[43px] relative shrink-0 w-[90px]" data-name="// Cell">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell17() {
  return (
    <div className="bg-white h-[43px] relative shrink-0 w-[90px]" data-name="// Cell">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell18() {
  return (
    <div className="bg-white h-[43px] relative shrink-0 w-[90px]" data-name="// Cell">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function GridTableColumn() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Grid (table) column">
      <GridHeader />
      <FilterRow />
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
      <Cell5 />
      <Cell6 />
      <Cell7 />
      <Cell8 />
      <Cell9 />
      <Cell10 />
      <Cell11 />
      <Cell12 />
      <Cell13 />
      <Cell14 />
      <Cell15 />
      <Cell16 />
      <Cell17 />
      <Cell18 />
    </div>
  );
}

function GridHeader1() {
  return (
    <div className="bg-[#595959] h-[28px] overflow-clip relative shrink-0 w-full" data-name="// Grid header">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[21.43%_11px_21.43%_10px] leading-[normal] overflow-hidden text-[13px] text-ellipsis text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        GTIN
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white flex-[1_0_0] h-[30px] min-h-px min-w-px relative" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ActionIcon3() {
  return (
    <div className="absolute left-[5px] size-[20px] top-[5px]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="15" id="mask0_1_6568" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="3" y="3">
            <path d={svgPaths.p25e92080} fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_1_6568)">
            <rect fill="var(--fill-0, #1A1A1A)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white relative shrink-0 size-[30px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ActionIcon3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FilterRow1() {
  return (
    <div className="bg-[#f4f6f7] h-[45px] relative shrink-0 w-full" data-name="// Filter row">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-end pb-[7px] px-[6px] relative size-full">
          <Input />
          <Frame5 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_white,inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Cell19() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">00000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell20() {
  return (
    <div className="bg-[#e8ecee] h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[11px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">00000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#b3b3b3,inset_0px_1px_0px_0px_#b3b3b3]" />
    </div>
  );
}

function Cell21() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">00000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell22() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">00000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell23() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">00000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell24() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">00000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell25() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">00000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell26() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">00000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell27() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">00000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell28() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">00000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell29() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">00000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell30() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">00000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell31() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">00000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell32() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">00000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell33() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">00000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell34() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">00000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell35() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">00000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell36() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">00000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell37() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">00000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function GridTableColumn1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[180px]" data-name="Grid (table) column">
      <GridHeader1 />
      <FilterRow1 />
      <Cell19 />
      <Cell20 />
      <Cell21 />
      <Cell22 />
      <Cell23 />
      <Cell24 />
      <Cell25 />
      <Cell26 />
      <Cell27 />
      <Cell28 />
      <Cell29 />
      <Cell30 />
      <Cell31 />
      <Cell32 />
      <Cell33 />
      <Cell34 />
      <Cell35 />
      <Cell36 />
      <Cell37 />
    </div>
  );
}

function GridHeader2() {
  return (
    <div className="bg-[#595959] h-[28px] overflow-clip relative shrink-0 w-full" data-name="// Grid header">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[21.43%_11px_21.43%_10px] leading-[normal] overflow-hidden text-[13px] text-ellipsis text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Item text
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[30px] min-h-px min-w-px relative" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ActionIcon4() {
  return (
    <div className="absolute left-[5px] size-[20px] top-[5px]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="15" id="mask0_1_6568" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="3" y="3">
            <path d={svgPaths.p25e92080} fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_1_6568)">
            <rect fill="var(--fill-0, #1A1A1A)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white relative shrink-0 size-[30px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ActionIcon4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FilterRow2() {
  return (
    <div className="bg-[#f4f6f7] h-[45px] relative shrink-0 w-full" data-name="// Filter row">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-end pb-[7px] px-[6px] relative size-full">
          <Input1 />
          <Frame6 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_white,inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] content-stretch flex items-start left-[12px] pb-px top-[13px]">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Item text</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#666]" />
    </div>
  );
}

function Cell38() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame2 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] content-stretch flex items-start left-[12px] pb-px top-[13px]">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Item text</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_#e58108]" />
    </div>
  );
}

function Cell39() {
  return (
    <div className="bg-[#e8ecee] h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame3 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#b3b3b3,inset_0px_1px_0px_0px_#b3b3b3]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] content-stretch flex items-start left-[12px] pb-px top-[13px]">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Item text</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#666]" />
    </div>
  );
}

function Cell40() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame4 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] content-stretch flex items-start left-[12px] pb-px top-[13px]">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Item text</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#666]" />
    </div>
  );
}

function Cell41() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame7 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] content-stretch flex items-start left-[12px] pb-px top-[13px]">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Item text</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#666]" />
    </div>
  );
}

function Cell42() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame8 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] content-stretch flex items-start left-[12px] pb-px top-[13px]">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Item text</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#666]" />
    </div>
  );
}

function Cell43() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame9 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] content-stretch flex items-start left-[12px] pb-px top-[13px]">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Item text</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#666]" />
    </div>
  );
}

function Cell44() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame10 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] content-stretch flex items-start left-[12px] pb-px top-[13px]">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Item text</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#666]" />
    </div>
  );
}

function Cell45() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame11 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] content-stretch flex items-start left-[12px] pb-px top-[13px]">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Item text</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#666]" />
    </div>
  );
}

function Cell46() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame12 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] content-stretch flex items-start left-[12px] pb-px top-[13px]">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Item text</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#666]" />
    </div>
  );
}

function Cell47() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame13 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] content-stretch flex items-start left-[12px] pb-px top-[13px]">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Item text</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#666]" />
    </div>
  );
}

function Cell48() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame14 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] content-stretch flex items-start left-[12px] pb-px top-[13px]">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Item text</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#666]" />
    </div>
  );
}

function Cell49() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame15 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] content-stretch flex items-start left-[12px] pb-px top-[13px]">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Item text</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#666]" />
    </div>
  );
}

function Cell50() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame16 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] content-stretch flex items-start left-[12px] pb-px top-[13px]">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Item text</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#666]" />
    </div>
  );
}

function Cell51() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame17 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] content-stretch flex items-start left-[12px] pb-px top-[13px]">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Item text</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#666]" />
    </div>
  );
}

function Cell52() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame18 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] content-stretch flex items-start left-[12px] pb-px top-[13px]">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Item text</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#666]" />
    </div>
  );
}

function Cell53() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame19 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] content-stretch flex items-start left-[12px] pb-px top-[13px]">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Item text</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#666]" />
    </div>
  );
}

function Cell54() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame20 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] content-stretch flex items-start left-[12px] pb-px top-[13px]">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Item text</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#666]" />
    </div>
  );
}

function Cell55() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame21 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.01)] content-stretch flex items-start left-[12px] pb-px top-[13px]">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Item text</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#666]" />
    </div>
  );
}

function Cell56() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame22 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function GridTableColumn2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[400px]" data-name="Grid (table) column">
      <GridHeader2 />
      <FilterRow2 />
      <Cell38 />
      <Cell39 />
      <Cell40 />
      <Cell41 />
      <Cell42 />
      <Cell43 />
      <Cell44 />
      <Cell45 />
      <Cell46 />
      <Cell47 />
      <Cell48 />
      <Cell49 />
      <Cell50 />
      <Cell51 />
      <Cell52 />
      <Cell53 />
      <Cell54 />
      <Cell55 />
      <Cell56 />
    </div>
  );
}

function GridHeader3() {
  return (
    <div className="bg-[#595959] h-[28px] overflow-clip relative shrink-0 w-full" data-name="// Grid header">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[21.43%_11px_21.43%_10px] leading-[normal] overflow-hidden text-[13px] text-ellipsis text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Assortment
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white flex-[1_0_0] h-[30px] min-h-px min-w-px relative" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ActionIcon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="4" id="mask0_1_6549" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="8" x="6" y="8">
            <path d="M14 8L10 12L6 8H14Z" fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_1_6549)">
            <rect fill="var(--fill-0, #333333)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-start pr-[4px] py-[4px] right-[7px] top-[calc(50%+1.5px)]">
      <ActionIcon5 />
    </div>
  );
}

function FilterRow3() {
  return (
    <div className="bg-[#f4f6f7] h-[45px] relative shrink-0 w-full" data-name="// Filter row">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-end pb-[7px] px-[6px] relative size-full">
          <Input2 />
          <Frame23 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_white,inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Cell57() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">A</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell58() {
  return (
    <div className="bg-[#e8ecee] h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[11px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">A</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#b3b3b3,inset_0px_1px_0px_0px_#b3b3b3]" />
    </div>
  );
}

function Cell59() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">A</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell60() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">A</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell61() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">A</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell62() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">A</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell63() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">A</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell64() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">A</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell65() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">A</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell66() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">A</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell67() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">A</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell68() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">A</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell69() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">A</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell70() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">A</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell71() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">A</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell72() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">A</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell73() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">A</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell74() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">A</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell75() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">A</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function GridTableColumn3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[180px]" data-name="Grid (table) column">
      <GridHeader3 />
      <FilterRow3 />
      <Cell57 />
      <Cell58 />
      <Cell59 />
      <Cell60 />
      <Cell61 />
      <Cell62 />
      <Cell63 />
      <Cell64 />
      <Cell65 />
      <Cell66 />
      <Cell67 />
      <Cell68 />
      <Cell69 />
      <Cell70 />
      <Cell71 />
      <Cell72 />
      <Cell73 />
      <Cell74 />
      <Cell75 />
    </div>
  );
}

function GridHeader4() {
  return (
    <div className="bg-[#595959] h-[28px] overflow-clip relative shrink-0 w-full" data-name="// Grid header">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[21.43%_11px_21.43%_10px] leading-[normal] overflow-hidden text-[13px] text-ellipsis text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Item group no.
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white flex-[1_0_0] h-[30px] min-h-px min-w-px relative" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ActionIcon6() {
  return (
    <div className="absolute left-[5px] size-[20px] top-[5px]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="15" id="mask0_1_6568" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="3" y="3">
            <path d={svgPaths.p25e92080} fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_1_6568)">
            <rect fill="var(--fill-0, #1A1A1A)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-white relative shrink-0 size-[30px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ActionIcon6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FilterRow4() {
  return (
    <div className="bg-[#f4f6f7] h-[45px] relative shrink-0 w-full" data-name="// Filter row">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-end pb-[7px] px-[6px] relative size-full">
          <Input3 />
          <Frame24 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_white,inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Cell76() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">0000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell77() {
  return (
    <div className="bg-[#e8ecee] h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[11px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">0000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#b3b3b3,inset_0px_1px_0px_0px_#b3b3b3]" />
    </div>
  );
}

function Cell78() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">0000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell79() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">0000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell80() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">0000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell81() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">0000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell82() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">0000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell83() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">0000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell84() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">0000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell85() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">0000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell86() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">0000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell87() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">0000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell88() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">0000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell89() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">0000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell90() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">0000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell91() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">0000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell92() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">0000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell93() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">0000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell94() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">0000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function GridTableColumn4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[180px]" data-name="Grid (table) column">
      <GridHeader4 />
      <FilterRow4 />
      <Cell76 />
      <Cell77 />
      <Cell78 />
      <Cell79 />
      <Cell80 />
      <Cell81 />
      <Cell82 />
      <Cell83 />
      <Cell84 />
      <Cell85 />
      <Cell86 />
      <Cell87 />
      <Cell88 />
      <Cell89 />
      <Cell90 />
      <Cell91 />
      <Cell92 />
      <Cell93 />
      <Cell94 />
    </div>
  );
}

function GridHeader5() {
  return (
    <div className="bg-[#595959] h-[28px] overflow-clip relative shrink-0 w-full" data-name="// Grid header">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[21.43%_11px_21.43%_10px] leading-[normal] overflow-hidden text-[13px] text-ellipsis text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Item group
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white flex-[1_0_0] h-[30px] min-h-px min-w-px relative" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ActionIcon7() {
  return (
    <div className="absolute left-[5px] size-[20px] top-[5px]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="15" id="mask0_1_6568" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="3" y="3">
            <path d={svgPaths.p25e92080} fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_1_6568)">
            <rect fill="var(--fill-0, #1A1A1A)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-white relative shrink-0 size-[30px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ActionIcon7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FilterRow5() {
  return (
    <div className="bg-[#f4f6f7] h-[45px] relative shrink-0 w-full" data-name="// Filter row">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-end pb-[7px] px-[6px] relative size-full">
          <Input4 />
          <Frame25 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_white,inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Cell95() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Item group</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell96() {
  return (
    <div className="bg-[#e8ecee] h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[11px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Item group</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#b3b3b3,inset_0px_1px_0px_0px_#b3b3b3]" />
    </div>
  );
}

function Cell97() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Item group</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell98() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Item group</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell99() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Item group</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell100() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Item group</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell101() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Item group</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell102() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Item group</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell103() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Item group</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell104() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Item group</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell105() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Item group</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell106() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Item group</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell107() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Item group</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell108() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Item group</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell109() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Item group</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell110() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Item group</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell111() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Item group</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell112() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Item group</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell113() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Item group</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function GridTableColumn5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[180px]" data-name="Grid (table) column">
      <GridHeader5 />
      <FilterRow5 />
      <Cell95 />
      <Cell96 />
      <Cell97 />
      <Cell98 />
      <Cell99 />
      <Cell100 />
      <Cell101 />
      <Cell102 />
      <Cell103 />
      <Cell104 />
      <Cell105 />
      <Cell106 />
      <Cell107 />
      <Cell108 />
      <Cell109 />
      <Cell110 />
      <Cell111 />
      <Cell112 />
      <Cell113 />
    </div>
  );
}

function GridHeader6() {
  return (
    <div className="bg-[#595959] h-[28px] overflow-clip relative shrink-0 w-full" data-name="// Grid header">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[21.43%_11px_21.43%_10px] leading-[normal] overflow-hidden text-[13px] text-ellipsis text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Item number
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-white flex-[1_0_0] h-[30px] min-h-px min-w-px relative" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ActionIcon8() {
  return (
    <div className="absolute left-[5px] size-[20px] top-[5px]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="15" id="mask0_1_6568" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="3" y="3">
            <path d={svgPaths.p25e92080} fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_1_6568)">
            <rect fill="var(--fill-0, #1A1A1A)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-white relative shrink-0 size-[30px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ActionIcon8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FilterRow6() {
  return (
    <div className="bg-[#f4f6f7] h-[45px] relative shrink-0 w-full" data-name="// Filter row">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-end pb-[7px] px-[6px] relative size-full">
          <Input5 />
          <Frame26 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_white,inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Cell114() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell115() {
  return (
    <div className="bg-[#e8ecee] h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[11px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#b3b3b3,inset_0px_1px_0px_0px_#b3b3b3]" />
    </div>
  );
}

function Cell116() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell117() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell118() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell119() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell120() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell121() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell122() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell123() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell124() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell125() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell126() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell127() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell128() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell129() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell130() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell131() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell132() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function GridTableColumn6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[180px]" data-name="Grid (table) column">
      <GridHeader6 />
      <FilterRow6 />
      <Cell114 />
      <Cell115 />
      <Cell116 />
      <Cell117 />
      <Cell118 />
      <Cell119 />
      <Cell120 />
      <Cell121 />
      <Cell122 />
      <Cell123 />
      <Cell124 />
      <Cell125 />
      <Cell126 />
      <Cell127 />
      <Cell128 />
      <Cell129 />
      <Cell130 />
      <Cell131 />
      <Cell132 />
    </div>
  );
}

function GridHeader7() {
  return (
    <div className="bg-[#595959] h-[28px] overflow-clip relative shrink-0 w-full" data-name="// Grid header">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[21.43%_11px_21.43%_10px] leading-[normal] overflow-hidden text-[13px] text-ellipsis text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Model no.
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-white flex-[1_0_0] h-[30px] min-h-px min-w-px relative" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ActionIcon9() {
  return (
    <div className="absolute left-[5px] size-[20px] top-[5px]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="15" id="mask0_1_6568" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="3" y="3">
            <path d={svgPaths.p25e92080} fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_1_6568)">
            <rect fill="var(--fill-0, #1A1A1A)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-white relative shrink-0 size-[30px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ActionIcon9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FilterRow7() {
  return (
    <div className="bg-[#f4f6f7] h-[45px] relative shrink-0 w-full" data-name="// Filter row">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-end pb-[7px] px-[6px] relative size-full">
          <Input6 />
          <Frame27 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_white,inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Cell133() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell134() {
  return (
    <div className="bg-[#e8ecee] h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[11px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#b3b3b3,inset_0px_1px_0px_0px_#b3b3b3]" />
    </div>
  );
}

function Cell135() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell136() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell137() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell138() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell139() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell140() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell141() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell142() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell143() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell144() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell145() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell146() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell147() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell148() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell149() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell150() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell151() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">000000</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function GridTableColumn7() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[180px]" data-name="Grid (table) column">
      <GridHeader7 />
      <FilterRow7 />
      <Cell133 />
      <Cell134 />
      <Cell135 />
      <Cell136 />
      <Cell137 />
      <Cell138 />
      <Cell139 />
      <Cell140 />
      <Cell141 />
      <Cell142 />
      <Cell143 />
      <Cell144 />
      <Cell145 />
      <Cell146 />
      <Cell147 />
      <Cell148 />
      <Cell149 />
      <Cell150 />
      <Cell151 />
    </div>
  );
}

function GridHeader8() {
  return (
    <div className="bg-[#595959] h-[28px] overflow-clip relative shrink-0 w-full" data-name="// Grid header">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[21.43%_11px_21.43%_10px] leading-[normal] overflow-hidden text-[13px] text-ellipsis text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Qty. in package
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Input7() {
  return (
    <div className="bg-white flex-[1_0_0] h-[30px] min-h-px min-w-px relative" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ActionIcon10() {
  return (
    <div className="absolute left-[5px] size-[20px] top-[5px]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="15" id="mask0_1_6568" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="3" y="3">
            <path d={svgPaths.p25e92080} fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_1_6568)">
            <rect fill="var(--fill-0, #1A1A1A)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-white relative shrink-0 size-[30px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ActionIcon10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FilterRow8() {
  return (
    <div className="bg-[#f4f6f7] h-[45px] relative shrink-0 w-full" data-name="// Filter row">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-end pb-[7px] px-[6px] relative size-full">
          <Input7 />
          <Frame28 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_white,inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Cell152() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">1</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell153() {
  return (
    <div className="bg-[#e8ecee] h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[11px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">1</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#b3b3b3,inset_0px_1px_0px_0px_#b3b3b3]" />
    </div>
  );
}

function Cell154() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">1</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell155() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">1</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell156() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">1</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell157() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">1</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell158() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">1</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell159() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">1</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell160() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">1</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell161() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">1</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell162() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">1</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell163() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">1</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell164() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">1</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell165() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">1</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell166() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">1</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell167() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">1</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell168() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">1</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell169() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">1</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell170() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">1</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function GridTableColumn8() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[180px]" data-name="Grid (table) column">
      <GridHeader8 />
      <FilterRow8 />
      <Cell152 />
      <Cell153 />
      <Cell154 />
      <Cell155 />
      <Cell156 />
      <Cell157 />
      <Cell158 />
      <Cell159 />
      <Cell160 />
      <Cell161 />
      <Cell162 />
      <Cell163 />
      <Cell164 />
      <Cell165 />
      <Cell166 />
      <Cell167 />
      <Cell168 />
      <Cell169 />
      <Cell170 />
    </div>
  );
}

function GridHeader9() {
  return (
    <div className="bg-[#595959] h-[28px] overflow-clip relative shrink-0 w-full" data-name="// Grid header">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[21.43%_11px_21.43%_10px] leading-[normal] overflow-hidden text-[13px] text-ellipsis text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Supplier name
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Input8() {
  return (
    <div className="bg-white flex-[1_0_0] h-[30px] min-h-px min-w-px relative" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ActionIcon11() {
  return (
    <div className="absolute left-[5px] size-[20px] top-[5px]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="15" id="mask0_1_6568" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="3" y="3">
            <path d={svgPaths.p25e92080} fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_1_6568)">
            <rect fill="var(--fill-0, #1A1A1A)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-white relative shrink-0 size-[30px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ActionIcon11 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FilterRow9() {
  return (
    <div className="bg-[#f4f6f7] h-[45px] relative shrink-0 w-full" data-name="// Filter row">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-end pb-[7px] px-[6px] relative size-full">
          <Input8 />
          <Frame29 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_white,inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Cell171() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Supplier</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell172() {
  return (
    <div className="bg-[#e8ecee] h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[11px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Supplier</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#b3b3b3,inset_0px_1px_0px_0px_#b3b3b3]" />
    </div>
  );
}

function Cell173() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Supplier</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell174() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Supplier</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell175() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Supplier</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell176() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Supplier</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell177() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Supplier</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell178() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Supplier</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell179() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Supplier</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell180() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Supplier</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell181() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Supplier</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell182() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Supplier</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell183() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Supplier</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell184() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Supplier</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell185() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Supplier</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell186() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Supplier</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell187() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Supplier</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell188() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Supplier</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell189() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Supplier</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function GridTableColumn9() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[180px]" data-name="Grid (table) column">
      <GridHeader9 />
      <FilterRow9 />
      <Cell171 />
      <Cell172 />
      <Cell173 />
      <Cell174 />
      <Cell175 />
      <Cell176 />
      <Cell177 />
      <Cell178 />
      <Cell179 />
      <Cell180 />
      <Cell181 />
      <Cell182 />
      <Cell183 />
      <Cell184 />
      <Cell185 />
      <Cell186 />
      <Cell187 />
      <Cell188 />
      <Cell189 />
    </div>
  );
}

function GridHeader10() {
  return (
    <div className="bg-[#595959] h-[28px] overflow-clip relative shrink-0 w-full" data-name="// Grid header">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[21.43%_11px_21.43%_10px] leading-[normal] overflow-hidden text-[13px] text-ellipsis text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Color
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Input9() {
  return (
    <div className="bg-white flex-[1_0_0] h-[30px] min-h-px min-w-px relative" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ActionIcon12() {
  return (
    <div className="absolute left-[5px] size-[20px] top-[5px]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="15" id="mask0_1_6568" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="3" y="3">
            <path d={svgPaths.p25e92080} fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_1_6568)">
            <rect fill="var(--fill-0, #1A1A1A)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-white relative shrink-0 size-[30px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ActionIcon12 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FilterRow10() {
  return (
    <div className="bg-[#f4f6f7] h-[45px] relative shrink-0 w-full" data-name="// Filter row">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-end pb-[7px] px-[6px] relative size-full">
          <Input9 />
          <Frame30 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_white,inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Cell190() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Color</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell191() {
  return (
    <div className="bg-[#e8ecee] h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[11px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Color</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#b3b3b3,inset_0px_1px_0px_0px_#b3b3b3]" />
    </div>
  );
}

function Cell192() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Color</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell193() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Color</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell194() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Color</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell195() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Color</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell196() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Color</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell197() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Color</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell198() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Color</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell199() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Color</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell200() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Color</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell201() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Color</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell202() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Color</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell203() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Color</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell204() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Color</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell205() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Color</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell206() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Color</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell207() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Color</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell208() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Color</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function GridTableColumn10() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[180px]" data-name="Grid (table) column">
      <GridHeader10 />
      <FilterRow10 />
      <Cell190 />
      <Cell191 />
      <Cell192 />
      <Cell193 />
      <Cell194 />
      <Cell195 />
      <Cell196 />
      <Cell197 />
      <Cell198 />
      <Cell199 />
      <Cell200 />
      <Cell201 />
      <Cell202 />
      <Cell203 />
      <Cell204 />
      <Cell205 />
      <Cell206 />
      <Cell207 />
      <Cell208 />
    </div>
  );
}

function GridHeader11() {
  return (
    <div className="bg-[#595959] h-[28px] overflow-clip relative shrink-0 w-full" data-name="// Grid header">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[21.43%_11px_21.43%_10px] leading-[normal] overflow-hidden text-[13px] text-ellipsis text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Size
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Input10() {
  return (
    <div className="bg-white flex-[1_0_0] h-[30px] min-h-px min-w-px relative" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ActionIcon13() {
  return (
    <div className="absolute left-[5px] size-[20px] top-[5px]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="15" id="mask0_1_6568" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="3" y="3">
            <path d={svgPaths.p25e92080} fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_1_6568)">
            <rect fill="var(--fill-0, #1A1A1A)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-white relative shrink-0 size-[30px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ActionIcon13 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FilterRow11() {
  return (
    <div className="bg-[#f4f6f7] h-[45px] relative shrink-0 w-full" data-name="// Filter row">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-end pb-[7px] px-[6px] relative size-full">
          <Input10 />
          <Frame31 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_white,inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Cell209() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Size</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell210() {
  return (
    <div className="bg-[#e8ecee] h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[11px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Size</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#b3b3b3,inset_0px_1px_0px_0px_#b3b3b3]" />
    </div>
  );
}

function Cell211() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Size</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell212() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Size</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell213() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Size</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell214() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Size</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell215() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Size</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell216() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Size</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell217() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Size</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell218() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Size</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell219() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Size</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell220() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Size</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell221() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Size</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell222() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Size</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell223() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Size</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell224() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Size</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell225() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Size</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell226() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Size</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell227() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Size</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function GridTableColumn11() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[180px]" data-name="Grid (table) column">
      <GridHeader11 />
      <FilterRow11 />
      <Cell209 />
      <Cell210 />
      <Cell211 />
      <Cell212 />
      <Cell213 />
      <Cell214 />
      <Cell215 />
      <Cell216 />
      <Cell217 />
      <Cell218 />
      <Cell219 />
      <Cell220 />
      <Cell221 />
      <Cell222 />
      <Cell223 />
      <Cell224 />
      <Cell225 />
      <Cell226 />
      <Cell227 />
    </div>
  );
}

function GridHeader12() {
  return (
    <div className="bg-[#595959] h-[28px] overflow-clip relative shrink-0 w-full" data-name="// Grid header">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[21.43%_11px_21.43%_10px] leading-[normal] overflow-hidden text-[13px] text-ellipsis text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Brand
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Input11() {
  return (
    <div className="bg-white flex-[1_0_0] h-[30px] min-h-px min-w-px relative" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ActionIcon14() {
  return (
    <div className="absolute left-[5px] size-[20px] top-[5px]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="15" id="mask0_1_6568" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="3" y="3">
            <path d={svgPaths.p25e92080} fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_1_6568)">
            <rect fill="var(--fill-0, #1A1A1A)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-white relative shrink-0 size-[30px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ActionIcon14 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FilterRow12() {
  return (
    <div className="bg-[#f4f6f7] h-[45px] relative shrink-0 w-full" data-name="// Filter row">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-end pb-[7px] px-[6px] relative size-full">
          <Input11 />
          <Frame32 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_white,inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Cell228() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Brand</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell229() {
  return (
    <div className="bg-[#e8ecee] h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[11px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Brand</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#b3b3b3,inset_0px_1px_0px_0px_#b3b3b3]" />
    </div>
  );
}

function Cell230() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Brand</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell231() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Brand</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell232() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Brand</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell233() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Brand</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell234() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Brand</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell235() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Brand</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell236() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Brand</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell237() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Brand</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell238() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Brand</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell239() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Brand</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell240() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Brand</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell241() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Brand</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell242() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Brand</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell243() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Brand</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell244() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Brand</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell245() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Brand</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell246() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Brand</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function GridTableColumn12() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[180px]" data-name="Grid (table) column">
      <GridHeader12 />
      <FilterRow12 />
      <Cell228 />
      <Cell229 />
      <Cell230 />
      <Cell231 />
      <Cell232 />
      <Cell233 />
      <Cell234 />
      <Cell235 />
      <Cell236 />
      <Cell237 />
      <Cell238 />
      <Cell239 />
      <Cell240 />
      <Cell241 />
      <Cell242 />
      <Cell243 />
      <Cell244 />
      <Cell245 />
      <Cell246 />
    </div>
  );
}

function GridHeader13() {
  return (
    <div className="bg-[#595959] h-[28px] overflow-clip relative shrink-0 w-full" data-name="// Grid header">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[21.43%_11px] leading-[normal] overflow-hidden text-[13px] text-ellipsis text-right text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Wholesale price
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Input12() {
  return (
    <div className="bg-white flex-[1_0_0] h-[30px] min-h-px min-w-px relative" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ActionIcon15() {
  return (
    <div className="absolute left-[5px] size-[20px] top-[5px]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="15" id="mask0_1_6568" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="3" y="3">
            <path d={svgPaths.p25e92080} fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_1_6568)">
            <rect fill="var(--fill-0, #1A1A1A)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-white relative shrink-0 size-[30px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ActionIcon15 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FilterRow13() {
  return (
    <div className="bg-[#f4f6f7] h-[45px] relative shrink-0 w-full" data-name="// Filter row">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-end pb-[7px] px-[6px] relative size-full">
          <Input12 />
          <Frame33 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_white,inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Cell247() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell248() {
  return (
    <div className="bg-[#e8ecee] h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#b3b3b3,inset_0px_1px_0px_0px_#b3b3b3]" />
    </div>
  );
}

function Cell249() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell250() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell251() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell252() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell253() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell254() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell255() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell256() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell257() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell258() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell259() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell260() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell261() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell262() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell263() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell264() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell265() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function GridTableColumn13() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[180px]" data-name="Grid (table) column">
      <GridHeader13 />
      <FilterRow13 />
      <Cell247 />
      <Cell248 />
      <Cell249 />
      <Cell250 />
      <Cell251 />
      <Cell252 />
      <Cell253 />
      <Cell254 />
      <Cell255 />
      <Cell256 />
      <Cell257 />
      <Cell258 />
      <Cell259 />
      <Cell260 />
      <Cell261 />
      <Cell262 />
      <Cell263 />
      <Cell264 />
      <Cell265 />
    </div>
  );
}

function GridHeader14() {
  return (
    <div className="bg-[#595959] h-[28px] overflow-clip relative shrink-0 w-full" data-name="// Grid header">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[21.43%_11px] leading-[normal] overflow-hidden text-[13px] text-ellipsis text-right text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Net price
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Input13() {
  return (
    <div className="bg-white flex-[1_0_0] h-[30px] min-h-px min-w-px relative" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ActionIcon16() {
  return (
    <div className="absolute left-[5px] size-[20px] top-[5px]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="15" id="mask0_1_6568" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="3" y="3">
            <path d={svgPaths.p25e92080} fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_1_6568)">
            <rect fill="var(--fill-0, #1A1A1A)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-white relative shrink-0 size-[30px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ActionIcon16 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FilterRow14() {
  return (
    <div className="bg-[#f4f6f7] h-[45px] relative shrink-0 w-full" data-name="// Filter row">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-end pb-[7px] px-[6px] relative size-full">
          <Input13 />
          <Frame34 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_white,inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Cell266() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell267() {
  return (
    <div className="bg-[#e8ecee] h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#b3b3b3,inset_0px_1px_0px_0px_#b3b3b3]" />
    </div>
  );
}

function Cell268() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell269() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell270() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell271() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell272() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell273() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell274() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell275() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell276() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell277() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell278() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell279() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell280() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell281() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell282() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell283() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell284() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function GridTableColumn14() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[180px]" data-name="Grid (table) column">
      <GridHeader14 />
      <FilterRow14 />
      <Cell266 />
      <Cell267 />
      <Cell268 />
      <Cell269 />
      <Cell270 />
      <Cell271 />
      <Cell272 />
      <Cell273 />
      <Cell274 />
      <Cell275 />
      <Cell276 />
      <Cell277 />
      <Cell278 />
      <Cell279 />
      <Cell280 />
      <Cell281 />
      <Cell282 />
      <Cell283 />
      <Cell284 />
    </div>
  );
}

function GridHeader15() {
  return (
    <div className="bg-[#595959] h-[28px] overflow-clip relative shrink-0 w-full" data-name="// Grid header">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[21.43%_11px] leading-[normal] overflow-hidden text-[13px] text-ellipsis text-right text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Gross profit
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Input14() {
  return (
    <div className="bg-white flex-[1_0_0] h-[30px] min-h-px min-w-px relative" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ActionIcon17() {
  return (
    <div className="absolute left-[5px] size-[20px] top-[5px]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="15" id="mask0_1_6568" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="3" y="3">
            <path d={svgPaths.p25e92080} fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_1_6568)">
            <rect fill="var(--fill-0, #1A1A1A)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-white relative shrink-0 size-[30px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ActionIcon17 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FilterRow15() {
  return (
    <div className="bg-[#f4f6f7] h-[45px] relative shrink-0 w-full" data-name="// Filter row">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-end pb-[7px] px-[6px] relative size-full">
          <Input14 />
          <Frame35 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_white,inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Cell285() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell286() {
  return (
    <div className="bg-[#e8ecee] h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#b3b3b3,inset_0px_1px_0px_0px_#b3b3b3]" />
    </div>
  );
}

function Cell287() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell288() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell289() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell290() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell291() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell292() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell293() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell294() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell295() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell296() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell297() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell298() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell299() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell300() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell301() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell302() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell303() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function GridTableColumn15() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[180px]" data-name="Grid (table) column">
      <GridHeader15 />
      <FilterRow15 />
      <Cell285 />
      <Cell286 />
      <Cell287 />
      <Cell288 />
      <Cell289 />
      <Cell290 />
      <Cell291 />
      <Cell292 />
      <Cell293 />
      <Cell294 />
      <Cell295 />
      <Cell296 />
      <Cell297 />
      <Cell298 />
      <Cell299 />
      <Cell300 />
      <Cell301 />
      <Cell302 />
      <Cell303 />
    </div>
  );
}

function GridHeader16() {
  return (
    <div className="bg-[#595959] h-[28px] overflow-clip relative shrink-0 w-full" data-name="// Grid header">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[21.43%_11px] leading-[normal] overflow-hidden text-[13px] text-ellipsis text-right text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Gross profit %
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Input15() {
  return (
    <div className="bg-white flex-[1_0_0] h-[30px] min-h-px min-w-px relative" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ActionIcon18() {
  return (
    <div className="absolute left-[5px] size-[20px] top-[5px]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="15" id="mask0_1_6568" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="3" y="3">
            <path d={svgPaths.p25e92080} fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_1_6568)">
            <rect fill="var(--fill-0, #1A1A1A)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-white relative shrink-0 size-[30px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ActionIcon18 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FilterRow16() {
  return (
    <div className="bg-[#f4f6f7] h-[45px] relative shrink-0 w-full" data-name="// Filter row">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-end pb-[7px] px-[6px] relative size-full">
          <Input15 />
          <Frame36 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_white,inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Cell304() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell305() {
  return (
    <div className="bg-[#e8ecee] h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#b3b3b3,inset_0px_1px_0px_0px_#b3b3b3]" />
    </div>
  );
}

function Cell306() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell307() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell308() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell309() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell310() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell311() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell312() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell313() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell314() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell315() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell316() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell317() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell318() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell319() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell320() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell321() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell322() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function GridTableColumn16() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[180px]" data-name="Grid (table) column">
      <GridHeader16 />
      <FilterRow16 />
      <Cell304 />
      <Cell305 />
      <Cell306 />
      <Cell307 />
      <Cell308 />
      <Cell309 />
      <Cell310 />
      <Cell311 />
      <Cell312 />
      <Cell313 />
      <Cell314 />
      <Cell315 />
      <Cell316 />
      <Cell317 />
      <Cell318 />
      <Cell319 />
      <Cell320 />
      <Cell321 />
      <Cell322 />
    </div>
  );
}

function GridHeader17() {
  return (
    <div className="bg-[#595959] h-[28px] overflow-clip relative shrink-0 w-full" data-name="// Grid header">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[21.43%_11px] leading-[normal] overflow-hidden text-[13px] text-ellipsis text-right text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Retail price excl. VAT
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Input16() {
  return (
    <div className="bg-white flex-[1_0_0] h-[30px] min-h-px min-w-px relative" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ActionIcon19() {
  return (
    <div className="absolute left-[5px] size-[20px] top-[5px]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="15" id="mask0_1_6568" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="3" y="3">
            <path d={svgPaths.p25e92080} fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_1_6568)">
            <rect fill="var(--fill-0, #1A1A1A)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-white relative shrink-0 size-[30px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ActionIcon19 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FilterRow17() {
  return (
    <div className="bg-[#f4f6f7] h-[45px] relative shrink-0 w-full" data-name="// Filter row">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-end pb-[7px] px-[6px] relative size-full">
          <Input16 />
          <Frame37 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_white,inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Cell323() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell324() {
  return (
    <div className="bg-[#e8ecee] h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#b3b3b3,inset_0px_1px_0px_0px_#b3b3b3]" />
    </div>
  );
}

function Cell325() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell326() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell327() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell328() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell329() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell330() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell331() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell332() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell333() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell334() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell335() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell336() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell337() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell338() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell339() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell340() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell341() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function GridTableColumn17() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[180px]" data-name="Grid (table) column">
      <GridHeader17 />
      <FilterRow17 />
      <Cell323 />
      <Cell324 />
      <Cell325 />
      <Cell326 />
      <Cell327 />
      <Cell328 />
      <Cell329 />
      <Cell330 />
      <Cell331 />
      <Cell332 />
      <Cell333 />
      <Cell334 />
      <Cell335 />
      <Cell336 />
      <Cell337 />
      <Cell338 />
      <Cell339 />
      <Cell340 />
      <Cell341 />
    </div>
  );
}

function GridHeader18() {
  return (
    <div className="bg-[#595959] h-[28px] overflow-clip relative shrink-0 w-full" data-name="// Grid header">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[21.43%_11px] leading-[normal] overflow-hidden text-[13px] text-ellipsis text-right text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Retail price
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Input17() {
  return (
    <div className="bg-white flex-[1_0_0] h-[30px] min-h-px min-w-px relative" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ActionIcon20() {
  return (
    <div className="absolute left-[5px] size-[20px] top-[5px]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="15" id="mask0_1_6568" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="3" y="3">
            <path d={svgPaths.p25e92080} fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_1_6568)">
            <rect fill="var(--fill-0, #1A1A1A)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-white relative shrink-0 size-[30px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ActionIcon20 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FilterRow18() {
  return (
    <div className="bg-[#f4f6f7] h-[45px] relative shrink-0 w-full" data-name="// Filter row">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-end pb-[7px] px-[6px] relative size-full">
          <Input17 />
          <Frame38 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_white,inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Cell342() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell343() {
  return (
    <div className="bg-[#e8ecee] h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#b3b3b3,inset_0px_1px_0px_0px_#b3b3b3]" />
    </div>
  );
}

function Cell344() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell345() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell346() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell347() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell348() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell349() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell350() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell351() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell352() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell353() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell354() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell355() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell356() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell357() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell358() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell359() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell360() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] right-[12px] text-[#1a1a1a] text-[14px] text-right top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">0,00</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function GridTableColumn18() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[180px]" data-name="Grid (table) column">
      <GridHeader18 />
      <FilterRow18 />
      <Cell342 />
      <Cell343 />
      <Cell344 />
      <Cell345 />
      <Cell346 />
      <Cell347 />
      <Cell348 />
      <Cell349 />
      <Cell350 />
      <Cell351 />
      <Cell352 />
      <Cell353 />
      <Cell354 />
      <Cell355 />
      <Cell356 />
      <Cell357 />
      <Cell358 />
      <Cell359 />
      <Cell360 />
    </div>
  );
}

function GridHeader19() {
  return (
    <div className="bg-[#595959] h-[28px] overflow-clip relative shrink-0 w-full" data-name="// Grid header">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[21.43%_11px_21.43%_10px] leading-[normal] overflow-hidden text-[13px] text-ellipsis text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Currency
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Input18() {
  return (
    <div className="bg-white flex-[1_0_0] h-[30px] min-h-px min-w-px relative" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ActionIcon21() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="4" id="mask0_1_6549" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="8" x="6" y="8">
            <path d="M14 8L10 12L6 8H14Z" fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_1_6549)">
            <rect fill="var(--fill-0, #333333)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-start pr-[4px] py-[4px] right-[7px] top-[calc(50%+1.5px)]">
      <ActionIcon21 />
    </div>
  );
}

function FilterRow19() {
  return (
    <div className="bg-[#f4f6f7] h-[45px] relative shrink-0 w-full" data-name="// Filter row">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-end pb-[7px] px-[6px] relative size-full">
          <Input18 />
          <Frame39 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_white,inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Cell361() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">NOK</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell362() {
  return (
    <div className="bg-[#e8ecee] h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[11px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">NOK</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#b3b3b3,inset_0px_1px_0px_0px_#b3b3b3]" />
    </div>
  );
}

function Cell363() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">NOK</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell364() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">NOK</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell365() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">NOK</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell366() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">NOK</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell367() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">NOK</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell368() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">NOK</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell369() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">NOK</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell370() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">NOK</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell371() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">NOK</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell372() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">NOK</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell373() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">NOK</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell374() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">NOK</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell375() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">NOK</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell376() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">NOK</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell377() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">NOK</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell378() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">NOK</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell379() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">NOK</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function GridTableColumn19() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[180px]" data-name="Grid (table) column">
      <GridHeader19 />
      <FilterRow19 />
      <Cell361 />
      <Cell362 />
      <Cell363 />
      <Cell364 />
      <Cell365 />
      <Cell366 />
      <Cell367 />
      <Cell368 />
      <Cell369 />
      <Cell370 />
      <Cell371 />
      <Cell372 />
      <Cell373 />
      <Cell374 />
      <Cell375 />
      <Cell376 />
      <Cell377 />
      <Cell378 />
      <Cell379 />
    </div>
  );
}

function GridHeader20() {
  return (
    <div className="bg-[#595959] h-[28px] overflow-clip relative shrink-0 w-full" data-name="// Grid header">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[21.43%_11px_21.43%_10px] leading-[normal] overflow-hidden text-[13px] text-ellipsis text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Modified by
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Input19() {
  return (
    <div className="bg-white flex-[1_0_0] h-[30px] min-h-px min-w-px relative" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ActionIcon22() {
  return (
    <div className="absolute left-[5px] size-[20px] top-[5px]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="15" id="mask0_1_6568" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="3" y="3">
            <path d={svgPaths.p25e92080} fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_1_6568)">
            <rect fill="var(--fill-0, #1A1A1A)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-white relative shrink-0 size-[30px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ActionIcon22 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FilterRow20() {
  return (
    <div className="bg-[#f4f6f7] h-[45px] relative shrink-0 w-full" data-name="// Filter row">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-end pb-[7px] px-[6px] relative size-full">
          <Input19 />
          <Frame40 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_white,inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Cell380() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">user@eg.no</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell381() {
  return (
    <div className="bg-[#e8ecee] h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[11px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">user@eg.no</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#b3b3b3,inset_0px_1px_0px_0px_#b3b3b3]" />
    </div>
  );
}

function Cell382() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">user@eg.no</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell383() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">user@eg.no</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell384() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">user@eg.no</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell385() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">user@eg.no</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell386() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">user@eg.no</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell387() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">user@eg.no</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell388() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">user@eg.no</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell389() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">user@eg.no</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell390() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">user@eg.no</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell391() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">user@eg.no</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell392() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">user@eg.no</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell393() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">user@eg.no</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell394() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">user@eg.no</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell395() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">user@eg.no</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell396() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">user@eg.no</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell397() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">user@eg.no</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Cell398() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[12px] overflow-hidden right-[10px] text-[#1a1a1a] text-[14px] text-ellipsis top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">user@eg.no</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function GridTableColumn20() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[180px]" data-name="Grid (table) column">
      <GridHeader20 />
      <FilterRow20 />
      <Cell380 />
      <Cell381 />
      <Cell382 />
      <Cell383 />
      <Cell384 />
      <Cell385 />
      <Cell386 />
      <Cell387 />
      <Cell388 />
      <Cell389 />
      <Cell390 />
      <Cell391 />
      <Cell392 />
      <Cell393 />
      <Cell394 />
      <Cell395 />
      <Cell396 />
      <Cell397 />
      <Cell398 />
    </div>
  );
}

function ActionIcon23() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="10" id="mask0_1_6530" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="10" x="5" y="5">
            <path d={svgPaths.p2f389e00} fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_1_6530)">
            <rect fill="var(--fill-0, #E58108)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-[10px] top-[4px]">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[13px] text-white uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        Modified date
      </p>
      <ActionIcon23 />
    </div>
  );
}

function GridHeader21() {
  return (
    <div className="bg-[#595959] h-[28px] overflow-clip relative shrink-0 w-full" data-name="// Grid header">
      <Frame1 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function ActionIcon24() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="15" id="mask0_1_6609" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="3" y="2">
            <path d={svgPaths.p30b96200} fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_1_6609)">
            <rect fill="var(--fill-0, #333333)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex items-start pr-[4px] py-[4px] right-px top-1/2">
      <ActionIcon24 />
    </div>
  );
}

function Input20() {
  return (
    <div className="bg-white flex-[1_0_0] h-[30px] min-h-px min-w-px relative" data-name="Input">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame41 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ActionIcon25() {
  return (
    <div className="absolute left-[5px] size-[20px] top-[5px]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="15" id="mask0_1_6568" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="3" y="3">
            <path d={svgPaths.p25e92080} fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_1_6568)">
            <rect fill="var(--fill-0, #1A1A1A)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-white relative shrink-0 size-[30px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ActionIcon25 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FilterRow21() {
  return (
    <div className="bg-[#f4f6f7] h-[45px] relative shrink-0 w-full" data-name="// Filter row">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-end pb-[7px] px-[6px] relative size-full">
          <Input20 />
          <Frame42 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_white,inset_-1px_0px_0px_0px_white]" />
    </div>
  );
}

function Frame43() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[6px] items-start leading-[0] left-[12px] text-[14px] top-[13px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1a1a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">01.01.2022</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#ccc]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">12:00</p>
      </div>
    </div>
  );
}

function Cell399() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame43 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[6px] items-start leading-[0] left-[12px] text-[14px] top-[13px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1a1a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">01.01.2022</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#ccc]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">12:00</p>
      </div>
    </div>
  );
}

function Cell400() {
  return (
    <div className="bg-[#e8ecee] h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame44 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#b3b3b3,inset_0px_1px_0px_0px_#b3b3b3]" />
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[6px] items-start leading-[0] left-[12px] text-[14px] top-[13px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1a1a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">01.01.2022</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#ccc]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">12:00</p>
      </div>
    </div>
  );
}

function Cell401() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame45 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[6px] items-start leading-[0] left-[12px] text-[14px] top-[13px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1a1a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">01.01.2022</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#ccc]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">12:00</p>
      </div>
    </div>
  );
}

function Cell402() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame46 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame47() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[6px] items-start leading-[0] left-[12px] text-[14px] top-[13px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1a1a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">01.01.2022</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#ccc]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">12:00</p>
      </div>
    </div>
  );
}

function Cell403() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame47 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame48() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[6px] items-start leading-[0] left-[12px] text-[14px] top-[13px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1a1a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">01.01.2022</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#ccc]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">12:00</p>
      </div>
    </div>
  );
}

function Cell404() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame48 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[6px] items-start leading-[0] left-[12px] text-[14px] top-[13px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1a1a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">01.01.2022</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#ccc]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">12:00</p>
      </div>
    </div>
  );
}

function Cell405() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame49 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame50() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[6px] items-start leading-[0] left-[12px] text-[14px] top-[13px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1a1a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">01.01.2022</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#ccc]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">12:00</p>
      </div>
    </div>
  );
}

function Cell406() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame50 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame51() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[6px] items-start leading-[0] left-[12px] text-[14px] top-[13px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1a1a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">01.01.2022</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#ccc]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">12:00</p>
      </div>
    </div>
  );
}

function Cell407() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame51 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame52() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[6px] items-start leading-[0] left-[12px] text-[14px] top-[13px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1a1a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">01.01.2022</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#ccc]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">12:00</p>
      </div>
    </div>
  );
}

function Cell408() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame52 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame53() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[6px] items-start leading-[0] left-[12px] text-[14px] top-[13px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1a1a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">01.01.2022</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#ccc]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">12:00</p>
      </div>
    </div>
  );
}

function Cell409() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame53 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame54() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[6px] items-start leading-[0] left-[12px] text-[14px] top-[13px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1a1a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">01.01.2022</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#ccc]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">12:00</p>
      </div>
    </div>
  );
}

function Cell410() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame54 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame55() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[6px] items-start leading-[0] left-[12px] text-[14px] top-[13px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1a1a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">01.01.2022</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#ccc]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">12:00</p>
      </div>
    </div>
  );
}

function Cell411() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame55 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame56() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[6px] items-start leading-[0] left-[12px] text-[14px] top-[13px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1a1a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">01.01.2022</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#ccc]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">12:00</p>
      </div>
    </div>
  );
}

function Cell412() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame56 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame57() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[6px] items-start leading-[0] left-[12px] text-[14px] top-[13px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1a1a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">01.01.2022</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#ccc]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">12:00</p>
      </div>
    </div>
  );
}

function Cell413() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame57 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame58() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[6px] items-start leading-[0] left-[12px] text-[14px] top-[13px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1a1a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">01.01.2022</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#ccc]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">12:00</p>
      </div>
    </div>
  );
}

function Cell414() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame58 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame59() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[6px] items-start leading-[0] left-[12px] text-[14px] top-[13px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1a1a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">01.01.2022</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#ccc]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">12:00</p>
      </div>
    </div>
  );
}

function Cell415() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame59 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame60() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[6px] items-start leading-[0] left-[12px] text-[14px] top-[13px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1a1a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">01.01.2022</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#ccc]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">12:00</p>
      </div>
    </div>
  );
}

function Cell416() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame60 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function Frame61() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[6px] items-start leading-[0] left-[12px] text-[14px] top-[13px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1a1a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">01.01.2022</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#ccc]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">12:00</p>
      </div>
    </div>
  );
}

function Cell417() {
  return (
    <div className="bg-white h-[43px] overflow-clip relative shrink-0 w-full" data-name="// Cell">
      <Frame61 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e5e5e5,inset_0px_1px_0px_0px_#e5e5e5]" />
    </div>
  );
}

function GridTableColumn21() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[180px]" data-name="Grid (table) column">
      <GridHeader21 />
      <FilterRow21 />
      <Cell399 />
      <Cell400 />
      <Cell401 />
      <Cell402 />
      <Cell403 />
      <Cell404 />
      <Cell405 />
      <Cell406 />
      <Cell407 />
      <Cell408 />
      <Cell409 />
      <Cell410 />
      <Cell411 />
      <Cell412 />
      <Cell413 />
      <Cell414 />
      <Cell415 />
      <Cell416 />
      <Cell417 />
    </div>
  );
}

function Columns() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Columns">
      <GridTableColumn />
      <GridTableColumn1 />
      <GridTableColumn2 />
      <GridTableColumn3 />
      <GridTableColumn4 />
      <GridTableColumn5 />
      <GridTableColumn6 />
      <GridTableColumn7 />
      <GridTableColumn8 />
      <GridTableColumn9 />
      <GridTableColumn10 />
      <GridTableColumn11 />
      <GridTableColumn12 />
      <GridTableColumn13 />
      <GridTableColumn14 />
      <GridTableColumn15 />
      <GridTableColumn16 />
      <GridTableColumn17 />
      <GridTableColumn18 />
      <GridTableColumn19 />
      <GridTableColumn20 />
      <GridTableColumn21 />
    </div>
  );
}

function Grid2() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Grid">
      <Columns />
    </div>
  );
}

function Grid1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[1]" data-name="Grid">
      <Grid2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1040px] isolate items-start left-[94px] right-0 top-0" data-name="Frame">
      <Header />
      <Grid1 />
    </div>
  );
}

function ActionIcon26() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon" opacity="0.9">
          <mask height="4" id="mask0_1_6594" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="2" y="8">
            <path d={svgPaths.p2d3e5d00} fill="var(--fill-0, #666666)" id="Union" />
          </mask>
          <g mask="url(#mask0_1_6594)">
            <rect fill="var(--fill-0, white)" height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(51,51,51,0.8)] content-stretch flex h-[24px] items-center px-[4px] py-[2px] relative shrink-0" data-name="Button">
      <ActionIcon26 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_rgba(0,0,0,0.2)]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(51,51,51,0.8)] content-stretch flex h-[24px] items-center px-[12px] py-[5px] relative shrink-0" data-name="Button">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[14px] opacity-90 relative shrink-0 text-[12px] text-center text-shadow-[0px_0px_4px_rgba(0,0,0,0.5)] text-white uppercase">new Store price</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_rgba(0,0,0,0.2)]" />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#e58108] content-stretch flex h-[24px] items-center px-[12px] py-[5px] relative shrink-0" data-name="Button">
      <p className="font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[14px] opacity-90 relative shrink-0 text-[12px] text-center text-shadow-[0px_0px_4px_rgba(0,0,0,0.5)] text-white uppercase">new Promotion</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_rgba(0,0,0,0.2)]" />
    </div>
  );
}

function Toolbar() {
  return (
    <div className="absolute bg-[#666] bottom-0 content-stretch flex gap-[10px] items-center justify-end left-[5.44%] overflow-clip px-[20px] py-[10px] right-0" data-name="Toolbar">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function MenuIconItems() {
  return (
    <div className="relative size-full" data-name="// Menu icon items">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="// Menu icon items">
          <path d={svgPaths.pa0feb40} fill="var(--fill-0, #CCCCCC)" id="Fill" />
        </g>
      </svg>
    </div>
  );
}

function Home() {
  return (
    <div className="h-[72px] relative shrink-0 w-[94px]" data-name="Home">
      <div className="absolute flex inset-[15.28%_32.98%_43.06%_35.11%] items-center justify-center">
        <div className="-scale-y-100 flex-none rotate-180 size-[30px]">
          <MenuIconItems />
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[normal] left-1/2 text-[#ccc] text-[11px] text-center top-[45px] uppercase">Home</p>
    </div>
  );
}

function MenuIconItems1() {
  return (
    <div className="relative size-full" data-name="// Menu icon items">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_6523)" id="// Menu icon items">
          <path clipRule="evenodd" d={svgPaths.p15bc8300} fill="var(--fill-0, #CCCCCC)" fillRule="evenodd" id="Fill 3.1" />
        </g>
        <defs>
          <clipPath id="clip0_1_6523">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Item() {
  return (
    <div className="bg-[#1a1a1a] h-[72px] relative shrink-0 w-[94px]" data-name="Item">
      <div className="absolute bg-[#558d69] h-[72px] left-0 top-0 w-[4px]" data-name="Indicate selected" />
      <div className="absolute flex inset-[15.28%_32.98%_43.06%_35.11%] items-center justify-center">
        <div className="-scale-y-100 flex-none rotate-180 size-[30px]">
          <MenuIconItems1 />
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%+0.5px)] text-[#ccc] text-[11px] text-center top-[45px] uppercase">Items</p>
    </div>
  );
}

function MenuIconItems2() {
  return (
    <div className="relative size-full" data-name="// Menu icon items">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="// Menu icon items">
          <path clipRule="evenodd" d={svgPaths.pbacc280} fill="var(--fill-0, #CCCCCC)" fillRule="evenodd" id="Fill 3.2" />
        </g>
      </svg>
    </div>
  );
}

function Stock() {
  return (
    <div className="h-[72px] relative shrink-0 w-[94px]" data-name="Stock">
      <div className="absolute flex inset-[15.28%_32.98%_43.06%_35.11%] items-center justify-center">
        <div className="-scale-y-100 flex-none rotate-180 size-[30px]">
          <MenuIconItems2 />
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%+0.5px)] text-[#ccc] text-[11px] text-center top-[45px] uppercase">Inventory</p>
    </div>
  );
}

function MenuIconItems3() {
  return (
    <div className="relative size-full" data-name="// Menu icon items">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="// Menu icon items">
          <path d={svgPaths.p1e04f300} fill="var(--fill-0, #CCCCCC)" id="Purchase" />
        </g>
      </svg>
    </div>
  );
}

function Promotion() {
  return (
    <div className="h-[72px] relative shrink-0 w-[94px]" data-name="Promotion">
      <div className="absolute flex inset-[15.28%_32.98%_43.06%_35.11%] items-center justify-center">
        <div className="-scale-y-100 flex-none rotate-180 size-[30px]">
          <MenuIconItems3 />
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[normal] left-1/2 text-[#ccc] text-[11px] text-center top-[45px] uppercase">Procurement</p>
    </div>
  );
}

function MenuIconItems5() {
  return (
    <div className="h-[26.42px] relative shrink-0 w-[30px]" data-name="// Menu icon items">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 26.4202">
        <g id="// Menu icon items">
          <path d={svgPaths.p17c31cf0} fill="var(--fill-0, #CCCCCC)" id="Vector" />
          <path d={svgPaths.p2302b400} fill="var(--fill-0, #CCCCCC)" id="Vector_2" />
          <path d={svgPaths.pfe57900} fill="var(--fill-0, #CCCCCC)" id="Vector_3" />
          <path d={svgPaths.p36e0b800} fill="var(--fill-0, #CCCCCC)" id="Vector_4" />
          <path d={svgPaths.p3eefe380} fill="var(--fill-0, #CCCCCC)" id="Vector_5" />
          <path d={svgPaths.p256bad00} fill="var(--fill-0, #CCCCCC)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function MenuIconItems4() {
  return (
    <div className="content-stretch flex flex-col items-start py-[1.79px] relative" data-name="// Menu icon items">
      <MenuIconItems5 />
    </div>
  );
}

function Promotion1() {
  return (
    <div className="h-[72px] relative shrink-0 w-[94px]" data-name="Promotion">
      <div className="absolute flex inset-[15.28%_32.98%_43.06%_35.11%] items-center justify-center">
        <div className="-scale-y-100 flex-none rotate-180 size-[30px]">
          <MenuIconItems4 />
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[normal] left-1/2 text-[#ccc] text-[11px] text-center top-[45px] uppercase">Loyalty</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0_9.68%_0_9.67%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1968 30">
        <g id="Group 3">
          <path clipRule="evenodd" d={svgPaths.p17c21100} fill="var(--fill-0, #CCCCCC)" fillRule="evenodd" id="Fill 1" />
        </g>
      </svg>
    </div>
  );
}

function MenuIconItems6() {
  return (
    <div className="overflow-clip relative size-full" data-name="// Menu icon items">
      <Group />
    </div>
  );
}

function Reports() {
  return (
    <div className="h-[72px] relative shrink-0 w-[94px]" data-name="Reports">
      <div className="absolute flex inset-[15.28%_32.98%_43.06%_35.11%] items-center justify-center">
        <div className="-scale-y-100 flex-none rotate-180 size-[30px]">
          <MenuIconItems6 />
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%+0.5px)] text-[#ccc] text-[11px] text-center top-[45px] uppercase">Reporting</p>
    </div>
  );
}

function MenuIconItems7() {
  return (
    <div className="overflow-clip relative size-full" data-name="// Menu icon items">
      <div className="absolute h-[30.003px] left-0 top-0 w-[30px]" data-name="Hus, tynnere strek">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30.0032">
          <path clipRule="evenodd" d={svgPaths.padb100} fill="var(--fill-0, #CCCCCC)" fillRule="evenodd" id="Hus, tynnere strek" />
        </svg>
      </div>
    </div>
  );
}

function Store() {
  return (
    <div className="h-[72px] relative shrink-0 w-[94px]" data-name="Store">
      <div className="absolute flex inset-[15.28%_32.98%_43.06%_35.11%] items-center justify-center">
        <div className="-scale-y-100 flex-none rotate-180 size-[30px]">
          <MenuIconItems7 />
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[normal] left-1/2 text-[#ccc] text-[11px] text-center top-[45px] uppercase">Store</p>
    </div>
  );
}

function MenuIconItems8() {
  return (
    <div className="relative size-full" data-name="// Menu icon items">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_6463)" id="// Menu icon items">
          <path d={svgPaths.p17d4d900} fill="var(--fill-0, #CCCCCC)" id="Vector" />
          <path d={svgPaths.p25ad3f00} id="Vector_2" stroke="var(--stroke-0, #CCCCCC)" />
          <path d={svgPaths.p22b21500} id="Vector_3" stroke="var(--stroke-0, #CCCCCC)" />
          <path d={svgPaths.pa5c7200} id="Vector_4" stroke="var(--stroke-0, #CCCCCC)" />
          <path d={svgPaths.pe40d300} id="Vector_5" stroke="var(--stroke-0, #CCCCCC)" />
        </g>
        <defs>
          <clipPath id="clip0_1_6463">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Promotion2() {
  return (
    <div className="h-[72px] relative shrink-0 w-[94px]" data-name="Promotion">
      <div className="absolute flex inset-[15.28%_32.98%_43.06%_35.11%] items-center justify-center">
        <div className="-scale-y-100 flex-none rotate-180 size-[30px]">
          <MenuIconItems8 />
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[normal] left-1/2 text-[#ccc] text-[11px] text-center top-[45px] uppercase">Promotion</p>
    </div>
  );
}

function Modules() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[119px]" data-name="Modules">
      <Home />
      <Item />
      <Stock />
      <Promotion />
      <Promotion1 />
      <Reports />
      <Store />
      <Promotion2 />
    </div>
  );
}

function MenuIconItems9() {
  return (
    <div className="relative size-full" data-name="// Menu icon items">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_6455)" id="// Menu icon items">
          <path clipRule="evenodd" d={svgPaths.p6642180} fill="var(--fill-0, #CCCCCC)" fillRule="evenodd" id="Fill 1" />
        </g>
        <defs>
          <clipPath id="clip0_1_6455">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function System() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[72px] left-1/2 w-[94px]" data-name="System">
      <div className="absolute flex inset-[15.28%_32.98%_43.06%_35.11%] items-center justify-center">
        <div className="-scale-y-100 flex-none rotate-180 size-[30px]">
          <MenuIconItems9 />
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[normal] left-1/2 text-[#ccc] text-[11px] text-center top-[45px] uppercase">System</p>
    </div>
  );
}

function Logo() {
  return (
    <div className="-translate-x-1/2 absolute left-1/2 size-[44px] top-[30px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g clipPath="url(#clip0_1_6543)" id="Logo">
          <path d={svgPaths.p3624dc00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1b2dae00} fill="var(--fill-0, #97F4D6)" id="Vector_2" />
          <path d={svgPaths.p3e50f00} fill="var(--fill-0, #18B291)" id="Vector_3" />
          <path d={svgPaths.p5d52700} fill="var(--fill-0, #004D3D)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_1_6543">
            <rect fill="white" height="44" width="44" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Menu1() {
  return (
    <div className="absolute bg-[#333] bottom-0 left-0 top-0 w-[94px]" data-name="Menu">
      <Modules />
      <System />
      <Logo />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-2px_0px_0px_0px_#1a1a1a]" />
    </div>
  );
}

export default function Grid() {
  return (
    <div className="bg-white relative size-full" data-name="Grid">
      <Frame />
      <Toolbar />
      <Menu1 />
    </div>
  );
}