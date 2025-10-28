import { useModalPopup } from '@/shared/hooks/useModalPopup';


const AuthButtons: React.FC = () => {
    const { openPopupModal } = useModalPopup();

    return (
        <>
            <div className="text-sm px-4 py-5 cursor-default bg-white rounded-lg">
                <button
                    className="w-full bg-[#C92127] text-white rounded-lg py-3 font-bold !mb-2 cursor-pointer transition-transform duration-200 hover:scale-102"
                    onClick={() => openPopupModal("LOGIN")}
                >Đăng nhập</button>
                <button
                    className="w-full rounded-lg border border-[#C92127] text-[#C92127] font-bold py-3 cursor-pointer transition-transform duration-200 hover:scale-102"
                    onClick={() => openPopupModal("REGISTER")}
                >Đăng ký</button>
            </div>
        </>
    );
};

export default AuthButtons;