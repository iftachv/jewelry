import { Container } from "@mui/system";
import React from "react";
import "./Banner.css";
import { useNavigate } from "react-router-dom";

function Banner() {
  let navigate = useNavigate();

  return (
    <div className="banner-container" >
      <Container >
        <p className="fs-6"> WOMEN'S JEWELLERY </p>
        <h1 className="fw-normal fs-1">
          FAMILY <span>JEWELLERY</span>
          <br /> COLLECTION
        </h1>
        <p>Follow your true passion, let your jewelry guide you.</p>
        <button
          className="btn-regular"
          onClick={() => {
            navigate("/category");
          }}
        >
          Shop Now
        </button>
      </Container>
    </div>
  );
}

export default Banner;
