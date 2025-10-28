import React from "react";

interface LanguageDropdownProps {
    selected: "VN" | "EN";
    buttonBgClass?: string;
    onSelect: (lang: "VN" | "EN") => void;
}


const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ selected = "VN", buttonBgClass = 'bg-[#F2F4F5]', onSelect, }) => {
    return (
        <div className="rounded-lg bg-white text-sm p-2 shadow-lg">
            <div className="font-bold text-[#7A7E7F]">
                <button
                    className={`flex items-center space-x-2 cursor-pointer rounded-lg p-2 !mb-1 ${selected === 'VN' ? buttonBgClass : ''}`}
                    onClick={() => onSelect('VN')}
                >
                    <i className="icon_store_default" />
                    <span>VN</span>
                </button>
                <button
                    className={`flex items-center space-x-2 cursor-pointer rounded-lg p-2 ${selected === 'EN' ? buttonBgClass : ''}`}
                    onClick={() => onSelect('EN')}
                >
                    <i className="icon_store_english" />
                    <span>EN</span>
                </button>
            </div>
        </div>
    );
};

export default LanguageDropdown;
