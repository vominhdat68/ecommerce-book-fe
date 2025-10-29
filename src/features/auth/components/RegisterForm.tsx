
import AuthForms from "@/features/auth/components/AuthForms/AuthForms";
import { useRegister } from "@/features/auth/hooks/useRegister";


const RegisterForm: React.FC= () => {
    const { state, otpCountdown, validation, actions } = useRegister();
    return (
        <>
            <AuthForms
                state={state}
                otpCountdown={otpCountdown}
                validation={validation}
                actions={actions}
                onSubmit={actions.handleRegister}
                nameLabelAction="Đăng ký"/>
        </>
    );
};

export default RegisterForm;