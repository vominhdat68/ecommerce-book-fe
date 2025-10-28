import React from "react";
import { Link } from "react-router-dom";

import bannerTopBar from "/cfhs/image/header_1263x60.png";

import NavMenu from "@/shared/components/header/NavMenu/NavMenu";
import HeaderLogo from "@/shared/components/header/HeaderLogo";

const Header: React.FC = () => {
    return (
        <header className="fixed z-50 top-0 left-0 right-0 bg-white shadow-md h-[117px]">
            {/* Banner Top */}
            <div className="bg-[#E91F38]">
                <div className="max-w-[1200px] mx-auto text-center">
                    <Link to="/">
                        <img
                            className="inline h-[50px]"
                            src={bannerTopBar || 'https://cdn1.fahasa.com/media/wysiwyg/Thang-10-2025/Vang_MCBooks_Resize_1263x60.png'}
                            alt="Banner Top Bar"
                        />
                    </Link>
                </div>
            </div>

            {/* Main Header */}
            <div className="max-w-[1200px] mx-auto">
                <div className="flex items-center relative z-30 h-[60px]">
                    <HeaderLogo />
                    <NavMenu /> 
                </div>
            </div>
        </header>
    );
};

export default Header;