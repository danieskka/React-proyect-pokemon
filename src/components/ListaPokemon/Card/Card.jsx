import React from "react";

const Card = ({ name, image }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      {/* Otros datos que deseas mostrar en la tarjeta */}
    </div>
  );
};

export default Card;
