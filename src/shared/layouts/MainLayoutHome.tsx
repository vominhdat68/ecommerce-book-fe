import React from "react";
import { Outlet } from 'react-router-dom';

import Header from "@/shared/components/header/Header";

const MainLayoutHome: React.FC = () => {
    return (
        <>
            {/* min-h-screen */}
            <div className="flex flex-col min-h-[1200px]">
                <Header />
                <div className="bg-[#F0F0F0]">
                    <main className="mt-[7.37rem]">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
};

export default MainLayoutHome;