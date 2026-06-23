import svgPaths from "./svg-aypgydfbst";

export default function ActionIcon({ color = "#1A1A1A" }: { color?: string }) {
  return (
    <div className="relative size-full" data-name="Action icon">
      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <mask height="10" id="mask0_13_995" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="1" y="5">
            <path d={svgPaths.pf057100} fill={color} id="Union" />
          </mask>
          <g mask="url(#mask0_13_995)">
            <rect fill={color} height="20" id="Color" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}