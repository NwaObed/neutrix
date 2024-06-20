import React from "react";

function Card(props) {
  return (
    <div className="card">
    <img className="circle-img" src={props.img} alt="avatar_img" />
      <h2 className="name">{props.fName} {props.LName}</h2>
      <p className="info">{props.tel}</p>
      <p className="info">{props.email}</p>
    </div>
  );
}

export default Card;
