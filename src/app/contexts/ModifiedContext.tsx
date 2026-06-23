import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

interface ModifiedContextType {
  isModified: boolean;
  modifiedCount: number;
  setModified: (val: boolean) => void;
  notifyChange: (fieldId?: string) => void;
  resetModified: () => void;
}

const ModifiedContext = createContext<ModifiedContextType | undefined>(undefined);

export function ModifiedProvider({ children, onCountChange }: { children: React.ReactNode, onCountChange?: (count: number) => void }) {
  const [modifiedFields, setModifiedFields] = useState<Set<string>>(new Set());
  const [isModifiedManual, setIsModifiedManual] = useState(false);

  const modifiedCount = modifiedFields.size || (isModifiedManual ? 1 : 0);
  const isModified = modifiedCount > 0;

  useEffect(() => {
    onCountChange?.(modifiedCount);
  }, [modifiedCount, onCountChange]);

  const setModified = useCallback((val: boolean) => {
    setIsModifiedManual(val);
    if (!val) setModifiedFields(new Set());
  }, []);

  const notifyChange = useCallback((fieldId?: string) => {
    if (fieldId) {
      setModifiedFields(prev => {
        if (prev.has(fieldId)) return prev;
        const next = new Set(prev);
        next.add(fieldId);
        return next;
      });
    } else {
      setIsModifiedManual(true);
    }
  }, []);

  const resetModified = useCallback(() => {
    setModifiedFields(new Set());
    setIsModifiedManual(false);
  }, []);

  return (
    <ModifiedContext.Provider value={{ isModified, modifiedCount, setModified, notifyChange, resetModified }}>
      {children}
    </ModifiedContext.Provider>
  );
}

export function useModified() {
  const context = useContext(ModifiedContext);
  return context;
}
