import React from "react";
import { useNavigate } from "react-router-dom";
import logoHome from "@/assets/images/header/fahasa-logo.png";


const HeaderLogo: React.FC = () => {
  const navigate = useNavigate()
  const backHome = () => {

    navigate('/')
  };

  return (
    <div className="cursor-pointer" onClick={backHome}>
      <img
        // src={logoHome}
        alt="logo-website"
        className="w-[220px] h-auto max-w-none"
      />
    </div>
  );
};

export default HeaderLogo;
