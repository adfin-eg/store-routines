import svgPaths from "./svg-9my1zp13fs";
import { imgVector } from "./svg-bmdxj";

function RedBlack() {
  return (
    <div className="absolute contents inset-0" data-name="RedBlack">
      <div className="absolute inset-[0.26%_0_0_1.05%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.189px_-0.047px] mask-size-[18px_18px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8105 17.9526">
          <path d={svgPaths.p26873500} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_1.05%_0.26%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[18px_18px]" data-name="Vector_2" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8105 17.9527">
          <path d={svgPaths.p2e484ef0} fill="var(--fill-0, white)" id="Vector_2" />
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <RedBlack />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ClipPathGroup />
    </div>
  );
}

function EgLogo() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-px size-[18px] top-px" data-name="EgLogo">
      <Icon />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <EgLogo />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex h-[52px] items-start justify-center left-0 pt-[16px] top-0 w-[95px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[16.5px] left-[28.83px] top-[45.75px] w-[37.336px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[16.5px] left-[19.5px] text-[#ccc] text-[11px] text-center top-0 tracking-[0.55px] uppercase">Home</p>
    </div>
  );
}

function ChartPie() {
  return (
    <div className="absolute left-[32.5px] size-[30px] top-[11.75px]" data-name="chart-pie">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="chart-pie">
          <path d={svgPaths.p9307580} fill="var(--fill-0, #CCCCCC)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SidebarItem() {
  return (
    <div className="absolute h-[74px] left-0 top-0 w-[95px]" data-name="SidebarItem">
      <Text />
      <ChartPie />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[16.5px] left-[27.89px] top-[45.75px] w-[39.211px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[16.5px] left-[20.5px] text-[#ccc] text-[11px] text-center top-0 tracking-[0.55px] uppercase">Items</p>
    </div>
  );
}

function Container3() {
  return <div className="absolute bg-[#558d69] h-[74px] left-0 top-0 w-[6px]" data-name="Container" />;
}

function BoxTaped() {
  return (
    <div className="absolute left-[32.5px] size-[30px] top-[11.75px]" data-name="box-taped">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="box-taped">
          <path d={svgPaths.p983a600} fill="var(--fill-0, #CCCCCC)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SidebarItem1() {
  return (
    <div className="absolute bg-[#2d2d2d] h-[74px] left-0 top-[74px] w-[95px]" data-name="SidebarItem">
      <Text1 />
      <Container3 />
      <BoxTaped />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[16.5px] left-[14.88px] top-[45.75px] w-[65.25px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[16.5px] left-[33.5px] text-[#ccc] text-[11px] text-center top-0 tracking-[0.55px] uppercase">Inventory</p>
    </div>
  );
}

function SimpleIcon() {
  return (
    <div className="h-[30px] overflow-clip relative shrink-0 w-full" data-name="SimpleIcon">
      <div className="absolute inset-[5%_10%_10%_10%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 25.4988">
          <path d={svgPaths.p116da700} fill="var(--fill-0, #CCCCCC)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32.5px] size-[30px] top-[11.75px]" data-name="Container">
      <SimpleIcon />
    </div>
  );
}

function SidebarItem2() {
  return (
    <div className="absolute h-[74px] left-0 top-[148px] w-[95px]" data-name="SidebarItem">
      <Text2 />
      <Container4 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[16.5px] left-[5.82px] top-[45.75px] w-[83.359px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[16.5px] left-[42.5px] text-[#ccc] text-[11px] text-center top-0 tracking-[0.55px] uppercase">Procurement</p>
    </div>
  );
}

function CartPlus() {
  return (
    <div className="absolute left-[32.5px] size-[30px] top-[11.75px]" data-name="cart-plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="cart-plus">
          <path d={svgPaths.p1f31aa00} fill="var(--fill-0, #CCCCCC)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SidebarItem3() {
  return (
    <div className="absolute h-[74px] left-0 top-[222px] w-[95px]" data-name="SidebarItem">
      <Text3 />
      <CartPlus />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[16.5px] left-[21.95px] top-[45.75px] w-[51.094px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[16.5px] left-[26.5px] text-[#ccc] text-[11px] text-center top-0 tracking-[0.55px] uppercase">Loyalty</p>
    </div>
  );
}

function SimpleIcon1() {
  return (
    <div className="h-[30px] overflow-clip relative shrink-0 w-full" data-name="SimpleIcon">
      <div className="absolute inset-[10%_10%_9.98%_10%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24.0047">
          <path d={svgPaths.p22066480} fill="var(--fill-0, #CCCCCC)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32.5px] size-[30px] top-[11.75px]" data-name="Container">
      <SimpleIcon1 />
    </div>
  );
}

function SidebarItem4() {
  return (
    <div className="absolute h-[74px] left-0 top-[296px] w-[95px]" data-name="SidebarItem">
      <Text4 />
      <Container5 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[16.5px] left-[14.87px] top-[45.75px] w-[65.266px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[16.5px] left-[33.5px] text-[#ccc] text-[11px] text-center top-0 tracking-[0.55px] uppercase">Reporting</p>
    </div>
  );
}

function SimpleIcon2() {
  return (
    <div className="h-[30px] overflow-clip relative shrink-0 w-full" data-name="SimpleIcon">
      <div className="absolute inset-[15%_5.34%_20%_10.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.379 19.5">
          <path d={svgPaths.p8f95700} fill="var(--fill-0, #CCCCCC)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32.5px] size-[30px] top-[11.75px]" data-name="Container">
      <SimpleIcon2 />
    </div>
  );
}

function SidebarItem5() {
  return (
    <div className="absolute h-[74px] left-0 top-[370px] w-[95px]" data-name="SidebarItem">
      <Text5 />
      <Container6 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[16.5px] left-[27.18px] top-[45.75px] w-[40.633px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[16.5px] left-[20.5px] text-[#ccc] text-[11px] text-center top-0 tracking-[0.55px] uppercase">Store</p>
    </div>
  );
}

function SimpleIcon3() {
  return (
    <div className="h-[30px] overflow-clip relative shrink-0 w-full" data-name="SimpleIcon">
      <div className="absolute inset-[15%_10.56%_15%_10.72%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.6147 21">
          <path d={svgPaths.p30952540} fill="var(--fill-0, #CCCCCC)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32.5px] size-[30px] top-[11.75px]" data-name="Container">
      <SimpleIcon3 />
    </div>
  );
}

function SidebarItem6() {
  return (
    <div className="absolute h-[74px] left-0 top-[444px] w-[95px]" data-name="SidebarItem">
      <Text6 />
      <Container7 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[16.5px] left-[15.91px] top-[45.75px] w-[63.172px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[16.5px] left-[32.5px] text-[#ccc] text-[11px] text-center top-0 tracking-[0.55px] uppercase">Customer</p>
    </div>
  );
}

function UserGroup() {
  return (
    <div className="absolute left-[32.5px] size-[30px] top-[11.75px]" data-name="user-group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="user-group">
          <path d={svgPaths.p654ff80} fill="var(--fill-0, #CCCCCC)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SidebarItem7() {
  return (
    <div className="absolute h-[74px] left-0 top-[518px] w-[95px]" data-name="SidebarItem">
      <Text7 />
      <UserGroup />
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[16.5px] left-[13.11px] top-[45.75px] w-[68.781px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[16.5px] left-[34.5px] text-[#ccc] text-[11px] text-center top-0 tracking-[0.55px] uppercase">Promotion</p>
    </div>
  );
}

function SimpleIcon4() {
  return (
    <div className="h-[30px] overflow-clip relative shrink-0 w-full" data-name="SimpleIcon">
      <div className="absolute inset-[15%_10%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 21">
          <path d={svgPaths.p22465d80} fill="var(--fill-0, #CCCCCC)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32.5px] size-[30px] top-[11.75px]" data-name="Container">
      <SimpleIcon4 />
    </div>
  );
}

function SidebarItem8() {
  return (
    <div className="absolute h-[74px] left-0 top-[592px] w-[95px]" data-name="SidebarItem">
      <Text8 />
      <Container8 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[870px] left-0 overflow-clip top-[52px] w-[95px]" data-name="Container">
      <SidebarItem />
      <SidebarItem1 />
      <SidebarItem2 />
      <SidebarItem3 />
      <SidebarItem4 />
      <SidebarItem5 />
      <SidebarItem6 />
      <SidebarItem7 />
      <SidebarItem8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute h-[16.5px] left-[23.12px] top-[45.75px] w-[48.758px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[16.5px] left-[24.5px] text-[#ccc] text-[11px] text-center top-0 tracking-[0.55px] uppercase">System</p>
    </div>
  );
}

function Gear() {
  return (
    <div className="absolute left-[32.5px] size-[30px] top-[11.75px]" data-name="gear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="gear">
          <path d={svgPaths.p1e62b800} fill="var(--fill-0, #CCCCCC)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SidebarItem9() {
  return (
    <div className="absolute h-[74px] left-0 top-[922px] w-[95px]" data-name="SidebarItem">
      <Text9 />
      <Gear />
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="bg-[#373737] relative size-full" data-name="Sidebar">
      <Container />
      <Container2 />
      <SidebarItem9 />
    </div>
  );
}