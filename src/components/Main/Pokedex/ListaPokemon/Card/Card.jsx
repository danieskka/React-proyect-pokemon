import React from "react";

const Card = ({ name, image, types }) => {
  
  return (
    <article className="card">
      <div className="card-image-container">
        <img src={image} alt={name} className="card-image" />
      </div>
      <h3 className="card-title">{name}</h3>
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

