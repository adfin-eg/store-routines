import React from "react";
import svgPaths from "./svg-79mbcmvwo3";
import imgImage from "figma:asset/74bd78976a668e1cc61b38017d679dff360ace45.png";
import imgImage1 from "figma:asset/898d19ffff6bfdba80f8fefc8d425930bb2656d8.png";
import pepsiCanImg from "figma:asset/78c2cc4355de416f2fb17542ac775bc9baf4fa76.png";
import cocaColaImg from "figma:asset/e8a1bb544382700dd0b66eab1111b526be54018c.png";
import laysClassicImg from "figma:asset/18ce190e507d0524cb728e329ba132e83e76f2e6.png";
import milkWholeImg from "figma:asset/2c459e7413523bd64331668a3e6c758c99927431.png";
import greekYogurtImg from "figma:asset/001fb3b521bafb6294a798de02a992dfdd39b89d.png";
import monsterEnergyImg from "figma:asset/ba66e733139ff824e5984fba083dd0a02e4ef639.png";
import redBullSugarfreeImg from "figma:asset/a66204a28385163d176b6bc90d2908e20d109925.png";
import kinderBuenoImg from "figma:asset/a95931b2ed3e2d1ee0a0c8dea44595a1fde100b0.png";
import tropicanaImg from "figma:asset/52632aab1a676d83a183cc8f094ae4ac344b24a2.png";
import evianImg from "figma:asset/c642c8fdfe17ef6b7c0cc0892bfe14b02c43c4e9.png";
import pringlesImg from "figma:asset/9d3f44f52593bbe35eb88b57c0dbdc68f6dd5c67.png";
import doritosImg from "figma:asset/53a704b7b60fc9a4adeeaae79fd9fddd662c32aa.png";
import redApplesImg from "figma:asset/d5039138e5f9a129e615bc7bf636ea1da05f1702.png";
import bananasImg from "figma:asset/ac44ef83451c3f7e3ad57b391378c5714a732a64.png";
import icebergLettuceImg from "figma:asset/4a5a64008bcf28cc61666f519898dd0156fdbacd.png";
import carrotsImg from "figma:asset/6885b25423c41912bb60004de547ce889d8ebc1d.png";
import cucumberImg from "figma:asset/ded58f5cca3ea5b9ef3b5da6dfe77861fedf670f.png";
import blueberriesImg from "figma:asset/f81aa6c24b5840037c21973a4b5ab24a52bb9dc7.png";
import avocadoImg from "figma:asset/89a553aacbfb3b59d195bb1f0b75d8cd7b6c3056.png";
import sweetPotatoesImg from "figma:asset/f88e210b077159724a78b86e1386496c2d19dfa4.png";
import cherryTomatoesImg from "figma:asset/599ec20276aecc3f00ba6f3b2804e7e6cf4d4a9a.png";
import { 
  FieldsetSerialNumber, 
  FieldsetProductClassification, 
  FieldsetRelatedItems, 
  FieldsetSeason, 
  FieldsetFood, 
  FieldsetProductInformation,
  BigTextField,
  BigTextField1,
  BigTextField2,
  TextInput,
  DarkSecondaryButton as SecondaryButton,
  Checkbox
} from "@/imports/Fieldsets-4-4317";



function Header() {
  return (
    <div className="content-stretch flex items-start overflow-clip pb-[10px] relative shrink-0 w-[240px]" data-name="Header 1">
      <p className="flex-[1_0_0] font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[19px] min-h-px min-w-px relative text-[#1a1a1a] text-[16px] uppercase whitespace-pre-wrap">model</p>
    </div>
  );
}

function Field() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[2px] items-start leading-[normal] overflow-clip pb-[10px] relative shrink-0 text-[14px] whitespace-pre-wrap" data-name="Field">
      <p className="relative shrink-0 text-[#666] w-[240px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Model number
      </p>
      <p className="relative shrink-0 text-[#1a1a1a] w-[240px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        500100
      </p>
    </div>
  );
}

function Input({ itemName }: { itemName?: string }) {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput defaultValue={itemName || "Pepsi Max 0.33L"} />
    </div>
  );
}

function Field1({ itemName }: { itemName?: string }) {
  return (
    <div className="h-[61px] overflow-clip relative shrink-0 w-[240px]" data-name="Field">
      <p className="absolute pointer-events-none font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[normal] text-[#f4635b]">*</span>
        <span className="leading-[normal]">{` Model name`}</span>
      </p>
      <Input itemName={itemName} />
    </div>
  );
}

function FieldsetModel({ itemName }: { itemName?: string }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Fieldset/Model">
      <Header />
      <Field />
      <Field1 itemName={itemName} />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex items-start overflow-clip pb-[10px] relative shrink-0 w-[240px]" data-name="Header 1">
      <p className="flex-[1_0_0] font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[19px] min-h-px min-w-px relative text-[#1a1a1a] text-[16px] uppercase whitespace-pre-wrap">item</p>
    </div>
  );
}

