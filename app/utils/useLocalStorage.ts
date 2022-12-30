import { useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  if (typeof window === "undefined") return { data: null, setInLocalStorage: () => {} };

  const savedValue = JSON.parse(localStorage.getItem(key) ?? "null");

  const [data, setState] = useState<T>(savedValue !== "null" ? savedValue : initialValue);

  const setInLocalStorage = (nextState: T) => {
    localStorage.setItem(key, JSON.stringify(nextState));
    setState(nextState);
  };

  return { data, setInLocalStorage };
}
