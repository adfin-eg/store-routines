import React, { useState, useEffect } from "react";
import { X, Plus, MoreHorizontal, Check } from "lucide-react";
import UiIcon from "../../imports/UiIcon";
import svgPathsDelete from "@/imports/svg-thb5u7b813";
import svgPathsEdit from "@/imports/svg-4f8idnkp17";
import * as Popover from "@radix-ui/react-popover";
import { motion as Motion, AnimatePresence } from "motion/react";

interface FilterPreset {
  name: string;
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
  onTabChange?: (tab: string) => void;
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
  activePresetName?: string;
  storeName?: string;
}

type SelectionStatus = "all" | "none" | "some";

export interface ItemGroupPanelHandle {
  openNewQuickActionPreset: () => void;
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
  activePresetName,
  storeName,
}, ref) => {
  const [presets, setPresets] = useState<FilterPreset[]>([]);
  const presetsLoadedRef = React.useRef(false);
  // Set synchronously when the parent designates a preset via activePresetName, so the
  // auto-deselect effect below doesn't clear the dropdown during a preset→preset transition
  // (where selectedPresetName still holds the previous, now-mismatching preset name).
  const applyingActivePresetRef = React.useRef(false);
  const [newPresetName, setNewPresetName] = useState("");
  const [isPresetsDropdownOpen, setIsPresetsDropdownOpen] = useState(false);
  const [selectedPresetName, setSelectedPresetName] = useState<string>("");
  const [justApplied, setJustApplied] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [presetToDelete, setPresetToDelete] = useState<string>("");
  const [isEditingPreset, setIsEditingPreset] = useState(false);
  const [editingPresetOriginalName, setEditingPresetOriginalName] = useState("");
  const [isLoadAsDefault, setIsLoadAsDefault] = useState(false);
  const [isQuickFilter, setIsQuickFilter] = useState(false);
  const [presetVisibility, setPresetVisibility] = useState<"private" | "common">("private");
  const [hiddenPresetNames, setHiddenPresetNames] = useState<Set<string>>(new Set());
  const [showHidden, setShowHidden] = useState(false);
  const [defaultPresetName, setDefaultPresetName] = useState<string>("");
  const [activePopoverRowId, setActivePopoverRowId] = useState<string | null>(null);
  const [dragPresetName, setDragPresetName] = useState<string | null>(null);
  const [dragOverPresetName, setDragOverPresetName] = useState<string | null>(null);

  const [renderedPresetName, setRenderedPresetName] = useState<string>(selectedPresetName);

  // Open the "New preset" modal pre-flagged as a quick action (used by the tab group's + button).
  const openNewQuickActionPreset = () => {
    setIsEditingPreset(false);
    setEditingPresetOriginalName("");
    setNewPresetName("");
    setIsLoadAsDefault(false);
    setIsQuickFilter(true);
    setPresetVisibility("private");
    setShowSaveModal(true);
    setIsPresetsDropdownOpen(false);
  };

  React.useImperativeHandle(ref, () => ({ openNewQuickActionPreset }));

  useEffect(() => {
    if (activePresetName !== undefined) {
      applyingActivePresetRef.current = true;
      setSelectedPresetName(activePresetName);
      const t = setTimeout(() => { applyingActivePresetRef.current = false; }, 300);
      return () => clearTimeout(t);
    }
  }, [activePresetName]);

  useEffect(() => {
    if (isPresetsDropdownOpen) {
      setRenderedPresetName(selectedPresetName);
    } else {
      setActivePopoverRowId(null);
    }
  }, [isPresetsDropdownOpen, selectedPresetName]);

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
        return Object.keys(updates).length > 0 ? { ...p, ...updates } : p;
      });
    }
    // "All" always sits leftmost on launch (it can still be reordered within a session).
    const allIdx = loadedPresets.findIndex((p: FilterPreset) => p.name === "All");
    if (allIdx > 0) {
      const [allPreset] = loadedPresets.splice(allIdx, 1);
      loadedPresets.unshift(allPreset);
    }
    presetsLoadedRef.current = true;
    setPresets(loadedPresets);
    onQuickFilterPresetsChange?.(loadedPresets.filter(p => p.isQuickFilter && !hiddenPresetNames.has(p.name)));
    
    let initialDefaultName = "";
    try {
      const savedDefault = localStorage.getItem(`${presetKey}_default`);
      if (savedDefault && savedDefault !== "undefined") {
        initialDefaultName = savedDefault;
      } else {
        initialDefaultName = "";
      }
    } catch (e) {
      console.error("Error loading default preset", e);
    }
    setDefaultPresetName(initialDefaultName);
  }, [presetKey, showPresets]);

  const isStateMatchingPreset = (preset: FilterPreset) => {
    // Check filters
    const currentFilters = Array.from(selectedIds).sort();
    const presetFilters = preset.isSystem ? [] : [...(preset.selectedIds || [])].sort();
    if (currentFilters.length !== presetFilters.length || currentFilters.some((v, i) => v !== presetFilters[i])) return false;

    const currentExpanded = Array.from(expandedIds).sort();
    const presetExpanded = preset.isSystem ? [] : [...(preset.expandedIds || [])].sort();
    if (currentExpanded.length !== presetExpanded.length || currentExpanded.some((v, i) => v !== presetExpanded[i])) return false;

    // Check tabs and checkboxes
    if (preset.activeTab !== undefined && activeTab !== preset.activeTab) return false;
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
    if (!selectedPresetName || justApplied || applyingActivePresetRef.current) return;

    const currentPreset = presets.find(p => p.name === selectedPresetName);
    if (!currentPreset || !isStateMatchingPreset(currentPreset)) {
      setSelectedPresetName("");
    }
  }, [selectedIds, expandedIds, currentWindowStates, selectedPresetName, justApplied, presets, activeTab, isMemberOffer, isMix, isPromotionPrice, promotionType, attributeFilter, gridFilters]);

  useEffect(() => {
    if (!presetsLoadedRef.current) return;
    localStorage.setItem(presetKey, JSON.stringify(presets));
    // Hidden presets are never surfaced as quick view buttons, regardless of the
    // dropdown's "Show hidden" toggle — that toggle only affects the dropdown list.
    onQuickFilterPresetsChange?.(presets.filter(p => p.isQuickFilter && !hiddenPresetNames.has(p.name)));
  }, [presets, presetKey, hiddenPresetNames]);

  const handleSavePreset = () => {
    if (!newPresetName.trim()) return;
    
    const newPreset: FilterPreset = {
      name: newPresetName.trim(),
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
      setDefaultPresetName(newPreset.name);
      localStorage.setItem(`${presetKey}_default`, newPreset.name);
    }

    setPresets(prev => {
      let filtered = prev;
      if (isEditingPreset && editingPresetOriginalName) {
        filtered = prev.filter(p => p.name !== editingPresetOriginalName);
      } else {
        filtered = prev.filter(p => p.name !== newPreset.name);
      }
      
      // If this one is default, unset default on all others
      if (newPreset.isDefault) {
        filtered = filtered.map(p => ({ ...p, isDefault: false }));
      }
      
      return [...filtered, newPreset];
    });

    if (isEditingPreset && selectedPresetName === editingPresetOriginalName) {
      setSelectedPresetName(newPreset.name);
    }

    setNewPresetName("");
    setEditingPresetOriginalName("");
    setIsEditingPreset(false);
    setShowSaveModal(false);
    setIsLoadAsDefault(false);
    setIsQuickFilter(false);
  };

  const applyPreset = (preset: FilterPreset) => {
    setJustApplied(true);
    
    // Set tab first because handleTabChange in parent might reset other filters
    if (preset.activeTab !== undefined) {
      onTabChange?.(preset.activeTab);
    } else if (preset.isSystem) {
      onTabChange?.("All");
    } else if (preset.isQuickFilter && !hiddenPresetNames.has(preset.name)) {
      // Quick filter presets have a matching button in the tab group — highlight it
      // so the dropdown and the quick filter buttons stay two-way linked.
      onTabChange?.(preset.name);
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
    setSelectedPresetName(preset.name);
    setIsPresetsDropdownOpen(false);
    
    // Allow time for state and props to propagate before re-enabling tracking
    setTimeout(() => setJustApplied(false), 300);
  };

  const deletePreset = (name: string) => {
    setPresets(prev => prev.filter(p => p.name !== name));
    if (selectedPresetName === name) setSelectedPresetName("");
    
    if (defaultPresetName === name) {
      setDefaultPresetName("");
      localStorage.removeItem(`${presetKey}_default`);
    }

    setShowSaveModal(false);
    setShowDeleteModal(false);
    setPresetToDelete("");
    setNewPresetName("");
    setEditingPresetOriginalName("");
    setIsEditingPreset(false);
  };

  const toggleHidden = (name: string) => {
    const willHide = !hiddenPresetNames.has(name);
    setHiddenPresetNames(prev => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name); else next.add(name);
      return next;
    });
    // Hiding a preset that is the default removes its default status.
    if (willHide && defaultPresetName === name) {
      setDefaultPresetName("");
      localStorage.removeItem(`${presetKey}_default`);
      setPresets(prev => prev.map(p => p.name === name ? { ...p, isDefault: false } : p));
    }
    setActivePopoverRowId(null);
  };

  // The browser's default drag ghost is semi-transparent. Supplying our own opaque,
  // white-backed clone via setDragImage gives a solid preview that follows the cursor.
  const handleRowDragStart = (e: React.DragEvent, name: string) => {
    const node = e.currentTarget as HTMLElement;
    const clone = node.cloneNode(true) as HTMLElement;
    clone.style.position = "absolute";
    clone.style.top = "-9999px";
    clone.style.left = "-9999px";
    clone.style.width = `${node.offsetWidth}px`;
    clone.style.opacity = "1";
    clone.style.backgroundColor = "#FFFFFF";
    clone.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
    document.body.appendChild(clone);
    e.dataTransfer.setDragImage(clone, 12, 18);
    // The image is captured synchronously, so the clone can be removed next tick.
    setTimeout(() => { if (clone.parentNode) clone.parentNode.removeChild(clone); }, 0);
    setDragPresetName(name);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", name);
  };

  // Reorder presets by dropping the dragged preset in front of a target preset.
  // The persisted `presets` array order is the display order (dropdown + quick filter buttons).
  const reorderPresets = (draggedName: string | null, targetName: string) => {
    if (!draggedName || draggedName === targetName) return;
    setPresets(prev => {
      const arr = [...prev];
      const from = arr.findIndex(p => p.name === draggedName);
      if (from === -1) return prev;
      const [moved] = arr.splice(from, 1);
      const to = arr.findIndex(p => p.name === targetName);
      if (to === -1) return prev;
      arr.splice(to, 0, moved);
      return arr;
    });
  };

  const handleClearPresetSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Dismissing only clears the dropdown's selection display; the applied filtering
    // and the selected quick filter button are kept as-is.
    setSelectedPresetName("");
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
    setSelectedPresetName("");
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
                    className="relative w-full h-[30px] bg-white border border-[#ccc] flex items-center pl-[8px] pr-[3px] cursor-pointer group"
                  >
                    <span className={`flex-1 text-[14px] truncate select-none ${selectedPresetName ? 'text-[#1A1A1A]' : 'text-[#999999]'}`}>
                      {isPresetsDropdownOpen ? (selectedPresetName || "") : (selectedPresetName || "Select preset")}
                    </span>
                    <div className="flex items-center gap-1">
                      {selectedPresetName && (
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
                            setEditingPresetOriginalName("");
                            setNewPresetName("");
                            setIsLoadAsDefault(false);
                            setPresetVisibility("private");
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
                      
                      <div 
                        className="max-h-[224px] overflow-y-auto custom-scrollbar flex flex-col pt-[5px] pb-[5px]"
                      >
                        {(() => {
                          const allVisiblePresets = [...presets]
                            .filter(p => showHidden || !hiddenPresetNames.has(p.name));

                          return allVisiblePresets.map((preset, index) => {
                            const isDefault = preset.name === defaultPresetName;
                            const isSelected = preset.name === renderedPresetName;
                            const isHidden = hiddenPresetNames.has(preset.name);
                            const rowId = `preset-row-${preset.isSystem ? 'system-' : ''}${preset.name.replace(/\s+/g, '-')}`;
                            const isMenuOpen = activePopoverRowId === rowId;
                            const isAnyMenuOpen = !!activePopoverRowId;
                            const isDragging = dragPresetName === preset.name;
                            const isDropTarget = !!dragPresetName && dragOverPresetName === preset.name && dragPresetName !== preset.name;
                            return (
                              <div
                                key={preset.isSystem ? `system-${preset.name}` : preset.name}
                                id={rowId}
                                draggable={!activePopoverRowId}
                                onDragStart={(e) => handleRowDragStart(e, preset.name)}
                                onDragOver={(e) => { e.preventDefault(); e.dataTransfer.dropEffect = "move"; if (dragOverPresetName !== preset.name) setDragOverPresetName(preset.name); }}
                                onDrop={(e) => { e.preventDefault(); reorderPresets(e.dataTransfer.getData("text/plain") || dragPresetName, preset.name); setDragPresetName(null); setDragOverPresetName(null); }}
                                onDragEnd={(e) => { e.currentTarget.style.backgroundColor = ""; setDragPresetName(null); setDragOverPresetName(null); }}
                                className={`flex flex-col group/row ${isSelected ? 'bg-[#FFFFFF]' : (isMenuOpen ? 'bg-[#EAEAEA]' : '')} ${isDragging ? 'opacity-50' : ''} ${isDropTarget ? 'shadow-[inset_0_2px_0_0_#373737]' : ''}`}
                              >
                                <div 
                                  onClick={() => applyPreset(preset)}
                                  tabIndex={0}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                      e.preventDefault();
                                      applyPreset(preset);
                                    }
                                  }}
                                  className={`flex items-center justify-between pl-[16px] pr-0 ml-[1px] group h-[36px] min-h-[36px] outline-none cursor-pointer w-[calc(100%-2px)] hover:bg-[#EAEAEA] ${
                                    isSelected 
                                      ? 'bg-[#FFFFFF] border-[2px] border-[#373737] pl-[14px]' 
                                      : (isMenuOpen ? 'bg-[#EAEAEA]' : 'border-0')
                                  }`}
                                >
                                  <span className={`text-[14px] truncate pr-2 font-normal flex items-center text-[#1A1A1A] ${isSelected ? '-ml-[2px]' : ''}`}>
                                    <span className={isHidden ? "line-through" : ""}>{preset.name}</span>
                                    {isDefault && <span className="ml-2 italic font-roboto">(Default)</span>}
                                  </span>
                                  <div className="flex items-center h-full shrink-0">
                                    <div className={`opacity-0 group-hover/row:opacity-100 ${isMenuOpen ? 'opacity-100' : ''} transition-opacity flex items-center h-full`}>
                                      <Popover.Root onOpenChange={(open) => {
                                        setActivePopoverRowId(open ? rowId : null);
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
                                                  <Popover.Close asChild>
                                                    <button 
                                                      onClick={(e) => {
                                                        e.stopPropagation();
                                                        setNewPresetName(preset.name);
                                                        setEditingPresetOriginalName(preset.name);
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
                                                  {!isDefault && (
                                                    <Popover.Close asChild>
                                                      <button 
                                                        onClick={(e) => {
                                                          e.stopPropagation();
                                                          setDefaultPresetName(preset.name);
                                                          localStorage.setItem(`${presetKey}_default`, preset.name);
                                                          setActivePopoverRowId(null);
                                                          setIsPresetsDropdownOpen(false);
                                                        }}
                                                        className="text-left text-[14px] font-normal text-[#1A1A1A] hover:bg-[#EAEAEA] relative outline-none cursor-pointer flex items-center h-[36px] w-full px-[16px] font-roboto whitespace-nowrap"
                                                      >
                                                        Set as default
                                                      </button>
                                                    </Popover.Close>
                                                  )}
                                                  <Popover.Close asChild>
                                                    <button 
                                                      onClick={(e) => {
                                                        e.stopPropagation();
                                                        toggleHidden(preset.name);
                                                      }}
                                                      className="text-left text-[14px] font-normal text-[#1A1A1A] hover:bg-[#EAEAEA] relative outline-none cursor-pointer flex items-center h-[36px] w-full px-[16px] font-roboto whitespace-nowrap"
                                                    >
                                                      {isHidden ? "Show" : "Hide"}
                                                    </button>
                                                  </Popover.Close>
                                                  <Popover.Close asChild>
                                                    <button 
                                                      onClick={(e) => {
                                                        e.stopPropagation();
                                                        setPresetToDelete(preset.name);
                                                        setShowDeleteModal(true);
                                                        setIsPresetsDropdownOpen(false);
                                                      }}
                                                      className="text-left text-[14px] font-normal text-[#1A1A1A] hover:bg-[#EAEAEA] relative outline-none cursor-pointer flex items-center h-[36px] w-full px-[16px] font-roboto whitespace-nowrap"
                                                    >
                                                      Delete
                                                    </button>
                                                  </Popover.Close>
                                                </>
                                              ) : (
                                                <>
                                                  {!isDefault && (
                                                    <Popover.Close asChild>
                                                      <button 
                                                        onClick={(e) => {
                                                          e.stopPropagation();
                                                          setDefaultPresetName(preset.name);
                                                          localStorage.setItem(`${presetKey}_default`, preset.name);
                                                          setActivePopoverRowId(null);
                                                          setIsPresetsDropdownOpen(false);
                                                        }}
                                                        className="text-left text-[14px] font-normal text-[#1A1A1A] hover:bg-[#EAEAEA] relative outline-none cursor-pointer flex items-center h-[36px] w-full px-[16px] font-roboto whitespace-nowrap"
                                                      >
                                                        Set as default
                                                      </button>
                                                    </Popover.Close>
                                                  )}
                                                  <Popover.Close asChild>
                                                    <button 
                                                      onClick={(e) => {
                                                        e.stopPropagation();
                                                        toggleHidden(preset.name);
                                                      }}
                                                      className="text-left text-[14px] font-normal text-[#1A1A1A] hover:bg-[#EAEAEA] relative outline-none cursor-pointer flex items-center h-[36px] w-full px-[16px] font-roboto whitespace-nowrap"
                                                    >
                                                      {isHidden ? "Show" : "Hide"}
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

          <div className="pl-[30px] pr-[20px] mb-[10px]">
            <button 
              onClick={handleRemoveSelection}
              className="h-[30px] px-[15px] flex items-center justify-center text-[13px] font-semibold uppercase tracking-[0px] rounded-full transition-colors leading-none font-roboto-condensed cursor-pointer bg-[#595959] text-white hover:bg-[#666666] whitespace-nowrap"
            >
              Clear all {totalFilterCount > 0 && `(${totalFilterCount})`}
            </button>
          </div>

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
                      Presets save the current grid setup, including column visibility, order, filtering and sorting.
                    </p>
                  )}
                  <div className={`flex flex-col gap-[10px] items-start w-full ${isEditingPreset ? 'mt-[10px]' : 'mt-[20px]'}`}>
                    {[
                      { value: "private" as const, label: "Private" },
                      { value: "common" as const, label: storeName ? `Common (${storeName})` : "Common" },
                    ].map((opt) => (
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
                    <span className="text-[14px] text-[#1A1A1A] font-roboto whitespace-nowrap">Show as quick action</span>
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
              onClick={() => { setShowDeleteModal(false); setPresetToDelete(""); }}
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
                    The preset "{presetToDelete}" will be deleted.
                  </p>
                </div>
              </div>

              <div className="bg-white relative shrink-0 w-full">
                  <div className="flex flex-row items-center justify-end px-[20px] pb-[20px] pt-[10px] gap-[8px]">
                    <button 
                      onClick={() => { setShowDeleteModal(false); setPresetToDelete(""); }}
                      className="h-[30px] px-[15px] flex items-center justify-center text-[13px] font-semibold uppercase tracking-[0px] rounded-full transition-colors leading-none font-roboto-condensed cursor-pointer bg-[#EAEAEA] text-[#1A1A1A] hover:bg-[#E0E0E0] whitespace-nowrap"
                    >
                      cancel
                    </button>
                    <button 
                      onClick={() => deletePreset(presetToDelete)}
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
