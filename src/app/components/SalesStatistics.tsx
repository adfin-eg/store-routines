import React, { useState, useMemo, useEffect } from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from "recharts";
import { 
  format, 
  subDays, 
  subWeeks, 
  subMonths, 
  subYears, 
  subHours,
  startOfDay, 
  startOfHour,
  eachDayOfInterval,
  eachWeekOfInterval,
  eachMonthOfInterval,
  eachYearOfInterval,
  eachHourOfInterval,
  parse
} from "date-fns";
import * as Popover from "@radix-ui/react-popover";
import svgPathsCalendar from "@/imports/svg-lbuqdinfsp";
import svgPathsMore from "@/imports/svg-oqev7ygrue";

interface SalesDataPoint {
  label: string;
  sales: number;
  quantity: number;
  grossProfit: number;
  grossProfitPercent: number;
  customers: number;
  date: Date;
}

const INTERVALS = ["Hour", "Day", "Week", "Month", "Year"] as const;
type IntervalType = typeof INTERVALS[number];

const METRICS = [
  { id: "sales", label: "Amount" },
  { id: "quantity", label: "Quantity" },
  { id: "profit", label: "Gross profit" },
  { id: "profitPercent", label: "Gross profit %" }
] as const;
type MetricType = typeof METRICS[number]["id"];

const SimpleSelect = ({ 
  value, 
  onChange, 
  options, 
  placeholder = "Select..."
}: { 
  value: string; 
  onChange: (val: string) => void; 
  options: string[]; 
  placeholder?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [triggerWidth, setTriggerWidth] = useState(0);
  const triggerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (triggerRef.current) {
      setTriggerWidth(triggerRef.current.offsetWidth);
    }
  }, [isOpen]);

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        <div 
          ref={triggerRef}
          className="relative w-full h-[30px] bg-white border border-[#ccc] flex items-center pl-[8px] pr-[2px] cursor-pointer transition-colors group"
        >
          <span className={`flex-1 text-[14px] truncate select-none ${value ? 'text-[#1A1A1A]' : 'text-[#666666]'}`}>
            {value || placeholder}
          </span>
          <div className="flex items-center gap-1">
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
          style={{ width: triggerWidth }}
          className="z-[11000] bg-white border border-[#CCCCCC] shadow-lg outline-none overflow-hidden"
        >
          <div className="flex flex-col py-1">
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  onChange(opt);
                  setIsOpen(false);
                }}
                className="text-left text-[14px] font-normal text-[#1A1A1A] hover:bg-[#EAEAEA] bg-white px-[8px] h-[36px] outline-none cursor-pointer transition-colors w-full whitespace-nowrap"
              >
                {opt}
              </button>
            ))}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

const DateField = ({ 
  value, 
  onChange, 
  placeholder = "dd.mm.yyyy",
  disabled = false,
  showTime = false
}: { 
  value?: Date; 
  onChange?: (date: Date) => void; 
  placeholder?: string;
  disabled?: boolean;
  showTime?: boolean;
}) => {
  const dateFormat = showTime ? "dd.MM.yyyy HH:mm" : "dd.MM.yyyy";
  const displayPlaceholder = showTime ? "dd.mm.yyyy hh:mm" : placeholder;
  const [inputValue, setInputValue] = useState(value ? format(value, dateFormat) : "");

  useEffect(() => {
    if (value) {
      setInputValue(format(value, dateFormat));
    } else {
      setInputValue("");
    }
  }, [value, dateFormat]);

  const handleBlur = () => {
    if (disabled || !onChange || !value) return;
    try {
      const parsedDate = parse(inputValue, dateFormat, new Date());
      if (!isNaN(parsedDate.getTime())) {
        onChange(parsedDate);
        return;
      }
    } catch (e) {
      // Ignore
    }
    setInputValue(format(value, dateFormat));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;
    if (e.key === 'Enter') {
      handleBlur();
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') {
      e.currentTarget.select();
    }
  };

  const isEffectivelyEmpty = disabled && !value;

  return (
    <div className={`relative w-full flex items-center group ${disabled ? 'pointer-events-none' : ''}`}>
      <input
        type="text"
        disabled={disabled}
        className="selection:bg-[#373737] selection:text-white w-full h-[30px] bg-white border border-[#CCCCCC] pl-[8px] pr-[30px] text-[14px] focus:outline-none focus:border-2 focus:border-[#373737] text-[#1A1A1A] placeholder:text-[#1A1A1A] placeholder:opacity-100 font-roboto disabled:bg-[#F9F9F9] disabled:text-[#888888]"
        placeholder={disabled ? "" : displayPlaceholder}
        value={isEffectivelyEmpty ? "" : inputValue}
        onChange={(e) => !disabled && setInputValue(e.target.value)}
        onBlur={handleBlur}
        onFocus={(e) => {
          if (disabled) return;
          const target = e.target;
          setTimeout(() => {
            target.setSelectionRange(0, target.value.length);
          }, 0);
        }}
        onKeyDown={handleKeyDown}
      />
      <div className="absolute right-2 pointer-events-none flex items-center">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d={svgPathsCalendar.p5c6fb00} fill={disabled ? "#888888" : "#1A1A1A"} />
        </svg>
      </div>
    </div>
  );
};