function ShowQrCode({ hideActions }: { hideActions?: boolean }) {
  if (hideActions) return null;
  return (
    <div className="content-stretch flex items-center relative shrink-0 py-2" data-name="Button">
      <SecondaryButton>Show QR code</SecondaryButton>
    </div>
  );
}

function ShowHideQrCode({ hideActions }: { hideActions?: boolean }) {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Show / Hide QR code">
      <ShowQrCode hideActions={hideActions} />
    </div>
  );
}

function Frame23({ hideActions }: { hideActions?: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pb-[10px] relative shrink-0 w-[240px]">
      <ShowHideQrCode hideActions={hideActions} />
    </div>
  );
}

function Field2() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[2px] items-start leading-[normal] overflow-clip pb-[10px] relative shrink-0 text-[14px] whitespace-pre-wrap" data-name="Field">
      <p className="relative shrink-0 text-[#666] w-[240px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        SKU
      </p>
      <p className="relative shrink-0 text-[#1a1a1a] w-[240px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        7044961000102
      </p>
    </div>
  );
}

function Field3({ itemGtin }: { itemGtin?: string }) {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[2px] items-start leading-[normal] overflow-clip relative shrink-0 text-[14px] whitespace-pre-wrap" data-name="Field">
      <p className="relative shrink-0 text-[#666] w-[240px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        GTIN
      </p>
      <p className="relative shrink-0 text-[#1a1a1a] w-[240px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {itemGtin || "7044961000102"}
      </p>
    </div>
  );
}

function Button({ hideActions }: { hideActions?: boolean }) {
  if (hideActions) return null;
  return (
    <div className="content-stretch flex items-center relative shrink-0 py-2" data-name="Button">
      <SecondaryButton>Manage GTIN</SecondaryButton>
    </div>
  );
}

function Frame15({ itemGtin, hideActions }: { itemGtin?: string, hideActions?: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start pb-[15px] relative shrink-0">
      <Field3 itemGtin={itemGtin} />
      <Button hideActions={hideActions} />
    </div>
  );
}

function Field4() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[2px] items-start leading-[normal] overflow-clip pb-[10px] relative shrink-0 text-[14px] whitespace-pre-wrap" data-name="Field">
      <p className="relative shrink-0 text-[#666] w-[240px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Product ID
      </p>
      <p className="relative shrink-0 text-[#1a1a1a] w-[240px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        1000002188
      </p>
    </div>
  );
}

function Field5() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[2px] items-start leading-[normal] overflow-clip pb-[10px] relative shrink-0 text-[14px] whitespace-pre-wrap" data-name="Field">
      <p className="relative shrink-0 text-[#666] w-[240px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Item number
      </p>
      <p className="relative shrink-0 text-[#1a1a1a] w-[240px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        500100001
      </p>
    </div>
  );
}

function Input1({ itemName }: { itemName?: string }) {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput defaultValue={itemName || "Pepsi Max 0.33L"} />
    </div>
  );
}

function Field6({ itemName }: { itemName?: string }) {
  return (
    <div className="h-[61px] overflow-clip relative shrink-0 w-[240px]" data-name="Field">
      <p className="absolute pointer-events-none font-['Roboto:Regular',sans-serif] font-normal leading-[0] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[normal] text-[#f4635b]">*</span>
        <span className="leading-[normal]">{` Item text`}</span>
      </p>
      <Input1 itemName={itemName} />
    </div>
  );
}

function Input2() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput defaultValue="Boks / Can" />
    </div>
  );
}

function Field8() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Field">
      <p className="absolute pointer-events-none font-['Roboto:Regular',sans-serif] font-normal leading-[0] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[normal] text-[#f4635b]">*</span>
        <span className="leading-[normal]">{` Sales unit`}</span>
      </p>
      <Input2 />
    </div>
  );
}

function ActionIcon() {
  return (
    <div className="-translate-y-1/2 absolute right-[3px] size-[20px] top-[calc(50%+4.5px)] flex items-center justify-center" data-name="Action icon">
      <svg className="size-[10px]" viewBox="0 0 10 6" fill="none">
        <path d="M9 1L5 5L1 1H9Z" fill="#1A1A1A" />
      </svg>
    </div>
  );
}

function Field7() {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Field">
      <Field8 />
      <ActionIcon />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-start pl-[5px] relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#666] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Unit price factor
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_1px_0px_0px_0px_#ccc]" />
    </div>
  );
}

function Input3() {
  return (
    <TextInput defaultValue="0,33" className="w-[110px]" />
  );
}

function Input4() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput defaultValue="L" />
    </div>
  );
}

function Field9() {
  return (
    <div className="absolute inset-[-59.38%_0_-31.25%_0] overflow-clip" data-name="Field">
      <Input4 />
    </div>
  );
}

