import React from "react";
// import { Col, Row } from 'react-bootstrap';
import { Container } from "@mui/system";
// import { useHistory } from 'react-router-dom';
import "./Service.css";
import img1 from "../../../images/men-2.png";
import img2 from "../../../images/women-2.png";
import img3 from "../../../images/kids-2.png";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Service = () => {
  // const navigate = useHistory();
  // const handleChange = () => {
  //     navigate.push(`/jewellery`)
  let navigate = useNavigate();

  return (
    <div className="service">
      <div className="service__card">
        <div className="service__info">
          <h5 style={{ color: "#f44c7a" }}>Men Accessories</h5>
          <p className="text-muted">100+ Products</p>
          <button
            className="btn-service"
            onClick={() => {
              navigate("/category");
            }}
          >
            Shop Now
          </button>
        </div>
        <img
          src={
            "https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg"
          }
        />
      </div>
      <div className="service__card">
        <div className="service__info">
          <h5 style={{ color: "#f44c7a" }}>Girls Accessories</h5>
          <p className="text-muted">100+ Products</p>
          <button
            className="btn-service"
            onClick={() => {
              navigate("/category");
            }}
          >
            Shop Now
          </button>
        </div>
        <img
          src={
            "https://www.gbl.co.il/sites/zahav/UserContent/images/9040022-1.jpg"
          }
        />
      </div>
      <div className="service__card">
        <div className="service__info">
          <h5 style={{ color: "#f44c7a" }}>kids Accessories</h5>
          <p className="text-muted">100+ Products</p>
          <button
            className="btn-service"
            onClick={() => {
              navigate("/category");
            }}
          >
            Shop Now
          </button>
        </div>
        <img
          src={
            "data:image/jpeg;base64,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"
          }
        />
      </div>
    </div>
  );
};

export default Service;
