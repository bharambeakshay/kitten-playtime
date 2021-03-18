import React from "react";
import "../style.css";

const Result = ({ ans, playAgain }) => {
  console.log(ans);
  return (
    <div className="score-board">
      <div className="score"> Your answer is {ans.toString()}! </div>
      <button className="playBtn" onClick={playAgain}>
        {" "}
        Next
      </button>
    </div>
  );
};

export default Result;
