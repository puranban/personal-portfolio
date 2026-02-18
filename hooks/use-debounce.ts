'use client';

import { useState, useEffect } from 'react';

//  Debounces a value by the specified delay
//  Useful for search inputs, API calls, etc.

export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Set up timeout to update debounced value
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debouncedValue;
}
