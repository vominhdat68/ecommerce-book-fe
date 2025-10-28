
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '@/shared/store/redux/reduxStore';

import { openModal, closeModal } from '@/shared/slice/ControlModalSlice';
import type { ModalLabels } from '@/shared/types/modalPopup.type';


export const useModalPopup = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { isOpen, labelName } = useSelector((state: RootState) => state.controlModal);


    return {
        isOpenPopup: isOpen,
        labelNamePopup: labelName,
        openPopupModal: (label: ModalLabels) => dispatch(openModal(label)),
        closePopupModal: () => dispatch(closeModal()),
    };
};