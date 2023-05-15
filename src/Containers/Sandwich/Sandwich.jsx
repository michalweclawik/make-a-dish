import React from "react";

const Sandwich = ({ handleInput }) => {
  return (
    <div>
      <label>
        <span>Number of Slices of bread </span>
        <input
          required
          type="text"
          name="slices_of_bread"
          onChange={handleInput}
        />
      </label>
    </div>
  );
};

export default Sandwich;
