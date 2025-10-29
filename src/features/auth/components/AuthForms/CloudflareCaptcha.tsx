// components/CloudflareCaptcha.tsx
import { useEffect, useRef, useCallback } from 'react';
import type { CaptchaCloudflareProps } from '@/features/auth/types/cloudflare-captcha';
import { useCloudflareScript } from '@/features/auth/hooks/captcha/useCloudflareScript';
import { useCaptchaState } from '@/features/auth/hooks/captcha/useCaptchaState';
import { initCaptcha, cleanupCaptcha, getCaptchaOptions, executeCaptcha, CaptchaError } from '@/features/auth/utils/captchaUtils';

const CloudflareCaptcha: React.FC<CaptchaCloudflareProps> =
  (
    {
      sitekey,
      onVerify,
      onError,
      onExpire,
      onLoad,
      theme = 'auto',
      size = 'normal',
      action = 'submit',
      language = 'auto',
      retryDelay = 2000,
      retryAttempts = 3,
      className = '',
      style = {},
      containerStyle = {},
      execution = 'render',
      loadingComponent
    }
  ) => {
    const captchaRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const { isLoaded, error: scriptError } = useCloudflareScript({
      onError: (error) => onError?.(error), onLoad, retryDelay, retryAttempts
    });

    const {
      widgetId,
      isVerifying,
      retryCount,
      error: captchaError,
      setWidgetId,
      setIsVerifying,
      setError,
    } = useCaptchaState();

    // Xử lý lỗi
    useEffect(() => {
      if (scriptError) {
        onError?.(scriptError);
      }
      if (captchaError) {
        onError?.(captchaError);
      }
    }, [scriptError, captchaError, onError]);

    // Render CAPTCHA
    const renderCaptcha = useCallback(() => {
      if (!isLoaded || !captchaRef.current) return;

      try {
        // Cleanup previous instance
        cleanupCaptcha(widgetId);

        // Clear container
        if (captchaRef.current) {
          captchaRef.current.innerHTML = '';
        }

        const options = getCaptchaOptions(
          sitekey,
          {
            onVerify: (token) => {
              setIsVerifying(false);
              onVerify(token);
            },
            onError: (error) => {
              setIsVerifying(false);
              setError(error);
              onError?.(error);
            },
            onExpire: () => {
              setIsVerifying(false);
              onExpire?.();
            }
          },
          { theme, size, action, language }
        );

        let newWidgetId: string | null = null;

        if (
          execution === 'execute' &&
          typeof window.turnstile !== 'undefined' &&
          typeof window.turnstile.execute === 'function'
        ) {
          executeCaptcha(captchaRef.current, options);
          newWidgetId = `execute-${Date.now()}`;
        } else {
          newWidgetId = initCaptcha(captchaRef.current, options);
        }

        setWidgetId(newWidgetId);
        setError(null);
      } catch (error) {
        const captchaError = error instanceof CaptchaError
          ? error
          : new CaptchaError('Failed to render CAPTCHA', 'RENDER_ERROR');

        setError(captchaError);
        onError?.(captchaError);
      }
    }, [
      isLoaded,
      sitekey,
      theme,
      size,
      action,
      language,
      execution,
      onVerify,
      onError,
      onExpire,
      setWidgetId,
      setError,
      setIsVerifying
    ]);

    // Effect để render CAPTCHA
    useEffect(() => {
      renderCaptcha();
    }, [renderCaptcha, retryCount]);

    // Cleanup on unmount
    useEffect(() => {
      return () => {
        cleanupCaptcha(widgetId);
      };
    }, [widgetId]);
 

    // Loading state
    if (!isLoaded) {
      return (
        <div>

        </div>
      );
    }

    // Error state
    if (captchaError) {
      return (
        <div>

        </div>
      );
    }

    // Main render
    return (
      <div
        ref={containerRef}
        className={`cloudflare-captcha-container ${className}`}
        style={style}
      >
        <div
          ref={captchaRef}
          style={{
            minHeight: size === 'compact' ? '65px' : '85px',
            ...containerStyle
          }}
        />
        {isVerifying && (
          <div
            style={{
              marginTop: '10px',
              padding: '8px',
              backgroundColor: '#fff3cd',
              border: '1px solid #ffeaa7',
              borderRadius: '4px',
              fontSize: '14px',
              color: '#856404',
              textAlign: 'center'
            }}
          >
            Đang xác minh...
          </div>
        )}
      </div>
    );
  };

CloudflareCaptcha.displayName = 'CloudflareCaptcha';
export default CloudflareCaptcha;