import ReactDOM from 'react-dom';

interface ModalPopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  animate?: boolean
}

export const ModalPopup: React.FC<ModalPopupProps> = ({ isOpen, onClose, children, animate }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black/30 flex items-start justify-center z-50"
      onClick={onClose}
    >
      <div
        className={`mt-20 bg-white rounded-2xl shadow-md z-[51] 
            ${animate && 'overflow-hidden animate-slide-down'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};