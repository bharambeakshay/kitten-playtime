import React from "react";
import Catball from "../../images/catball.gif";
import './home.css'
export default function CatBall(props) {
  return [...Array(props.count)].map((elementInArray, index) => (
    <img
      className={props.cls}
      key={index}
      src={Catball}
      alt='cat'
      style={{ width: "150px", height: "150px" }}
    />
  ));
}
