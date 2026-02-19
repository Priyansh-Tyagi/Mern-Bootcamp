import React from "react";

const Card = (props) => {

  return (
    <div className="card">
      <img src={props.image} alt={props.title} className="card-img" />

      <div className="card-body">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default Card;
