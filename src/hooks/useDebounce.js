import { useEffect, useState } from "react";

export default function useDebounce(initializeValue = "", delay = 1000) {
  // delay time để lấy dữ liệu
  const [debounceValue, setDebounceValue] = useState(initializeValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initializeValue);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, initializeValue]);
  return debounceValue;
}
