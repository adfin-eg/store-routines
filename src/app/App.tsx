import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { HashRouter, Routes, Route, useNavigate, useLocation, Navigate } from "react-router";
import { motion as Motion, AnimatePresence } from "motion/react";
import { X, Check } from "lucide-react";
import { Sidebar } from "@/app/components/Sidebar";
import { Header } from "@/app/components/Header";
import { ItemsGridHandle } from "@/app/components/ItemsGrid";
import { StoreRoutinesGridHandle } from "@/app/components/StoreRoutinesGrid";
import { mockData } from "@/app/data/mockData";
import { Footer } from "@/app/components/Footer";
import { ExpandedMenu } from "@/app/components/ExpandedMenu";
import { EnvironmentHeader } from "@/app/components/EnvironmentHeader";
import { ItemDetailsPage } from "@/app/components/ItemDetailsPage";
import { NewItemModal } from "@/app/components/NewItemModal";
import { WindowFrame } from "@/app/components/WindowFrame";
import { EditPromotionGrid } from "./components/EditPromotionGrid";
import { FuturePriceGrid } from "@/app/components/FuturePriceGrid";
import { PriceHistoryGrid } from "@/app/components/PriceHistoryGrid";
import { ActivePriceGrid } from "@/app/components/ActivePriceGrid";
import { PromotionPriceGrid } from "@/app/components/PromotionPriceGrid";
import { Lowest30DaysGrid } from "@/app/components/Lowest30DaysGrid";
import { Spinner } from "@/app/components/Spinner";
import { SalesStatistics } from "@/app/components/SalesStatistics";
import { LocalValuesGrid, LocalValuesGridHandle } from "@/app/components/LocalValuesGrid";
import { UserPreferencesModal } from "@/app/components/UserPreferencesModal";
import { ItemsModule } from "./components/ItemsModule";
import { StoreRoutinesModule } from "./components/StoreRoutinesModule";
import { SelectStoreModal } from "./components/SelectStoreModal";
import { ItemDeclaration } from "./components/ItemDeclaration";
import { ExportExcelModal } from "./components/ExportExcelModal";

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const [items, setItems] = useState(mockData);
  const [visibleItems, setVisibleItems] = useState<any[]>(mockData);

  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [activeSidebarModule, setActiveSidebarModule] = useState<string>("Items");
  const [currentSubItem, setCurrentSubItem] = useState<string>("Items");
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [isItemPanelOpen, setIsItemPanelOpen] = useState<boolean>(false);
  const [isNewItemModalOpen, setIsNewItemModalOpen] = useState<boolean>(false);
  const [isSelectStoreOpen, setIsSelectStoreOpen] = useState<boolean>(false);
  const [isUserPreferencesModalOpen, setIsUserPreferencesModalOpen] = useState<boolean>(false);
  const [currentStore, setCurrentStore] = useState<string>("1000 – EG Retail Grilstad");
  
  const [isItemDetailsWindowOpen, setIsItemDetailsWindowOpen] = useState<boolean>(false);
  const [isActivePriceWindowOpen, setIsActivePriceWindowOpen] = useState<boolean>(false);
  const [isFuturePriceWindowOpen, setIsFuturePriceWindowOpen] = useState<boolean>(false);
  const [isPriceHistoryWindowOpen, setIsPriceHistoryWindowOpen] = useState<boolean>(false);
  const [isPromotionWindowOpen, setIsPromotionWindowOpen] = useState<boolean>(false);
  const [isPromotionOfferWindowOpen, setIsPromotionOfferWindowOpen] = useState<boolean>(false);
  const [isLocalValuesWindowOpen, setIsLocalValuesWindowOpen] = useState<boolean>(false);
  const [isLowest30DaysWindowOpen, setIsLowest30DaysWindowOpen] = useState<boolean>(false);
  const [isSalesWindowOpen, setIsSalesWindowOpen] = useState<boolean>(false);
  const [isItemDeclarationWindowOpen, setIsItemDeclarationWindowOpen] = useState<boolean>(false);
  const [isExportExcelOpen, setIsExportExcelOpen] = useState<boolean>(false);
  const [isEditPromotionWindowOpen, setIsEditPromotionWindowOpen] = useState<boolean>(false);
  const [isEditPromotionSaving, setIsEditPromotionSaving] = useState<boolean>(false);
  const [editPromotionModifiedCount, setEditPromotionModifiedCount] = useState<number>(0);
  const [editPromotionSaveKey, setEditPromotionSaveKey] = useState<number>(0);
  const [editPromotionResetKey, setEditPromotionResetKey] = useState<number>(0);
  const [itemDetailsModifiedCount, setItemDetailsModifiedCount] = useState<number>(0);
  const [itemDetailsResetKey, setItemDetailsResetKey] = useState<number>(0);
  const [itemDetailsSaveKey, setItemDetailsSaveKey] = useState<number>(0);
  const [itemDeclarationModifiedCount, setItemDeclarationModifiedCount] = useState<number>(0);
  const [itemDeclarationResetKey, setItemDeclarationResetKey] = useState<number>(0);
  const [windowConfigs, setWindowConfigs] = useState<Record<string, any>>({});
  const [storeRoutinesResetKey, setStoreRoutinesResetKey] = useState(0);

  const updateWindowConfig = useCallback((id: string, config: { position?: { x: number; y: number }, size?: { width: number; height: number } }) => {
    setWindowConfigs(prev => {
      const current = prev[id] || {};
      const newPos = config.position || current.position;
      const newSize = config.size || current.size;
      
      const posChanged = newPos && (current.position?.x !== newPos.x || current.position?.y !== newPos.y);
      const sizeChanged = newSize && (current.size?.width !== newSize.width || current.size?.height !== newSize.height);
      
      if (!posChanged && !sizeChanged) return prev;

      return {
        ...prev,
        [id]: { ...current, position: newPos || current.position, size: newSize || current.size }
      };
    });
  }, []);

  const [isPromotionSaving, setIsPromotionSaving] = useState<boolean>(false);
  const [showPromotionReference, setShowPromotionReference] = useState<boolean>(true);
  const [isItemDetailsSaving, setIsItemDetailsSaving] = useState<boolean>(false);
  const [isItemDeclarationSaving, setIsItemDeclarationSaving] = useState<boolean>(false);
  const [isLocalValuesSaving, setIsLocalValuesSaving] = useState<boolean>(false);
  const [localValuesModifiedCount, setLocalValuesModifiedCount] = useState<number>(0);
  const [localValuesResetKey, setLocalValuesResetKey] = useState<number>(0);
  const [showPromotionSuccess, setShowPromotionSuccess] = useState<boolean>(false);
  const [showSaveSuccess, setShowSaveSuccess] = useState<boolean>(false);
  const [showRemoveSuccess, setShowRemoveSuccess] = useState<boolean>(false);
  const [attributeFilter, setAttributeFilter] = useState("");
  const [localValuesFilters, setLocalValuesFilters] = useState<Record<string, string>>({ local: "true" });
  const [windowStack, setWindowStack] = useState<string[]>([]);
  const [maximizedWindows, setMaximizedWindows] = useState<string[]>([]);
  const [selectedItemName, setSelectedItemName] = useState<string>("");
  const [selectedItemGtin, setSelectedItemGtin] = useState<string>("");
  const [selectedItemNumber, setSelectedItemNumber] = useState<string>("");
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [selectedItemsCount, setSelectedItemsCount] = useState<number>(0);
  const [dockState, setDockState] = useState({
    heights: {} as Record<string, number>,
    topOffset: 0
  });
  
  const gridRef = useRef<ItemsGridHandle | StoreRoutinesGridHandle>(null);
  const localValuesGridRef = useRef<LocalValuesGridHandle>(null);
  const itemDeclarationRef = useRef<any>(null);
  const resizeStartDockState = useRef<{ heights: Record<string, number>, topOffset: number } | null>(null);

  const handleEditPromotionSave = useCallback(() => {
    setIsEditPromotionSaving(true);
    setTimeout(() => {
      setIsEditPromotionSaving(false);
      setEditPromotionSaveKey(prev => prev + 1);
      setTimeout(() => {
        setShowSaveSuccess(true);
        setTimeout(() => setShowSaveSuccess(false), 5000);
      }, 500);
    }, 1000);
  }, []);

  const handleEditPromotionModified = useCallback((count: number) => {
    setEditPromotionModifiedCount(count);
  }, []);

  const handleItemDetailsSave = useCallback(() => {
    setIsItemDetailsSaving(true);
    setTimeout(() => {
      setIsItemDetailsSaving(false);
      setItemDetailsSaveKey(prev => prev + 1);
      setTimeout(() => {
        setShowSaveSuccess(true);
        setTimeout(() => setShowSaveSuccess(false), 5000);
      }, 500);
    }, 1000);
  }, []);

  const handlePromotionSave = useCallback(() => {
    setIsPromotionSaving(true);
    setTimeout(() => {
      setIsPromotionSaving(false);
      setTimeout(() => {
        setShowPromotionSuccess(true);
        setTimeout(() => setShowPromotionSuccess(false), 5000);
      }, 500);
    }, 3000);
  }, []);

  const handleLocalValuesSave = useCallback(() => {
    setIsLocalValuesSaving(true);
    localValuesGridRef.current?.save();
    setTimeout(() => {
      setIsLocalValuesSaving(false);
      setLocalValuesModifiedCount(0);
      setTimeout(() => {
        setShowSaveSuccess(true);
        setTimeout(() => setShowSaveSuccess(false), 5000);
      }, 500);
    }, 1000);
  }, []);

  const handleItemDeclarationSave = useCallback(() => {
    if (itemDeclarationRef.current) {
      setIsItemDeclarationSaving(true);
      setTimeout(() => {
        setIsItemDeclarationSaving(false);
        itemDeclarationRef.current.save();
        setItemDeclarationModifiedCount(0);
        setTimeout(() => {
          setShowSaveSuccess(true);
          setTimeout(() => setShowSaveSuccess(false), 5000);
        }, 500);
      }, 1000);
    }
  }, []);

  const handleItemDetailsModified = useCallback((count: number) => {
    setItemDetailsModifiedCount(count);
  }, []);

  const [viewportSize, setViewportSize] = useState({ 
    width: typeof window !== 'undefined' ? window.innerWidth : 1200, 
    height: typeof window !== 'undefined' ? window.innerHeight : 800 
  });

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/store-routines", { replace: true });
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    const handleResize = () => {
      setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (maximizedWindows.length === 0) {
      setDockState({ heights: {}, topOffset: 0 });
      return;
    }
    
    setDockState(prev => {
      const innerH = viewportSize.height;
      const headerHeight = 80;
      const footerHeight = 58;
      const topGap = 10 + prev.topOffset;
      const bottomGap = 10;
      const spacing = 10;
      const availableHeight = Math.max(100, innerH - headerHeight - footerHeight - topGap - bottomGap);
      const totalSpacing = spacing * (maximizedWindows.length - 1);
      const contentHeight = Math.max(40 * maximizedWindows.length, availableHeight - totalSpacing);
      
      const nextHeights = { ...prev.heights };
      const currentCount = maximizedWindows.length;
      
      const evenHeight = contentHeight / currentCount;

      const hasAll = maximizedWindows.every(id => nextHeights[id]);
      const currentTotal = maximizedWindows.reduce((sum, id) => sum + (nextHeights[id] || 0), 0);
      const needsNormalization = Math.abs(currentTotal - contentHeight) > 1;

      if (!hasAll) {
        maximizedWindows.forEach(id => {
          nextHeights[id] = evenHeight;
        });
      } else if (needsNormalization) {
        maximizedWindows.forEach(id => {
          nextHeights[id] = (nextHeights[id] / currentTotal) * contentHeight;
        });
      }
      
      if (JSON.stringify(nextHeights) === JSON.stringify(prev.heights)) return prev;

      return { ...prev, heights: nextHeights };
    });
  }, [maximizedWindows, viewportSize.height]);

  const handleDockedResizeStart = useCallback(() => {
    resizeStartDockState.current = { ...dockState };
  }, [dockState]);

  const handleDockedResize = useCallback((id: string, size: { height: number }, dir: string, pos: { x: number, y: number }, delta: { width: number, height: number }) => {
    const index = maximizedWindows.indexOf(id);
    if (index === -1) return;

    setDockState(prev => {
      const startState = resizeStartDockState.current || prev;
      const innerH = viewportSize.height;
      const headerHeight = 80;
      const footerHeight = 58;
      const topGap = 10 + startState.topOffset;
      const bottomGap = 10;
      const spacing = 10;
      const availableHeight = Math.max(100, innerH - headerHeight - footerHeight - topGap - bottomGap);
      const totalSpacing = spacing * (maximizedWindows.length - 1);
      const contentHeight = Math.max(40 * maximizedWindows.length, availableHeight - totalSpacing);
      const evenHeight = contentHeight / maximizedWindows.length;

      const nextHeights = { ...prev.heights };

      if (dir === 'bottom' && index < maximizedWindows.length - 1) {
        // Internal edge redistribution - use incremental delta for simplicity here
        const currentH = prev.heights[id] || evenHeight;
        const incrementalDelta = size.height - currentH;
        const neighborId = maximizedWindows[index + 1];
        const neighborH = prev.heights[neighborId] || evenHeight;
        const actualDelta = Math.max(-currentH + 40, Math.min(incrementalDelta, neighborH - 40));
        nextHeights[id] = currentH + actualDelta;
        nextHeights[neighborId] = neighborH - actualDelta;
        return { ...prev, heights: nextHeights };
      } else if (dir === 'top' && index > 0) {
        // Internal edge redistribution
        const currentH = prev.heights[id] || evenHeight;
        const incrementalDelta = size.height - currentH;
        const neighborId = maximizedWindows[index - 1];
        const neighborH = prev.heights[neighborId] || evenHeight;
        const actualDelta = Math.max(-neighborH + 40, Math.min(incrementalDelta, currentH - 40));
        nextHeights[neighborId] = neighborH - actualDelta;
        nextHeights[id] = currentH + actualDelta;
        return { ...prev, heights: nextHeights };
      } else if (dir === 'top' && index === 0) {
        // Stack boundary resize - Compress "as one"
        // Use total delta from start to avoid compounding errors
        const startTotalH = maximizedWindows.reduce((sum, wid) => sum + (startState.heights[wid] || evenHeight), 0);
        const newTotalH = Math.max(40 * maximizedWindows.length, startTotalH + delta.height);
        const actualDeltaTotalH = newTotalH - startTotalH;
        
        const scale = newTotalH / startTotalH;
        maximizedWindows.forEach(wid => {
          nextHeights[wid] = (startState.heights[wid] || evenHeight) * scale;
        });
        
        return { 
          heights: nextHeights, 
          topOffset: startState.topOffset - actualDeltaTotalH 
        };
      } else if (dir === 'bottom' && index === maximizedWindows.length - 1) {
        // Stack boundary resize - Compress "as one" from bottom
        const startTotalH = maximizedWindows.reduce((sum, wid) => sum + (startState.heights[wid] || evenHeight), 0);
        const newTotalH = Math.max(40 * maximizedWindows.length, startTotalH + delta.height);
        
        const scale = newTotalH / startTotalH;
        maximizedWindows.forEach(wid => {
          nextHeights[wid] = (startState.heights[wid] || evenHeight) * scale;
        });
        
        return { 
          ...prev,
          heights: nextHeights
        };
      }
      return prev;
    });
  }, [maximizedWindows, viewportSize.height]);

  const getDockedBounds = useCallback((id: string) => {
    const index = maximizedWindows.indexOf(id);
    if (index === -1) return null;

    const innerH = viewportSize.height;
    const innerW = viewportSize.width;
    const headerHeight = 80;
    const footerHeight = 58;
    const topGap = 10 + dockState.topOffset;
    const bottomGap = 10;
    const spacing = 10;
    const availableHeight = Math.max(100, innerH - headerHeight - footerHeight - topGap - bottomGap);
    const totalSpacing = spacing * (maximizedWindows.length - 1);
    const contentHeight = Math.max(40 * maximizedWindows.length, availableHeight - totalSpacing);
    const evenHeight = contentHeight / Math.max(1, maximizedWindows.length);

    const targetWidth = innerW * 0.40;
    
    const rightGap = 10;
    const x = innerW - targetWidth - rightGap;
    
    let y = headerHeight + topGap;
    for (let i = 0; i < index; i++) {
      const h = dockState.heights[maximizedWindows[i]] || evenHeight;
      y += h + spacing;
    }

    return {
      x,
      y,
      width: targetWidth,
      height: dockState.heights[id] || evenHeight
    };
  }, [maximizedWindows, dockState, viewportSize, showPromotionReference]);

  useEffect(() => {
    if (selectedItemId !== null) {
      const item = items.find(i => i.id === selectedItemId);
      if (item && item.itemText !== selectedItemName) {
        setSelectedItemName(item.itemText);
        setSelectedItemGtin(item.gtin);
        setSelectedItemNumber(item.itemNumber);
      }
    }
  }, [selectedItemId, items]);

  const selectedItem = useMemo(() => items.find(item => item.id === selectedItemId), [selectedItemId, items]);

  const updateItemLocalFlag = useCallback((id: number, hasOverrides: boolean) => {
    setItems(prev => {
      const item = prev.find(i => i.id === id);
      if (item && item.isLocalValues === hasOverrides) return prev;
      return prev.map(i => i.id === id ? { ...i, isLocalValues: hasOverrides } : i);
    });
  }, []);

  const handleOverridesChange = useCallback((hasAny: boolean) => {
    if (selectedItemId !== null) updateItemLocalFlag(selectedItemId, hasAny);
  }, [selectedItemId, updateItemLocalFlag]);

  const handleCloseNewItemModal = useCallback(() => setIsNewItemModalOpen(false), []);
  const handleOpenNewItemModal = useCallback(() => setIsNewItemModalOpen(true), []);
  const handleCreateItem = useCallback((data: Record<string, any>) => {
    console.log("Creating item:", data);
    setIsNewItemModalOpen(false);
  }, []);

  const openWindow = useCallback((id: string) => {
    // If opening any popup when the grid has no item selected, select the top item in the grid automatically
    if (selectedItemId === null && gridRef.current) {
      gridRef.current.selectFirstRow();
    }

    setWindowStack(prev => {
      const filtered = prev.filter(item => item !== id);
      return [...filtered, id];
    });
    if (id === "details") setIsItemDetailsWindowOpen(true);
    if (id === "active") setIsActivePriceWindowOpen(true);
    if (id === "future") setIsFuturePriceWindowOpen(true);
    if (id === "history") setIsPriceHistoryWindowOpen(true);
    if (id === "promotion") setIsPromotionWindowOpen(true);
    if (id === "promotion-offer") setIsPromotionOfferWindowOpen(true);
    if (id === "local") setIsLocalValuesWindowOpen(true);
    if (id === "lowest") setIsLowest30DaysWindowOpen(true);
    if (id === "sales") setIsSalesWindowOpen(true);
    if (id === "declaration") setIsItemDeclarationWindowOpen(true);
    if (id === "edit-promotion") setIsEditPromotionWindowOpen(true);
  }, [selectedItemId]);

  const closeWindow = useCallback((id: string) => {
    setWindowStack(prev => prev.filter(item => item !== id));
    setMaximizedWindows(prev => prev.filter(item => item !== id));
    setDockState(prev => {
      const nextHeights = { ...prev.heights };
      delete nextHeights[id];
      return { ...prev, heights: nextHeights };
    });
    if (id === "details") setIsItemDetailsWindowOpen(false);
    if (id === "active") setIsActivePriceWindowOpen(false);
    if (id === "future") setIsFuturePriceWindowOpen(false);
    if (id === "history") setIsPriceHistoryWindowOpen(false);
    if (id === "promotion") setIsPromotionWindowOpen(false);
    if (id === "promotion-offer") setIsPromotionOfferWindowOpen(false);
    if (id === "local") setIsLocalValuesWindowOpen(false);
    if (id === "lowest") setIsLowest30DaysWindowOpen(false);
    if (id === "sales") setIsSalesWindowOpen(false);
    if (id === "declaration") setIsItemDeclarationWindowOpen(false);
    if (id === "edit-promotion") setIsEditPromotionWindowOpen(false);
  }, []);

  const toggleMaximize = useCallback((id: string) => {
    setMaximizedWindows(prev => {
      if (prev.includes(id)) {
        // Dragging out or unmaximizing: Reset height
        setDockState(s => {
          const nextHeights = { ...s.heights };
          delete nextHeights[id];
          return { ...s, heights: nextHeights };
        });
        return prev.filter(w => w !== id);
      }
      return [...prev, id];
    });
  }, []);

  const getMaximizedIndex = useCallback((id: string) => maximizedWindows.indexOf(id), [maximizedWindows]);

  const getCurrentWindowStates = useCallback(() => {
    const states: Record<string, any> = {};
    const windows = [
      { id: "details", isOpen: isItemDetailsWindowOpen },
      { id: "active", isOpen: isActivePriceWindowOpen },
      { id: "future", isOpen: isFuturePriceWindowOpen },
      { id: "history", isOpen: isPriceHistoryWindowOpen },
      { id: "promotion", isOpen: isPromotionWindowOpen },
      { id: "promotion-offer", isOpen: isPromotionOfferWindowOpen },
      { id: "local", isOpen: isLocalValuesWindowOpen },
      { id: "lowest", isOpen: isLowest30DaysWindowOpen },
      { id: "sales", isOpen: isSalesWindowOpen },
      { id: "declaration", isOpen: isItemDeclarationWindowOpen },
      { id: "edit-promotion", isOpen: isEditPromotionWindowOpen }
    ];

    windows.forEach(w => {
      states[w.id] = {
        isOpen: w.isOpen,
        isMaximized: maximizedWindows.includes(w.id),
        position: windowConfigs[w.id]?.position,
        size: windowConfigs[w.id]?.size
      };
    });
    return states;
  }, [
    isItemDetailsWindowOpen, isActivePriceWindowOpen, isFuturePriceWindowOpen,
    isPriceHistoryWindowOpen, isPromotionWindowOpen, isPromotionOfferWindowOpen,
    isLocalValuesWindowOpen, isLowest30DaysWindowOpen, isSalesWindowOpen,
    isItemDeclarationWindowOpen, isEditPromotionWindowOpen, maximizedWindows, windowConfigs
  ]);

  const applyWindowStates = useCallback((states: Record<string, any>, order?: string[]) => {
    // Close all windows first
    const allWindowIds = ["details", "active", "future", "history", "promotion", "promotion-offer", "local", "lowest", "sales", "declaration", "edit-promotion"];
    allWindowIds.forEach(id => closeWindow(id));
    
    // Clear maximized state (normalization effect will handle heights)
    setMaximizedWindows([]);

    // If order is provided, set maximized windows in that order
    if (order) {
      setMaximizedWindows(order);
    }

    // 1. Update window configurations first
    Object.entries(states).forEach(([id, state]: [string, any]) => {
      if (state.position || state.size) {
        setWindowConfigs(prev => ({
          ...prev,
          [id]: { ...prev[id], position: state.position, size: state.size }
        }));
      }
    });

    // 2. Open windows (this will now have access to updated configs via props)
    Object.entries(states).forEach(([id, state]: [string, any]) => {
      if (state.isOpen) {
        openWindow(id);
        
        if (!order && state.isMaximized) {
          setMaximizedWindows(prev => prev.includes(id) ? prev : [...prev, id]);
        }
      }
    });
  }, [openWindow, closeWindow]);

  const closeAllWindows = useCallback(() => {
    setIsItemDetailsWindowOpen(false);
    setIsActivePriceWindowOpen(false);
    setIsFuturePriceWindowOpen(false);
    setIsPriceHistoryWindowOpen(false);
    setIsPromotionWindowOpen(false);
    setIsPromotionOfferWindowOpen(false);
    setIsLocalValuesWindowOpen(false);
    setIsLowest30DaysWindowOpen(false);
    setIsSalesWindowOpen(false);
    setIsItemDeclarationWindowOpen(false);
    setIsEditPromotionWindowOpen(false);
    setIsItemPanelOpen(false);
    setIsNewItemModalOpen(false);
    setIsSelectStoreOpen(false);
    setIsUserPreferencesModalOpen(false);
    setShowBanner(false);
    setWindowStack([]);
    setMaximizedWindows([]);
    setDockState({ heights: {}, topOffset: 0 });
  }, []);

  useEffect(() => {
    // Reset window states when leaving a page
    return () => {
      closeAllWindows();
    };
  }, [location.pathname, closeAllWindows]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'c' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        setShowPromotionSuccess(true);
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => setShowPromotionSuccess(false), 5000);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    document.title = "EG Chain";
    
    // Set favicon using Logo-207-132 SVG
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1.5 -1.5 17 17" fill="none">
      <g>
        <path d="M13.8576 4.0313C13.9456 4.11927 14 4.24076 14 4.375V13.5139C14 13.7824 13.7824 14 13.5139 14H4.375C4.24076 14 4.11927 13.9456 4.0313 13.8576L0.142415 9.96879C0.230384 10.0568 0.351875 10.1111 0.486111 10.1111H9.625C9.89347 10.1111 10.1111 9.89347 10.1111 9.625V0.486111C10.1111 0.351875 10.0567 0.230384 9.9687 0.142415L13.8576 4.0313Z" fill="#97F4D6"/>
        <path d="M9.625 0C9.89347 2.50544e-08 10.1111 0.217639 10.1111 0.486111V3.88889H4.375C4.10653 3.88889 3.88889 4.10653 3.88889 4.375V10.1111H0.486111C0.217639 10.1111 0 9.89347 0 9.625V0.486111C2.50552e-08 0.217639 0.217639 0 0.486111 0H9.625Z" fill="#18B291"/>
        <path d="M3.88889 4.375C3.88889 4.10653 4.10653 3.88889 4.375 3.88889H10.1111V9.625C10.1111 9.89347 9.89347 10.1111 9.625 10.1111H3.88889V4.375Z" fill="#006B56"/>
      </g>
    </svg>`;
    
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement || document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/svg+xml';
    favicon.href = 'data:image/svg+xml,' + encodeURIComponent(svg);
    
    if (!document.querySelector("link[rel='icon']")) {
      document.head.appendChild(favicon);
    }
    
    const handleKeyDown = (event: KeyboardEvent) => {
      // ESC shortcut disabled for popup windows as requested
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelectModule = (item: string) => {
    closeAllWindows();
    setCurrentSubItem(item);
    
    // Determine which sidebar module should be active based on the selected item
    let parentModule = "Items";
    if (["Promotions", "Items in promotions", "Promotion offers", "Price rules", "Price lock", "Temporary net price", "Promotion registers"].includes(item)) {
      parentModule = "Promotion";
    } else if (["Stock status", "Transactions", "Temporary storage", "Serial numbers", "Stocktakings", "Count lists", "Count groups", "Tank reading", "Tank fillings", "Nozzles", "Tanks", "Tank groups"].includes(item)) {
      parentModule = "Inventory";
    } else if (["Purchase orders", "Items in purchase orders", "Deliveries", "Procurement registers"].includes(item)) {
      parentModule = "Purchase";
    } else if (["All stores", "Stores", "All teams", "Teams", "All profiles", "Profiles", "All Regions", "Profile groups", "Companies", "Postal codes", "Export all stores", "Opening hours", "Store registers"].includes(item)) {
      parentModule = "Store";
    } else if (["Member identities", "Member cards", "Member statistics", "Member segmentation", "Coupons", "Coupons (On-premise)", "Stamp cards", "Bonus", "Bonus Rollouts", "Loyalty programs", "Bonus rules", "Marketing distribution"].includes(item)) {
      parentModule = "Loyalty";
    } else if (["Order dispatch dashboard", "Service orders", "Customer orders", "Offers", "Customers", "Customer cards", "Customer groups", "Contacts"].includes(item)) {
      parentModule = "Customer";
    } else if (["Dashboards", "Budget", "EOBD log", "Import log"].includes(item)) {
      parentModule = "Reporting";
    } else if (["Users", "User roles", "Files", "Parameters", "Automatic Softpay Login", "Reason codes", "POS Units", "Default POS Units", "POS master data import", "POS API price validation", "Flight data", "Merchants", "Payment providers", "Coopay backup", "Parameter groups", "Configuration groups", "Account configuration", "User accounts", "Email messages", "Text messages", "Distribution templates", "Accounts"].includes(item)) {
      parentModule = "System";
    } else {
      // Default to "Items" for everything else found in itemsMenuSections
      parentModule = "Items";
    }

    setActiveSidebarModule(parentModule);
    setOpenMenu(null);
    if (item === "Items") navigate("/items");
    else if (item === "Store routines") {
      setStoreRoutinesResetKey(prev => prev + 1);
      navigate("/store-routines");
    }
    else if (item === "Items in promotions") navigate("/items-in-promotions");
  };

  const handleToggleMenu = (label: string) => setOpenMenu(openMenu === label ? null : label);

  const handleSelectionChange = useCallback((items: (typeof mockData[0])[]) => {
    if (items.length > 0) {
      setSelectedItemName(items[0].itemText);
      setSelectedItemGtin(items[0].gtin);
      setSelectedItemNumber(items[0].itemNumber);
      setSelectedItemId(items[0].id);
      setSelectedItemsCount(items.length);
    } else {
      setSelectedItemName("");
      setSelectedItemGtin("");
      setSelectedItemNumber("");
      setSelectedItemId(null);
      setSelectedItemsCount(0);
    }
  }, []);

  const getWindowTitle = useCallback((baseTitle: string) => {
    if (selectedItemsCount > 1) {
      return (
        <div className="flex items-center min-w-0 flex-1">
          <span className="shrink-0">{baseTitle}</span>
          <span className="mx-2 opacity-40 shrink-0">–</span>
          <span className="text-[#CCCCCC] truncate min-w-0 flex-1">Selected items ({selectedItemsCount})</span>
        </div>
      );
    } else if (selectedItemName) {
      return (
        <div className="flex items-center min-w-0 flex-1">
          <span className="shrink-0">{baseTitle}</span>
          <span className="mx-2 opacity-40 shrink-0">–</span>
          <span className="text-[#CCCCCC] truncate min-w-0 flex-1">{selectedItemName}</span>
        </div>
      );
    }
    return baseTitle;
  }, [selectedItemName, selectedItemsCount]);

  const handleOpenItemDetails = useCallback((item?: any) => {
    if (item) {
      setSelectedItemName(item.itemText);
      setSelectedItemGtin(item.gtin);
      setSelectedItemNumber(item.itemNumber);
      setSelectedItemId(item.id);
    }
    navigate(`${location.pathname}?tab=details`);
    openWindow("details");
  }, [items, navigate, location.pathname, openWindow]);

  const handleOpenActivePrice = useCallback(() => {
    openWindow("active");
  }, [openWindow]);

  const handleOpenFuturePrice = useCallback(() => {
    openWindow("future");
  }, [openWindow]);

  const handleOpenPriceHistory = useCallback(() => {
    openWindow("history");
  }, [openWindow]);

  const handleOpenEditPromotion = useCallback(() => {
    openWindow("edit-promotion");
  }, [openWindow]);

  const handleOpenPromotion = useCallback(() => {
    openWindow("promotion");
  }, [openWindow]);

  const handleOpenPromotionOffer = useCallback(() => {
    openWindow("promotion-offer");
  }, [openWindow]);

  const handleOpenLocalValuesWindow = useCallback(() => {
    openWindow("local");
  }, [openWindow]);

  const handleOpenLowest30Days = useCallback(() => {
    openWindow("lowest");
  }, [openWindow]);

  const handleOpenSales = useCallback(() => {
    openWindow("sales");
  }, [openWindow]);

  const handleOpenItemDeclaration = useCallback(() => {
    openWindow("declaration");
  }, [openWindow]);

  const handleItemDeclarationCancel = useCallback(() => {
    if (itemDeclarationRef.current) {
      itemDeclarationRef.current.cancel();
      setItemDeclarationModifiedCount(0);
    }
  }, []);

  const handleTogglePromotionReference = useCallback((show: boolean) => {
    setShowPromotionReference(show);
    
    // Only update window config size if NOT docked (maximized)
    if (!maximizedWindows.includes("promotion")) {
      const currentConfig = windowConfigs["promotion"] || {};
      const currentWidth = currentConfig.size?.width || viewportSize.width * 0.65;
      
      let newWidth: number;
      if (!show) {
        // Hiding: W_compact = 0.6 * (W_current - 30) + 20
        newWidth = 0.6 * (currentWidth - 30) + 20;
      } else {
        // Showing: W_full = (W_current - 20) / 0.6 + 30
        newWidth = (currentWidth - 20) / 0.6 + 30;
      }
      
      updateWindowConfig("promotion", { 
        size: { 
          width: newWidth, 
          height: currentConfig.size?.height || viewportSize.height * 0.80 
        } 
      });
    }
  }, [maximizedWindows, windowConfigs, viewportSize, updateWindowConfig]);

  const handleLocalValuesCancel = useCallback(() => {
    localValuesGridRef.current?.cancel();
    setLocalValuesModifiedCount(0);
  }, []);

  const handleOpenLocalValues = useCallback(() => {
    navigate(`${location.pathname}?tab=local-values`);
    openWindow("details");
  }, [navigate, location.pathname, openWindow]);

  useEffect(() => {
    if (showRemoveSuccess) {
      const timer = setTimeout(() => setShowRemoveSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showRemoveSuccess]);

  const handleNavigateNext = useCallback(() => {
    const currentIndex = visibleItems.findIndex(item => item.id === selectedItemId);
    if (currentIndex !== -1 && currentIndex < visibleItems.length - 1) {
      const nextItem = visibleItems[currentIndex + 1];
      setItemDetailsModifiedCount(0);
      setSelectedItemId(nextItem.id);
      if (gridRef.current) gridRef.current.setSelectedById(nextItem.id);
    }
  }, [selectedItemId, visibleItems]);

  const handleNavigatePrev = useCallback(() => {
    const currentIndex = visibleItems.findIndex(item => item.id === selectedItemId);
    if (currentIndex !== -1 && currentIndex > 0) {
      const prevItem = visibleItems[currentIndex - 1];
      setItemDetailsModifiedCount(0);
      setSelectedItemId(prevItem.id);
      if (gridRef.current) gridRef.current.setSelectedById(prevItem.id);
    }
  }, [selectedItemId, visibleItems]);

  const currentIdx = visibleItems.findIndex(item => item.id === selectedItemId);
  const hasNext = currentIdx !== -1 && currentIdx < visibleItems.length - 1;
  const hasPrev = currentIdx !== -1 && currentIdx > 0;
  const maximizedCount = maximizedWindows.length;

  const handleKeyDownEnter = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLElement;
      // Don't trigger if user is currently typing in a TEXTAREA (multi-line)
      if (target && target.tagName === 'TEXTAREA') return;

      const topWindowId = windowStack.length > 0 ? windowStack[windowStack.length - 1] : null;
      
      if (topWindowId === "details" && itemDetailsModifiedCount > 0) {
        e.preventDefault();
        handleItemDetailsSave();
      } else if (topWindowId === "promotion") {
        e.preventDefault();
        handlePromotionSave();
      } else if (topWindowId === "local" && localValuesModifiedCount > 0) {
        e.preventDefault();
        handleLocalValuesSave();
      } else if (topWindowId === "declaration" && itemDeclarationModifiedCount > 0) {
        e.preventDefault();
        handleItemDeclarationSave();
      }
    }
  }, [windowStack, itemDetailsModifiedCount, localValuesModifiedCount, itemDeclarationModifiedCount, handleItemDetailsSave, handlePromotionSave, handleLocalValuesSave, handleItemDeclarationSave]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDownEnter);
    return () => window.removeEventListener('keydown', handleKeyDownEnter);
  }, [handleKeyDownEnter]);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-white font-sans relative overscroll-none">
      <Sidebar onToggleMenu={handleToggleMenu} openMenu={openMenu} selectedModule={activeSidebarModule} />
      {openMenu && (
        <>
          <div className="fixed inset-0 z-[5900]" onClick={() => setOpenMenu(null)} />
          <div className="absolute left-[95px] top-0 bottom-0 z-[6000]">
            <ExpandedMenu menuLabel={openMenu} onClose={() => setOpenMenu(null)} onSelect={handleSelectModule} selectedItem={currentSubItem} />
          </div>
        </>
      )}
      <div className="flex-1 flex flex-col min-w-0 relative">
        {showBanner && <EnvironmentHeader />}
        <Header 
        itemName={selectedItemName || selectedItem?.itemText || undefined} 
        itemNumber={selectedItemGtin || selectedItem?.gtin || selectedItemNumber || selectedItem?.itemNumber || undefined} 
          isSelectStoreOpen={isSelectStoreOpen}
          setIsSelectStoreOpen={setIsSelectStoreOpen}
          currentStore={currentStore}
          onOpenUserPreferences={() => setIsUserPreferencesModalOpen(true)}
        />
        <main className="flex-1 flex flex-row overflow-hidden bg-white">
          <Routes>
            <Route path="/" element={<Navigate to="/store-routines" replace />} />
            <Route path="/items" element={
              <ItemsModule 
                isItemPanelOpen={isItemPanelOpen} setIsItemPanelOpen={setIsItemPanelOpen} gridRef={gridRef} onOpenItemDetails={handleOpenItemDetails} onSelectionChange={handleSelectionChange} onDataChange={setVisibleItems} data={items} currentWindowStates={getCurrentWindowStates()} onApplyWindowStates={applyWindowStates}
              />
            } />
            <Route path="/store-routines" element={
              <StoreRoutinesModule 
                key={storeRoutinesResetKey}
                isItemPanelOpen={isItemPanelOpen} setIsItemPanelOpen={setIsItemPanelOpen} gridRef={gridRef} onOpenItemDetails={handleOpenItemDetails} onSelectionChange={handleSelectionChange} onDataChange={setVisibleItems} onOpenNewItemModal={handleOpenNewItemModal} attributeFilter={attributeFilter} setAttributeFilter={setAttributeFilter} data={items} currentWindowStates={getCurrentWindowStates()} onApplyWindowStates={applyWindowStates}
              />
            } />
            <Route path="/items-in-promotions" element={
              <ItemsModule 
                isItemPanelOpen={isItemPanelOpen} setIsItemPanelOpen={setIsItemPanelOpen} gridRef={gridRef} onOpenItemDetails={handleOpenItemDetails} onSelectionChange={handleSelectionChange} onDataChange={setVisibleItems} hideFilter={true} isPromotionGrid={true} data={items} currentWindowStates={getCurrentWindowStates()} onApplyWindowStates={applyWindowStates}
              />
            } />
            <Route path="/item-details" element={<ItemDetailsPage itemName={selectedItemName} itemGtin={selectedItemGtin} item={selectedItem} isStoreRoutines={location.pathname === "/store-routines"} />} />
          </Routes>
        </main>
        <Footer 
          onNewItem={handleOpenNewItemModal} 
          onOpenItemDetails={handleOpenItemDetails} 
          onOpenLocalValues={handleOpenLocalValuesWindow} 
          onOpenActivePrice={handleOpenActivePrice} 
          onOpenFuturePrice={handleOpenFuturePrice} 
          onOpenPriceHistory={handleOpenPriceHistory} 
          onOpenLowest30Days={handleOpenLowest30Days} 
          onOpenSales={handleOpenSales} 
          onOpenItemDeclaration={handleOpenItemDeclaration} 
          onOpenPromotionPrice={handleOpenPromotion} 
          onOpenPromotionOffer={handleOpenPromotionOffer} 
          onExportExcel={() => setIsExportExcelOpen(true)}
          detailsDisabled={false} 
          isStoreRoutines={location.pathname === "/store-routines"} 
          isItemsInPromotions={location.pathname === "/items-in-promotions"}
        />
      </div>

      <WindowFrame 
        title={getWindowTitle("ITEM SALES")} 
        isOpen={isSalesWindowOpen} onClose={() => closeWindow("sales")} onNavigateNext={handleNavigateNext} onNavigatePrev={handleNavigatePrev} hasNext={hasNext} hasPrev={hasPrev} stackIndex={windowStack.indexOf("sales")} zIndex={6000 + windowStack.indexOf("sales")} 
        isMaximized={maximizedWindows.includes("sales")} 
        onMaximizeToggle={() => toggleMaximize("sales")} 
        totalMaximizedCount={maximizedCount} 
        isFirstInDock={maximizedWindows.indexOf("sales") === 0}
        isLastInDock={maximizedWindows.indexOf("sales") === maximizedWindows.length - 1}
        onFocus={() => openWindow("sales")} 
        width={maximizedWindows.includes("sales") ? getDockedBounds("sales")?.width : (windowConfigs["sales"]?.size?.width || Math.max(900, viewportSize.width * 0.50))} 
        height={maximizedWindows.includes("sales") ? getDockedBounds("sales")?.height : (windowConfigs["sales"]?.size?.height || viewportSize.height * 0.60)} 
        position={maximizedWindows.includes("sales") ? { x: getDockedBounds("sales")?.x || 0, y: getDockedBounds("sales")?.y || 0 } : windowConfigs["sales"]?.position} 
        onPositionChange={(position) => updateWindowConfig("sales", { position })} 
        onSizeChange={(size) => updateWindowConfig("sales", { size })} 
        onResizeStart={handleDockedResizeStart}
        onResize={(size, pos, dir, d) => handleDockedResize("sales", size, dir, pos, d)}
        useVerticalOffset={false}
        defaultWidth={Math.max(900, viewportSize.width * 0.50)}
        defaultHeight={viewportSize.height * 0.60}
        minWidth={900}
        minHeight={maximizedWindows.includes("sales") ? 40 : 600}
      >
        <div className="h-full bg-white overflow-hidden flex flex-col">
          <SalesStatistics itemId={selectedItemId?.toString()} selectedItemsCount={selectedItemsCount} onExportExcel={() => setIsExportExcelOpen(true)} />
        </div>
      </WindowFrame>

      <WindowFrame 
        title={getWindowTitle("ACTIVE PRICE")} 
        isOpen={isActivePriceWindowOpen} onClose={() => closeWindow("active")} onNavigateNext={handleNavigateNext} onNavigatePrev={handleNavigatePrev} hasNext={hasNext} hasPrev={hasPrev} stackIndex={windowStack.indexOf("active")} zIndex={6000 + windowStack.indexOf("active")} 
        isMaximized={maximizedWindows.includes("active")} 
        onMaximizeToggle={() => toggleMaximize("active")} 
        totalMaximizedCount={maximizedCount} 
        isFirstInDock={maximizedWindows.indexOf("active") === 0}
        isLastInDock={maximizedWindows.indexOf("active") === maximizedWindows.length - 1}
        onFocus={() => openWindow("active")} 
        width={maximizedWindows.includes("active") ? getDockedBounds("active")?.width : (windowConfigs["active"]?.size?.width || viewportSize.width * 0.6)} 
        height={maximizedWindows.includes("active") ? getDockedBounds("active")?.height : (windowConfigs["active"]?.size?.height || viewportSize.height * 0.5)} 
        position={maximizedWindows.includes("active") ? { x: getDockedBounds("active")?.x || 0, y: getDockedBounds("active")?.y || 0 } : windowConfigs["active"]?.position} 
        onPositionChange={(position) => updateWindowConfig("active", { position })} 
        onSizeChange={(size) => updateWindowConfig("active", { size })} 
        onResizeStart={handleDockedResizeStart}
        onResize={(size, pos, dir, d) => handleDockedResize("active", size, dir, pos, d)}
        useVerticalOffset={false}
        defaultWidth={viewportSize.width * 0.6}
        defaultHeight={viewportSize.height * 0.5}
        isPricePopup={true}
      >
        <div className="flex-1 flex flex-col overflow-hidden p-0"><ActivePriceGrid selectedItem={selectedItem} onOpenEditPromotion={handleOpenEditPromotion} showMultiSelectMessage={selectedItemsCount > 1} /></div>
      </WindowFrame>

      <WindowFrame 
        title={getWindowTitle("PLANNED PRICE")} 
        isOpen={isFuturePriceWindowOpen} onClose={() => closeWindow("future")} onNavigateNext={handleNavigateNext} onNavigatePrev={handleNavigatePrev} hasNext={hasNext} hasPrev={hasPrev} stackIndex={windowStack.indexOf("future")} zIndex={6000 + windowStack.indexOf("future")} 
        isMaximized={maximizedWindows.includes("future")} 
        onMaximizeToggle={() => toggleMaximize("future")} 
        totalMaximizedCount={maximizedCount} 
        isFirstInDock={maximizedWindows.indexOf("future") === 0}
        isLastInDock={maximizedWindows.indexOf("future") === maximizedWindows.length - 1}
        onFocus={() => openWindow("future")} 
        width={maximizedWindows.includes("future") ? getDockedBounds("future")?.width : (windowConfigs["future"]?.size?.width || viewportSize.width * 0.6)} 
        height={maximizedWindows.includes("future") ? getDockedBounds("future")?.height : (windowConfigs["future"]?.size?.height || viewportSize.height * 0.5)} 
        position={maximizedWindows.includes("future") ? { x: getDockedBounds("future")?.x || 0, y: getDockedBounds("future")?.y || 0 } : windowConfigs["future"]?.position} 
        onPositionChange={(position) => updateWindowConfig("future", { position })} 
        onSizeChange={(size) => updateWindowConfig("future", { size })} 
        onResizeStart={handleDockedResizeStart}
        onResize={(size, pos, dir, d) => handleDockedResize("future", size, dir, pos, d)}
        useVerticalOffset={false}
        defaultWidth={viewportSize.width * 0.6}
        defaultHeight={viewportSize.height * 0.5}
        isPricePopup={true}
      >
        <div className="flex-1 flex flex-col overflow-hidden p-0"><FuturePriceGrid key={`future-${selectedItemId}`} selectedItem={selectedItem} onOpenEditPromotion={handleOpenEditPromotion} showMultiSelectMessage={selectedItemsCount > 1} /></div>
      </WindowFrame>

      <WindowFrame 
        title={getWindowTitle("PRICE HISTORY")} 
        isOpen={isPriceHistoryWindowOpen} onClose={() => closeWindow("history")} onNavigateNext={handleNavigateNext} onNavigatePrev={handleNavigatePrev} hasNext={hasNext} hasPrev={hasPrev} stackIndex={windowStack.indexOf("history")} zIndex={6000 + windowStack.indexOf("history")} 
        isMaximized={maximizedWindows.includes("history")} 
        onMaximizeToggle={() => toggleMaximize("history")} 
        totalMaximizedCount={maximizedCount} 
        isFirstInDock={maximizedWindows.indexOf("history") === 0}
        isLastInDock={maximizedWindows.indexOf("history") === maximizedWindows.length - 1}
        onFocus={() => openWindow("history")} 
        width={maximizedWindows.includes("history") ? getDockedBounds("history")?.width : (windowConfigs["history"]?.size?.width || viewportSize.width * 0.6)} 
        height={maximizedWindows.includes("history") ? getDockedBounds("history")?.height : (windowConfigs["history"]?.size?.height || viewportSize.height * 0.5)} 
        position={maximizedWindows.includes("history") ? { x: getDockedBounds("history")?.x || 0, y: getDockedBounds("history")?.y || 0 } : windowConfigs["history"]?.position} 
        onPositionChange={(position) => updateWindowConfig("history", { position })} 
        onSizeChange={(size) => updateWindowConfig("history", { size })} 
        onResizeStart={handleDockedResizeStart}
        onResize={(size, pos, dir, d) => handleDockedResize("history", size, dir, pos, d)}
        useVerticalOffset={false}
        defaultWidth={viewportSize.width * 0.6}
        defaultHeight={viewportSize.height * 0.5}
        isPricePopup={true}
      >
        <div className="flex-1 flex flex-col overflow-hidden p-0"><PriceHistoryGrid key={`history-${selectedItemId}`} selectedItem={selectedItem} showMultiSelectMessage={selectedItemsCount > 1} /></div>
      </WindowFrame>

      <WindowFrame 
        key="details-window-fixed"
        title={getWindowTitle("ITEM DETAILS")} 
        isOpen={isItemDetailsWindowOpen} onClose={() => { closeWindow("details"); setItemDetailsModifiedCount(0); }} onNavigateNext={handleNavigateNext} onNavigatePrev={handleNavigatePrev} hasNext={hasNext} hasPrev={hasPrev} 
        stackIndex={windowStack.indexOf("details")} 
        zIndex={6000 + windowStack.indexOf("details")} 
        isMaximized={maximizedWindows.includes("details")} 
        onMaximizeToggle={() => toggleMaximize("details")} 
        totalMaximizedCount={maximizedCount} 
        isFirstInDock={maximizedWindows.indexOf("details") === 0}
        isLastInDock={maximizedWindows.indexOf("details") === maximizedWindows.length - 1}
        onFocus={() => openWindow("details")} 
        width={maximizedWindows.includes("details") ? getDockedBounds("details")?.width : (windowConfigs["details"]?.size?.width || viewportSize.width * 0.60)} 
        height={maximizedWindows.includes("details") ? getDockedBounds("details")?.height : (windowConfigs["details"]?.size?.height || viewportSize.height * 0.80)} 
        position={maximizedWindows.includes("details") ? { x: getDockedBounds("details")?.x || 0, y: getDockedBounds("details")?.y || 0 } : windowConfigs["details"]?.position} 
        onPositionChange={(position) => updateWindowConfig("details", { position })} 
        onSizeChange={(size) => updateWindowConfig("details", { size })} 
        onResizeStart={handleDockedResizeStart}
        onResize={(size, pos, dir, d) => handleDockedResize("details", size, dir, pos, d)}
        footer={
          itemDetailsModifiedCount > 0 ? (
            <Footer 
              forceDetailsMode={true} 
              isItemDetails={true} 
              isModified={true}
              modifiedCount={itemDetailsModifiedCount}
              onSave={handleItemDetailsSave} 
              onClose={() => { 
                setItemDetailsModifiedCount(0); 
                setItemDetailsResetKey(prev => prev + 1);
              }} 
              onOpenLocalValues={handleOpenLocalValuesWindow} 
              onOpenActivePrice={handleOpenActivePrice} 
              onOpenFuturePrice={handleOpenFuturePrice} 
              onOpenPriceHistory={handleOpenPriceHistory} 
              onOpenLowest30Days={handleOpenLowest30Days} 
              onOpenPromotionPrice={() => openWindow("promotion")} 
              onOpenPromotionOffer={() => openWindow("promotion-offer")} 
              onExportExcel={() => setIsExportExcelOpen(true)}
            />
          ) : undefined
        } 
        hugHeight={false} 
        useVerticalOffset={false}
        defaultWidth={viewportSize.width * 0.60}
        defaultHeight={viewportSize.height * 0.80}
      >
        {selectedItemsCount > 1 ? (
          <div className="flex-1 flex items-center justify-center text-sm text-[#1A1A1A] bg-white">
            Select a single item
          </div>
        ) : (
          <div className="flex-1 bg-white overflow-hidden relative flex flex-col">
            <ItemDetailsPage 
              key={itemDetailsResetKey} 
              isPopup={true} 
              isStoreRoutines={location.pathname === "/store-routines"} 
              itemName={selectedItemName || selectedItem?.itemText} 
              itemGtin={selectedItemGtin || selectedItem?.gtin} 
              item={selectedItem}
              onModified={handleItemDetailsModified}
              saveTrigger={itemDetailsSaveKey}
            />
            {isItemDetailsSaving && (
              <div className="absolute inset-0 z-[200] flex items-center justify-center">
                <div className="bg-white/50 absolute inset-0" />
                <div className="relative z-[201]"><Spinner /></div>
              </div>
            )}
          </div>
        )}
      </WindowFrame>

      <WindowFrame 
        title={getWindowTitle("EDIT PROMOTION")} 
        isOpen={isEditPromotionWindowOpen} 
        onClose={() => closeWindow("edit-promotion")} 
        onNavigateNext={handleNavigateNext} 
        onNavigatePrev={handleNavigatePrev} 
        hasNext={hasNext} 
        hasPrev={hasPrev} 
        stackIndex={windowStack.indexOf("edit-promotion")} 
        zIndex={6000 + windowStack.indexOf("edit-promotion")} 
        isMaximized={maximizedWindows.includes("edit-promotion")} 
        onMaximizeToggle={() => toggleMaximize("edit-promotion")} 
        totalMaximizedCount={maximizedCount} 
        isFirstInDock={maximizedWindows.indexOf("edit-promotion") === 0}
        isLastInDock={maximizedWindows.indexOf("edit-promotion") === maximizedWindows.length - 1}
        onFocus={() => openWindow("edit-promotion")} 
        width={maximizedWindows.includes("edit-promotion") ? getDockedBounds("edit-promotion")?.width : (windowConfigs["edit-promotion"]?.size?.width || (showPromotionReference ? viewportSize.width * 0.65 : 0.6 * (viewportSize.width * 0.65 - 30) + 20))} 
        height={maximizedWindows.includes("edit-promotion") ? getDockedBounds("edit-promotion")?.height : (windowConfigs["edit-promotion"]?.size?.height || viewportSize.height * 0.80)} 
        position={maximizedWindows.includes("edit-promotion") ? { x: getDockedBounds("edit-promotion")?.x || 0, y: getDockedBounds("edit-promotion")?.y || 0 } : windowConfigs["edit-promotion"]?.position} 
        onPositionChange={(position) => updateWindowConfig("edit-promotion", { position })} 
        onSizeChange={(size) => updateWindowConfig("edit-promotion", { size })} 
        onResizeStart={handleDockedResizeStart}
        onResize={(size, pos, dir, d) => handleDockedResize("edit-promotion", size, dir, pos, d)}
        footer={
          editPromotionModifiedCount > 0 ? (
            <Footer 
              isModified={true}
              modifiedCount={editPromotionModifiedCount}
              onSave={handleEditPromotionSave} 
              onClose={() => {
                setEditPromotionModifiedCount(0);
                setEditPromotionResetKey(prev => prev + 1);
              }}
            />
          ) : undefined
        } 
        useVerticalOffset={false}
        defaultWidth={showPromotionReference ? viewportSize.width * 0.65 : 0.6 * (viewportSize.width * 0.65 - 30) + 20}
        defaultHeight={viewportSize.height * 0.80}
      >
        {selectedItemsCount > 1 ? (
          <div className="flex-1 flex items-center justify-center text-sm text-[#1A1A1A]">
            Select a single item
          </div>
        ) : (
          <div className="flex-1 flex flex-col overflow-hidden relative">
            <EditPromotionGrid 
              key={editPromotionResetKey}
              showReference={showPromotionReference} 
              onShowReferenceChange={handleTogglePromotionReference}
              onModified={handleEditPromotionModified}
              saveTrigger={editPromotionSaveKey}
              onSave={handleEditPromotionSave}
            />
            {isEditPromotionSaving && (
              <div className="absolute inset-0 z-[200] flex items-center justify-center">
                <div className="bg-white/50 absolute inset-0" />
                <div className="relative z-[201]"><Spinner /></div>
              </div>
            )}
          </div>
        )}
      </WindowFrame>

      <WindowFrame 
        title={getWindowTitle("NEW PROMOTION PRICE")} 
        isOpen={isPromotionWindowOpen} 
        onClose={() => closeWindow("promotion")} 
        onNavigateNext={handleNavigateNext} 
        onNavigatePrev={handleNavigatePrev} 
        hasNext={hasNext} 
        hasPrev={hasPrev} 
        stackIndex={windowStack.indexOf("promotion")} 
        zIndex={6000 + windowStack.indexOf("promotion")} 
        isMaximized={maximizedWindows.includes("promotion")} 
        onMaximizeToggle={() => toggleMaximize("promotion")} 
        totalMaximizedCount={maximizedCount} 
        isFirstInDock={maximizedWindows.indexOf("promotion") === 0}
        isLastInDock={maximizedWindows.indexOf("promotion") === maximizedWindows.length - 1}
        onFocus={() => openWindow("promotion")} 
        width={maximizedWindows.includes("promotion") ? getDockedBounds("promotion")?.width : (windowConfigs["promotion"]?.size?.width || viewportSize.width * 0.65)} 
        height={maximizedWindows.includes("promotion") ? getDockedBounds("promotion")?.height : (windowConfigs["promotion"]?.size?.height || viewportSize.height * 0.80)} 
        position={maximizedWindows.includes("promotion") ? { x: getDockedBounds("promotion")?.x || 0, y: getDockedBounds("promotion")?.y || 0 } : windowConfigs["promotion"]?.position} 
        onPositionChange={(position) => updateWindowConfig("promotion", { position })} 
        onSizeChange={(size) => updateWindowConfig("promotion", { size })} 
        onResizeStart={handleDockedResizeStart}
        onResize={(size, pos, dir, d) => handleDockedResize("promotion", size, dir, pos, d)}
        footer={<Footer forceDetailsMode={true} isPromotion={true} onSave={handlePromotionSave} onExportExcel={() => setIsExportExcelOpen(true)} onClose={() => closeWindow("promotion")} />} 
        hugHeight={false} 
        useVerticalOffset={false}
        defaultWidth={viewportSize.width * 0.65}
        defaultHeight={viewportSize.height * 0.80}
      >
        {selectedItemsCount > 1 ? (
          <div className="flex-1 flex items-center justify-center text-sm text-[#1A1A1A] bg-white">
            Select a single item
          </div>
        ) : (
          isPromotionWindowOpen && (
            <div className="flex-1 bg-white overflow-hidden relative min-h-[200px] flex flex-col">
              <PromotionPriceGrid 
                showReference={showPromotionReference} 
                onShowReferenceChange={handleTogglePromotionReference} 
              />
              {isPromotionSaving && (
                <div className="absolute inset-0 z-[200] flex items-center justify-center">
                  <div className="bg-white/50 absolute inset-0" />
                  <div className="relative z-[201]"><Spinner /></div>
                </div>
              )}
            </div>
          )
        )}
      </WindowFrame>

      <WindowFrame 
        title={getWindowTitle("PROMOTION OFFER")} 
        isOpen={isPromotionOfferWindowOpen} 
        onClose={() => closeWindow("promotion-offer")} 
        onNavigateNext={handleNavigateNext} 
        onNavigatePrev={handleNavigatePrev} 
        hasNext={hasNext} 
        hasPrev={hasPrev} 
        stackIndex={windowStack.indexOf("promotion-offer")} 
        zIndex={6000 + windowStack.indexOf("promotion-offer")} 
        isMaximized={maximizedWindows.includes("promotion-offer")} 
        onMaximizeToggle={() => toggleMaximize("promotion-offer")} 
        totalMaximizedCount={maximizedCount} 
        isFirstInDock={maximizedWindows.indexOf("promotion-offer") === 0}
        isLastInDock={maximizedWindows.indexOf("promotion-offer") === maximizedWindows.length - 1}
        onFocus={() => openWindow("promotion-offer")} 
        width={maximizedWindows.includes("promotion-offer") ? getDockedBounds("promotion-offer")?.width : (windowConfigs["promotion-offer"]?.size?.width || viewportSize.width * 0.40)} 
        height={maximizedWindows.includes("promotion-offer") ? getDockedBounds("promotion-offer")?.height : (windowConfigs["promotion-offer"]?.size?.height || viewportSize.height * 0.80)} 
        position={maximizedWindows.includes("promotion-offer") ? { x: getDockedBounds("promotion-offer")?.x || 0, y: getDockedBounds("promotion-offer")?.y || 0 } : windowConfigs["promotion-offer"]?.position} 
        onPositionChange={(position) => updateWindowConfig("promotion-offer", { position })} 
        onSizeChange={(size) => updateWindowConfig("promotion-offer", { size })} 
        onResizeStart={handleDockedResizeStart}
        onResize={(size, pos, dir, d) => handleDockedResize("promotion-offer", size, dir, pos, d)}
        footer={<Footer forceDetailsMode={true} onSave={() => closeWindow("promotion-offer")} onExportExcel={() => setIsExportExcelOpen(true)} hideSecondary={true} />} 
        hugHeight={false} 
        useVerticalOffset={false}
        defaultWidth={viewportSize.width * 0.40}
        defaultHeight={viewportSize.height * 0.80}
      >
        {selectedItemsCount > 1 ? (
          <div className="flex-1 flex items-center justify-center text-sm text-[#1A1A1A] bg-white">
            Select a single item
          </div>
        ) : (
          <div className="flex-1 bg-white" />
        )}
      </WindowFrame>

      <WindowFrame 
        title={getWindowTitle("LOCAL VALUES")} 
        isOpen={isLocalValuesWindowOpen} onClose={() => closeWindow("local")} onNavigateNext={handleNavigateNext} onNavigatePrev={handleNavigatePrev} hasNext={hasNext} hasPrev={hasPrev} 
        stackIndex={windowStack.indexOf("local")} 
        zIndex={6000 + windowStack.indexOf("local")} 
        isMaximized={maximizedWindows.includes("local")} 
        onMaximizeToggle={() => toggleMaximize("local")} 
        totalMaximizedCount={maximizedCount} 
        isFirstInDock={maximizedWindows.indexOf("local") === 0}
        isLastInDock={maximizedWindows.indexOf("local") === maximizedWindows.length - 1}
        onFocus={() => openWindow("local")} 
        width={maximizedWindows.includes("local") ? getDockedBounds("local")?.width : (windowConfigs["local"]?.size?.width || viewportSize.width * 0.6)} 
        height={maximizedWindows.includes("local") ? getDockedBounds("local")?.height : (windowConfigs["local"]?.size?.height || viewportSize.height * 0.5)} 
        position={maximizedWindows.includes("local") ? { x: getDockedBounds("local")?.x || 0, y: getDockedBounds("local")?.y || 0 } : windowConfigs["local"]?.position} 
        onPositionChange={(position) => updateWindowConfig("local", { position })} 
        onSizeChange={(size) => updateWindowConfig("local", { size })} 
        onResizeStart={handleDockedResizeStart}
        onResize={(size, pos, dir, d) => handleDockedResize("local", size, dir, pos, d)}
        useVerticalOffset={false}
        defaultWidth={viewportSize.width * 0.6}
        defaultHeight={viewportSize.height * 0.5}
        footer={
          localValuesModifiedCount > 0 ? (
            <Footer 
              forceDetailsMode={true} 
              isModified={true}
              modifiedCount={localValuesModifiedCount}
              onSave={handleLocalValuesSave} 
              onExportExcel={() => setIsExportExcelOpen(true)}
              onClose={handleLocalValuesCancel} 
            />
          ) : undefined
        }
      >
        <div className="flex-1 bg-white flex flex-col overflow-hidden relative">
          <LocalValuesGrid 
            ref={localValuesGridRef}
            key={`${selectedItemId}-${selectedItemName}`} 
            itemName={selectedItemName} 
            itemArea={selectedItem?.itemArea}
            initialHasOverrides={selectedItem?.isLocalValues || false} 
            onOverridesChange={handleOverridesChange} 
            filters={localValuesFilters} 
            onFiltersChange={setLocalValuesFilters} 
            filterAttribute={attributeFilter}
            onOpenDeclaration={() => openWindow("declaration")}
            onModified={setLocalValuesModifiedCount}
            onRemove={() => setShowRemoveSuccess(true)}
            showMultiSelectMessage={selectedItemsCount > 1}
          />
          {isLocalValuesSaving && (
            <div className="absolute inset-0 z-[200] flex items-center justify-center">
              <div className="bg-white/50 absolute inset-0" />
              <div className="relative z-[201]"><Spinner /></div>
            </div>
          )}
        </div>
      </WindowFrame>

      <NewItemModal isOpen={isNewItemModalOpen} onClose={handleCloseNewItemModal} onCreate={handleCreateItem} />
      
      <AnimatePresence>
        {showPromotionSuccess && (
          <Motion.div 
            initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="fixed bottom-[56px] left-[95px] right-0 z-[1000] bg-[#262626] text-white h-[40px] flex items-center pl-[20px] pr-[10px] gap-4 justify-between"
          >
            <div className="flex items-center gap-[30px]">
              <div className="flex items-center gap-2">
                <Check className="size-[18px] text-white" />
                <p className="text-[14px] font-normal font-roboto">Promotion created</p>
              </div>
              <button className="text-[14px] font-normal font-roboto border-b border-white border-opacity-100 pb-[1px] leading-none mt-[2px] whitespace-nowrap">View offer</button>
            </div>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer flex items-center justify-center" onClick={() => setShowPromotionSuccess(false)}>
              <X className="size-[18px] text-white" />
            </button>
          </Motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSaveSuccess && (
          <Motion.div 
            initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="fixed bottom-[56px] left-[95px] right-0 z-[1000] bg-[#262626] text-white h-[40px] flex items-center pl-[20px] pr-[10px] gap-4 justify-between"
          >
            <div className="flex items-center gap-[30px]">
              <div className="flex items-center gap-2">
                <Check className="size-[18px] text-white" />
                <p className="text-[14px] font-normal font-roboto">Saved</p>
              </div>
            </div>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer flex items-center justify-center" onClick={() => setShowSaveSuccess(false)}>
              <X className="size-[18px] text-white" />
            </button>
          </Motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {showRemoveSuccess && (
          <Motion.div 
            initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="fixed bottom-[56px] left-[95px] right-0 z-[1000] bg-[#262626] text-white h-[40px] flex items-center pl-[20px] pr-[10px] gap-4 justify-between"
          >
            <div className="flex items-center gap-[30px]">
              <div className="flex items-center gap-2">
                <Check className="size-[18px] text-white" />
                <p className="text-[14px] font-normal font-roboto">Removed</p>
              </div>
            </div>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer flex items-center justify-center" onClick={() => setShowRemoveSuccess(false)}>
              <X className="size-[18px] text-white" />
            </button>
          </Motion.div>
        )}
      </AnimatePresence>

      <WindowFrame 
        title={getWindowTitle("LOWEST PRICE LAST 30 DAYS")} 
        isOpen={isLowest30DaysWindowOpen} onClose={() => closeWindow("lowest")} onNavigateNext={handleNavigateNext} onNavigatePrev={handleNavigatePrev} hasNext={hasNext} hasPrev={hasPrev} 
        stackIndex={windowStack.indexOf("lowest")} 
        zIndex={6000 + windowStack.indexOf("lowest")} 
        isMaximized={maximizedWindows.includes("lowest")} 
        onMaximizeToggle={() => toggleMaximize("lowest")} 
        totalMaximizedCount={maximizedCount} 
        isFirstInDock={maximizedWindows.indexOf("lowest") === 0}
        isLastInDock={maximizedWindows.indexOf("lowest") === maximizedWindows.length - 1}
        onFocus={() => openWindow("lowest")} 
        width={maximizedWindows.includes("lowest") ? getDockedBounds("lowest")?.width : (windowConfigs["lowest"]?.size?.width || viewportSize.width * 0.6)} 
        height={maximizedWindows.includes("lowest") ? getDockedBounds("lowest")?.height : (windowConfigs["lowest"]?.size?.height || viewportSize.height * 0.5)} 
        position={maximizedWindows.includes("lowest") ? { x: getDockedBounds("lowest")?.x || 0, y: getDockedBounds("lowest")?.y || 0 } : windowConfigs["lowest"]?.position} 
        onPositionChange={(position) => updateWindowConfig("lowest", { position })} 
        onSizeChange={(size) => updateWindowConfig("lowest", { size })} 
        onResizeStart={handleDockedResizeStart}
        onResize={(size, pos, dir, d) => handleDockedResize("lowest", size, dir, pos, d)}
        useVerticalOffset={false}
        defaultWidth={viewportSize.width * 0.6}
        defaultHeight={viewportSize.height * 0.5}
      >
        <div className="flex-1 flex flex-col overflow-hidden p-0"><Lowest30DaysGrid selectedItem={selectedItem} showMultiSelectMessage={selectedItemsCount > 1} /></div>
      </WindowFrame>

      <SelectStoreModal 
        isOpen={isSelectStoreOpen} 
        onClose={() => setIsSelectStoreOpen(false)} 
        onSelect={setCurrentStore}
        currentStore={currentStore}
      />

      <WindowFrame 
        title={getWindowTitle("ITEM DECLARATION")} 
        isOpen={isItemDeclarationWindowOpen} 
        onClose={() => { 
          closeWindow("declaration"); 
          setItemDeclarationModifiedCount(0);
          setItemDeclarationResetKey(prev => prev + 1);
        }} 
        onNavigateNext={handleNavigateNext} 
        onNavigatePrev={handleNavigatePrev} 
        hasNext={hasNext} 
        hasPrev={hasPrev} 
        stackIndex={windowStack.indexOf("declaration")} 
        zIndex={6000 + windowStack.indexOf("declaration")} 
        onFocus={() => openWindow("declaration")} 
        width={1120} 
        height={windowConfigs["declaration"]?.size?.height || viewportSize.height * 0.60} 
        position={windowConfigs["declaration"]?.position} 
        onPositionChange={(position) => updateWindowConfig("declaration", { position })} 
        onSizeChange={(size) => updateWindowConfig("declaration", { size })} 
        useVerticalOffset={false}
        defaultWidth={1120}
        defaultHeight={viewportSize.height * 0.60}
        disableMaximize={true}
        enableResizing={{
          top: true,
          bottom: true,
          left: false,
          right: false,
          topLeft: false,
          topRight: false,
          bottomLeft: false,
          bottomRight: false
        }}
        footer={
          itemDeclarationModifiedCount > 0 ? (
            <Footer 
              forceDetailsMode={true} 
              isModified={true}
              modifiedCount={itemDeclarationModifiedCount}
              onSave={handleItemDeclarationSave} 
              onExportExcel={() => setIsExportExcelOpen(true)}
              onClose={handleItemDeclarationCancel} 
            />
          ) : undefined
        }
      >
        <div className="flex-1 bg-white overflow-hidden relative flex flex-col h-full">
          <ItemDeclaration 
            ref={itemDeclarationRef}
            key={`${selectedItemId}-${itemDeclarationResetKey}`}
            onModified={setItemDeclarationModifiedCount}
          />
          {isItemDeclarationSaving && (
            <div className="absolute inset-0 z-[200] flex items-center justify-center">
              <div className="bg-white/50 absolute inset-0" />
              <div className="relative z-[201]"><Spinner /></div>
            </div>
          )}
        </div>
      </WindowFrame>

      <UserPreferencesModal 
        isOpen={isUserPreferencesModalOpen}
        onClose={() => setIsUserPreferencesModalOpen(false)}
        showHeader={showBanner}
        onToggleHeader={() => setShowBanner(prev => !prev)}
      />

      <ExportExcelModal 
        isOpen={isExportExcelOpen} 
        onClose={() => setIsExportExcelOpen(false)} 
      />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}