function ActionsDropdownOpen() {
  return (
    <div className="-translate-y-1/2 absolute right-[3px] size-[20px] top-1/2 flex items-center justify-center" data-name="Actions / Dropdown / Open">
      <svg className="size-[10px]" viewBox="0 0 10 6" fill="none">
        <path d="M9 1L5 5L1 1H9Z" fill="#1A1A1A" />
      </svg>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="h-[30px] relative shrink-0 w-[110px]" data-name="Dropdown">
      <Field9 />
      <ActionsDropdownOpen />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Input3 />
      <Dropdown />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start pb-[10px] relative shrink-0">
      <Frame20 />
      <Frame18 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[10px] relative shrink-0">
      <Frame19 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex items-start pl-[5px] relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#666] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Price per unit
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_1px_0px_0px_0px_#ccc]" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start pb-[10px] pl-[10px] relative shrink-0">
      <Frame22 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1a1a1a] text-[14px] w-[230px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        45,45 kr / l
      </p>
    </div>
  );
}

function Input5() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput />
    </div>
  );
}

function Field10() {
  return (
    <div className="h-[61px] overflow-clip relative shrink-0 w-[240px]" data-name="Field">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sales code
      </p>
      <Input5 />
    </div>
  );
}

function Selector() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="Selector">
      <Checkbox label="In stock/order" />
    </div>
  );
}

function Selector2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="Selector">
      <Checkbox label="Local management" />
    </div>
  );
}

function FieldsetItem({ itemName, itemGtin, hideActions = false }: { itemName?: string, itemGtin?: string, hideActions?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Fieldset/Item">
      <Header1 />
      <Frame23 hideActions={hideActions} />
      <Field2 />
      <Frame15 itemGtin={itemGtin} hideActions={hideActions} />
      <Field4 />
      <Field5 />
      <Field6 itemName={itemName} />
      <Field7 />
      <Frame17 />
      <Frame21 />
      <Field10 />
      <Selector />
      <Selector2 />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex items-start overflow-clip pb-[10px] relative shrink-0 w-[240px]" data-name="Header 1">
      <p className="flex-[1_0_0] font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[19px] min-h-px min-w-px relative text-[#1a1a1a] text-[16px] uppercase whitespace-pre-wrap">item details</p>
    </div>
  );
}

function Input6({ itemName }: { itemName?: string }) {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput defaultValue={itemName || "Pepsi Max 0.33L"} />
    </div>
  );
}

function Field11({ itemName }: { itemName?: string }) {
  return (
    <div className="h-[61px] overflow-clip relative shrink-0 w-[240px]" data-name="Field">
      <p className="absolute pointer-events-none font-['Roboto:Regular',sans-serif] font-normal leading-[0] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[normal] text-[#f4635b]">*</span>
        <span className="leading-[normal]">{` Receipt text`}</span>
      </p>
      <Input6 itemName={itemName} />
    </div>
  );
}

function Input7({ itemName }: { itemName?: string }) {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput defaultValue={itemName || "Pepsi Max 0.33L"} />
    </div>
  );
}

function Field12({ itemName }: { itemName?: string }) {
  return (
    <div className="h-[61px] overflow-clip relative shrink-0 w-[240px]" data-name="Field">
      <p className="absolute pointer-events-none font-['Roboto:Regular',sans-serif] font-normal leading-[0] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[normal] text-[#f4635b]">*</span>
        <span className="leading-[normal]">{` Label text 1`}</span>
      </p>
      <Input7 itemName={itemName} />
    </div>
  );
}

function Input8() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput />
    </div>
  );
}

function Field13() {
  return (
    <div className="h-[61px] overflow-clip relative shrink-0 w-[240px]" data-name="Field">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Label text 2
      </p>
      <Input8 />
    </div>
  );
}

function Input9() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput defaultValue="Pepsi" />
    </div>
  );
}

function Field15() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Field">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Brand
      </p>
      <Input9 />
    </div>
  );
}

function ActionIcon1() {
  return (
    <div className="-translate-y-1/2 absolute right-[3px] size-[20px] top-[calc(50%+4.5px)] flex items-center justify-center" data-name="Action icon">
      <svg className="size-[10px]" viewBox="0 0 10 6" fill="none">
        <path d="M9 1L5 5L1 1H9Z" fill="#1A1A1A" />
      </svg>
    </div>
  );
}

function Field14() {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Field">
      <Field15 />
      <ActionIcon1 />
    </div>
  );
}

function Input10() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput />
    </div>
  );
}

function Field17() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Field">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Item type
      </p>
      <Input10 />
    </div>
  );
}

function ActionIcon2() {
  return (
    <div className="-translate-y-1/2 absolute right-[3px] size-[20px] top-[calc(50%+4.5px)] flex items-center justify-center" data-name="Action icon">
      <svg className="size-[10px]" viewBox="0 0 10 6" fill="none">
        <path d="M9 1L5 5L1 1H9Z" fill="#1A1A1A" />
      </svg>
    </div>
  );
}

function Field16() {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Field">
      <Field17 />
      <ActionIcon2 />
    </div>
  );
}

function Input11() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput />
    </div>
  );
}

function Field19() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Field">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Substitution item
      </p>
      <Input11 />
    </div>
  );
}

function ActionIcon3() {
  return (
    <div className="-translate-y-1/2 absolute right-[3px] size-[20px] top-[calc(50%+4.5px)] flex items-center justify-center" data-name="Action icon">
      <svg className="size-[10px]" viewBox="0 0 10 6" fill="none">
        <path d="M9 1L5 5L1 1H9Z" fill="#1A1A1A" />
      </svg>
    </div>
  );
}

