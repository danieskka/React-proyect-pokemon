import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const id = params.get('id');
  const name = params.get('name');
  const image = params.get('image');
  const weight = params.get('weight');
  const height = params.get('height');
  const typeOne = params.get('typeOne');
  const typeTwo = params.get('typeTwo');

  return (
    <article className="card">
      <div className="card-image-container">
        <img src={image} alt={name} className="card-image" />
      </div>
      <h3 className="card-title">{name}</h3>
      <p>ID: {id}</p>
      <p>Weight: {weight}</p>
      <p>Height: {height}</p>
      <p>TypeOne: {typeOne}</p>
      {typeTwo && <p>TypeTwo: {typeTwo}</p>}
      {/* Mostrar información adicional */}
      {/* ... */}
    </article>
  );
};

export default Details;




