import React from "react";
import "./card-style.css";

const Card = props => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.img_url} alt="Image-1" className="card-img-top" />
      </div>

      <div className="card-body text-dark">
        <h4 className="card-title"> {props.title} </h4>
        <a href="#" className="btn btn-success">
          {" "}
          Watch!{" "}
        </a>
      </div>
    </div>
  );
};

export default Card;
