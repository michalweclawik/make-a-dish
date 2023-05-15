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
          placeholder="Slices 2-15"
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
