import { useState, useCallback } from 'react';

export interface UseCaptchaStateReturn {
  widgetId: string | null;
  isVerifying: boolean;
  retryCount: number;
  error: Error | null;
  setWidgetId: (id: string | null) => void;
  setIsVerifying: (verifying: boolean) => void;
  setRetryCount: (count: number) => void;
  setError: (error: Error | null) => void;
  reset: () => void;
}

export const useCaptchaState = (): UseCaptchaStateReturn => {
  const [widgetId, setWidgetId] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [error, setError] = useState<Error | null>(null);

  const reset = useCallback(() => {
    setWidgetId(null);
    setIsVerifying(false);
    setError(null);
  }, []);

  return {
    widgetId,
    isVerifying,
    retryCount,
    error,
    setWidgetId,
    setIsVerifying,
    setRetryCount,
    setError,
    reset
  };
};