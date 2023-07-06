import React from "react";

const Card = ({ name, image, height, types, weight }) => {
  return (
    <article className="card">
      <div className="card-image-container">
        <img src={image} alt={name} className="card-image" />
      </div>
      <h3 className="card-title">{name}</h3>
      <p>Height: {height}</p>
      <p>Types: {types}</p>
      <p>Weight: {weight}</p>
    </article>
  );
};

export default Card;

