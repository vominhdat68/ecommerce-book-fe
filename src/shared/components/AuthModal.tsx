import AuthOptionForm from '@/features/auth/components/AuthOptionForm';
import { useModalPopup } from '@/shared/hooks/useModalPopup';
import { ModalPopup } from '@/shared/components/ModalPopup';

const AuthModal: React.FC = () => {
  const { isOpenPopup, closePopupModal } = useModalPopup();

  return (
    <>
      <ModalPopup isOpen={isOpenPopup} onClose={closePopupModal} animate={true}>
        <AuthOptionForm />
      </ModalPopup>
    </>
  );
};

export default AuthModal;