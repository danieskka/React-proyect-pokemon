import React from 'react';

const FormCard = ({ name, image, id, types }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={image} alt={name} className="card-image" />
      </div>
      <h3 className="card-title">{name}</h3>
      <p>ID: {id}</p>
      <div className="type-container">
        {types &&
          types.map((type) => (
            <p key={type} className={`type ${type}`}>
              {type}
            </p>
          ))}
      </div>
    </div>
  );
};

export default FormCard;
