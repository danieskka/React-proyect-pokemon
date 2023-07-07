import React from "react";

const Card = ({ name, image, height, types, weight }) => {
  
  // Conversión de altura de pies a metros
  const heighMt = Math.round(height * 0.3048 * 100) / 100;

  // Conversión de peso de libras a kilogramos
  const weightKg = Math.round(weight * 0.45359237 * 100) / 100;

  return (
    <article className="card">
      <div className="card-image-container">
        <img src={image} alt={name} className="card-image" />
      </div>
      <h3 className="card-title">{name}</h3>
      <p>Height: {heighMt} m</p>
      <p>Weight: {weightKg} kg</p>
      <div>
        {types &&
          types.map((type) => (
            <p key={type} className={`type ${type}`}>
              {type}
            </p>
          ))}
      </div>
    </article>
  );
};

export default Card;