function Field18() {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Field">
      <Field19 />
      <ActionIcon3 />
    </div>
  );
}

function Frame({ hideActions }: { hideActions?: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1a1a1a] text-[14px] uppercase w-[240px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Label types
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#666] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Item has no label types
      </p>
      {!hideActions && (
        <div className="py-2">
          <SecondaryButton>Manage label types</SecondaryButton>
        </div>
      )}
    </div>
  );
}

function FieldsetItemDetails({ itemName, hideActions = false }: { itemName?: string, hideActions?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Fieldset/Item details">
      <Header2 />
      <Field11 itemName={itemName} />
      <Field12 itemName={itemName} />
      <Field13 />
      <Field14 />
      <Field16 />
      <Field18 />
      <Frame hideActions={hideActions} />
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex items-start overflow-clip pb-[10px] relative shrink-0 w-[240px]" data-name="Header 1">
      <p className="flex-[1_0_0] font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[19px] min-h-px min-w-px relative text-[#1a1a1a] text-[16px] uppercase whitespace-pre-wrap">supplier item details</p>
    </div>
  );
}

function Field20() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[2px] items-start leading-[normal] overflow-clip pb-[10px] relative shrink-0 text-[14px] whitespace-pre-wrap" data-name="Field">
      <p className="relative shrink-0 text-[#666] w-[240px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Supplier
      </p>
      <p className="relative shrink-0 text-[#1a1a1a] w-[240px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        EG Retail
      </p>
    </div>
  );
}

function Input12() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput />
    </div>
  );
}

function Field21() {
  return (
    <div className="h-[61px] overflow-clip relative shrink-0 w-[240px]" data-name="Field">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Supplier item no.
      </p>
      <Input12 />
    </div>
  );
}

function Input13() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput />
    </div>
  );
}

function Field22() {
  return (
    <div className="h-[61px] overflow-clip relative shrink-0 w-[240px]" data-name="Field">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Supplier model no.
      </p>
      <Input13 />
    </div>
  );
}

function Input14() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput />
    </div>
  );
}

function Field23() {
  return (
    <div className="h-[61px] overflow-clip relative shrink-0 w-[240px]" data-name="Field">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Supplier color
      </p>
      <Input14 />
    </div>
  );
}

function Input15() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput />
    </div>
  );
}

function Field24() {
  return (
    <div className="h-[61px] overflow-clip relative shrink-0 w-[240px]" data-name="Field">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Supplier color code
      </p>
      <Input15 />
    </div>
  );
}

function Input16() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput />
    </div>
  );
}

function Field25() {
  return (
    <div className="h-[61px] overflow-clip relative shrink-0 w-[240px]" data-name="Field">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Supplier size
      </p>
      <Input16 />
    </div>
  );
}

function Input17() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput />
    </div>
  );
}

function Field26() {
  return (
    <div className="h-[61px] overflow-clip relative shrink-0 w-[240px]" data-name="Field">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lead time (days)
      </p>
      <Input17 />
    </div>
  );
}

function Frame16({ hideActions }: { hideActions?: boolean }) {
  if (hideActions) return null;
  return (
    <div className="content-stretch flex flex-col items-start pb-[15px] relative shrink-0 py-2">
      <SecondaryButton>edit suppliers</SecondaryButton>
    </div>
  );
}

function FieldsetSupplierItemDetails({ hideActions = false }: { hideActions?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Fieldset/Supplier item details">
      <Header3 />
      <Field20 />
      <Field21 />
      <Field22 />
      <Field23 />
      <Field24 />
      <Field25 />
      <Field26 />
      <Frame16 hideActions={hideActions} />
    </div>
  );
}


function Header4() {
  return (
    <div className="content-stretch flex items-start overflow-clip pb-[10px] relative shrink-0 w-[240px]" data-name="Header 1">
      <p className="flex-[1_0_0] font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[19px] min-h-px min-w-px relative text-[#1a1a1a] text-[16px] uppercase whitespace-pre-wrap">change history</p>
    </div>
  );
}

function Field27() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[2px] items-start leading-[normal] overflow-clip pb-[10px] relative shrink-0 text-[14px] whitespace-pre-wrap" data-name="Field">
      <p className="relative shrink-0 text-[#666] w-[240px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Last changed
      </p>
      <div className="relative shrink-0 text-[#1a1a1a] w-[240px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">24.12.2021 14:03:29</p>
        <p>by user@name.com</p>
      </div>
    </div>
  );
}

function Field28() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[2px] items-start leading-[normal] overflow-clip pb-[10px] relative shrink-0 text-[14px] whitespace-pre-wrap" data-name="Field">
      <p className="relative shrink-0 text-[#666] w-[240px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Created
      </p>
      <div className="relative shrink-0 text-[#1a1a1a] w-[240px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">01.01.1970 00:00:01</p>
        <p>by user@name.com</p>
      </div>
    </div>
  );
}

