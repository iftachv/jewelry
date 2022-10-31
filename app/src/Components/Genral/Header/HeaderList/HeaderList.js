import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HeaderList.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function HeaderList({ showLoginINfo, setShowLoginInfo }) {
  let navigate = useNavigate();

  const LoginHandler = () => {
    navigate("/login");
  };
  const HomeHandler = () => {
    navigate("/");
  };
  const categoryHandler = () => {
    navigate("/category");
  };
  const ShopHandler = () => {
    navigate("/Shop");
  };
  const ContactHandler = () => {
    navigate("/Contact");
  };
  return (
    <ul className="header__list">
      {showLoginINfo.login && (
        <li
          onClick={() => {
            navigate("/cart");
          }}
        >
          <ShoppingCartIcon />
        </li>
      )}
      <li onClick={HomeHandler}>home</li>
      <li onClick={categoryHandler}>Category</li>
      {/* <li> About Us</li> */}
      {/* <li>Dashboard</li> */}
      <li onClick={ContactHandler}>About Us</li>
      {showLoginINfo.login ? (
        <li
          onClick={() => {
            setShowLoginInfo({ login: false });
          }}
        >
          Logout
        </li>
      ) : (
        <li onClick={LoginHandler}>Login</li>
      )}
      {showLoginINfo.login && <li>Hi Mr {showLoginINfo.name}</li>}
    </ul>
  );
}

export default HeaderList;
