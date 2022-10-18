import React from "react";
import { Link } from "react-router-dom";
import "./Quiz.css";

const Quiz = ({ quiz }) => {
  const { name, logo, id } = quiz;
  return (
    <div className="quiz">
      <img src={logo} alt="logo"></img>
      <h2>{name}</h2>
      <button className="start-btn">
        <Link to={`/quiz/${id}`}>Start Practice</Link>
      </button>
    </div>
  );
};

export default Quiz;
