import React, { useRef, useState, useEffect, useMemo } from "react";
import { Resizable } from "re-resizable";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import WindowMinimize from "../../imports/WindowMinimize-21-416";
import Window from "../../imports/Window-21-427";

interface WindowFrameProps {
  title: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
  width?: number;
  height?: number;
  hugHeight?: boolean;
  onNavigateNext?: () => void;
  onNavigatePrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
  stackIndex?: number;
  zIndex?: number;
  isMaximized?: boolean;
  onMaximizeToggle?: () => void;
  totalMaximizedCount?: number;
  isFirstInDock?: boolean;
  isLastInDock?: boolean;
  onFocus?: () => void;
  onResizeStart?: (e: React.MouseEvent | React.TouchEvent, dir: string) => void;
  onResize?: (size: { width: number; height: number }, position: { x: number; y: number }, dir: string, delta: { width: number; height: number }) => void;
  onPositionChange?: (pos: { x: number; y: number }) => void;
  onSizeChange?: (size: { width: number; height: number }) => void;
  position?: { x: number; y: number };
  size?: { width: number; height: number };
  defaultWidth?: number;
  defaultHeight?: number;
  defaultX?: number;
  defaultY?: number;
  useVerticalOffset?: boolean;
  maxWidth?: number | string;
  maxHeight?: number | string;
  minWidth?: number;
  minHeight?: number;
  isPricePopup?: boolean;
  disableMaximize?: boolean;
  enableResizing?: {
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    left?: boolean;
    topRight?: boolean;
    bottomRight?: boolean;
    bottomLeft?: boolean;
    topLeft?: boolean;
  };
  className?: string;
  contentClassName?: string;
}

