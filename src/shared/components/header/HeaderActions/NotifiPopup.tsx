import AuthButtons from "@/shared/components/AuthButtons";

const NotifiPopup: React.FC = () => {
    return (
        <>
            <div className="text-sm py-5 cursor-default">
                <div className="flex items-center pb-3 px-4">
                    <span className="icon_nofi_black block" style={{ width: 16, height: 16 }}></span>
                    <span className="pl-3 font-bold text-[1.23em] text-[#0D0E0F]">Thông báo</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3 py-5 border-t border-[#F2F4F5] px-4">
                    <span className="ico_notlogin block" />
                    <span className="text-[1.23em] text-[#0D0E0F]" >Vui lòng đăng nhập để xem thông báo</span>
                </div>
                <div className="px-4">
                    <AuthButtons />
                </div>
            </div>
        </>

    );
};

export default NotifiPopup;