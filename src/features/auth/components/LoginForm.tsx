
import CustomInput from '@/shared/components/CustomInput';
import { ActionButton } from '@/shared/components/Button';

import { useLogin } from '@/features/auth/hooks/useLogin';
import { AUTH } from "@/features/auth/message/Auth";

interface Props {
    onSwitchForm: () => void;
}

const LoginForm: React.FC<Props> = ({ onSwitchForm }) => {
    const { state, actions, message, validForm } = useLogin();
    const enableBtnSubmit = validForm.isPhoneValid || validForm.isEmailValid;

    return (
        <>
            {
                message.error?.field === AUTH.POSITION_MESSAGE.MESSAGES_RES_BAD && (
                    <span className="text-[#C92127] text-[13px] block mb-2"> {message.error?.message} </span>
                )}

            <form className="space-y-4">
                <CustomInput
                    label="Số điện thoại/Email"
                    name="username"
                    type="text"
                    autoComplete=""
                    value={state.username}
                    placeholder="Nhập số điện thoại hoặc email"
                    onChange={(e) => actions.setUsername(e.target.value)}
                    onClearValue={() => actions.setUsername("")}
                    isValid={message == null}
                    errorMessage={message.error?.field === AUTH.POSITION_MESSAGE.UDL_USERNAME ? message.error?.message : undefined}
                />

                <CustomInput
                    label="Mật khẩu"
                    name="password"
                    type="password"
                    placeholder="Nhập mật khẩu"
                    value={state.password}
                    onChange={(e) => actions.setPassword(e.target.value)}
                    onClearValue={() => actions.setPassword("")}
                    isValid={message == null}
                    isRenderStatusIco={false}
                    errorMessage={message.error?.field === AUTH.POSITION_MESSAGE.UDL_PASSWORD ? message.error?.message : undefined}
                />

                <div className="text-right">
                    <span
                        onClick={onSwitchForm}
                        className="text-[#C92127] text-[13px] hover:underline cursor-pointer"
                    >Quên mật khẩu?</span>
                </div>

                <div className="text-center">
                    <ActionButton
                        variant='auth'
                        label="Đăng nhập"
                        disabled={!enableBtnSubmit}
                        onClick={actions.handleLogin}
                    />
                </div>
            </form>
        </>
    );
};

export default LoginForm;