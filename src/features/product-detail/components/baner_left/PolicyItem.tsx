// components/PolicyItem.tsx
import React from 'react';

interface PolicyItemProps {
  type: string;
  icon: string;
  title: string;
  description: string;
  onClick: (policyType: string) => void;
  onKeyPress: (e: React.KeyboardEvent, policyType: string) => void;
}

export const PolicyItem: React.FC<PolicyItemProps> = ({
  type,
  icon,
  title,
  description,
  onClick,
  onKeyPress,
}) => {
  return (
    <div
      className="flex justify-between items-center p-2 cursor-pointer"
      onClick={() => onClick(type)}
      role="button"
      tabIndex={0}
    >
      <div className="flex items-center">
        <div
          className="w-5 h-5 bg-contain bg-no-repeat bg-center mr-2 flex-shrink-0"
          style={{ backgroundImage: `url(${icon})` }}
          aria-hidden="true"
        />
        <span className="font-semibold">{title}</span>
        <span className="ml-1">{description}</span>
      </div>
      <i className='block ico_arrow_right_black' />
    </div>
  );
};