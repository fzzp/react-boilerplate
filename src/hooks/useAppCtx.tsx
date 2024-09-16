import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

export function useAppCtx() {
  const ctx = useContext(AppContext)
  if(!ctx) {
    throw new Error("useAppCtx 必须在 AppContextProvider 内使用")
  }
  return ctx
}