function FieldsetChangeHistory() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Fieldset/Change history">
      <Header4 />
      <Field27 />
      <Field28 />
    </div>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex items-start overflow-clip pb-[10px] relative shrink-0 w-[240px]" data-name="Header 1">
      <p className="flex-[1_0_0] font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[19px] min-h-px min-w-px relative text-[#1a1a1a] text-[16px] uppercase whitespace-pre-wrap">price</p>
    </div>
  );
}

function Input18() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput defaultValue="1 - Standard sales VAT" />
    </div>
  );
}

function Field30() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Field">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[0] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[normal] text-[#f4635b]">*</span>
        <span className="leading-[normal]">{` VAT code`}</span>
      </p>
      <Input18 />
    </div>
  );
}

function ActionIcon4() {
  return (
    <div className="-translate-y-1/2 absolute right-[2px] size-[20px] top-[calc(50%+4.5px)]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <path d="M14 8H6L10 12L14 8Z" fill="var(--fill-0, #666666)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Field29() {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Field">
      <Field30 />
      <ActionIcon4 />
    </div>
  );
}

function Input19() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput />
    </div>
  );
}

function Field31() {
  return (
    <div className="h-[61px] overflow-clip relative shrink-0 w-[240px]" data-name="Field">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Default margin (%)
      </p>
      <Input19 />
    </div>
  );
}

function Selector4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="Selector">
      <Checkbox label="Open price" />
    </div>
  );
}

function Selector6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="Selector">
      <Checkbox label="Fixed price" />
    </div>
  );
}

function Selector8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="Selector">
      <Checkbox label="Customer discount" />
    </div>
  );
}

function Selector10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="Selector">
      <Checkbox label="Concession" />
    </div>
  );
}

function Selector12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="Selector">
      <Checkbox label="Change VAT" />
    </div>
  );
}

function Fieldset() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Fieldset">
      <Header5 />
      <Field29 />
      <Field31 />
      <Selector4 />
      <Selector6 />
      <Selector8 />
      <Selector10 />
      <Selector12 />
    </div>
  );
}

function Header6() {
  return (
    <div className="content-stretch flex items-start overflow-clip pb-[10px] relative shrink-0 w-[240px]" data-name="Header 1">
      <p className="flex-[1_0_0] font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[19px] min-h-px min-w-px relative text-[#1a1a1a] text-[16px] uppercase whitespace-pre-wrap">sales</p>
    </div>
  );
}

function Input20() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput />
    </div>
  );
}

function Field33() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Field">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Deposit item
      </p>
      <Input20 />
    </div>
  );
}

function ActionIcon5() {
  return (
    <div className="-translate-y-1/2 absolute right-[2px] size-[20px] top-[calc(50%+4.5px)]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <path d={svgPaths.p1fc09680} fill="var(--fill-0, #666666)" id="path2_fill" />
        </g>
      </svg>
    </div>
  );
}

function Field32() {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Field">
      <Field33 />
      <ActionIcon5 />
    </div>
  );
}

function Input21() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput />
    </div>
  );
}

function Field35() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Field">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nonsale type
      </p>
      <Input21 />
    </div>
  );
}

function ActionIcon6() {
  return (
    <div className="-translate-y-1/2 absolute right-[2px] size-[20px] top-[calc(50%+4.5px)]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <path d="M14 8H6L10 12L14 8Z" fill="var(--fill-0, #666666)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Field34() {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Field">
      <Field35 />
      <ActionIcon6 />
    </div>
  );
}

function Input22() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput />
    </div>
  );
}

function Field37() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Field">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Active substance
      </p>
      <Input22 />
    </div>
  );
}

function ActionIcon7() {
  return (
    <div className="-translate-y-1/2 absolute right-[2px] size-[20px] top-[calc(50%+4.5px)]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <path d="M14 8H6L10 12L14 8Z" fill="var(--fill-0, #666666)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Field36() {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Field">
      <Field37 />
      <ActionIcon7 />
    </div>
  );
}

function Input23() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput />
    </div>
  );
}

function Field39() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Field">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Warranty type
      </p>
      <Input23 />
    </div>
  );
}

function ActionIcon8() {
  return (
    <div className="-translate-y-1/2 absolute right-[2px] size-[20px] top-[calc(50%+4.5px)]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <path d="M14 8H6L10 12L14 8Z" fill="var(--fill-0, #666666)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Field38() {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Field">
      <Field39 />
      <ActionIcon8 />
    </div>
  );
}

function Input24() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput />
    </div>
  );
}

function Field41() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Field">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        ID requirement
      </p>
      <Input24 />
    </div>
  );
}

function ActionIcon9() {
  return (
    <div className="-translate-y-1/2 absolute right-[2px] size-[20px] top-[calc(50%+4.5px)]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <path d="M14 8H6L10 12L14 8Z" fill="var(--fill-0, #666666)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Field40() {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Field">
      <Field41 />
      <ActionIcon9 />
    </div>
  );
}

function Input25() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput />
    </div>
  );
}

function Field43() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Field">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Treatment type
      </p>
      <Input25 />
    </div>
  );
}

