import { Link } from "react-router-dom";

type Props = {
  iconClass: string;
  label: string;
  url_page: string;
  badgeCount?: number;
};
const IconActions: React.FC<Props> = ({
  iconClass,
  label,
  url_page,
  badgeCount = 0,
}) => {

  return (
    <>
      <Link to={url_page}>
        <div className="relative">
          <div className="flex flex-col items-center gap-1 cursor-pointer text-xs my-2">
            <i className={iconClass} aria-hidden />
            <span className="text-[#7A7E7F] whitespace-nowrap">{label}</span>
          </div>
          {badgeCount > 0 && (
            <span
              className="absolute -top-1.5 right-1 bg-[#C92127] text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center"
            >
              {badgeCount > 99 ? "99+" : badgeCount}
            </span>
          )}

        </div>
      </Link>
    </>
  );
};

export default IconActions;