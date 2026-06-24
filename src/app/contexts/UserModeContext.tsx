import React, { createContext, useContext, useState } from "react";

export type UserMode = "store" | "hq";

interface UserModeContextType {
  userMode: UserMode;
  setUserMode: (mode: UserMode) => void;
  isStoreUser: boolean;
  isHqUser: boolean;
}

const UserModeContext = createContext<UserModeContextType | undefined>(undefined);

export function UserModeProvider({ children }: { children: React.ReactNode }) {
  const [userMode, setUserMode] = useState<UserMode>("store");

  return (
    <UserModeContext.Provider
      value={{ userMode, setUserMode, isStoreUser: userMode === "store", isHqUser: userMode === "hq" }}
    >
      {children}
    </UserModeContext.Provider>
  );
}

export function useUserMode() {
  const context = useContext(UserModeContext);
  if (!context) {
    throw new Error("useUserMode must be used within a UserModeProvider");
  }
  return context;
}
