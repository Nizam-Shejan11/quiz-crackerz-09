import React from "react";
import "./QuizQuestion.css";

const QuizQuestion = ({ qs, id }) => {
  const { question, correctAnswer, options } = qs;

  const showAns = (ans) => {
    alert(ans);
  };
  const checkAns = (e) => {
    if (e === correctAnswer) {
      alert("Correct Answer");
    } else {
      alert("Wrong Answer");
    }
  };

  return (
    <div className="quiz-question">
      <h4 className="question">
        Question: {id} {question}
      </h4>
      <button onClick={() => showAns(correctAnswer)}>Correct Ans</button>
      <div className="quiz-ans">
        <br />
        <p>Options:</p>

        <div>
          <div className="quiz-option">
            {qs.options.map((option) => (
              <label
                className="option"
                htmlFor="1"
                onClick={() => checkAns(option)}
              >
                <input type="radio" name="action"></input>
                {option}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
