import React from "react";
import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <section className="form-container">
      <form onSubmit={handleSubmit((data) => console.log(data))}>
      <h3>Introduce a Pokemon</h3>
        <article className="form-group">
          <label>Pokemon ID:</label>
          <input {...register('id', { required: true })} placeholder="Enter Pokemon ID" />
          {errors.id && <p>Please enter the Pokemon ID.</p>}
        </article>

        <article className="form-group">
          <label>Pokemon Name:</label>
          <input {...register('name', { required: true, minLength: 3 })} placeholder="Enter Pokemon Name" />
          {errors.name && <p>Pokemon name is required and should have a minimum length of 3 characters.</p>}
        </article>

        <article className="form-group">
          <label>Image URL:</label>
          <input {...register('image', { required: true })} placeholder="Enter Image URL" />
          {errors.image && <p>Please enter an image.</p>}
        </article>

        <article className="form-group">
          <label>Type One:</label>
          <select {...register('typeOne', { required: true })}>
            <option value="">Select a type</option>
            <option value="electric">Electric</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="psychic">Psychic</option>
            <option value="normal">Normal</option>
            <option value="ground">Ground</option>
            <option value="bug">Bug</option>
            <option value="fighting">Fighting</option>
            <option value="rock">Rock</option>
            <option value="flying">Flying</option>
            <option value="poison">Poison</option>
            <option value="ghost">Ghost</option>
            <option value="steel">Steel</option>
            <option value="ice">Ice</option>
            <option value="dragon">Dragon</option>
            <option value="fairy">Fairy</option>
            <option value="dark">Dark</option>
          </select>
          {errors.typeOne && <p>Please select a type for Type One.</p>}
        </article>

        <article className="form-group">
          <label>Type Two:</label>
          <select {...register('typeTwo')}>
          <option value="">Select a type</option>
            <option value="electric">Electric</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="psychic">Psychic</option>
            <option value="normal">Normal</option>
            <option value="ground">Ground</option>
            <option value="bug">Bug</option>
            <option value="fighting">Fighting</option>
            <option value="rock">Rock</option>
            <option value="flying">Flying</option>
            <option value="poison">Poison</option>
            <option value="ghost">Ghost</option>
            <option value="steel">Steel</option>
            <option value="ice">Ice</option>
            <option value="dragon">Dragon</option>
            <option value="fairy">Fairy</option>
            <option value="dark">Dark</option>
          </select>
        </article>

        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Form;
