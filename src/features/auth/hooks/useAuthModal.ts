
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from "@/shared/store/redux/reduxStore";

import type { FormType } from '@/features/auth/types/auth';
import { openModal, closeModal } from '@/shared/slice/ControlModalSlice';
import { authActions } from '@/features/auth/slices/auth/authSlice';

export const useAuthModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentForm } = useSelector((state: RootState) => state.auth.auth);
  const { isOpen } = useSelector((state: RootState) => state.controlModal);

  const handleOpentAuthModal = (form: FormType) => {
    dispatch(authActions.setCurrentForm(form))
    dispatch(openModal());
  }

  return {
    isOpen,
    currentForm,
    switchForm: (form: FormType) => dispatch(authActions.setCurrentForm(form)),
    openAuthModal: handleOpentAuthModal,
    closeAuthModal: () => dispatch(closeModal()),
  };
};