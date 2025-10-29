import { useState } from 'react';
import { useSelector } from 'react-redux';

import LoginForm from "@/features/auth/components/LoginForm";
import RegisterForm from "@/features/auth/components/RegisterForm";
import ForgotPasswordForm from "@/features/auth/components/ForgotPasswordForm"

import LoaderBars from "@/shared/components/skeleton-screen/LoadingDot";
import { CloseButtonForm } from '@/shared/components/Button';
import type { ModalLabels } from '@/shared/types/modalPopup.type';
import { useModalPopup } from '@/shared/hooks/useModalPopup';
import type { RootState } from '@/shared/store/redux/reduxStore';

const AuthOptionForm: React.FC = () => {
    const { isOpenPopup, labelNamePopup, closePopupModal } = useModalPopup();
    const { isLoading } = useSelector((state: RootState) => state.auth.auth);
    const [form, setSwitchForm] = useState<ModalLabels>(labelNamePopup || 'LOGIN');


    const renderForm = () => {
        switch (form) {
            case "LOGIN":
                return <LoginForm onSwitchForm={() => setSwitchForm('FORGOT_PASSWORD')} />;
            case "REGISTER":
                return <RegisterForm />;
            case "FORGOT_PASSWORD":
                return <ForgotPasswordForm />;
            default:
                return null;
        }
    };

    // xử lý nút close
    const isForgotPassword = form === 'FORGOT_PASSWORD';
    const handleClick = isForgotPassword
        ? () => setSwitchForm('LOGIN')
        : closePopupModal;
    const buttonText = isForgotPassword ? 'Trở lại' : 'Bỏ qua';

    return (
        <div className='w-[450px] cursor-default bg-white mx-auto shadow-sm '>
            {/* Loading overlay */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-10">
                    <LoaderBars size={40} count={4} />
                </div>
            )}

            <div className="px-5 py-6">
                <div className="flex justify-center gap-4 mb-4">
                    {form === "FORGOT_PASSWORD" ? (
                        <h2 className="uppercase text-base text-black font-bold">
                            Khôi phục mật khẩu
                        </h2>
                    ) : (
                        <>
                            <button
                                className={`relative flex-1 py-2 font-semibold cursor-pointer ${form === "LOGIN"
                                    ? "text-[#C92127] after:opacity-100 after:w-full"
                                    : "text-[#646464] hover:text-[#C92127] hover:after:opacity-100 hover:after:w-full hover:after:bg-[#C92127]"
                                    } after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-10 after:h-0.5 after:bg-[#C92127] after:opacity-0 after:transition-all after:duration-600 after:ease-in-out after:-translate-x-1/2`}
                                onClick={() => setSwitchForm("LOGIN")}
                            >
                                Đăng nhập
                            </button>

                            <button
                                className={`relative flex-1 py-2 font-semibold cursor-pointer ${form === "REGISTER"
                                    ? "text-[#C92127] after:opacity-100 after:w-full"
                                    : "text-[#646464] hover:text-[#C92127] hover:after:opacity-100 hover:after:w-full hover:after:bg-[#C92127]"
                                    } after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-10 after:h-0.5 after:bg-[#C92127] after:opacity-0 after:transition-all after:duration-600 after:ease-in-out after:-translate-x-1/2`}
                                onClick={() => setSwitchForm("REGISTER")}
                            >
                                Đăng ký
                            </button>
                        </>
                    )}
                </div>
                <div className="p-3">{renderForm()}</div>
                {
                    (isOpenPopup || isForgotPassword) && (
                        <div className='text-center px-3'>
                            <CloseButtonForm
                                label={buttonText}
                                onClose={handleClick}
                            />
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default AuthOptionForm;