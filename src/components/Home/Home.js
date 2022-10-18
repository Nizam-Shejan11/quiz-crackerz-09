import React from "react";
import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Quiz from "../Quiz/Quiz";
import "./Home.css";

const Home = () => {
  const quizs = useLoaderData();
  return (
    <div className="home-container">
      <div className="upper-home row banner d-flex align-items-center justify-content-center">
        <div className="col-6">
          <h1 className="title">
            break a leg <br /> in your Skills 📈
          </h1>
          <p className="text-white text-center mt-3">
            A comprehensive resource for programming. <br />
            <small className="text-warning">
              new update* - the list of 100% full ride course is published
            </small>
          </p>
        </div>
      </div>

      <div className="quiz-container">
        {quizs.data.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz}></Quiz>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
