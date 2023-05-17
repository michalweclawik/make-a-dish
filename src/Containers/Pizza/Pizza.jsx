import React from "react";

const Pizza = ({ handleInput }) => {
  return (
    <div>
      <label>
        <span>Number of slices </span>
        <input
          required
          type="number"
          name="no_of_slices"
          onChange={handleInput}
          placeholder="Slices 1-9"
          min="1"
          max="9"
          step="1"
        />
      </label>

      <label>
        <span>Diameter </span>
        <input
          required
          type="number"
          name="diameter"
          onChange={handleInput}
          placeholder="Size 25-60 cm "
        />
      </label>
    </div>
  );
};

export default Pizza;