function ActionIcon10() {
  return (
    <div className="-translate-y-1/2 absolute right-[2px] size-[20px] top-[calc(50%+4.5px)]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <path d="M14 8H6L10 12L14 8Z" fill="var(--fill-0, #666666)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Field42() {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Field">
      <Field43 />
      <ActionIcon10 />
    </div>
  );
}

function Selector14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]">
      <Checkbox label="Serial number required on sale" />
    </div>
  );
}

function Selector16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]">
      <Checkbox label="Update in POS" />
    </div>
  );
}

function StopSale() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]">
      <Checkbox label="Alarm item" />
    </div>
  );
}

function StopSale1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]">
      <Checkbox label="Stop sale" />
    </div>
  );
}

function ExcludeFromGrossProfitReport() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]">
      <Checkbox label="Exclude from gross profit report" />
    </div>
  );
}

function Selector20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]">
      <Checkbox label="Can be sold" />
    </div>
  );
}

function Bonus() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]">
      <Checkbox label="Bonus" />
    </div>
  );
}

function FieldsetSales() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Fieldset/Sales">
      <Header6 />
      <Field32 />
      <Field34 />
      <Field36 />
      <Field38 />
      <Field40 />
      <Field42 />
      <Selector14 />
      <Selector16 />
      <StopSale />
      <StopSale1 />
      <ExcludeFromGrossProfitReport />
      <Selector20 />
      <Bonus />
    </div>
  );
}

function Header7() {
  return (
    <div className="content-stretch flex items-start overflow-clip pb-[10px] relative shrink-0 w-[240px]" data-name="Header 1">
      <p className="flex-[1_0_0] font-['Roboto_Condensed:Bold',sans-serif] font-bold leading-[19px] min-h-px min-w-px relative text-[#1a1a1a] text-[16px] uppercase whitespace-pre-wrap">category</p>
    </div>
  );
}

function Input26() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <div className="absolute bg-white border border-[#ccc] border-solid inset-0" data-name="Field" />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[6px_10px_6px_10px] leading-[normal] text-[#1a1a1a] text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        2000 - Soda / Soft Drinks
      </p>
    </div>
  );
}

function Field45() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Field">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[0] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[normal] text-[#f4635b]">*</span>
        <span className="leading-[normal]">{` Item group`}</span>
      </p>
      <Input26 />
    </div>
  );
}

function ActionIcon11() {
  return (
    <div className="-translate-y-1/2 absolute right-[2px] size-[20px] top-[calc(50%+4.5px)]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <path d="M14 8H6L10 12L14 8Z" fill="var(--fill-0, #666666)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Field44() {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Field">
      <Field45 />
      <ActionIcon11 />
    </div>
  );
}

function Field46() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[2px] items-start leading-[normal] overflow-clip pb-[10px] relative shrink-0 text-[14px] whitespace-pre-wrap" data-name="Field">
      <p className="relative shrink-0 text-[#666] w-[240px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cost carrier
      </p>
      <p className="relative shrink-0 text-[#1a1a1a] w-[240px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        346
      </p>
    </div>
  );
}

function ReadOnlyText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Read only text">
      <Field46 />
    </div>
  );
}

function Input27() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput />
    </div>
  );
}

function Field48() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Field">
      <p className="absolute pointer-events-none font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Item subgroup
      </p>
      <Input27 />
    </div>
  );
}

function ActionIcon12() {
  return (
    <div className="-translate-y-1/2 absolute right-[2px] size-[20px] top-[calc(50%+4.5px)]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <path d="M14 8H6L10 12L14 8Z" fill="var(--fill-0, #666666)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Field47() {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Field">
      <Field48 />
      <ActionIcon12 />
    </div>
  );
}

function Input28() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput />
    </div>
  );
}

function Field50() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Field">
      <p className="absolute pointer-events-none font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Classification
      </p>
      <Input28 />
    </div>
  );
}

function ActionIcon13() {
  return (
    <div className="-translate-y-1/2 absolute right-[2px] size-[20px] top-[calc(50%+4.5px)]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <path d="M14 8H6L10 12L14 8Z" fill="var(--fill-0, #666666)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Field49() {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Field">
      <Field50 />
      <ActionIcon13 />
    </div>
  );
}

function Input29() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput />
    </div>
  );
}

function Field52() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Field">
      <p className="absolute pointer-events-none font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Report category
      </p>
      <Input29 />
    </div>
  );
}

function ActionIcon14() {
  return (
    <div className="-translate-y-1/2 absolute right-[2px] size-[20px] top-[calc(50%+4.5px)]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <path d="M14 8H6L10 12L14 8Z" fill="var(--fill-0, #666666)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Field51() {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Field">
      <Field52 />
      <ActionIcon14 />
    </div>
  );
}

function Input30() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput />
    </div>
  );
}

function Field54() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Field">
      <p className="absolute pointer-events-none font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Special group
      </p>
      <Input30 />
    </div>
  );
}