const CheckboxIcon = ({ active }: { active: boolean }) => (
  <div className={`relative shrink-0 size-[16px] transition-colors ${active ? 'bg-[#595959]' : 'bg-white border border-[#ccc]'}`}>
    {active && (
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="size-[12px]" viewBox="0 0 12 12" fill="none">
          <path d="M2.5 6L5 8.5L9.5 4" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
        </svg>
      </div>
    )}
  </div>
);

const MetricRadio = ({ 
  selected, 
  onChange,
  showValues,
  onShowValuesChange
}: { 
  selected: MetricType; 
  onChange: (id: MetricType) => void; 
  showValues: boolean;
  onShowValuesChange: (val: boolean) => void;
}) => {
  const RadioIcon = ({ active }: { active: boolean }) => (
    <div className={`relative shrink-0 size-[16px] rounded-full transition-colors flex items-center justify-center ${active ? 'bg-[#595959]' : 'bg-white border border-[#ccc]'}`}>
      {active && (
        <div className="size-[6px] rounded-full bg-white" />
      )}
    </div>
  );

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex items-center gap-[20px] w-full h-[30px] pt-[0px] pb-[0px] pl-[0px]">
        {METRICS.map((metric) => (
          <div 
            key={metric.id} 
            className="flex gap-[10px] items-center cursor-pointer group select-none"
            onClick={() => onChange(metric.id)}
          >
            <RadioIcon active={selected === metric.id} />
            <span className="font-roboto font-normal text-[#1A1A1A] text-[14px] whitespace-nowrap">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-[20px]">
        <div 
          className="flex gap-[10px] items-center h-[30px] cursor-pointer group select-none w-fit"
          onClick={() => onShowValuesChange(!showValues)}
        >
          <CheckboxIcon active={showValues} />
          <span className="font-roboto font-normal text-[#1A1A1A] text-[14px] whitespace-nowrap">
            Show values
          </span>
        </div>
      </div>
    </div>
  );
};

export function SalesStatistics({ itemId, selectedItemsCount, onExportExcel }: { itemId?: string; selectedItemsCount?: number; onExportExcel?: () => void }) {
  const [interval, setInterval] = useState<IntervalType>("Day");
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [compareDate, setCompareDate] = useState<Date>(new Date());
  const [selectedMetric, setSelectedMetric] = useState<MetricType>("sales");
  const [hoveredState, setHoveredState] = useState<{ index: number, type: 'main' | 'ref' } | null>(null);
  const [showValues, setShowValues] = useState(false);
  const [showReference, setShowReference] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  // Check if we should show the limit message
  const showLimitMessage = (selectedItemsCount || 0) > 10;

  useEffect(() => {
    if (!showReference) {
      const defaultCompare = interval === "Hour" ? subDays(endDate, 1) : subYears(endDate, 1);
      setCompareDate(defaultCompare);
    }
  }, [endDate, interval, showReference]);

  const data = useMemo(() => {
    const result: SalesDataPoint[] = [];
    const baseDate = startOfDay(endDate);
    const refDate = startOfDay(compareDate);

    // Simple hash function to create a numeric seed from itemId
    const getSeed = (str: string) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
      }
      return Math.abs(hash);
    };

    const seed = itemId ? getSeed(itemId) : 12345;
    
    // Pseudo-random generator using seed
    const seededRandom = (s: number) => {
      const x = Math.sin(s) * 10000;
      return x - Math.floor(x);
    };

    const generatePoint = (date: Date, label: string, index: number, isReference: boolean = false) => {
      const dayOfWeek = date.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      const isWorkHours = date.getHours() >= 8 && date.getHours() <= 20;
      
      const pointSeed = seed + date.getTime() + index + (isReference ? 999999 : 0);
      const rand1 = seededRandom(pointSeed);
      const rand2 = seededRandom(pointSeed + 1);
      const rand3 = seededRandom(pointSeed + 2);
      const rand4 = seededRandom(pointSeed + 3);
      
      const salesBase = interval === 'Hour' ? 5000 : interval === 'Day' ? 50000 : interval === 'Week' ? 1000000 : interval === 'Month' ? 4000000 : 50000000;
      const salesRand = interval === 'Hour' ? 15000 : interval === 'Day' ? 150000 : interval === 'Week' ? 500000 : interval === 'Month' ? 2000000 : 10000000;
      
      let sales = Math.floor(rand1 * salesRand) + (isWeekend ? salesBase * 1.5 : salesBase);
      if (interval === 'Hour' && !isWorkHours) {
        sales = Math.floor(sales * 0.1);
      }
      const quantity = Math.floor(sales / (rand2 * 50 + 100));
      const grossProfitPercent = Math.floor(rand3 * 20) + 20;
      const customers = Math.floor(sales / (rand4 * 200 + 300));
      const grossProfit = Math.floor(sales * grossProfitPercent / 100);
      
      return {
        sales,
        quantity,
        grossProfit,
        grossProfitPercent,
        customers,
      };
    };

    const intervals: Date[] = [];
    const refIntervals: Date[] = [];

    if (interval === "Hour") {
      const start = subHours(startOfHour(endDate), 15);
      const refStart = subHours(startOfHour(compareDate), 15);
      intervals.push(...eachHourOfInterval({ start, end: startOfHour(endDate) }));
      refIntervals.push(...eachHourOfInterval({ start: refStart, end: startOfHour(compareDate) }));
    } else if (interval === "Day") {
      const start = subDays(baseDate, 13);
      const refStart = subDays(refDate, 13);
      intervals.push(...eachDayOfInterval({ start, end: baseDate }));
      refIntervals.push(...eachDayOfInterval({ start: refStart, end: refDate }));
    } else if (interval === "Week") {
      const start = subWeeks(baseDate, 7);
      const refStart = subWeeks(refDate, 7);
      intervals.push(...eachWeekOfInterval({ start, end: baseDate }));
      refIntervals.push(...eachWeekOfInterval({ start: refStart, end: refDate }));
    } else if (interval === "Month") {
      const start = subMonths(baseDate, 11);
      const refStart = subMonths(refDate, 11);
      intervals.push(...eachMonthOfInterval({ start, end: baseDate }));
      refIntervals.push(...eachMonthOfInterval({ start: refStart, end: refDate }));
    } else if (interval === "Year") {
      const start = subYears(baseDate, 7);
      const refStart = subYears(refDate, 7);
      intervals.push(...eachYearOfInterval({ start, end: baseDate }));
      refIntervals.push(...eachYearOfInterval({ start: refStart, end: refDate }));
    }

    intervals.forEach((date, i) => {
      const label = interval === "Hour" ? format(date, "HH:00") :
                    interval === "Day" ? format(date, "EEE d MMM") :
                    interval === "Week" ? `Week ${format(date, "w")}` :
                    interval === "Month" ? format(date, "MMM yy") :
                    format(date, "yyyy");

      const point = generatePoint(date, label, i);
      const refPoint = generatePoint(refIntervals[i] || date, label, i, true);

      result.push({
        ...point,
        label,
        date,
        refSales: refPoint.sales,
        refQuantity: refPoint.quantity,
        refGrossProfit: refPoint.grossProfit,
        refGrossProfitPercent: refPoint.grossProfitPercent,
      });
    });

    return result;
  }, [interval, endDate, compareDate, itemId]);

  const formatYAxis = (value: number) => {
    if (selectedMetric === 'profitPercent') return `${value}%`;
    return Math.round(value).toLocaleString('sv-SE').replace(/,/g, ' ');
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length && hoveredState !== null) {
      const item = payload[0].payload as SalesDataPoint;
      const isRefHover = hoveredState.type === 'ref';
      
      let val = 0;
      if (isRefHover) {
        val = (item as any)[activeRefKey];
      } else {
        val = (item as any)[activeDataKey];
      }

      let displayValue = "";
      if (selectedMetric === 'sales' || selectedMetric === 'profit') {
        displayValue = `${val.toLocaleString('sv-SE').replace(/,/g, ' ')}`;
      } else if (selectedMetric === 'quantity') {
        displayValue = `${val.toLocaleString('sv-SE').replace(/,/g, ' ')} st`;
      } else {
        displayValue = `${val}%`;
      }

      return (
        <div className="bg-[#373737] text-white p-[4px_8px] shadow-lg border-none rounded-[2px] flex flex-col items-center justify-center pointer-events-none">
          <p className="text-[13px] font-normal leading-none font-roboto">
            {displayValue}
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomXAxisTick = ({ x, y, payload }: any) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text 
          x={0} 
          y={0} 
          dy={16}
          dx={-5}
          textAnchor="end" 
          fill="#333333" 
          fontSize={13} 
          fontWeight={400}
          fontFamily="Roboto"
          transform="rotate(-45)"
        >
          {payload.value}
        </text>
      </g>
    );
  };

  const activeDataKey = selectedMetric === 'sales' ? 'sales' : 
                         selectedMetric === 'quantity' ? 'quantity' : 
                         selectedMetric === 'profit' ? 'grossProfit' : 
                         'grossProfitPercent';
  const activeRefKey = selectedMetric === 'sales' ? 'refSales' : 
                       selectedMetric === 'quantity' ? 'refQuantity' : 
                       selectedMetric === 'profit' ? 'refGrossProfit' : 
                       'refGrossProfitPercent';

  const formatValue = (value: number) => {
    if (selectedMetric === 'sales' || selectedMetric === 'profit') {
      return `${Math.round(value).toLocaleString('sv-SE').replace(/,/g, ' ')}`;
    } else if (selectedMetric === 'quantity') {
      return `${Math.round(value).toLocaleString('sv-SE').replace(/,/g, ' ')}`;
    } else {
      return `${value}%`;
    }
  };

  const { yTicks, yDomain } = useMemo(() => {
    const maxVal = data.reduce((max, item) => {
      const val = item[activeDataKey as keyof SalesDataPoint] as number;
      const refVal = showReference ? (item[activeRefKey as keyof SalesDataPoint] as number || 0) : 0;
      return Math.max(max, val, refVal);
    }, 0);
    if (maxVal === 0) {
      return { yTicks: [0, 20, 40, 60, 80, 100], yDomain: [0, 100] as [number, number] };
    }

    // We want 5 intervals (6 ticks total)
    // We want the bars to fill ~85% of the height
    const idealMax = maxVal / 0.85;
    const idealStep = idealMax / 5;
    
    const magnitude = Math.pow(10, Math.floor(Math.log10(idealStep)));
    const normalized = idealStep / magnitude;
    
    // Preferred "nice" step increments
    const niceSteps = [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10];
    let chosenStep = niceSteps[niceSteps.length - 1] * magnitude;
    
    for (const step of niceSteps) {
      if (step * magnitude >= idealStep) {
        chosenStep = step * magnitude;
        break;
      }
    }

    const ticks = [0, chosenStep, chosenStep * 2, chosenStep * 3, chosenStep * 4, chosenStep * 5];
    return { yTicks: ticks, yDomain: [0, chosenStep * 5] as [number, number] };
  }, [data, activeDataKey, activeRefKey, showReference]);

  const yAxisWidth = useMemo(() => {
    const maxTick = yTicks[yTicks.length - 1];
    const formatted = selectedMetric === 'profitPercent' ? `${maxTick}%` : Math.round(maxTick).toLocaleString('sv-SE').replace(/,/g, ' ');
    // Increased base width to prevent clipping, especially for percentage values
    return Math.ceil(formatted.length * 8) + 12;
  }, [yTicks, selectedMetric]);

  const currentBarSize = interval === 'Hour' ? 18 : interval === 'Day' ? 20 : interval === 'Week' ? 28 : interval === 'Month' ? 32 : 36;

  // If the limit is exceeded, show a message instead of the charts
  if (showLimitMessage) {
    return (
      <div className="flex flex-col h-full items-center justify-center bg-white selection:bg-[#373737] selection:text-white">
        <span className="text-[14px] text-[#1A1A1A] font-roboto">Select less than 10 items</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full pt-[20px] px-[30px] pb-[30px] selection:bg-[#373737] selection:text-white relative">
      <div className="flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 40, right: 0, left: 0, bottom: 20 }}
            barGap={showReference ? -currentBarSize : 0}
          >
            <CartesianGrid 
              strokeDasharray="0" 
              vertical={true} 
              horizontal={true} 
              stroke="#E5E5E5" 
            />
            <XAxis 
              dataKey="label" 
              axisLine={{ stroke: '#E6E6E6' }}
              tickLine={false}
              tick={<CustomXAxisTick />}
              interval={0}
              height={70}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#333333', fontSize: 13, fontFamily: 'Roboto', fontWeight: 400 }}
              tickFormatter={formatYAxis}
              width={yAxisWidth}
              ticks={yTicks}
              domain={yDomain}
              interval={0}
            />
            <Tooltip 
              content={<CustomTooltip />} 
              cursor={false}
              offset={20}
              isAnimationActive={false}
              enabled={!showValues}
            />
            {showReference && (
              <Bar 
                id="reference-bar"
                dataKey={activeRefKey} 
                fill="#DBDBDB" 
                radius={[0, 0, 0, 0]}
                barSize={currentBarSize}
                isAnimationActive={false}
                shape={(props: any) => {
                  const { x, y, width, height, fill, index } = props;
                  return (
                    <rect 
                      x={x + 5} 
                      y={y} 
                      width={width} 
                      height={height} 
                      fill={fill} 
                      onMouseEnter={() => setHoveredState({ index, type: 'ref' })}
                      onMouseLeave={() => setHoveredState(null)}
                    />
                  );
                }}
              />
            )}
            <Bar 
              id="main-bar"
              dataKey={activeDataKey} 
              fill="#1C7862" 
              radius={[0, 0, 0, 0]}
              barSize={currentBarSize}
              isAnimationActive={false}
              shape={(props: any) => {
                const { x, y, width, height, fill, index, value } = props;
                const shiftedX = showReference ? x - 5 : x;
                
                // Render label if showValues is true
                const renderLabel = () => {
                  if (!showValues) return null;
                  
                  const displayValue = formatValue(value);
                  const badgeWidth = displayValue.length * 7 + 6;
                  const verticalOffset = 24;
                  const textOffset = 11;

                  return (
                    <>
                      <rect
                        x={shiftedX + width / 2 - badgeWidth / 2}
                        y={y - verticalOffset}
                        width={badgeWidth}
                        height={18}
                        fill="#373737"
                        rx={2}
                      />
                      <text
                        x={shiftedX + width / 2}
                        y={y - textOffset}
                        fill="#FFFFFF"
                        textAnchor="middle"
                        fontSize={11}
                        fontFamily="Roboto"
                        fontWeight={400}
                      >
                        {displayValue}
                      </text>
                    </>
                  );
                };

                return (
                  <g>
                    <rect 
                      x={shiftedX} 
                      y={y} 
                      width={width} 
                      height={height} 
                      fill={fill} 
                      onMouseEnter={() => setHoveredState({ index, type: 'main' })}
                      onMouseLeave={() => setHoveredState(null)}
                    />
                    {renderLabel()}
                  </g>
                );
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-end shrink-0 mt-[10px] w-full">
        <div className="flex flex-1 items-start gap-[10px] min-w-0">
          <div className="flex-1 min-w-0 flex flex-col gap-[10px]">
            <SimpleSelect 
              value={interval} 
              onChange={(val) => setInterval(val as IntervalType)} 
              options={[...INTERVALS]} 
            />
            <div 
              className="flex gap-[10px] items-center h-[30px] cursor-pointer group select-none"
              onClick={() => setShowReference(!showReference)}
            >
              <CheckboxIcon active={showReference} />
              <span className="font-roboto font-normal text-[#1A1A1A] text-[14px] whitespace-nowrap">
                Reference period
              </span>
            </div>
          </div>
          <div className="flex-1 min-w-0 flex flex-col gap-[10px]">
            <DateField 
              value={endDate}
              onChange={setEndDate}
              showTime={interval === "Hour"}
            />
            <DateField 
              value={showReference ? compareDate : undefined}
              onChange={setCompareDate}
              disabled={!showReference}
              showTime={interval === "Hour"}
            />
          </div>
        </div>
        <div className="ml-[30px] shrink-0">
          <MetricRadio 
            selected={selectedMetric}
            onChange={setSelectedMetric}
            showValues={showValues}
            onShowValuesChange={setShowValues}
          />
        </div>
      </div>

      <div className="absolute bottom-[20px] right-[25px]">
        <Popover.Root open={isMoreOpen} onOpenChange={setIsMoreOpen}>
          <Popover.Trigger asChild>
            <div className="size-[24px] flex items-center justify-center cursor-pointer outline-none">
              <svg className="size-[18px]" viewBox="0 0 20 20" fill="none">
                <path d={svgPathsMore.p2d3e5d00} fill="#1A1A1A" />
              </svg>
            </div>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content 
            align="end" 
            side="bottom"
            sideOffset={4}
            className="z-[11000] bg-white border border-[#CCCCCC] shadow-lg outline-none overflow-hidden py-1 min-w-[140px]"
          >
              <button
                onClick={() => {
                  onExportExcel?.();
                  setIsMoreOpen(false);
                }}
                className="text-left text-[14px] font-normal text-[#1A1A1A] hover:bg-[#EAEAEA] bg-white px-[16px] h-[36px] outline-none cursor-pointer transition-colors w-full whitespace-nowrap"
              >
                Export to Excel
              </button>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </div>
  );
}