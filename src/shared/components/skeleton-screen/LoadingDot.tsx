import React from "react";

interface LoaderBarsProps {
  color?: string;
  size?: number; // chiều cao tối đa của bar
  count?: number; // số lượng thanh
}

const LoaderBars: React.FC<LoaderBarsProps> = ({
  color = "#C92127",
  size = 40,
  count = 5,
}) => {
  return (
    <>
      <style>
        {`

          @keyframes wave {
            0%, 40%, 100% {
              transform: scaleY(0.5);
              opacity: 0.4;
            }
            20% {
              transform: scaleY(1);
              opacity: 1;
            }
          }
          .loader-bars {
            display: flex;
            align-items: flex-end;
            justify-content: center;
            gap: 6px;
            height: ${size}px;
          }
          .loader-bar {
            width: ${Math.max(10, size / count)}px;
            border-radius: 4px;
            background-color: ${color};
            animation: wave 1.2s infinite ease-in-out;
          }
        `}
      </style>

      <div className="loader-bars"
      style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "99999",

        }}
      >
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="loader-bar"
            style={{
              height: `${size}px`,
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default LoaderBars;
