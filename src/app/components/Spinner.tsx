import React from "react";
import svgPaths from "@/imports/svg-5o809v20ev";

function Component1() {
  return (
    <div className="relative size-[16px]" data-name="2">
      <div className="absolute inset-[-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="2">
            <path d={svgPaths.pe54c7c8} id="Ellipse" stroke="#191919" strokeWidth="2" />
            <path d={svgPaths.p7ee8080} id="Ellipse_2" stroke="#191919" strokeWidth="2" />
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
            <path d={svgPaths.p1fc17c8} id="Ellipse" stroke="#191919" strokeWidth="2" />
            <path d={svgPaths.p11178f80} id="Ellipse_2" stroke="#191919" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export function Spinner() {
  return (
    <div className="relative size-[24px] animate-spin" data-name="Spinner">
      <div className="absolute flex items-center justify-center left-[6px] size-[12px] top-[6px]">
        <div className="flex-none rotate-90 scale-[0.75] origin-center">
          <Component1 />
        </div>
      </div>
      <div className="scale-[0.75] origin-top-left">
        <Component />
      </div>
    </div>
  );
}
