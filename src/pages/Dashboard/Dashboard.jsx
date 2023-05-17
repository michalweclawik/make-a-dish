import React, { useState } from "react";
import Pizza from "../../Containers/Pizza/Pizza";
import "./Dashboard.scss";
import Soup from "../../Containers/Soup/Soup";
import Sandwich from "../../Containers/Sandwich/Sandwich";
import useSendData from "../../hooks/useSendData";

const Dashboard = () => {
  const { isPending, error, sendRequest, successMessage } = useSendData();

  const [dish, setDish] = useState({
    name: "",
    preparation_time: "",
    type: "",
  });

  const handleInput = (e) => {
    setDish((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url =
      "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/";

    sendRequest(url, dish);
  };

  const handleCancel = () => {
    setDish({
      name: "",
      preparation_time: "",
      type: "",
    });
  };

  return (
    <div className="dashboard">
      <form className="dashboard-form" onSubmit={handleSubmit}>
        <div className="dasboard-data">
          <label>
            <span>Name a dish </span>
            <input
              required
              autoFocus
              type="text"
              name="name"
              onChange={handleInput}
              value={dish.name}
            />
          </label>
          <label>
            <span>Preparation time:</span>
            <input
              required
              name="preparation_time"
              type="time"
              step="1"
              onChange={handleInput}
              value={dish.preparation_time}
            />
          </label>
          <label>
            <span>Choose dish type</span>
            <select
              name="type"
              id="type"
              onChange={handleInput}
              value={dish.type}
            >
              <option defaultValue="">Choose a dish type</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="sandwich">Sandwich</option>
            </select>
          </label>
          {dish.type === "pizza" ? <Pizza handleInput={handleInput} /> : null}
          {dish.type === "soup" ? <Soup handleInput={handleInput} /> : null}
          {dish.type === "sandwich" ? (
            <Sandwich handleInput={handleInput} />
          ) : null}
        </div>
        <div className="buttons">
          {isPending ? (
            <button className="btn" disabled>
              Sending data
            </button>
          ) : (
            <button className="btn">Add dish</button>
          )}

          <button className="btn cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>Error: {error}</p>}
      </form>
    </div>
  );
};

export default Dashboard;
