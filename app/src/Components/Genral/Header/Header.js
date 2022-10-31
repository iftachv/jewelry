import React from "react";
import logo from "../../../images/logo.png";
import HeaderList from "./HeaderList/HeaderList";
import "./Header.css";
function Header({ showLoginINfo, setShowLoginInfo }) {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <HeaderList
        showLoginINfo={showLoginINfo}
        setShowLoginInfo={setShowLoginInfo}
      />
    </div>
  );
}

export default Header;
