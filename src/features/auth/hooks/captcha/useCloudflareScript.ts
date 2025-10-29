import { useState, useEffect, useCallback } from 'react';

interface UseCloudflareScriptProps {
  onError?: (error: Error) => void;
  onLoad?: () => void;
  retryDelay?: number;
  retryAttempts?: number;
}

export const useCloudflareScript = ({
  onError,
  onLoad,
  retryDelay = 2000,
  retryAttempts = 3
}: UseCloudflareScriptProps = {}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadAttempt, setLoadAttempt] = useState(0);
  const [error, setError] = useState<Error | null>(null);

  const loadScript = useCallback(() => {
    // Kiểm tra nếu script đã được tải
    if (window.turnstile) {
      setIsLoaded(true);
      onLoad?.();
      return true;
    }

    // Kiểm tra nếu script đã có trong DOM
    if (document.getElementById('cf-turnstile-script')) {
      const checkLoad = setInterval(() => {
        if (window.turnstile) {
          setIsLoaded(true);
          onLoad?.();
          clearInterval(checkLoad);
        }
      }, 100);
      return true;
    }

    // Tạo script mới
    const script = document.createElement('script');
    script.id = 'cf-turnstile-script';
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      setIsLoaded(true);
      setError(null);
      onLoad?.();
    };
    
    script.onerror = (event) => {
      const error = new Error(`Failed to load Cloudflare Turnstile script: ${event}`);
      setError(error);
      onError?.(error);
    };

    document.head.appendChild(script);
    return true;
  }, [onError, onLoad]);

  useEffect(() => {
    if (loadAttempt > retryAttempts) return;

    const timer = setTimeout(() => {
      loadScript();
    }, loadAttempt > 0 ? retryDelay : 0);

    return () => clearTimeout(timer);
  }, [loadAttempt, retryDelay, retryAttempts, loadScript]);

  const retry = useCallback(() => {
    setLoadAttempt(prev => prev + 1);
  }, []);

  return {
    isLoaded,
    error,
    loadAttempt,
    retry,
    retryAttempts
  };
};