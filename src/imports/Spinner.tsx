import svgPaths from "./svg-5o809v20ev";

function Component1() {
  return (
    <div className="relative size-[16px]" data-name="2">
      <div className="absolute inset-[-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="2">
            <path d={svgPaths.pe54c7c8} id="Ellipse" stroke="var(--stroke-0, #191919)" strokeWidth="2" />
            <path d={svgPaths.p7ee8080} id="Ellipse_2" stroke="var(--stroke-0, #191919)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute left-0 size-[32px] top-0" data-name="1">
      <div className="absolute inset-[-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
          <g id="1">
            <path d={svgPaths.p1fc17c8} id="Ellipse" stroke="var(--stroke-0, #191919)" strokeWidth="2" />
            <path d={svgPaths.p11178f80} id="Ellipse_2" stroke="var(--stroke-0, #191919)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Spinner() {
  return (
    <div className="relative size-full" data-name="Spinner">
      <div className="absolute flex items-center justify-center left-[8px] size-[16px] top-[8px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Component1 />
        </div>
      </div>
      <Component />
    </div>
  );
}