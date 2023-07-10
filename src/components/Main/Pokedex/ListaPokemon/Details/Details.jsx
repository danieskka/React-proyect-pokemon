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
  const base_exp = params.get('base_exp');
  const moves = params.get('moves');
  const abilities = params.get('abilities');
  const typeOne = params.get('typeOne');
  const typeTwo = params.get('typeTwo');

  // Conversión de peso de libras a kilogramos
  const weightKg = Math.round(weight * 0.45359237 * 100) / 100;

  // Conversión de altura de pies a metros
  const heightMt = Math.round(height * 0.3048 * 100) / 100;

  return (
    <article className="details-card details-card-centered">
      <div className="details-card-image-container">
        <img src={image} alt={name} className="details-card-image" />
      </div>
      <h3 className="details-card-title">{name}</h3>
      <p>ID: Nº{id}</p>
      <p>Weight: {weightKg} Kg</p>
      <p>Height: {heightMt} Meters</p>
      <p>Base Experience: {base_exp}xp</p>
      <p>Moves: {moves}</p>
      <p>Abilities: {abilities}</p>
      <p>TypeOne: {typeOne}</p>
      {typeTwo && <p>TypeTwo: {typeTwo}</p>}
    </article>
  );
};

export default Details;




