import React from "react";

const Sandwich = ({ handleInput }) => {
  return (
    <div>
      <label>
        <span>Number of Slices of bread </span>
        <input
          required
          type="number"
          name="slices_of_bread"
          placeholder="Type number 1-9"
          onChange={handleInput}
        />
      </label>
    </div>
  );
};

export default Sandwich;
