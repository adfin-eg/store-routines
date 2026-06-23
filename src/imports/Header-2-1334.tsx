import svgPaths from "./svg-8qg300dkju";

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
          <path d="M14 8H6L10 12L14 8Z" fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center justify-center pr-[10px] right-0 top-0">
      <Notifications24Px />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[12px] text-right text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Username
      </p>
      <ActionIcon />
    </div>
  );
}

function ContextUserStoreEtc() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="// Context , user store etc">
      <Frame1 />
    </div>
  );
}

function PreviousLevel() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Previous level">
      <p className="font-['Roboto:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[24px] text-[rgba(255,255,255,0.8)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Items
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[6px]">
      <div className="absolute inset-[0_-11.79%_0_-5.89%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.06066 28">
          <g id="Frame 9">
            <path d={svgPaths.pe327e80} id="Angle 1" stroke="var(--stroke-0, white)" strokeOpacity="0.8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TitleStatus() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Title + status">
      <p className="font-['Roboto:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[24px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mayonnaise
      </p>
    </div>
  );
}

function ViewedLevel() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Viewed level">
      <TitleStatus />
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="content-stretch flex gap-[15px] items-start justify-center pl-[30px] py-[10px] relative shrink-0" data-name="Breadcrumb">
      <PreviousLevel />
      <Frame2 />
      <ViewedLevel />
    </div>
  );
}

function BreadcrumbAndUserContext() {
  return (
    <div className="bg-[#558d69] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Breadcrumb and user context">
      <ContextUserStoreEtc />
      <Breadcrumb />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#333] content-stretch flex items-start px-[25px] py-[6px] relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#ccc] text-[13px] text-center tracking-[-0.5px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        overview
      </p>
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex flex-col items-start py-[3px] relative shrink-0" data-name="Tab">
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#333] content-stretch flex items-start px-[25px] py-[9px] relative shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[13px] text-center text-white tracking-[-0.5px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        details
      </p>
    </div>
  );
}

function Tab1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Tab">
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#333] content-stretch flex items-start px-[25px] py-[6px] relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#ccc] text-[13px] text-center tracking-[-0.5px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        Wholesale prices
      </p>
    </div>
  );
}

function Tab2() {
  return (
    <div className="content-stretch flex flex-col items-start py-[3px] relative shrink-0" data-name="// Tab">
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#333] content-stretch flex items-start px-[25px] py-[6px] relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#ccc] text-[13px] text-center tracking-[-0.5px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        Store prices
      </p>
    </div>
  );
}

function Tab3() {
  return (
    <div className="content-stretch flex flex-col items-start py-[3px] relative shrink-0" data-name="// Tab">
      <Frame5 />
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex gap-[2px] items-end relative shrink-0" data-name="Tabs">
      <Tab />
      <Tab1 />
      <Tab2 />
      <Tab3 />
    </div>
  );
}

function Autolayout() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-end right-[10px] bottom-0" data-name="Autolayout">
      <Tabs />
    </div>
  );
}

function TabRow() {
  return (
    <div className="bg-[#558d69] h-[24px] relative shrink-0 w-full" data-name="Tab row">
      <Autolayout />
    </div>
  );
}

export default function Header() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Header">
      <BreadcrumbAndUserContext />
      <TabRow />
    </div>
  );
}