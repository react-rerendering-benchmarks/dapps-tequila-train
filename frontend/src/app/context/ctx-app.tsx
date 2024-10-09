import { useRef } from "react";
import { createContext, ReactNode, useState } from "react";
export const AppCtx = createContext(({} as ReturnType<typeof useProgram>));
const useProgram = () => {
  const isPending = useRef<boolean>(false);
  const isAllowed = useRef<boolean>(false);
  const openEmptyPopup = useRef<boolean>(false);
  const openWinnerPopup = useRef<boolean>(false);
  return {
    isPending: isPending.current,
    setIsPending,
    isAllowed: isAllowed.current,
    setIsAllowed,
    openEmptyPopup: openEmptyPopup.current,
    setOpenEmptyPopup,
    openWinnerPopup: openWinnerPopup.current,
    setOpenWinnerPopup
  };
};
export function AppProvider({
  children
}: {
  children: ReactNode;
}) {
  const {
    Provider
  } = AppCtx;
  return <Provider value={useProgram()}>{children}</Provider>;
}