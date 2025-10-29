const OTP_METHODS = [
  { id: "sms" as const, label: "Tin nhắn SMS" },
  { id: "zalo" as const, label: "Zalo ZNS" },
];

type MethodSelectorProps = {
  selectedMethod: string | null;
  disabled: boolean;
  onSelect: (method: "sms" | "zalo") => void;
};

const MethodSelector: React.FC<MethodSelectorProps> = ({
  selectedMethod,
  disabled,
  onSelect,
}) => {
  const disabledBtnMS = !disabled || selectedMethod!=null;

  return (
    <div className="text-[#555555]">
      <label className="block text-sm font-medium mb-2">
        Chọn phương thức xác minh OTP
      </label>
      <div className="flex gap-2">
        {OTP_METHODS.map((method) => (
          <button
            key={method.id}
            type="button"
            disabled={disabledBtnMS}
            onClick={() => onSelect(method.id)}
            className={`flex-1 rounded-[5px] py-2 text-center border transition-colors
              ${
                selectedMethod === method.id
                  ? "border-[#C92127] text-red-600 font-semibold"
                  : "border-[#CDCFD0] hover:border-[#CDCFD0] cursor-pointer"
              }
              ${disabled ? "" : "opacity-50"}
            `}
          >
            {method.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MethodSelector;
