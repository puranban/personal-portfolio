'use client';

import { useEffect, useCallback } from 'react';

interface KeyboardShortcutOptions {
  key: string;
  ctrlKey?: boolean;
  metaKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  preventDefault?: boolean;
}

// Hook for registering keyboard shortcuts
// Supports modifier keys and automatic cleanup

export function useKeyboardShortcut(
  options: KeyboardShortcutOptions,
  callback: () => void
): void {
  const {
    key,
    ctrlKey = false,
    metaKey = false,
    shiftKey = false,
    altKey = false,
    preventDefault = true,
  } = options;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      // Check if all modifier conditions match
      const modifiersMatch =
        event.ctrlKey === ctrlKey &&
        event.metaKey === metaKey &&
        event.shiftKey === shiftKey &&
        event.altKey === altKey;

      // Check if key matches (case-insensitive)
      const keyMatches = event.key.toLowerCase() === key.toLowerCase();

      if (modifiersMatch && keyMatches) {
        if (preventDefault) {
          event.preventDefault();
        }
        callback();
      }
    },
    [key, ctrlKey, metaKey, shiftKey, altKey, preventDefault, callback]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
}

// Hook for Cmd/Ctrl + K shortcut (common for search)

export function useCommandK(callback: () => void): void {
  useKeyboardShortcut(
    {
      key: 'k',
      metaKey: true,
    },
    callback
  );

  // Also support Ctrl+K for Windows/Linux
  useKeyboardShortcut(
    {
      key: 'k',
      ctrlKey: true,
    },
    callback
  );
}
