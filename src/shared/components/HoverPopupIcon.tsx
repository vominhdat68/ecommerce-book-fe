import React, { useState } from "react";

type HoverPopupIconProps = {
  popupContent: React.ReactNode | ((closePopup: () => void) => React.ReactNode);
  labelContent?: React.ReactNode;
  overlay?: boolean;
  popupWidth?: string;
  fullWidth?: string;
  popupPosition?: string;
};

const HoverPopupIcon: React.FC<HoverPopupIconProps> = ({
  labelContent,
  popupContent,
  overlay = false,
  popupWidth = "w-64",
  popupPosition = "right-0",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const closePopup = () => setIsOpen(false);

  return (
    <div
      className={`${!overlay ? 'relative' : ''}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {labelContent}

      {isOpen && (
        <>
          {overlay && (
            <div 
              className="absolute -left-full -right-full h-screen bg-black/30 z-30" 
              onMouseEnter={() => setIsOpen(false)}
            />
          )} 
          <div className={`absolute ${popupPosition} z-30 ${popupWidth} bg-white rounded-lg shadow-lg`}>
            {typeof popupContent === 'function' 
              ? popupContent(closePopup) 
              : popupContent
            }
          </div>
        </>
      )}
    </div>
  );
};

export default HoverPopupIcon;