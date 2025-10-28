// features/auth/hooks/useLogin.ts
import { useCallback, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { authActions, loginActions } from '@/features/auth/slices';
import { useLoginMutation } from '@/features/auth/services/authSliceService';
import { validatePhone, validatePassword, validateEmail } from '@/features/auth/utils/validation';
import { AUTH } from '@/features/auth/message/Auth';
import type { AppDispatch, RootState } from '@/shared/store/redux/reduxStore';

interface ValidForm {
  isPhoneValid: boolean;
  isEmailValid: boolean;
  passwordError: string | null;
}

export const useLogin = () => {
  const dispatch = useDispatch<AppDispatch>();

  // state trong store
  const { username, password } = useSelector((state: RootState) => state.auth.login);
  const message = useSelector((state: RootState) => state.auth.auth.login);
  const [loginMutation, { isLoading: isLoginLoading }] = useLoginMutation();

  // validate form
  const validForm: ValidForm = useMemo(() => {
    const isPhoneValid = validatePhone(username);
    const isEmailValid = validateEmail(username);
    const passwordError = validatePassword(password);
    return { isPhoneValid, isEmailValid, passwordError };
  }, [username, password]);

  // cập nhật loading vào store
  useEffect(() => {
    dispatch(authActions.setLoading(isLoginLoading));
  }, [isLoginLoading, dispatch]);

  const setUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setField({ username: value }));

      if (
        message.error?.field === AUTH.POSITION_MESSAGE.UDL_USERNAME ||
        message.error?.field === AUTH.POSITION_MESSAGE.MESSAGES_RES_BAD
      ) {
        dispatch(authActions.setError({ form: 'login', error: null }));
      }
    },
    [dispatch, message.error?.field]
  );

  const setPassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setField({ password: value }));

      if (
        message.error?.field === AUTH.POSITION_MESSAGE.UDL_PASSWORD ||
        message.error?.field === AUTH.POSITION_MESSAGE.MESSAGES_RES_BAD
      ) {
        dispatch(authActions.setError({ form: 'login', error: null }));
      }
    },
    [dispatch, message.error?.field]
  );

  const handleLogin = useCallback(async () => {
    // clear lỗi cũ trước khi submit
    dispatch(authActions.clearFeedback('login'));

    const { isPhoneValid, isEmailValid, passwordError } = validForm;

    // validate username
    if (!isPhoneValid && !isEmailValid) {
      dispatch(
        authActions.setError({
          form: 'login',
          error: {
            code: AUTH.ERROR_CODES.VALIDATION_USERNAME,
            message: AUTH.MESSAGES.VALIDATION.USERNAME.INVALID,
            field: AUTH.FIELDS.USERNAME_INVALID,
          },
        })
      );
      return;
    }

    // validate password
    if (passwordError) {
      dispatch(
        authActions.setError({
          form: 'login',
          error: {
            code: AUTH.ERROR_CODES.VALIDATION_PASSWORD,
            message: AUTH.MESSAGES.VALIDATION.PASSWORD.INVALID,
            field: AUTH.FIELDS.PASSWORD_INVALID,
          },
        })
      );
      return;
    }

    try {
      const res = await loginMutation({ username, password }).unwrap();

      if (!res.success) {
        // clear password nhưng giữ username cho UX tốt hơn
        dispatch(loginActions.setField({ password: '' }));
        dispatch(
          authActions.setError({
            form: 'login',
            error: {
              code: res.code,
              message: res.message || AUTH.MESSAGES.VALIDATION.DEFAULT,
              field: AUTH.FIELDS.RES_AUTH_BAD,
            },
          })
        );
        return;
      }

      // success
      dispatch(authActions.clearFeedback('login'));
      dispatch(loginActions.resetLogin()); // clear cả username & password
    } catch (err: unknown) {
      const messageError = err instanceof Error ? err.message : 'Có lỗi xảy ra khi đăng nhập';
      // clear password
      dispatch(loginActions.setField({ password: '' }));
      dispatch(
        authActions.setError({
          form: 'login',
          error: {
            code: AUTH.ERROR_CODES.LOGIN_FAILED,
            message: messageError,
            field: AUTH.FIELDS.RES_AUTH_BAD,
          },
        })
      );
    }
  }, [dispatch, username, password, validForm, loginMutation]);

  return {
    message,
    validForm,
    isLoading: isLoginLoading,
    state: { username, password },
    actions: { handleLogin, setUsername, setPassword },
  };
};
