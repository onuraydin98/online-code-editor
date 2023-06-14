import { useCallback, useState } from 'react';

export function useCopy(): [boolean, (text: string) => void] {
  const [loading, setLoading] = useState(false);

  // Prevent re-calculation with "useCallback" hook
  const copyToClipboard = useCallback((text: string) => {
    setLoading(true);
    navigator.clipboard.writeText(text);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return [loading, copyToClipboard];
}
