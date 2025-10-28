
//------------------------------ ActionButton ------------------------------
export type ButtonVariant = 'auth' | 'navigation';
export type ButtonSize = 'default';

export interface ActionButtonProps {
  /** Loại button */
  variant: ButtonVariant;
  /** Text hiển thị */
  label: string;
  /** Trạng thái disabled */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** CSS class tùy chỉnh */
  className?: string;
  /** Type của button */
  type?: 'button' | 'submit' | 'reset';
}

// ============================================================================
// CONSTANTS
// ============================================================================

const BASE_CLASSES = [
  'rounded-lg',
  'font-bold',
  'py-3',
  'cursor-pointer',
  'disabled:cursor-not-allowed',
  'transition-all',
  'duration-200'
].join(' ');

const DISABLED_CLASSES = [
  'bg-gray-200',
  'text-gray-600',
  'border-gray-200',
  'w-[55%]' // Riêng auth button chiếm 55%
].join(' ');

const AUTH_CLASSES = [
  'bg-[#C92127]',
  'text-white',
  'border-[#C92127]',
  'hover:bg-[#A51B21]',
  'hover:border-[#A51B21]',
  'focus:ring-[#C92127]',
  'w-[55%]' // Riêng auth button chiếm 55%
].join(' ');

const NAVIGATION_CLASSES = [
  'border',
  'border-[#C92127]',
  'text-[#C92127]',
  'bg-transparent',
  'hover:scale-102',
  'w-1/4'
].join(' ');

// ============================================================================
// COMPONENT
// ============================================================================

const ActionButton: React.FC<ActionButtonProps> = ({
  variant,
  label,
  disabled = false,
  onClick,
  className = '',
  type = 'button'
}) => {

  /**
   * Get button classes based on variant and state
   */
  const getButtonClasses = (): string => {
    const classes = [BASE_CLASSES];

    if (disabled) {
      classes.push(DISABLED_CLASSES);
    } else {
      classes.push(variant === 'auth' ? AUTH_CLASSES : NAVIGATION_CLASSES);
    }

    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  };

  /**
   * Handle button click
   */
  const handleClick = (): void => {
    if (disabled || !onClick) return;
    onClick();
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={getButtonClasses()}
      aria-label={label}
      data-variant={variant}
      data-testid={`action-button-${variant}`}
    >
      {label}
    </button>
  );
};

//------------------------------ CloseButton ------------------------------
type CloseButtonFormProps = {
  label: string;
  onClose: () => void; // bắt buộc truyền vào
};

const CloseButtonForm: React.FC<CloseButtonFormProps> = ({ label, onClose }) => {
  return (
    <button
      type="button"
      onClick={onClose}
      className="w-[55%] border border-[#C92127] text-[#C92127] rounded-md font-semibold py-3 cursor-pointer transition-transform duration-200 hover:scale-102"
    >
      {label}
    </button>
  );
};

//------------------------------ ButtonAddCart ------------------------------
type ButtonAddCartProps = {
  type: 'addCart' | 'buyNow';
  icon?: string;
  label: string;
  addToCart: () => void; // bắt buộc truyền vào
};

const ButtonAddCart: React.FC<ButtonAddCartProps> = ({ type, icon, label, addToCart }) => {
  // Xác định className dựa trên type
  const getButtonClass = () => {
    const baseClass = "w-full rounded-md !text-[15px] font-semibold py-2 cursor-pointer transition-transform duration-200 hover:scale-102";

    if (type === 'addCart') {
      return `${baseClass} flex items-center justify-center gap-1 border border-[#C92127] text-[#C92127] bg-white`;
    } else { // type === 'buyNow'
      return `${baseClass} bg-[#C92127] text-white border-none`;
    }
  };

  return (
    <button
      type="button"
      onClick={addToCart}
      className={`${getButtonClass()}`}
    >
      {icon && <i className={`${icon} block`} />}
      <span>{label}</span>
    </button>
  );
};
export {
  ActionButton,
  CloseButtonForm,
  ButtonAddCart,
}