export function WindowFrame({ 
  title, 
  isOpen, 
  onClose, 
  children, 
  footer,
  width = 800, 
  height,
  hugHeight = false,
  onNavigateNext,
  onNavigatePrev,
  hasNext,
  hasPrev,
  stackIndex = 0,
  zIndex = 1100,
  isMaximized: isMaximizedProp,
  onMaximizeToggle,
  totalMaximizedCount = 0,
  isFirstInDock = false,
  isLastInDock = false,
  onFocus,
  onResizeStart,
  onResize,
  onPositionChange,
  onSizeChange,
  position: positionProp,
  size: sizeProp,
  defaultWidth,
  defaultHeight,
  defaultX,
  defaultY,
  useVerticalOffset = false,
  maxWidth = "100vw",
  maxHeight = "100vh",
  minWidth = 300,
  minHeight = 40,
  isPricePopup = false,
  disableMaximize = false,
  enableResizing = {
    top: true, right: true, bottom: true, left: true,
    topRight: true, bottomRight: true, bottomLeft: true, topLeft: true
  },
  className = "",
  contentClassName = ""
}: WindowFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInteracting = useRef(false);
  
  const [internalBounds, setInternalBounds] = useState({ 
    x: 0, 
    y: 0, 
    width: width, 
    height: height || 600 
  });
  
  const [internalIsMaximized, setInternalIsMaximized] = useState(false);
  const isMaximized = isMaximizedProp !== undefined ? isMaximizedProp : internalIsMaximized;
  
  const onSizeChangeRef = useRef(onSizeChange);
  const onPositionChangeRef = useRef(onPositionChange);

  useEffect(() => { onSizeChangeRef.current = onSizeChange; }, [onSizeChange]);
  useEffect(() => { onPositionChangeRef.current = onPositionChange; }, [onPositionChange]);

  const bounds = useMemo(() => {
    // If maximized, we trust props (provided by App.tsx)
    // If not maximized, we use internal state (floating)
    if (isMaximized) {
      return {
        x: positionProp?.x ?? 0,
        y: positionProp?.y ?? 0,
        width: sizeProp?.width ?? width,
        height: sizeProp?.height ?? (height || 600)
      };
    }
    return internalBounds;
  }, [isMaximized, positionProp?.x, positionProp?.y, sizeProp?.width, sizeProp?.height, internalBounds, width, height]);

  const { x, y, width: currentWidth, height: currentHeight } = bounds;

  // Handle external prop updates ONLY - No automatic sync back to parent here
  useEffect(() => {
    if (isMaximized || isInteracting.current) return;
    const targetWidth = sizeProp?.width ?? width;
    const targetHeight = sizeProp?.height ?? (height || 600);
    const targetX = positionProp?.x ?? internalBounds.x;
    const targetY = positionProp?.y ?? internalBounds.y;

    if (Math.abs(targetWidth - internalBounds.width) > 0.5 || Math.abs(targetHeight - internalBounds.height) > 0.5 ||
        Math.abs(targetX - internalBounds.x) > 0.5 || Math.abs(targetY - internalBounds.y) > 0.5) {
      setInternalBounds({ width: targetWidth, height: targetHeight, x: targetX, y: targetY });
    }
  }, [sizeProp?.width, sizeProp?.height, positionProp?.x, positionProp?.y, width, height, isMaximized]);

  const [isReady, setIsReady] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [startSize, setStartSize] = useState({ width: 0, height: 0 });

  // MANUAL DRAG LOGIC
  const handleDragMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button')) return;
    
    e.preventDefault();
    isInteracting.current = true;
    onFocus?.();

    const startX = e.clientX;
    const startY = e.clientY;
    
    // Capture the current visual position and size (works for both maximized and normal)
    const initialX = x;
    const initialY = y;
    const initialW = currentWidth;
    const initialH = currentHeight;
    
    let currentX = initialX;
    let currentY = initialY;
    let hasUnmaximized = false;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;
      
      // If we're dragging a maximized window, unmaximize it but keep its size
      if (!hasUnmaximized && isMaximized && (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5)) {
        setInternalBounds({ x: initialX, y: initialY, width: initialW, height: initialH });
        onMaximizeToggle?.();
        hasUnmaximized = true;
      }

      currentX = initialX + deltaX;
      currentY = initialY + deltaY;

      setInternalBounds(prev => ({ ...prev, x: currentX, y: currentY }));
      
      if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) {
        onPositionChangeRef.current?.({ x: currentX, y: currentY });
      }
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      
      // Delay setting isInteracting to false to let any pending parent updates process
      setTimeout(() => {
        isInteracting.current = false;
      }, 50);
      
      onPositionChangeRef.current?.({ x: currentX, y: currentY });
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const calculateHugHeight = () => {
    if (contentRef.current) {
      const targetElement = contentRef.current.querySelector('.promotion-grid-container') || contentRef.current.firstElementChild || contentRef.current;
      const contentHeight = targetElement.scrollHeight;
      const titleBarHeight = 40;
      const footerElement = contentRef.current.parentElement?.querySelector('.window-footer');
      const footerHeight = footerElement ? (footerElement as HTMLElement).offsetHeight : 0;
      const wrapperPadding = contentRef.current.classList.contains('p-[10px]') ? 20 : 0;
      const totalHeight = contentHeight + titleBarHeight + footerHeight + wrapperPadding + 20;
      return Math.min(totalHeight, window.innerHeight - 20);
    }
    return height || 600;
  };

  const handleReset = () => {
    const sidebarWidth = 95;
    const availableWidth = window.innerWidth - sidebarWidth;
    const offset = (isPricePopup && totalMaximizedCount === 0) ? stackIndex * 32 : 0;
    const baseWidth = defaultWidth || width;
    const baseHeight = defaultHeight || (height || 600);
    const restoredHeight = hugHeight ? calculateHugHeight() : baseHeight;
    const centerX = defaultX !== undefined ? defaultX : sidebarWidth + Math.max(0, (availableWidth - baseWidth) / 2) - offset;
    const verticalAdjustment = useVerticalOffset ? -40 : 0;
    const centerY = defaultY !== undefined ? defaultY : Math.max(10, (window.innerHeight - 56 - restoredHeight) / 2) + verticalAdjustment + offset;
    
    setInternalBounds({ width: baseWidth, height: restoredHeight, x: centerX, y: centerY });
    onPositionChangeRef.current?.({ x: centerX, y: centerY });
    onSizeChangeRef.current?.({ width: baseWidth, height: restoredHeight });
    
    if (isMaximized) onMaximizeToggle ? onMaximizeToggle() : setInternalIsMaximized(false);
  };

  const handleMaximizeToggle = () => {
    if (onMaximizeToggle) onMaximizeToggle();
    else setInternalIsMaximized(!isMaximized);
  };

  const hasInitialized = useRef(false);
  useEffect(() => {
    if (isOpen) {
      if (!hasInitialized.current && typeof window !== 'undefined') {
          const sidebarWidth = 95;
          const availableWidth = window.innerWidth - sidebarWidth;
          const offset = (isPricePopup && totalMaximizedCount === 0) ? stackIndex * 32 : 0;
          const initialHeight = sizeProp?.height || height || 600;
          const initialWidth = sizeProp?.width || width;
          
          let centerX = positionProp?.x !== undefined ? positionProp.x : (defaultX !== undefined ? defaultX : sidebarWidth + Math.max(0, (availableWidth - initialWidth) / 2) - offset);
          let centerY = positionProp?.y !== undefined ? positionProp.y : (defaultY !== undefined ? defaultY : Math.max(0, (window.innerHeight - 56 - initialHeight) / 2) + (useVerticalOffset ? -40 : 0) + offset);
          
          setInternalBounds({ x: centerX, y: centerY, width: initialWidth, height: initialHeight });
          hasInitialized.current = true;
          requestAnimationFrame(() => setIsReady(true));
      }
    } else {
      hasInitialized.current = false;
      setIsReady(false);
    }
  }, [isOpen, width, height, stackIndex, isPricePopup, totalMaximizedCount]);

  if (!isOpen) return null;

  return (
    <Resizable
      style={{ 
        position: 'absolute', 
        left: x, 
        top: y, 
        display: 'flex', 
        flexDirection: 'column',
        pointerEvents: 'auto',
        zIndex,
        transition: 'opacity 150ms ease-in-out',
        opacity: isReady ? 1 : 0
      }}
      size={{ width: currentWidth, height: currentHeight }}
      minWidth={minWidth}
      minHeight={minHeight}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      enable={enableResizing}
      onResizeStart={(e, dir) => {
        isInteracting.current = true;
        onFocus?.();
        onResizeStart?.(e, dir);
        
        const isDockEdge = isMaximized && (dir === 'top' || dir === 'bottom');

        if (isMaximized && !isDockEdge) {
          // Unmaximize for corners, sides, or bottom edge of the last window
          const currentMaximizedBounds = { x, y, width: currentWidth, height: currentHeight };
          setInternalBounds(currentMaximizedBounds);
          setStartPos({ x, y });
          setStartSize({ width: currentWidth, height: currentHeight });
          onMaximizeToggle?.();
        } else {
          // Resize normally (either floating or internal dock redistribution)
          setStartPos({ x: isMaximized ? x : internalBounds.x, y: isMaximized ? y : internalBounds.y });
          setStartSize({ width: isMaximized ? currentWidth : internalBounds.width, height: isMaximized ? currentHeight : internalBounds.height });
        }
      }}
      onResize={(e, direction, ref, d) => {
        const newW = startSize.width + d.width;
        const newH = startSize.height + d.height;
        let newX = startPos.x;
        let newY = startPos.y;
        if (direction.toLowerCase().includes('left')) newX = startPos.x - d.width;
        if (direction.toLowerCase().includes('top')) newY = startPos.y - d.height;

        // DIRECT DOM SYNC for smooth floating resize
        if (!isMaximized) {
          ref.style.left = `${newX}px`;
          ref.style.top = `${newY}px`;
          setInternalBounds({ width: newW, height: newH, x: newX, y: newY });
        } else {
          // For maximized windows, we notify the parent to handle linked redistribution.
          // If we are resizing the stack via the top edge of the first window,
          // the height change is distributed across all windows. 
          // We apply a proportional adjustment to the DOM ref to prevent it "moving faster than cursor".
          let effectiveH = newH;
          let effectiveY = newY;
          
          if (direction === 'top' && isFirstInDock && totalMaximizedCount > 1) {
            // Proportional compression: the top window only takes its share of the height delta
            // while the top edge (Y) moves the full distance.
            const share = 1 / totalMaximizedCount; 
            effectiveH = startSize.height + (d.height * share);
            // effectiveY is already correct (startPos.y - d.height)
          } else if (direction === 'bottom' && isLastInDock && totalMaximizedCount > 1) {
            // Proportional compression from bottom:
            // The window grows by its share, but its top edge also moves down 
            // by the sum of growth of all windows above it.
            const share = 1 / totalMaximizedCount;
            effectiveH = startSize.height + (d.height * share);
            effectiveY = startPos.y + (d.height * (totalMaximizedCount - 1) / totalMaximizedCount);
          }

          ref.style.height = `${effectiveH}px`;
          ref.style.top = `${effectiveY}px`;

          onResize?.({ width: newW, height: effectiveH }, { x: newX, y: effectiveY }, direction, d);
        }
      }}
      onResizeStop={(e, direction, ref, d) => {
        const finalW = startSize.width + d.width;
        const finalH = startSize.height + d.height;
        let finalX = startPos.x - (direction.toLowerCase().includes('left') ? d.width : 0);
        let finalY = startPos.y - (direction.toLowerCase().includes('top') ? d.height : 0);
        
        setInternalBounds({ width: finalW, height: finalH, x: finalX, y: finalY });
        onPositionChangeRef.current?.({ x: finalX, y: finalY });
        onSizeChangeRef.current?.({ width: finalW, height: finalH });
        
        setTimeout(() => { isInteracting.current = false; }, 50);
      }}
      className={`shadow-2xl rounded-md bg-transparent ${className}`}
      handleStyles={{
          left: { width: '16px', left: '-8px', cursor: 'col-resize', zIndex: 100, pointerEvents: 'auto' },
          right: { width: '16px', right: '-8px', cursor: 'col-resize', zIndex: 100, pointerEvents: 'auto' },
          top: { height: '16px', top: '-8px', cursor: 'row-resize', zIndex: 100, pointerEvents: 'auto' },
          bottom: { height: '16px', bottom: '-8px', cursor: 'row-resize', zIndex: 100, pointerEvents: 'auto' },
          bottomRight: { width: '24px', height: '24px', bottom: '-12px', right: '-12px', cursor: 'nwse-resize', zIndex: 110, pointerEvents: 'auto' },
          bottomLeft: { width: '24px', height: '24px', bottom: '-12px', left: '-12px', cursor: 'nesw-resize', zIndex: 110, pointerEvents: 'auto' },
          topRight: { width: '24px', height: '24px', top: '-12px', right: '-12px', cursor: 'nesw-resize', zIndex: 110, pointerEvents: 'auto' },
          topLeft: { width: '24px', height: '24px', top: '-12px', left: '-12px', cursor: 'nwse-resize', zIndex: 110, pointerEvents: 'auto' }
      }}
    >
      <div className="flex flex-col w-full h-full overflow-hidden bg-white border border-[#CCCCCC] rounded-md">
        <div 
          onMouseDown={handleDragMouseDown}
          onDoubleClick={handleMaximizeToggle}
          className="window-handle bg-[#373737] h-[40px] flex items-center px-4 select-none border-b border-[#CCCCCC] cursor-move shrink-0 relative"
        >
          <div className="flex items-center z-10 ml-[-8px] gap-0 min-w-0 flex-1">
            <div className="flex items-center gap-0 shrink-0">
              <button 
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); if (hasPrev) onNavigatePrev?.(); }}
                disabled={!hasPrev}
                className={`p-2 cursor-pointer outline-none text-white rounded-full transition-colors ${hasPrev ? "hover:bg-[rgba(255,255,255,0.1)]" : "opacity-30 cursor-not-allowed"}`}
              >
                <ChevronLeft className="size-[18px]" />
              </button>
              <button 
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); if (hasNext) onNavigateNext?.(); }}
                disabled={!hasNext}
                className={`p-2 cursor-pointer outline-none text-white rounded-full transition-colors ${hasNext ? "hover:bg-[rgba(255,255,255,0.1)]" : "opacity-30 cursor-not-allowed"}`}
              >
                <ChevronRight className="size-[18px]" />
              </button>
            </div>
            <div className="text-[13px] text-white font-medium uppercase ml-[4px] tracking-wider min-w-0 flex-1">
              {typeof title === 'string' ? (
                <div className="truncate">{title}</div>
              ) : (
                title
              )}
            </div>
          </div>

          <div className="flex items-center z-10 mr-[-4px] gap-0 shrink-0">
                {!disableMaximize && (
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleMaximizeToggle(); }} 
                    className="p-2 cursor-pointer outline-none flex items-center justify-center rounded-full transition-colors hover:bg-[rgba(255,255,255,0.1)]"
                  >
                    <div className="size-[18px] text-white" style={{ "--fill-0": "white" } as any}>
                      {isMaximized ? <WindowMinimize /> : <Window />}
                    </div>
                  </button>
                )}
                <button 
                  onClick={(e) => { e.stopPropagation(); onClose(); }} 
                  className="p-2 cursor-pointer outline-none rounded-full transition-colors hover:bg-[rgba(255,255,255,0.1)]"
                >
                  <X className="size-[18px] text-white" />
                </button>
              </div>
        </div>

        <div ref={contentRef} className={`flex-1 overflow-auto relative flex flex-col ${contentClassName}`}>
          {children}
        </div>

        {footer && (
          <div className="window-footer flex flex-col shrink-0">
            {footer}
          </div>
        )}
      </div>
    </Resizable>
  );
}