function ActionIcon15() {
  return (
    <div className="-translate-y-1/2 absolute right-[2px] size-[20px] top-[calc(50%+4.5px)]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <path d="M14 8H6L10 12L14 8Z" fill="var(--fill-0, #666666)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Field53() {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Field">
      <Field54 />
      <ActionIcon15 />
    </div>
  );
}

function Input31() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput />
    </div>
  );
}

function Field56() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Field">
      <p className="absolute pointer-events-none font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Risk item
      </p>
      <Input31 />
    </div>
  );
}

function ActionIcon16() {
  return (
    <div className="-translate-y-1/2 absolute right-[2px] size-[20px] top-[calc(50%+4.5px)]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <path d="M14 8H6L10 12L14 8Z" fill="var(--fill-0, #666666)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Field55() {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Field">
      <Field56 />
      <ActionIcon16 />
    </div>
  );
}

function Input32() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput />
    </div>
  );
}

function Field58() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Field">
      <p className="absolute pointer-events-none font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Category manager
      </p>
      <Input32 />
    </div>
  );
}

function ActionIcon17() {
  return (
    <div className="-translate-y-1/2 absolute right-[2px] size-[20px] top-[calc(50%+4.5px)]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <path d="M14 8H6L10 12L14 8Z" fill="var(--fill-0, #666666)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Field57() {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Field">
      <Field58 />
      <ActionIcon17 />
    </div>
  );
}

function Input33() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput />
    </div>
  );
}

function Field60() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Field">
      <p className="absolute pointer-events-none font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Product category
      </p>
      <Input33 />
    </div>
  );
}

function ActionIcon18() {
  return (
    <div className="-translate-y-1/2 absolute right-[2px] size-[20px] top-[calc(50%+4.5px)]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <path d="M14 8H6L10 12L14 8Z" fill="var(--fill-0, #666666)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Field59() {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Field">
      <Field60 />
      <ActionIcon18 />
    </div>
  );
}

function Input34() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput />
    </div>
  );
}

function Field62() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Field">
      <p className="absolute pointer-events-none font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Product series
      </p>
      <Input34 />
    </div>
  );
}

function ActionIcon19() {
  return (
    <div className="-translate-y-1/2 absolute right-[2px] size-[20px] top-[calc(50%+4.5px)]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <path d="M14 8H6L10 12L14 8Z" fill="var(--fill-0, #666666)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Field61() {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Field">
      <Field62 />
      <ActionIcon19 />
    </div>
  );
}

function Input35() {
  return (
    <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
      <TextInput />
    </div>
  );
}

function Field64() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Field">
      <p className="absolute pointer-events-none font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        ABC category
      </p>
      <Input35 />
    </div>
  );
}

function ActionIcon20() {
  return (
    <div className="-translate-y-1/2 absolute right-[2px] size-[20px] top-[calc(50%+4.5px)]" data-name="Action icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Action icon">
          <path d="M14 8H6L10 12L14 8Z" fill="var(--fill-0, #666666)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Field63() {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Field">
      <Field64 />
      <ActionIcon20 />
    </div>
  );
}

