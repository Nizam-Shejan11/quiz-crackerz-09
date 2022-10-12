import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

const Quizs = () => {
  const { courseId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`../.././details.JSON`)
      .then((res) => res.json())
      .then((data) => setDetails(data[courseId]));
  }, []);
  return (
    <div>
      <h2>Quiz of {details.name}</h2>
    </div>
  );
};

export default Quizs;
