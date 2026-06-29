import React, { useState, useEffect } from "react";
import { X, Plus, MoreHorizontal, Check } from "lucide-react";
import UiIcon from "../../imports/UiIcon";
import svgPathsDelete from "@/imports/svg-thb5u7b813";
import svgPathsEdit from "@/imports/svg-4f8idnkp17";
import * as Popover from "@radix-ui/react-popover";
import { motion as Motion, AnimatePresence } from "motion/react";
import { useUserMode } from "@/app/contexts/UserModeContext";

// Friendly labels for the applied-filter chips; unknown keys fall back to a prettified key.
const FILTER_CHIP_LABELS: Record<string, string> = {
  promotion: "Promotion",
  promotionPriceFlag: "Promotion price",
  memberOffer: "Member offer",
  mix: "Mix",
  localItem: "Local item",
  localValues: "Local values",
  localValuesList: "Local values",
  promotionType: "Promotion type",
  assortment: "Assortment",
  gtin: "GTIN",
  itemText: "Item text",
  retailPrice: "Ordinary price",
  promotionPrice: "Promotion price",
  promotionStart: "Promotion start",
  promotionEnd: "Promotion end",
  memberPrice: "Member price",
};

let presetIdCounter = 0;
const genPresetId = () =>
  `p-${Date.now().toString(36)}-${(presetIdCounter++).toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

const prettifyFilterKey = (key: string) =>
  key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase()).trim();

const labelForFilterKey = (key: string) => FILTER_CHIP_LABELS[key] ?? prettifyFilterKey(key);

interface FilterPreset {
  // Stable unique identity so two presets can share a name (e.g. one private, one shared).
  id?: string;
  name: string;
  // Shared presets carry per-language names so non-HQ users see the filter in their language.
  nameTranslations?: { en?: string; no?: string; sv?: string };
  selectedIds: string[];
  expandedIds: string[];
  windowStates?: Record<string, any>;
  isDefault?: boolean;
  isQuickFilter?: boolean;
  isPinned?: boolean;
  isSystem?: boolean;
  order?: string[];
  activeTab?: string;
  filters?: Record<string, string>;
  filterModes?: Record<string, string>;
  isMemberOffer?: boolean;
  isMix?: boolean;
  isPromotionPrice?: boolean;
  isLocalPromotion?: boolean;
  attributeFilter?: string;
  gridColumnIds?: string[];
  visibility?: "private" | "common";
}


interface ItemGroup {
  id: string;
  label: string;
  children?: ItemGroup[];
}

const ITEM_GROUPS: ItemGroup[] = [
  { 
    id: "01", 
    label: "01 - Camping & outdoor",
    children: [
      { id: "0101", label: "0101 - Tents & shelters" },
      { id: "0102", label: "0102 - Sleeping bags" },
      { id: "0103", label: "0103 - Outdoor cooking" }
    ]
  },
  { 
    id: "02", 
    label: "02 - Leisure",
    children: [
      { id: "0201", label: "0201 - Sports equipment" },
      { id: "0202", label: "0202 - Toys & games" }
    ]
  },
  { 
    id: "03", 
    label: "03 - Garden",
    children: [
      { id: "0301", label: "0301 - Plants & seeds" },
      { id: "0302", label: "0302 - Garden tools" },
      { id: "0303", label: "0303 - Outdoor furniture" }
    ]
  },
  { 
    id: "04", 
    label: "04 - Homeware",
    children: [
      { id: "0401", label: "0401 - Storage solutions" },
      { id: "0402", label: "0402 - Laundry & cleaning" }
    ]
  },
  { 
    id: "05", 
    label: "05 - Fruit & vegetables",
    children: [
      {
        id: "0501",
        label: "0501 - Fruit",
        children: [
          { id: "050101", label: "050101 - Apples & pears" },
          { id: "050103", label: "050103 - Berries" },
          { id: "050104", label: "050104 - Grapes" },
          { id: "050105", label: "050105 - Tropical fruit" }
        ]
      },
      {
        id: "0502",
        label: "0502 - Vegetables",
        children: [
          { id: "050201", label: "050201 - Root vegetables" },
          { id: "050202", label: "050202 - Leafy greens" },
          { id: "050203", label: "050203 - Cucumbers & tomatoes" }
        ]
      }
    ]
  },
  { 
    id: "06", 
    label: "06 - Food",
    children: [
      {
        id: "0601",
        label: "0601 - Eat & drink",
        children: [
          { id: "060101", label: "060101 - Eat" },
          { id: "060102", label: "060102 - Drink" },
        ]
      },
      { id: "0602", label: "0602 - Snacks & sweets" },
      { id: "0603", label: "0603 - Pantry essentials" }
    ]
  },
  { 
    id: "07", 
    label: "07 - Accessories",
    children: [
      { id: "0701", label: "0701 - Bags & purses" },
      { id: "0702", label: "0702 - Jewelry" }
    ]
  },
  { 
    id: "08", 
    label: "08 - Health, beauty & personal care",
    children: [
      { id: "0801", label: "0801 - Skin care" },
      { id: "0802", label: "0802 - Hair care" },
      { id: "0803", label: "0803 - Hygiene" }
    ]
  },
  { 
    id: "09", 
    label: "09 - Home office & computing",
    children: [
      { id: "0901", label: "0901 - Stationery" },
      { id: "0902", label: "0902 - Computer accessories" }
    ]
  },
  { 
    id: "10", 
    label: "10 - Sound & vision",
    children: [
      { id: "1001", label: "1001 - Headphones" },
      { id: "1002", label: "1002 - Speakers" }
    ]
  },
  { 
    id: "11", 
    label: "11 - Telephones & tablets",
    children: [
      { id: "1101", label: "1101 - Mobile phones" },
      { id: "1102", label: "1102 - Tablet cases" }
    ]
  },
  { 
    id: "12", 
    label: "12 - Batteries & accessories",
    children: [
      { id: "1201", label: "1201 - Alkaline batteries" },
      { id: "1202", label: "1202 - Rechargeable" }
    ]
  },
  { 
    id: "13", 
    label: "13 - Lights, light bulbs & extension leads",
    children: [
      { id: "1301", label: "1301 - LED bulbs" },
      { id: "1302", label: "1302 - Extension cords" }
    ]
  },
  { 
    id: "14", 
    label: "14 - Installation",
    children: [
      { id: "1401", label: "1401 - Electrical parts" },
      { id: "1402", label: "1402 - Plumbing" }
    ]
  },
  { 
    id: "15", 
    label: "15 - Hand tools & power tools",
    children: [
      { id: "1501", label: "1501 - Screwdrivers" },
      { id: "1502", label: "1502 - Power drills" }
    ]
  },
  { 
    id: "16", 
    label: "16 - Decorating & home improvement",
    children: [
      { id: "1601", label: "1601 - Paint & brushes" },
      { id: "1602", label: "1602 - Wallpaper" }
    ]
  },
  { 
    id: "17", 
    label: "17 - Motoring, garage & storage",
    children: [
      { id: "1701", label: "1701 - Car care" },
      { id: "1702", label: "1702 - Shelving" }
    ]
  },
  { 
    id: "18", 
    label: "18 - Workwear & accessories",
    children: [
      { id: "1801", label: "1801 - Protective clothing" },
      { id: "1802", label: "1802 - Safety gloves" }
    ]
  },
  { 
    id: "18-shoes", 
    label: "18 - Shoes",
    children: [
      { id: "18-shoes-01", label: "1801 - Work boots" },
      { id: "18-shoes-02", label: "1802 - Leisure shoes" }
    ]
  },
  { 
    id: "19", 
    label: "19 - Spare parts & other",
    children: [
      { id: "1901", label: "1901 - Misc parts" }
    ]
  },
  { 
    id: "20", 
    label: "20 - Christmas",
    children: [
      { id: "2001", label: "2001 - Decorations" },
      { id: "2002", label: "2002 - Lighting" }
    ]
  },
];

interface ItemGroupPanelProps {
  isOpen: boolean;
  onToggle: () => void;
  selectedIds: Set<string>;
  setSelectedIds: (ids: Set<string>) => void;
  expandedIds: Set<string>;
  setExpandedIds: (ids: Set<string>) => void;
  onClearAll?: () => void;
  data: any[];
  currentWindowStates?: Record<string, any>;
  onApplyWindowStates?: (states: Record<string, any>, order?: string[]) => void;
  totalFilterCount?: number;
  presetKey: string;
  activeTab?: string;
  onTabChange?: (tab: string, presetId?: string) => void;
  gridFilters?: Record<string, string>;
  onGridFiltersChange?: (filters: Record<string, string>) => void;
  gridFilterModes?: Record<string, string>;
  onGridFilterModesChange?: (modes: Record<string, string>) => void;
  isMemberOffer?: boolean;
  onMemberOfferChange?: (val: boolean) => void;
  isMix?: boolean;
  onMixChange?: (val: boolean) => void;
  isPromotionPrice?: boolean;
  onPromotionPriceChange?: (val: boolean) => void;
  promotionType?: string;
  onPromotionTypeChange?: (val: string) => void;
  attributeFilter?: string;
  onAttributeFilterChange?: (val: string) => void;
  showPresets?: boolean;
  initialPresets?: FilterPreset[];
  onQuickFilterPresetsChange?: (presets: FilterPreset[]) => void;
  currentGridColumnIds?: string[];
  onApplyGridColumnIds?: (ids: string[]) => void;
  activePresetId?: string;
  storeName?: string;
}

type SelectionStatus = "all" | "none" | "some";

export interface ItemGroupPanelHandle {
  openNewQuickActionPreset: () => void;
  reorderPresetsById: (draggedId: string | null, targetId: string) => void;
}

export const ItemGroupPanel = React.forwardRef<ItemGroupPanelHandle, ItemGroupPanelProps>(({
  isOpen, 
  onToggle,
  selectedIds,
  setSelectedIds,
  expandedIds,
  setExpandedIds,
  onClearAll,
  data,
  currentWindowStates,
  onApplyWindowStates,
  totalFilterCount = 0,
  presetKey,
  activeTab,
  onTabChange,
  gridFilters,
  onGridFiltersChange,
  gridFilterModes,
  onGridFilterModesChange,
  isMemberOffer,
  onMemberOfferChange,
  isMix,
  onMixChange,
  isPromotionPrice,
  onPromotionPriceChange,
  promotionType,
  onPromotionTypeChange,
  attributeFilter,
  onAttributeFilterChange,
  showPresets = true,
  initialPresets,
  onQuickFilterPresetsChange,
  currentGridColumnIds,
  onApplyGridColumnIds,
  activePresetId,
  storeName,
}, ref) => {
  const { isHqUser } = useUserMode();
  const [presets, setPresets] = useState<FilterPreset[]>([]);
  const presetsLoadedRef = React.useRef(false);
  // Set synchronously when the parent designates a preset via activePresetName, so the
  // auto-deselect effect below doesn't clear the dropdown during a preset→preset transition
  // (where selectedPresetName still holds the previous, now-mismatching preset name).
  const applyingActivePresetRef = React.useRef(false);
  const [newPresetName, setNewPresetName] = useState(""); // English / primary name
  const [presetNameNo, setPresetNameNo] = useState(""); // Norwegian
  const [presetNameSv, setPresetNameSv] = useState(""); // Swedish
  const [isPresetsDropdownOpen, setIsPresetsDropdownOpen] = useState(false);
  const [selectedPresetId, setSelectedPresetId] = useState<string>("");
  const [justApplied, setJustApplied] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [presetToDeleteId, setPresetToDeleteId] = useState<string>("");
  const [isEditingPreset, setIsEditingPreset] = useState(false);
  const [editingPresetOriginalId, setEditingPresetOriginalId] = useState("");
  const [isLoadAsDefault, setIsLoadAsDefault] = useState(false);
  const [isQuickFilter, setIsQuickFilter] = useState(false);
  const [presetVisibility, setPresetVisibility] = useState<"private" | "common">("private");
  // Switch the dropdown between private presets and shared (all-store) presets.
  // Defaults to "common" (shared) since the built-in presets are shared.
  const [visibilityTab, setVisibilityTab] = useState<"private" | "common">("common");
  const [hiddenPresetIds, setHiddenPresetIds] = useState<Set<string>>(new Set());
  // Per-user local override (like hidden): a non-HQ user's personal quick-view choices.
  // id -> true (force into the bar) / false (force out), overriding the preset's own
  // isQuickFilter flag. Absent id = follow the preset default. HQ users edit the preset
  // directly (shared) and ignore this map.
  const [quickViewOverrides, setQuickViewOverrides] = useState<Map<string, boolean>>(new Map());
  const [showHidden, setShowHidden] = useState(false);
  const [defaultPresetId, setDefaultPresetId] = useState<string>("");
  const [activePopoverRowId, setActivePopoverRowId] = useState<string | null>(null);

  const selectedPresetDisplayName = presets.find(p => p.id === selectedPresetId)?.name ?? "";

  // Whether a preset currently shows as a quick-view button. HQ users follow the preset's
  // shared isQuickFilter flag; non-HQ users follow their personal override (if any) on top of it.
  const isQuickViewActiveFor = (preset: FilterPreset, overrides: Map<string, boolean> = quickViewOverrides) => {
    if (isHqUser) return !!preset.isQuickFilter;
    return overrides.has(preset.id!) ? !!overrides.get(preset.id!) : !!preset.isQuickFilter;
  };

  // Open the "New preset" modal pre-flagged as a quick action (used by the tab group's + button).
  const openNewQuickActionPreset = () => {
    setIsEditingPreset(false);
    setEditingPresetOriginalId("");
    setNewPresetName("");
    setPresetNameNo("");
    setPresetNameSv("");
    setIsLoadAsDefault(false);
    setIsQuickFilter(true);
    setPresetVisibility("private");
    setShowSaveModal(true);
    setIsPresetsDropdownOpen(false);
  };

  React.useImperativeHandle(ref, () => ({ openNewQuickActionPreset, reorderPresetsById }));

  useEffect(() => {
    if (activePresetId === undefined) return;
    applyingActivePresetRef.current = true;
    // Only a real active button (non-empty id) drives the dropdown selection. When the
    // parent reports no active button ("" / Custom), leave the dropdown selection alone —
    // it may hold a non-quick-filter preset applied from the dropdown; the auto-deselect
    // effect clears it if the current state no longer matches.
    if (activePresetId) setSelectedPresetId(activePresetId);
    const t = setTimeout(() => { applyingActivePresetRef.current = false; }, 300);
    return () => clearTimeout(t);
  }, [activePresetId]);

  useEffect(() => {
    if (isPresetsDropdownOpen) {
      // Open the visibility tab that contains the currently selected preset, so it's visible.
      const selected = selectedPresetId ? presets.find(p => p.id === selectedPresetId) : undefined;
      if (selected) setVisibilityTab(selected.visibility ?? "private");
    } else {
      setActivePopoverRowId(null);
    }
  }, [isPresetsDropdownOpen]);

  useEffect(() => {
    if (!showPresets) return;

    // Sync presets and default name from storage when presetKey changes
    let loadedPresets: FilterPreset[] = [];
    try {
      const saved = localStorage.getItem(presetKey);
      if (saved && saved !== "undefined") {
        loadedPresets = JSON.parse(saved);
      }
    } catch (e) {
      console.error("Error loading presets", e);
    }
    // Merge any initialPresets that aren't already present by name,
    // and backfill fields (like gridColumnIds) that were added after initial storage
    if (initialPresets && initialPresets.length > 0) {
      const existingNames = new Set(loadedPresets.map((p: FilterPreset) => p.name));
      const missing = initialPresets.filter(p => !existingNames.has(p.name));
      // Prepend missing defaults (preserving their defined order) so newly added
      // built-in presets like "All" appear at the front rather than the end.
      if (missing.length > 0) loadedPresets = [...missing, ...loadedPresets];
      loadedPresets = loadedPresets.map((p: FilterPreset) => {
        const seed = initialPresets.find(ip => ip.name === p.name);
        if (!seed) return p;
        const updates: Partial<FilterPreset> = {};
        if (seed.gridColumnIds !== undefined && p.gridColumnIds === undefined) {
          updates.gridColumnIds = seed.gridColumnIds;
        }
        // Built-in presets are authoritative: keep their filters in sync with the seed
        // so older stored values (e.g. Promotions' previous filter) can't go stale and
        // cause the preset to look unselectable (auto-deselect on a filter mismatch).
        if (seed.filters !== undefined && JSON.stringify(seed.filters) !== JSON.stringify(p.filters)) {
          updates.filters = seed.filters;
        }
        // Built-in presets are shared — keep their visibility in sync with the seed.
        if (seed.visibility !== undefined && p.visibility !== seed.visibility) {
          updates.visibility = seed.visibility;
        }
        return Object.keys(updates).length > 0 ? { ...p, ...updates } : p;
      });
    }
    // Default order on launch: "All" first, "Promotions" second (both can still be
    // reordered within a session).
    const allIdx = loadedPresets.findIndex((p: FilterPreset) => p.name === "All");
    if (allIdx > 0) {
      const [allPreset] = loadedPresets.splice(allIdx, 1);
      loadedPresets.unshift(allPreset);
    }
    const promoIdx = loadedPresets.findIndex((p: FilterPreset) => p.name === "Promotions");
    if (promoIdx > 1) {
      const [promoPreset] = loadedPresets.splice(promoIdx, 1);
      loadedPresets.splice(1, 0, promoPreset);
    }
    // Backfill stable ids. Existing presets keep id = name (so previously stored
    // hidden/default values, which were names, still match) — except duplicate names,
    // where the later one gets a fresh unique id.
    const usedIds = new Set<string>();
    loadedPresets = loadedPresets.map((p: FilterPreset) => {
      let id = p.id;
      if (!id) id = usedIds.has(p.name) ? genPresetId() : p.name;
      usedIds.add(id);
      return p.id === id ? p : { ...p, id };
    });
    presetsLoadedRef.current = true;
    setPresets(loadedPresets);

    // Restore which presets are hidden (persisted so hiding sticks across reloads).
    let restoredHidden = hiddenPresetIds;
    try {
      const savedHidden = localStorage.getItem(`${presetKey}_hidden`);
      if (savedHidden && savedHidden !== "undefined") {
        restoredHidden = new Set<string>(JSON.parse(savedHidden));
        setHiddenPresetIds(restoredHidden);
      }
    } catch (e) {
      console.error("Error loading hidden presets", e);
    }
    // Restore the per-user quick-view overrides (id -> forced on/off).
    let restoredOverrides = quickViewOverrides;
    try {
      const savedOverrides = localStorage.getItem(`${presetKey}_quickview`);
      if (savedOverrides && savedOverrides !== "undefined") {
        const parsed = JSON.parse(savedOverrides);
        // Back-compat: older builds stored an array of "added" ids (all force-on).
        restoredOverrides = Array.isArray(parsed)
          ? new Map<string, boolean>(parsed.map((id: string) => [id, true]))
          : new Map<string, boolean>(Object.entries(parsed as Record<string, boolean>));
        setQuickViewOverrides(restoredOverrides);
      }
    } catch (e) {
      console.error("Error loading quick view overrides", e);
    }
    onQuickFilterPresetsChange?.(loadedPresets.filter(p => isQuickViewActiveFor(p, restoredOverrides) && !restoredHidden.has(p.id!)));

    let initialDefaultId = "All";
    try {
      // One-time reset: clear any previously stored default so "All" becomes the
      // default. Defaults the user sets afterward are then honored as normal.
      const migrationKey = `${presetKey}_default_reset_v1`;
      if (!localStorage.getItem(migrationKey)) {
        localStorage.removeItem(`${presetKey}_default`);
        localStorage.setItem(migrationKey, "1");
        initialDefaultId = "All";
      } else {
        const savedDefault = localStorage.getItem(`${presetKey}_default`);
        // "All" is the default when the user hasn't set another.
        initialDefaultId = savedDefault && savedDefault !== "undefined" ? savedDefault : "All";
      }
    } catch (e) {
      console.error("Error loading default preset", e);
    }
    setDefaultPresetId(initialDefaultId);
  }, [presetKey, showPresets]);

  const isStateMatchingPreset = (preset: FilterPreset) => {
    // Item hierarchy selection/expansion is part of the preset.
    const currentSelected = Array.from(selectedIds).sort();
    const presetSelected = preset.isSystem ? [] : [...(preset.selectedIds || [])].sort();
    if (currentSelected.length !== presetSelected.length || currentSelected.some((v, i) => v !== presetSelected[i])) return false;

    const currentExpanded = Array.from(expandedIds).sort();
    const presetExpanded = preset.isSystem ? [] : [...(preset.expandedIds || [])].sort();
    if (currentExpanded.length !== presetExpanded.length || currentExpanded.some((v, i) => v !== presetExpanded[i])) return false;

    // Check checkboxes (activeTab is a UI label, not part of the preset's filter identity).
    if (preset.isMemberOffer !== undefined && isMemberOffer !== preset.isMemberOffer) return false;
    if (preset.isMix !== undefined && isMix !== preset.isMix) return false;
    if (preset.isPromotionPrice !== undefined && isPromotionPrice !== preset.isPromotionPrice) return false;
    if (preset.isLocalPromotion !== undefined && promotionType !== (preset.isLocalPromotion ? "Local" : "")) return false;
    if (preset.attributeFilter !== undefined && attributeFilter !== preset.attributeFilter) return false;

    // Check grid filters
    if (preset.filters !== undefined) {
      const curF = gridFilters || {};
      const preF = preset.filters || {};
      const curKeys = Object.keys(curF).filter(k => !!curF[k]);
      const preKeys = Object.keys(preF).filter(k => !!preF[k]);
      if (curKeys.length !== preKeys.length) return false;
      if (curKeys.some(k => curF[k] !== preF[k])) return false;
    }

    // Check windows
    const currentWindows = currentWindowStates || {};
    const presetWindows = preset.windowStates || {};
    
    // All windows defined in preset must match current state
    for (const [id, state] of Object.entries(presetWindows)) {
      const cur = currentWindows[id];
      if (state.isOpen) {
        if (!cur || !cur.isOpen || cur.isMaximized !== state.isMaximized) return false;
        
        // If not maximized and size is in preset, check for match within tolerance
        if (!state.isMaximized && state.size) {
          if (Math.abs((cur.size?.width || 0) - state.size.width) > 5 || 
              Math.abs((cur.size?.height || 0) - state.size.height) > 5) return false;
        }
      } else {
        if (cur && cur.isOpen) return false;
      }
    }

    // Also check if any other window is open that shouldn't be
    for (const [id, cur] of Object.entries(currentWindows)) {
      if (cur.isOpen && (!presetWindows[id] || !presetWindows[id].isOpen)) return false;
    }

    return true;
  };

  useEffect(() => {
    if (!selectedPresetId || justApplied || applyingActivePresetRef.current) return;

    const currentPreset = presets.find(p => p.id === selectedPresetId);
    if (!currentPreset || !isStateMatchingPreset(currentPreset)) {
      setSelectedPresetId("");
    }
  }, [selectedIds, expandedIds, currentWindowStates, selectedPresetId, justApplied, presets, activeTab, isMemberOffer, isMix, isPromotionPrice, promotionType, attributeFilter, gridFilters]);

  useEffect(() => {
    if (!presetsLoadedRef.current) return;
    localStorage.setItem(presetKey, JSON.stringify(presets));
    // Quick view buttons = presets whose effective quick-view state is on (preset flag for HQ,
    // personal override for non-HQ), minus hidden ones. ("Show hidden" only affects the dropdown.)
    onQuickFilterPresetsChange?.(presets.filter(p => isQuickViewActiveFor(p) && !hiddenPresetIds.has(p.id!)));
  }, [presets, presetKey, hiddenPresetIds, quickViewOverrides, isHqUser]);

  // Persist hidden presets so hiding sticks across reloads.
  useEffect(() => {
    if (!presetsLoadedRef.current) return;
    localStorage.setItem(`${presetKey}_hidden`, JSON.stringify(Array.from(hiddenPresetIds)));
  }, [hiddenPresetIds, presetKey]);

  // Persist the per-user quick view overrides.
  useEffect(() => {
    if (!presetsLoadedRef.current) return;
    localStorage.setItem(`${presetKey}_quickview`, JSON.stringify(Object.fromEntries(quickViewOverrides)));
  }, [quickViewOverrides, presetKey]);

  const handleSavePreset = () => {
    if (!newPresetName.trim()) return;

    // Shared presets (HQ) store a name per system language; English is the primary/display name.
    const isSharedMultiLang = isHqUser && presetVisibility === "common";
    // For shared presets every language name is required.
    if (isSharedMultiLang && (!presetNameNo.trim() || !presetNameSv.trim())) return;
    const nameTranslations = isSharedMultiLang
      ? { en: newPresetName.trim(), no: presetNameNo.trim(), sv: presetNameSv.trim() }
      : undefined;

    const newPreset: FilterPreset = {
      id: isEditingPreset && editingPresetOriginalId ? editingPresetOriginalId : genPresetId(),
      name: newPresetName.trim(),
      nameTranslations,
      selectedIds: Array.from(selectedIds),
      expandedIds: Array.from(expandedIds),
      windowStates: currentWindowStates,
      isDefault: isLoadAsDefault,
      isQuickFilter,
      activeTab,
      filters: gridFilters,
      filterModes: gridFilterModes,
      isMemberOffer,
      isMix,
      isPromotionPrice,
      isLocalPromotion: promotionType === "Local",
      attributeFilter,
      gridColumnIds: currentGridColumnIds,
      visibility: presetVisibility,
    };

    if (isLoadAsDefault) {
      setDefaultPresetId(newPreset.id!);
      localStorage.setItem(`${presetKey}_default`, newPreset.id!);
    }

    setPresets(prev => {
      // On edit, replace the original by id; on create, just add (duplicate names allowed).
      let filtered = isEditingPreset && editingPresetOriginalId
        ? prev.filter(p => p.id !== editingPresetOriginalId)
        : prev;

      // If this one is default, unset default on all others
      if (newPreset.isDefault) {
        filtered = filtered.map(p => ({ ...p, isDefault: false }));
      }

      return [...filtered, newPreset];
    });

    if (isEditingPreset && selectedPresetId === editingPresetOriginalId) {
      setSelectedPresetId(newPreset.id!);
    }

    setNewPresetName("");
    setEditingPresetOriginalId("");
    setIsEditingPreset(false);
    setShowSaveModal(false);
    setIsLoadAsDefault(false);
    setIsQuickFilter(false);
  };

  const applyPreset = (preset: FilterPreset) => {
    setJustApplied(true);

    // Set tab first because handleTabChange in parent might reset other filters.
    if (isQuickViewActiveFor(preset) && !preset.isSystem && !hiddenPresetIds.has(preset.id!)) {
      // Has a matching quick view button in the tab group — highlight the exact one (by id)
      // so the dropdown and the buttons stay two-way linked.
      onTabChange?.(preset.name, preset.id);
    } else {
      // No quick filter button for this preset — no button is highlighted. The
      // dropdown selection is tracked separately via selectedPresetId below.
      onTabChange?.("Custom");
    }

    if (!preset.isSystem) {
      setSelectedIds(new Set(preset.selectedIds));
      setExpandedIds(new Set(preset.expandedIds));

      if (preset.isMemberOffer !== undefined) onMemberOfferChange?.(preset.isMemberOffer);
      if (preset.isMix !== undefined) onMixChange?.(preset.isMix);
      if (preset.isPromotionPrice !== undefined) onPromotionPriceChange?.(preset.isPromotionPrice);
      if (preset.isLocalPromotion !== undefined) onPromotionTypeChange?.(preset.isLocalPromotion ? "Local" : "");
      if (preset.attributeFilter !== undefined) onAttributeFilterChange?.(preset.attributeFilter);
      if (preset.filters !== undefined) onGridFiltersChange?.(preset.filters);
      if (preset.filterModes !== undefined) onGridFilterModesChange?.(preset.filterModes);
      if (preset.gridColumnIds !== undefined) onApplyGridColumnIds?.(preset.gridColumnIds);
    } else {
      // Clear filters for system presets as they are window-only configurations
      setSelectedIds(new Set());
      setExpandedIds(new Set());
      onMemberOfferChange?.(false);
      onMixChange?.(false);
      onPromotionPriceChange?.(false);
      onPromotionTypeChange?.("");
      onAttributeFilterChange?.("");
      onGridFiltersChange?.({});
      onGridFilterModesChange?.({});
    }
    
    if (preset.windowStates && onApplyWindowStates) {
      onApplyWindowStates(preset.windowStates, preset.order);
    }
    setSelectedPresetId(preset.id!);
    setIsPresetsDropdownOpen(false);
    
    // Allow time for state and props to propagate before re-enabling tracking
    setTimeout(() => setJustApplied(false), 300);
  };

  const deletePreset = (id: string) => {
    setPresets(prev => prev.filter(p => p.id !== id));
    if (selectedPresetId === id) setSelectedPresetId("");

    if (defaultPresetId === id) {
      setDefaultPresetId("");
      localStorage.removeItem(`${presetKey}_default`);
    }

    setShowSaveModal(false);
    setShowDeleteModal(false);
    setPresetToDeleteId("");
    setNewPresetName("");
    setEditingPresetOriginalId("");
    setIsEditingPreset(false);
  };

  const toggleHidden = (id: string) => {
    const willHide = !hiddenPresetIds.has(id);
    setHiddenPresetIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
    // Hiding a preset that is the default removes its default status.
    if (willHide && defaultPresetId === id) {
      setDefaultPresetId("");
      localStorage.removeItem(`${presetKey}_default`);
      setPresets(prev => prev.map(p => p.id === id ? { ...p, isDefault: false } : p));
    }
    setActivePopoverRowId(null);
  };

  // Add/remove a preset from the quick view bar. HQ changes the preset itself (shared); a non-HQ
  // user gets a personal override (like Hide) that doesn't modify the shared preset.
  const toggleQuickView = (preset: FilterPreset) => {
    if (isHqUser) {
      setPresets(prev => prev.map(p => p.id === preset.id ? { ...p, isQuickFilter: !p.isQuickFilter } : p));
    } else {
      const desired = !isQuickViewActiveFor(preset);
      setQuickViewOverrides(prev => {
        const next = new Map(prev);
        // Drop the override when it would just restate the preset default, keeping storage tidy.
        if (desired === !!preset.isQuickFilter) next.delete(preset.id!);
        else next.set(preset.id!, desired);
        return next;
      });
    }
    setActivePopoverRowId(null);
  };

  // Reorder presets (id-based) by moving the dragged preset in front of the target.
  // The persisted `presets` array order is the display order of the quick filter buttons.
  const reorderPresetsById = (draggedId: string | null, targetId: string) => {
    if (!draggedId || draggedId === targetId) return;
    setPresets(prev => {
      const arr = [...prev];
      const from = arr.findIndex(p => p.id === draggedId);
      if (from === -1) return prev;
      const [moved] = arr.splice(from, 1);
      const to = arr.findIndex(p => p.id === targetId);
      if (to === -1) return prev;
      arr.splice(to, 0, moved);
      return arr;
    });
  };

  const handleClearPresetSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Dismissing only clears the dropdown's selection display; the applied filtering
    // and the selected quick filter button are kept as-is.
    setSelectedPresetId("");
  };

  const getAllIds = (group: ItemGroup): string[] => {
    let ids = [group.id];
    if (group.children && group.children.length > 0) {
      group.children.forEach(child => {
        ids = [...ids, ...getAllIds(child)];
      });
    }
    return ids;
  };

  const getAllLeafIds = (group: ItemGroup): string[] => {
    if (!group.children || group.children.length === 0) {
      return [group.id];
    }
    return group.children.flatMap(getAllLeafIds);
  };

  const getSelectionStatus = (group: ItemGroup): SelectionStatus => {
    const leafIds = getAllLeafIds(group);
    const selectedLeafCount = leafIds.filter(id => selectedIds.has(id)).length;
    
    if (selectedLeafCount === 0) return "none";
    if (selectedLeafCount === leafIds.length) return "all";
    return "some";
  };

  const handleToggleSelect = (group: ItemGroup) => {
    const allIds = getAllIds(group);
    const status = getSelectionStatus(group);
    const newSelected = new Set(selectedIds);

    if (status === "all") {
      allIds.forEach(id => newSelected.delete(id));
    } else {
      allIds.forEach(id => newSelected.add(id));
    }
    setSelectedIds(newSelected);
    // Item hierarchy is part of the preset — changing it makes the state ad-hoc.
    onTabChange?.("Custom");
  };

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedIds);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedIds(newExpanded);
  };

  const handleRemoveSelection = () => {
    setSelectedIds(new Set());
    setExpandedIds(new Set());
    setSelectedPresetId("");
    onClearAll?.();
  };

  const renderTree = (groups: ItemGroup[], level: number = 0) => {
    return groups.map((group) => {
      const isExpanded = expandedIds.has(group.id);
      const status = getSelectionStatus(group);
      const hasChildren = group.children && group.children.length > 0;

      return (
        <div key={group.id} className="flex flex-col">
          <div className="flex items-center group py-[2px] whitespace-nowrap h-[30px]">
            <div style={{ width: `${level * 24}px` }} className="flex-shrink-0" />
            <div className="w-[30px] flex-shrink-0 flex items-center justify-center">
              {hasChildren ? (
                <button 
                  onClick={() => toggleExpand(group.id)}
                  className="w-full h-full flex items-center justify-center cursor-pointer"
                >
                  <div className={`w-0 h-0 border-t-[5px] border-t-transparent border-l-[7px] border-l-[#1A1A1A] border-b-[5px] border-b-transparent transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} />
                </button>
              ) : (
                <div className="w-full" />
              )}
            </div>
            <div 
              className={`relative shrink-0 size-[16px] mr-[10px] cursor-pointer flex items-center justify-center border ${
                status === "none" ? "bg-white border-[#ccc]" : "bg-[#595959] border-[#595959]"
              }`}
              onClick={() => handleToggleSelect(group)}
            >
              {status === "all" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="size-[12px]" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6L5 8.5L9.5 4" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
                  </svg>
                </div>
              )}
              {status === "some" && (
                <div className="w-[8px] h-0.5 bg-white" />
              )}
            </div>
            <div 
              className="flex-1 h-full flex items-center text-[14px] text-[#1A1A1A] leading-tight select-none cursor-pointer font-normal" 
              onClick={() => handleToggleSelect(group)}
            >
              {group.label}
            </div>
          </div>
          {hasChildren && isExpanded && (
            <div className="flex flex-col">
              {renderTree(group.children!, level + 1)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <>
      <div 
        className={`relative h-full bg-[#F4F6F7] border-r border-[#CCCCCC] transition-all duration-300 overflow-hidden z-[100] flex-shrink-0 ${isOpen ? 'w-[380px]' : 'w-0 border-none'}`}
      >
        <div className={`w-[380px] h-full flex flex-col transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="pt-4 pl-[30px] pr-[20px] pb-4 flex items-center justify-between">
            <h2 className="text-[16px] font-bold text-[#1A1A1A] uppercase tracking-normal font-roboto-condensed">Filter items</h2>
            <button 
              onClick={onToggle}
              className="p-2 rounded-full cursor-pointer hover:bg-black/5 outline-none -mr-2"
            >
              <X className="w-[18px] h-[18px] text-[#1A1A1A]" />
            </button>
          </div>

          <div className="pl-[30px] pr-[20px] mb-[15px] flex flex-col gap-[2px]">
            {showPresets && (
              <Popover.Root open={isPresetsDropdownOpen} onOpenChange={setIsPresetsDropdownOpen}>
                <Popover.Trigger asChild>
                  <div
                    className="relative w-full h-[30px] bg-white border border-[#ccc] flex items-center pl-[17px] pr-[3px] cursor-pointer group"
                  >
                    <span className={`flex-1 text-[14px] truncate select-none ${selectedPresetDisplayName ? 'text-[#1A1A1A]' : 'text-[#999999]'}`}>
                      {isPresetsDropdownOpen ? (selectedPresetDisplayName || "") : (selectedPresetDisplayName || "Select preset")}
                    </span>
                    <div className="flex items-center gap-1">
                      {selectedPresetDisplayName && (
                        <button
                          onClick={handleClearPresetSelection}
                          className="size-[20px] flex items-center justify-center hover:bg-[#F7F7F7] rounded-full cursor-pointer"
                        >
                          <X className="size-3.5 text-[#1A1A1A] stroke-[2.5px]" />
                        </button>
                      )}
                      <div className="size-[20px] flex items-center justify-center">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="">
                          <path d="M9 1L5 5L1 1H9Z" fill="#1A1A1A" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Content 
                    align="start" 
                    sideOffset={-1}
                    onOpenAutoFocus={(e) => e.preventDefault()}
                    className="z-[10000] w-[330px] bg-white border border-[#CCCCCC] shadow-lg outline-none overflow-hidden"
                  >
                    <div className="flex flex-col">
                      <div className="flex items-center border-b border-[#CCCCCC] h-[36px] group/newrow">
                        <button 
                          onClick={() => {
                            setIsEditingPreset(false);
                            setEditingPresetOriginalId("");
                            setNewPresetName("");
                            setPresetNameNo("");
                            setPresetNameSv("");
                            setIsLoadAsDefault(false);
                            // Non-HQ users can't choose visibility — their presets are always private.
                            setPresetVisibility(isHqUser ? visibilityTab : "private");
                            setShowSaveModal(true);
                            setIsPresetsDropdownOpen(false);
                          }}
                          className="flex-1 flex items-center hover:bg-[#EAEAEA] group-hover/newrow:bg-[#EAEAEA] cursor-pointer text-[#1A1A1A] text-[14px] h-full font-roboto group pl-[13px]"
                        >
                          <Plus size={16} className="text-[#1A1A1A] stroke-[3px]" />
                          <span className="font-medium leading-none ml-[4px]">New</span>
                        </button>
                        <div className="flex items-center justify-center h-full group-hover/newrow:bg-[#EAEAEA]">
                          <div className="w-[1px] h-[20px] bg-[#CCCCCC]" />
                        </div>
                        <Popover.Root>
                          <Popover.Trigger asChild>
                            <button 
                              className="w-[50px] h-full flex items-center justify-center hover:bg-[#EAEAEA] group-hover/newrow:bg-[#EAEAEA] cursor-pointer outline-none"
                              onMouseDown={(e) => e.preventDefault()}
                            >
                              <MoreHorizontal size={16} className="text-[#1A1A1A]" />
                            </button>
                          </Popover.Trigger>
                          <Popover.Portal>
                            <Popover.Content 
                              align="start" 
                              sideOffset={-3} 
                              className="z-[20001] bg-white border border-[#CCCCCC] shadow-lg outline-none min-w-[150px]"
                            >
                              <div className="flex flex-col py-1">
                                <div 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setShowHidden(!showHidden);
                                  }}
                                  className="text-left text-[14px] font-normal text-[#1A1A1A] hover:bg-[#EAEAEA] relative outline-none cursor-pointer flex items-center justify-between h-[36px] w-full px-[16px] font-roboto whitespace-nowrap gap-x-[24px]"
                                >
                                  <span>Show hidden</span>
                                  <div className={`w-[32px] h-[18px] rounded-full relative transition-colors duration-200 ${showHidden ? 'bg-[#595959]' : 'bg-[#CCCCCC]'}`}>
                                    <div className={`absolute top-[2px] size-[14px] bg-white rounded-full transition-all duration-200 ${showHidden ? 'left-[16px]' : 'left-[2px]'}`} />
                                  </div>
                                </div>
                              </div>
                            </Popover.Content>
                          </Popover.Portal>
                        </Popover.Root>
                      </div>

                      <div className="flex items-center gap-[2px] p-[3px] mx-[8px] mt-[8px] mb-[4px] bg-[#EAEAEA] rounded-full">
                        {([
                          { v: "private" as const, l: "Private" },
                          { v: "common" as const, l: "Shared" },
                        ]).map(opt => (
                          <button
                            key={opt.v}
                            onClick={() => setVisibilityTab(opt.v)}
                            className={`flex-1 h-[26px] rounded-full text-[13px] font-roboto transition-colors ${visibilityTab === opt.v ? 'bg-white text-[#1A1A1A] font-medium shadow-sm' : 'text-[#666666] hover:text-[#1A1A1A]'}`}
                          >
                            {opt.l}
                          </button>
                        ))}
                      </div>

                      <div
                        className="max-h-[224px] overflow-y-auto custom-scrollbar flex flex-col pt-[5px] pb-[5px]"
                      >
                        {(() => {
                          const allVisiblePresets = [...presets]
                            .filter(p => showHidden || !hiddenPresetIds.has(p.id!))
                            .filter(p => (p.visibility ?? "private") === visibilityTab);

                          if (allVisiblePresets.length === 0) {
                            return (
                              <div className="px-[16px] py-[20px] text-[14px] text-[#1A1A1A] font-roboto text-center">
                                {visibilityTab === "common" ? "No shared presets" : "No private presets"}
                              </div>
                            );
                          }

                          return allVisiblePresets.map((preset, index) => {
                            const isDefault = preset.id === defaultPresetId;
                            const isSelected = preset.id === selectedPresetId;
                            const isHidden = hiddenPresetIds.has(preset.id!);
                            // Non-HQ users may only edit/delete their own (private) presets, not shared ones.
                            const canEditDelete = isHqUser || (preset.visibility ?? "private") === "private";
                            // "Show/Hide quick view": HQ changes the preset (shared); non-HQ uses a
                            // personal override. Available on any non-system preset for both.
                            const isQuickViewActive = isQuickViewActiveFor(preset);
                            const showQuickViewToggle = !preset.isSystem;
                            const rowId = `preset-row-${preset.isSystem ? 'system-' : ''}${preset.name.replace(/\s+/g, '-')}`;
                            const isMenuOpen = activePopoverRowId === preset.id;
                            const isAnyMenuOpen = !!activePopoverRowId;
                            // Reordering happens on the quick filter buttons (a single flat list).
                            // The dropdown is split into Private/Shared tabs, so drag-reorder here
                            // would be relative only to the visible same-visibility presets.
                            return (
                              <div
                                key={preset.id}
                                id={rowId}
                                className={`flex flex-col group/row ${isSelected ? 'bg-[#FFFFFF]' : (isMenuOpen ? 'bg-[#EAEAEA]' : '')}`}
                              >
                                <div
                                  onClick={() => { if (!isHidden) applyPreset(preset); }}
                                  tabIndex={isHidden ? -1 : 0}
                                  onKeyDown={(e) => {
                                    if (!isHidden && (e.key === 'Enter' || e.key === ' ')) {
                                      e.preventDefault();
                                      applyPreset(preset);
                                    }
                                  }}
                                  className={`flex items-center justify-between pr-0 ml-[1px] group h-[36px] min-h-[36px] outline-none w-[calc(100%-2px)] hover:bg-[#EAEAEA] focus-visible:outline-none ${isHidden ? 'cursor-default' : 'cursor-pointer'} ${
                                    isSelected
                                      ? 'bg-[#FFFFFF] border-[2px] border-[#373737] pl-[14px]'
                                      : (isMenuOpen ? 'bg-[#EAEAEA] pl-[16px]' : 'border-0 pl-[16px]')
                                  }`}
                                >
                                  <span className={`text-[14px] truncate pr-2 font-normal flex items-center text-[#1A1A1A] ${isSelected ? '-ml-[2px]' : ''}`}>
                                    <span className={isHidden ? "line-through" : ""}>{preset.name}</span>
                                    {isDefault && <span className="ml-2 italic font-roboto">(Default)</span>}
                                  </span>
                                  <div className="flex items-center h-full shrink-0">
                                    <div className={`opacity-0 group-hover/row:opacity-100 ${isMenuOpen ? 'opacity-100' : ''} transition-opacity flex items-center h-full`}>
                                      <Popover.Root onOpenChange={(open) => {
                                        setActivePopoverRowId(open ? preset.id! : null);
                                      }}>
                                        <Popover.Trigger asChild>
                                          <button 
                                            onClick={(e) => e.stopPropagation()}
                                            className="w-[50px] h-full flex items-center justify-center cursor-pointer outline-none hover:bg-[#EAEAEA] group-hover/row:bg-[#EAEAEA] translate-x-[1px]"
                                          >
                                            <MoreHorizontal size={16} className="text-[#1A1A1A]" />
                                          </button>
                                        </Popover.Trigger>
                                        <Popover.Portal>
                                          <Popover.Content 
                                            align="start" 
                                            sideOffset={-5}
                                            className="z-[20001] bg-white border border-[#CCCCCC] shadow-lg outline-none min-w-[150px]"
                                            onClick={(e) => e.stopPropagation()}
                                          >
                                            <div className="flex flex-col py-1">
                                              {!preset.isSystem ? (
                                                <>
                                                  {/* A hidden preset only offers "Unhide preset" — all other actions are gated on !isHidden. */}
                                                  {/* 1. Edit */}
                                                  {!isHidden && canEditDelete && (
                                                  <Popover.Close asChild>
                                                    <button
                                                      onClick={(e) => {
                                                        e.stopPropagation();
                                                        setNewPresetName(preset.nameTranslations?.en ?? preset.name);
                                                        setPresetNameNo(preset.nameTranslations?.no ?? "");
                                                        setPresetNameSv(preset.nameTranslations?.sv ?? "");
                                                        setEditingPresetOriginalId(preset.id!);
                                                        setIsLoadAsDefault(!!preset.isDefault);
                                                        setIsQuickFilter(!!preset.isQuickFilter);
                                                        setPresetVisibility(preset.visibility ?? "private");
                                                        setIsEditingPreset(true);
                                                        setShowSaveModal(true);
                                                        setIsPresetsDropdownOpen(false);
                                                      }}
                                                      className="text-left text-[14px] font-normal text-[#1A1A1A] hover:bg-[#EAEAEA] relative outline-none cursor-pointer flex items-center h-[36px] w-full px-[16px] font-roboto whitespace-nowrap"
                                                    >
                                                      Edit
                                                    </button>
                                                  </Popover.Close>
                                                  )}
                                                  {/* 2. Pin / Unpin (quick view) */}
                                                  {!isHidden && showQuickViewToggle && (
                                                  <Popover.Close asChild>
                                                    <button
                                                      onClick={(e) => {
                                                        e.stopPropagation();
                                                        toggleQuickView(preset);
                                                      }}
                                                      className="text-left text-[14px] font-normal text-[#1A1A1A] hover:bg-[#EAEAEA] relative outline-none cursor-pointer flex items-center h-[36px] w-full px-[16px] font-roboto whitespace-nowrap"
                                                    >
                                                      {isQuickViewActive ? "Unpin" : "Pin"}
                                                    </button>
                                                  </Popover.Close>
                                                  )}
                                                  {/* 3. Make default / Remove default — toggles the preset's default; removing reverts to "All". */}
                                                  {!isHidden && (
                                                  <Popover.Close asChild>
                                                    <button
                                                      onClick={(e) => {
                                                        e.stopPropagation();
                                                        const nextDefault = isDefault ? "All" : preset.id!;
                                                        setDefaultPresetId(nextDefault);
                                                        localStorage.setItem(`${presetKey}_default`, nextDefault);
                                                        setActivePopoverRowId(null);
                                                        setIsPresetsDropdownOpen(false);
                                                      }}
                                                      className="text-left text-[14px] font-normal text-[#1A1A1A] hover:bg-[#EAEAEA] relative outline-none cursor-pointer flex items-center h-[36px] w-full px-[16px] font-roboto whitespace-nowrap"
                                                    >
                                                      {isDefault ? "Remove default" : "Make default"}
                                                    </button>
                                                  </Popover.Close>
                                                  )}
                                                  {/* 4. Hide / Unhide preset (dropdown list visibility) */}
                                                  <Popover.Close asChild>
                                                    <button
                                                      onClick={(e) => {
                                                        e.stopPropagation();
                                                        toggleHidden(preset.id!);
                                                      }}
                                                      className="text-left text-[14px] font-normal text-[#1A1A1A] hover:bg-[#EAEAEA] relative outline-none cursor-pointer flex items-center h-[36px] w-full px-[16px] font-roboto whitespace-nowrap"
                                                    >
                                                      {isHidden ? "Unhide" : "Hide"}
                                                    </button>
                                                  </Popover.Close>
                                                  {/* 5. Delete */}
                                                  {!isHidden && canEditDelete && (
                                                  <Popover.Close asChild>
                                                    <button
                                                      onClick={(e) => {
                                                        e.stopPropagation();
                                                        setPresetToDeleteId(preset.id!);
                                                        setShowDeleteModal(true);
                                                        setIsPresetsDropdownOpen(false);
                                                      }}
                                                      className="text-left text-[14px] font-normal text-[#1A1A1A] hover:bg-[#EAEAEA] relative outline-none cursor-pointer flex items-center h-[36px] w-full px-[16px] font-roboto whitespace-nowrap"
                                                    >
                                                      Delete
                                                    </button>
                                                  </Popover.Close>
                                                  )}
                                                </>
                                              ) : (
                                                <>
                                                  {!isHidden && !isDefault && (
                                                    <Popover.Close asChild>
                                                      <button
                                                        onClick={(e) => {
                                                          e.stopPropagation();
                                                          setDefaultPresetId(preset.id!);
                                                          localStorage.setItem(`${presetKey}_default`, preset.id!);
                                                          setActivePopoverRowId(null);
                                                          setIsPresetsDropdownOpen(false);
                                                        }}
                                                        className="text-left text-[14px] font-normal text-[#1A1A1A] hover:bg-[#EAEAEA] relative outline-none cursor-pointer flex items-center h-[36px] w-full px-[16px] font-roboto whitespace-nowrap"
                                                      >
                                                        Make default
                                                      </button>
                                                    </Popover.Close>
                                                  )}
                                                  <Popover.Close asChild>
                                                    <button 
                                                      onClick={(e) => {
                                                        e.stopPropagation();
                                                        toggleHidden(preset.id!);
                                                      }}
                                                      className="text-left text-[14px] font-normal text-[#1A1A1A] hover:bg-[#EAEAEA] relative outline-none cursor-pointer flex items-center h-[36px] w-full px-[16px] font-roboto whitespace-nowrap"
                                                    >
                                                      {isHidden ? "Unhide" : "Hide"}
                                                    </button>
                                                  </Popover.Close>
                                                </>
                                              )}
                                            </div>
                                          </Popover.Content>
                                        </Popover.Portal>
                                      </Popover.Root>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          });
                        })()}
                      </div>
                    </div>
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>
            )}
          </div>

          {(() => {
            const chips: { id: string; label: string; onClear: () => void }[] = [];
            Object.entries(gridFilters || {}).forEach(([key, val]) => {
              if (!val) return;
              chips.push({
                id: `grid:${key}`,
                label: labelForFilterKey(key),
                onClear: () => {
                  const next = { ...(gridFilters || {}) };
                  delete next[key];
                  onGridFiltersChange?.(next);
                  // Removing a preset filter means the state no longer matches the
                  // preset — deselect the quick filter tab.
                  onTabChange?.("Custom");
                },
              });
            });
            if (selectedIds.size > 0) {
              chips.push({ id: "group", label: "Item group", onClear: () => { setSelectedIds(new Set()); onTabChange?.("Custom"); } });
            }
            if (attributeFilter) {
              chips.push({ id: "attribute", label: "Attribute", onClear: () => { onAttributeFilterChange?.(""); onTabChange?.("Custom"); } });
            }
            if (chips.length === 0) return null;
            return (
              <div className="pl-[30px] pr-[20px] mb-[10px] flex flex-wrap gap-[8px]">
                {chips.map((chip) => (
                  <button
                    key={chip.id}
                    onClick={chip.onClear}
                    className="h-[30px] pl-[12px] pr-[8px] flex items-center gap-[6px] text-[13px] font-roboto rounded-full bg-[#EAEAEA] text-[#1A1A1A] hover:bg-[#E0E0E0] transition-colors whitespace-nowrap cursor-pointer"
                  >
                    {chip.label}
                    <X className="size-3.5 stroke-[2.5px]" />
                  </button>
                ))}
              </div>
            );
          })()}

          <div className="flex-1 overflow-y-auto pl-[30px] pr-[20px] pt-[10px] pb-6 custom-scrollbar">
            {renderTree(ITEM_GROUPS)}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showSaveModal && (
          <div className="fixed inset-0 z-[20000] flex items-start justify-center pt-[25vh]">
            <Motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { setShowSaveModal(false); setNewPresetName(""); }}
              className="absolute inset-0 bg-black/40"
            />
            
            <Motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white flex flex-col items-start relative shadow-[0px_2px_15px_0px_rgba(0,0,0,0.3)] w-[450px] z-10"
            >
              <div className="bg-white flex items-center overflow-clip pb-[12px] pt-[16px] px-[30px] relative shrink-0 w-full">
                <h2 className="flex-1 text-[16px] font-bold text-[#1A1A1A] tracking-tight uppercase whitespace-nowrap">
                  {isEditingPreset ? "Edit preset" : "New preset"}
                </h2>
              </div>

              <div className="relative shrink-0 w-full">
                <div className="flex flex-col items-start pb-[20px] px-[30px] relative w-full">
                  {!isEditingPreset && (
                    <p className="text-[14px] text-[#1A1A1A] font-roboto leading-snug w-full mt-[10px]">
                      Presets include grid columns, filtering and sorting.
                    </p>
                  )}
                  {isHqUser && (
                    <div className={`flex flex-col gap-[10px] items-start w-full ${isEditingPreset ? 'mt-[10px]' : 'mt-[20px]'}`}>
                      {([
                        { value: "private" as const, label: "Private" },
                        { value: "common" as const, label: "Shared (all stores)" },
                      ]).map((opt) => (
                        <div
                          key={opt.value}
                          className="flex items-center gap-[8px] cursor-pointer select-none group"
                          onClick={() => setPresetVisibility(opt.value)}
                        >
                          <div className={`size-[20px] rounded-full border flex items-center justify-center transition-colors ${presetVisibility === opt.value ? 'border-[#595959]' : 'border-[#ccc] group-hover:border-[#999]'}`}>
                            {presetVisibility === opt.value && <div className="size-[10px] rounded-full bg-[#595959]" />}
                          </div>
                          <span className="text-[14px] text-[#1A1A1A] font-roboto whitespace-nowrap">{opt.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {isHqUser && presetVisibility === "common" ? (
                    // Shared presets: name per system language so non-HQ users see it localized.
                    <div className="flex flex-col gap-[12px] items-start w-full mt-[20px]">
                      {([
                        { lang: "English", value: newPresetName, set: setNewPresetName, required: true, focus: true },
                        { lang: "Norwegian", value: presetNameNo, set: setPresetNameNo, required: true, focus: false },
                        { lang: "Swedish", value: presetNameSv, set: setPresetNameSv, required: true, focus: false },
                      ]).map((f) => (
                        <div key={f.lang} className="flex flex-col gap-[2px] items-start relative shrink-0 w-full">
                          <div className="flex font-roboto font-normal items-start leading-[normal] relative shrink-0 text-[14px] w-full">
                            <p className="min-h-px min-w-px relative whitespace-pre-wrap">
                              {f.required && <span className="leading-[normal] text-[#f4635b]">*</span>}
                              <span className="leading-[normal] text-[#666666]">{f.required ? ` ${f.lang}` : f.lang}</span>
                            </p>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full">
                            <input
                              type="text"
                              autoFocus={f.focus}
                              value={f.value}
                              onFocus={(e) => e.currentTarget.select()}
                              onChange={(e) => f.set(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") handleSavePreset();
                                if (e.key === "Escape") setShowSaveModal(false);
                                if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') e.currentTarget.select();
                              }}
                              className="selection:bg-[#373737] selection:text-white absolute bg-white border border-[#ccc] inset-0 px-[8px] font-roboto text-[14px] text-[#1A1A1A] focus:outline-none focus:border-2 focus:border-[#373737]"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-[2px] items-start relative shrink-0 w-full mt-[20px]">
                      <div className="flex font-roboto font-normal items-start leading-[normal] relative shrink-0 text-[14px] w-full">
                        <p className="min-h-px min-w-px relative text-[#f4635b] whitespace-pre-wrap">
                          <span className="leading-[normal]">*</span>
                          <span className="leading-[normal] text-[#666666]">{` Name`}</span>
                        </p>
                      </div>
                      <div className="h-[30px] relative shrink-0 w-full">
                        <input
                          type="text"
                          autoFocus
                          value={newPresetName}
                          onFocus={(e) => e.currentTarget.select()}
                          onChange={(e) => setNewPresetName(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") handleSavePreset();
                            if (e.key === "Escape") { setShowSaveModal(false); setNewPresetName(""); }
                            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') e.currentTarget.select();
                          }}
                          className="selection:bg-[#373737] selection:text-white absolute bg-white border border-[#ccc] inset-0 px-[8px] font-roboto text-[14px] text-[#1A1A1A] focus:outline-none focus:border-2 focus:border-[#373737]"
                        />
                      </div>
                    </div>
                  )}

                  <div
                    className="flex items-center gap-[8px] mt-[15px] cursor-pointer select-none group"
                    onClick={() => setIsQuickFilter(!isQuickFilter)}
                  >
                    <div className={`size-[16px] border flex items-center justify-center transition-colors ${isQuickFilter ? 'bg-[#595959] border-[#595959]' : 'bg-white border-[#ccc] group-hover:border-[#999]'}`}>
                      {isQuickFilter && (
                        <svg className="size-[12px]" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 6L5 8.5L9.5 4" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
                        </svg>
                      )}
                    </div>
                    <span className="text-[14px] text-[#1A1A1A] font-roboto whitespace-nowrap">Pin to quick filters</span>
                  </div>
                </div>
              </div>

              <div className="bg-white relative shrink-0 w-full">
                  <div className="flex flex-row items-center justify-end px-[20px] pb-[20px] pt-[10px] gap-[8px]">
                    <button 
                      onClick={() => { setShowSaveModal(false); setNewPresetName(""); }}
                      className="h-[30px] px-[15px] flex items-center justify-center text-[13px] font-semibold uppercase tracking-[0px] rounded-full transition-colors leading-none font-roboto-condensed cursor-pointer bg-[#EAEAEA] text-[#1A1A1A] hover:bg-[#E0E0E0] whitespace-nowrap"
                    >
                      cancel
                    </button>
                    <button 
                      onClick={handleSavePreset}
                      className="h-[30px] px-[15px] flex items-center justify-center text-[13px] font-semibold uppercase tracking-[0px] rounded-full transition-colors leading-none font-roboto-condensed cursor-pointer bg-[#1C7862] text-white hover:bg-[#248E73] border border-[#1C7862] hover:border-[#248E73] whitespace-nowrap"
                    >
                      Save
                    </button>
                  </div>
              </div>
            </Motion.div>
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showDeleteModal && (
          <div className="fixed inset-0 z-[30000] flex items-start justify-center pt-[25vh]">
            <Motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { setShowDeleteModal(false); setPresetToDeleteId(""); }}
              className="absolute inset-0 bg-black/40"
            />
            
            <Motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white flex flex-col items-start relative shadow-[0px_2px_15px_0px_rgba(0,0,0,0.3)] w-[450px] z-10"
            >
              <div className="bg-white flex items-center overflow-clip pb-[12px] pt-[16px] px-[30px] relative shrink-0 w-full">
                <h2 className="flex-1 text-[16px] font-bold text-[#1A1A1A] tracking-tight uppercase whitespace-nowrap">
                  Delete preset?
                </h2>
              </div>

              <div className="relative shrink-0 w-full">
                <div className="flex flex-col items-start pb-[20px] px-[30px] relative w-full">
                  <p className="text-[14px] text-[#1A1A1A] font-roboto">
                    The preset "{presets.find(p => p.id === presetToDeleteId)?.name ?? ""}" will be deleted.
                  </p>
                </div>
              </div>

              <div className="bg-white relative shrink-0 w-full">
                  <div className="flex flex-row items-center justify-end px-[20px] pb-[20px] pt-[10px] gap-[8px]">
                    <button 
                      onClick={() => { setShowDeleteModal(false); setPresetToDeleteId(""); }}
                      className="h-[30px] px-[15px] flex items-center justify-center text-[13px] font-semibold uppercase tracking-[0px] rounded-full transition-colors leading-none font-roboto-condensed cursor-pointer bg-[#EAEAEA] text-[#1A1A1A] hover:bg-[#E0E0E0] whitespace-nowrap"
                    >
                      cancel
                    </button>
                    <button 
                      onClick={() => deletePreset(presetToDeleteId)}
                      className="h-[30px] px-[15px] flex items-center justify-center text-[13px] font-semibold uppercase tracking-[0px] rounded-full transition-colors leading-none font-roboto-condensed cursor-pointer bg-[#DB3751] text-white hover:bg-[#C22D43] whitespace-nowrap"
                    >
                      Delete
                    </button>
                  </div>
              </div>
            </Motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
});
