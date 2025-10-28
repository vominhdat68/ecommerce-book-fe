import { useState } from "react";
import LanguageDropdown from "@/shared/components/header/HeaderActions/Lang/LanguageDropdown";

const LangIcon: React.FC = () => {
    const [isOpenLang, setisOpenLang] = useState(false);
    const [selectedLang, setSelectedLang] = useState<"VN" | "EN">("VN");


    const handleSelectLang = (lang: "VN" | "EN") => {
        setSelectedLang(lang);
        setisOpenLang(false);
    };


    return (
        <>
            <div
                className="relative flex items-center space-x-2 cursor-pointer border border-[#CDCFD0] rounded-lg p-2 ml-2"
                onClick={() => setisOpenLang(!isOpenLang)}
            >
                <i className={selectedLang === "VN" ? "icon_store_default" : "icon_store_english"} />
                <i className="icon_seemore_gray mr-0" />
                {
                    isOpenLang && (
                        <>
                            <div
                                className="backdrop-dropdown fixed inset-0 z-30 cursor-default"
                                onClick={() => setisOpenLang(false)} // click ra ngoài => đóng
                            />

                            <div
                                className="cursor-default absolute right-0 top-12 z-40"
                                onClick={(e) => e.stopPropagation()} /*chặn click bên trong dropdown làm đóng menu */
                            >
                                <LanguageDropdown selected={selectedLang} onSelect={handleSelectLang} />
                            </div>
                        </>

                    )}
            </div>
        </>
    );
};

export default LangIcon;