
import React from "react";

type SectionContainerProps = {
  children: React.ReactNode;
  bgColor?: 'bg-white' | 'none';
};

const SectionContainer: React.FC<SectionContainerProps> = ({ 
  children,
  bgColor = 'bg-white', // mặc định trắng
}) => {
  return (
    <div className="w-[1200px] mx-auto">
      <div className={`my-4 rounded-lg ${bgColor === 'none' ? '' : bgColor}`}>
        {children}
      </div>
    </div>
  );
};

export default SectionContainer;
