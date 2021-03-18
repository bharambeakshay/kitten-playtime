import React, { useState } from "react";
import "../style.css";

import Eye from "../assets/eye.svg";
import Reload from "../assets/reload.svg";

const QuestionBox = ({ question, options, selected, playAgain, corrected }) => {
  const [answer, setAnswer] = useState(options);
  return (
    <>
      {/* //{" "}
      <div className="questionBox"> */}
      <div className="question">{question}</div>

      <div className="number-button">
        <div className="all-buttons">
          {answer.map((text, index) => (
            <button
              key={index}
              className="answerBtn"
              onClick={() => {
                setAnswer([text]);
                selected(text);
                corrected(text);
              }}
            >
              {text}
            </button>
          ))}
        </div>

        <div className="enter-button">
          <input className="answer-input" type="number" />
          <button className="enter">Enter</button>
        </div>
      </div>
      <button className="eye">
        <img src={Eye} alt="eye" style={{ width: "20px", height: "20px" }} />
      </button>
      <button className="reset" onClick={playAgain}>
        <img
          src={Reload}
          alt="reset"
          style={{ width: "20px", height: "20px" }}
        />
      </button>
    </>
  );
};

export default QuestionBox;
