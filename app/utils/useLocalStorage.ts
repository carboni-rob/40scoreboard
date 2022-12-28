import { useState } from "react";

export function useLocalStorage<T>(key: string) {
  const [data, setState] = useState<T>(JSON.parse(localStorage.getItem(key) ?? ""));

  const setInLocalStorage = (nextState: T) => {
    localStorage.setItem(key, JSON.stringify(nextState));
    setState(nextState);
  };

  return { data, setInLocalStorage };
}
