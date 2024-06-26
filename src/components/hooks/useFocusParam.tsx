import { useCallback } from "react";
import useUrlParam from "./useUrlParam";

export default function useFocusParam(key: string, defaultValue="") {
  const { value: focused, setValue: setFocused, setValueOnChange } = useUrlParam("focused", defaultValue);
  const isFocused = focused === key;
  const enableFocus = useCallback(() => !isFocused && setFocused(key, key), [setFocused, isFocused, key]);
  const disableFocus = useCallback(() => isFocused && setFocused("", ""), [setFocused, isFocused]);
  const toggleFocus = useCallback(() => setFocused(isFocused ? "" : key), [isFocused, setFocused, key]);

  return { focused, isFocused, enableFocus, disableFocus, toggleFocus, setValueOnChange };
}