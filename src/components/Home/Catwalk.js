import React from "react";
import Cat from "../../images/cat.gif";
import './home.css'
export default function catwalk(props) {
  return [...Array(props.count)].map((elementInArray, index) => (
    <img
      className=""
      src={Cat}
      alt='cat'
      style={{ width: "100px", height: "100px" }}
    />
  ));
}