function FieldArea({ item }: { item?: any }) {
  return (
    <div className="h-[61px] relative shrink-0 w-[240px]" data-name="Field">
      <div className="absolute inset-0 overflow-clip" data-name="Field">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-0 right-0 text-[#666] text-[14px] top-0 whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Item area
        </p>
        <div className="absolute inset-[19px_0_12px_0]" data-name="Input">
          <div className="absolute bg-white border border-[#ccc] border-solid inset-0" data-name="Field" />
          <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[6px_10px_6px_10px] leading-[normal] text-[#1a1a1a] text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {item?.itemArea || "10 - Food"}
          </p>
        </div>
      </div>
      <ActionIcon11 />
    </div>
  );
}

function FieldsetCategory({ item }: { item?: any }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Fieldset/Category">
      <Header7 />
      <FieldArea item={item} />
      <Field44 item={item} />
      <ReadOnlyText />
      <Field47 item={item} />
      <Field49 />
      <Field51 />
      <Field53 />
      <Field55 />
      <Field57 />
      <Field59 />
      <Field61 />
      <Field63 />
    </div>
  );
}


export default function Fieldsets({ itemName = "", itemGtin = "", item, hideActions = false }: { itemName?: string, itemGtin?: string, item?: any, hideActions?: boolean }) {
  const fieldsets = [
    { 
      component: (
        <div className="w-[240px] h-[240px] border border-[#CCCCCC] bg-white flex items-center justify-center overflow-hidden">
          {itemName.toLowerCase().includes("pepsi") ? (
            <img src={pepsiCanImg} alt="Pepsi Max Can" className="w-full h-full object-contain p-4" />
          ) : itemName.toLowerCase().includes("coca cola") ? (
            <img src={cocaColaImg} alt="Coca Cola 0.5L" className="w-full h-full object-contain p-4" />
          ) : (itemName.toLowerCase().includes("lays") || itemName.toLowerCase().includes("lay's")) ? (
            <img src={laysClassicImg} alt="Lays Classic XL" className="w-full h-full object-contain p-4" />
          ) : itemName.toLowerCase().includes("milk") ? (
            <img src={milkWholeImg} alt="Milk Whole 1L" className="w-full h-full object-contain p-4" />
          ) : (itemName.toLowerCase().includes("greek") && (itemName.toLowerCase().includes("yogurt") || itemName.toLowerCase().includes("youghurt"))) ? (
            <img src={greekYogurtImg} alt="Greek Yogurt" className="w-full h-full object-contain p-4" />
          ) : itemName.toLowerCase().includes("monster") ? (
            <img src={monsterEnergyImg} alt="Monster Energy 0.5L" className="w-full h-full object-contain p-4" />
          ) : itemName.toLowerCase().includes("red bull") ? (
            <img src={redBullSugarfreeImg} alt="Red Bull Sugarfree 250ml" className="w-full h-full object-contain p-4" />
          ) : itemName.toLowerCase().includes("kinder") ? (
            <img src={kinderBuenoImg} alt="Kinder Bueno 43g" className="w-full h-full object-contain p-4" />
          ) : itemName.toLowerCase().includes("tropicana") ? (
            <img src={tropicanaImg} alt="Tropicana Orange" className="w-full h-full object-contain p-4" />
          ) : itemName.toLowerCase().includes("evian") ? (
            <img src={evianImg} alt="Evian Water" className="w-full h-full object-contain p-4" />
          ) : itemName.toLowerCase().includes("pringles") ? (
            <img src={pringlesImg} alt="Pringles" className="w-full h-full object-contain p-4" />
          ) : itemName.toLowerCase().includes("doritos") ? (
            <img src={doritosImg} alt="Doritos" className="w-full h-full object-contain p-4" />
          ) : itemName.toLowerCase().includes("apples") ? (
            <img src={redApplesImg} alt="Red Apples Gala" className="w-full h-full object-contain p-4" />
          ) : itemName.toLowerCase().includes("bananas") ? (
            <img src={bananasImg} alt="Bananas Premium Bunch" className="w-full h-full object-contain p-2" />
          ) : itemName.toLowerCase().includes("iceberg") ? (
            <img src={icebergLettuceImg} alt="Iceberg Lettuce" className="w-full h-full object-contain p-2" />
          ) : itemName.toLowerCase().includes("carrots") ? (
            <img src={carrotsImg} alt="Carrots" className="w-full h-full object-contain p-4" />
          ) : itemName.toLowerCase().includes("cucumber") ? (
            <img src={cucumberImg} alt="English Cucumber" className="w-full h-full object-contain p-4" />
          ) : itemName.toLowerCase().includes("blueberries") ? (
            <img src={blueberriesImg} alt="Blueberries" className="w-full h-full object-contain p-4" />
          ) : itemName.toLowerCase().includes("avocado") ? (
            <img src={avocadoImg} alt="Avocado" className="w-full h-full object-contain p-4" />
          ) : itemName.toLowerCase().includes("sweet potatoes") ? (
            <img src={sweetPotatoesImg} alt="Sweet Potatoes" className="w-full h-full object-contain p-4" />
          ) : itemName.toLowerCase().includes("cherry tomatoes") ? (
            <img src={cherryTomatoesImg} alt="Cherry Tomatoes" className="w-full h-full object-contain p-4" />
          ) : (
            <div className="w-full h-full bg-white" />
          )}
        </div>
      ), 
      key: "product-image" 
    },
    { component: <FieldsetModel itemName={itemName} />, key: "model" },
    { component: <FieldsetItem itemName={itemName} itemGtin={itemGtin} hideActions={hideActions} />, key: "item" },
    { component: <FieldsetItemDetails itemName={itemName} hideActions={hideActions} />, key: "details" },
    { component: <FieldsetSupplierItemDetails hideActions={hideActions} />, key: "supplier" },
    { component: <FieldsetChangeHistory />, key: "history" },
    { component: <Fieldset key="price" />, key: "price" },
    { component: <FieldsetSales />, key: "sales" },
    { component: <FieldsetCategory item={item} />, key: "category" },
    { component: <FieldsetSerialNumber />, key: "serial" },
    { component: <FieldsetProductClassification item={item} />, key: "classification" },
    { component: <FieldsetRelatedItems hideActions={hideActions} />, key: "related" },
    { component: <FieldsetSeason />, key: "season" },
    { component: <FieldsetFood hideActions={hideActions} />, key: "food" },
    { component: <FieldsetProductInformation />, key: "info", wide: true },
  ];

  return (
    <div className="@container w-full overflow-hidden" data-name="Fieldsets-Container">
      <div 
        className="grid grid-cols-[repeat(auto-fill,300px)] grid-flow-dense relative mt-[-31px]" 
        data-name="Fieldsets"
      >
        {fieldsets.map((fieldset) => (
          <div 
            key={fieldset.key} 
            className={`relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-[-2000px] before:border-t before:border-[#CCCCCC] before:pointer-events-none pt-[31px] mb-[20px] pr-[60px] flex ${
              fieldset.wide 
                ? 'col-span-1 @min-[600px]:col-span-2 @min-[900px]:col-span-3' 
                : 'w-[300px]'
            }`}
          >
            <div className="w-full">
              {fieldset.component}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
