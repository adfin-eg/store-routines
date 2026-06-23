import svgPaths from "./svg-rt0k425s7c";

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p37ecce20} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex items-center justify-center relative size-full" data-name="Container">
      <Icon />
    </div>
  );
}