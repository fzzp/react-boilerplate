import { useEffect, useState } from 'react';

// 读写缓存，自动存回localStorage
export default function useStore<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    let jsonValue = localStorage.getItem(key);
    if (jsonValue != null && jsonValue !== "undefined") return JSON.parse(jsonValue);

    if (typeof initialValue === 'function') {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}
