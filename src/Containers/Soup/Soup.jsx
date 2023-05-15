import React, { useState } from "react";
import "./Soup.scss";

const Soup = ({ handleInput }) => {
  const [spiciness, setSpiciness] = useState(1);

  const handleSpicinessChange = (event) => {
    setSpiciness(event.target.value);
    handleInput(event);
  };

  return (
    <div className="soup">
      <label>
        <span>Set spiciness level </span>
        <input
          type="range"
          min="1"
          max="10"
          value={spiciness}
          onChange={handleSpicinessChange}
          name="spiciness_scale"
        />
        <div>Current spiciness: {spiciness}</div>
      </label>
    </div>
  );
};

export default Soup;
