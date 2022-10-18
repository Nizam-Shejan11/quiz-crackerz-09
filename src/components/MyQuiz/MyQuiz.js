import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizQuestion from "../QuizQuestion/QuizQuestion";

const MyQuiz = () => {
  let quesNo = 0;
  const myQuiz = useLoaderData();

  return (
    <div className="quiz-outlet">
      <h2 className="text-info p-5"> Quiz of {myQuiz.data.name} </h2>
      <div>
        {myQuiz.data.questions.map((qs) => (
          <QuizQuestion key={qs.id} qs={qs} id={++quesNo}></QuizQuestion>
        ))}
      </div>
    </div>
  );
};

export default MyQuiz;
