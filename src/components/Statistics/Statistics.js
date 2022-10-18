import React from "react";
import "./Statistics.css";
import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Quiz from "../Quiz/Quiz";
import Rechart from "../Rechart/Rechart";

const Statistics = () => {
  const quizs = useLoaderData();

  return (
    <div>
      <div className="quiz-container">
        {quizs.data.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz}></Quiz>
        ))}
      </div>
      <h2>Recharts of all Courses :</h2>
      <Rechart></Rechart>
      <Footer></Footer>
    </div>
  );
};

export default Statistics;
