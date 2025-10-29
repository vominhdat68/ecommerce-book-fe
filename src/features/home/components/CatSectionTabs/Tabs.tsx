// Tabs.tsx
import React from "react";

export type TabItem = {
  key: string;  // thêm key để quản lý tab
  label: string;
  active?: boolean;
  onClick?: () => void;
};

type TabsProps = {
  labelTabs: TabItem[];
  className?: string;
};

const Tabs: React.FC<TabsProps> = ({ labelTabs, className }) => {
  return (
    <div className={`flex gap-10 px-4 
    border-b-2 border-[#ededed] text-[14px]
    ${className || ""}`}>
      {labelTabs.map((tab) => (
        <button
          key={tab.key}
          onClick={tab.onClick}
          className={`py-3 cursor-pointer ${tab.active
              ? "text-[#C92127] font-semibold border-b-2 border-[#C92127]"
              : "text-gray-600 hover:text-[#C92127]"
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
