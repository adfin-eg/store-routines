import svgPaths from "./svg-9eaca977ir";

function PreviousLevel() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Previous level">
      <p className="font-['Roboto:Light',sans-serif] font-light leading-[26.25px] relative shrink-0 text-[21px] text-[rgba(255,255,255,0.8)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Items
      </p>
    </div>
  );
}

function Chevron() {
  return (
    <div className="h-[27px] relative shrink-0 w-[6px]" data-name="Chevron">
      <div className="absolute inset-[0_-11.79%_0_-5.89%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.06066 27">
          <g id="Chevron">
            <path d={svgPaths.p124d0a00} id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ViewedLevel2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Viewed level">
      <p className="font-['Roboto:Light',sans-serif] font-light leading-[26.25px] relative shrink-0 text-[21px] text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Pepsi Max 0.33L
      </p>
    </div>
  );
}

function Information() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Information">
      <p className="font-['Roboto:Light',sans-serif] font-light leading-[22.5px] relative shrink-0 text-[15px] text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        100001604
      </p>
    </div>
  );
}

function ViewedLevel1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[155px]" data-name="Viewed level">
      <ViewedLevel2 />
      <Information />
    </div>
  );
}

function Status() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Status">
      <p className="font-['Roboto:Light',sans-serif] font-light leading-[26.25px] relative shrink-0 text-[21px] text-[rgba(255,255,255,0.8)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        (Draft)
      </p>
    </div>
  );
}

function ViewedLevel() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Viewed level">
      <ViewedLevel1 />
      <Status />
    </div>
  );
}

export default function Breadcrumb() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative size-full" data-name="Breadcrumb">
      <PreviousLevel />
      <Chevron />
      <ViewedLevel />
    </div>
  );
}