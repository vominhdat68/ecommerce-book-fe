import React from "react";
import { Outlet } from 'react-router-dom';

import Header from "@/shared/components/header/Header";
import Footer from "@/shared/components/Footer";

const MainLayoutHome: React.FC = () => {
    return (
        <>
            {/* min-h-screen */}
            <div className="flex flex-col min-h-[1200px]">
                <Header />
                <div className="flex-1 bg-[#F0F0F0]">
                    <main className="mt-[7.37rem]">
                        <Outlet />
                    </main>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default MainLayoutHome;