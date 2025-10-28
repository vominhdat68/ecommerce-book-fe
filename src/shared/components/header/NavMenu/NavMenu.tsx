import MenuNavigate from "@/shared/components/header/NavMenu/MenuNavigate";
import HoverPopupIcon from "@/shared/components/HoverPopupIcon";

const NavMenu: React.FC = () => {
    return (
        <>
            <HoverPopupIcon
                labelContent={
                    <>
                        <div className="flex items-center mx-[20px] my-3 cursor-pointer">
                            <i className="icon_menu w-34" />
                            <i className="icon_seemore_gray" />
                        </div>
                    </>
                }
                popupContent={(closePopup) => <MenuNavigate onClose={closePopup} />}
                overlay={true}
                popupPosition="left-0 right-0"
                popupWidth=""
            />
        </>
    )
}

export default NavMenu;