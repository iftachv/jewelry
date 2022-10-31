import React from "react";
import "./Card.css";
function Card({ url, description, price, index }) {

  const server = "http://localhost:3002";
  return (
    <div className="card" style={{ color: "black" }}>
      <button >X</button>
      <img src={url} alt="" />
      <div className="card__info">
        <h1>{description}</h1>
        <p>{description}</p>
        <p>{price}$</p>
      </div>
    </div>
  );
}

export default Card;
