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
    <div className="all-quiz">
      <h2 className="text-white">Quiz of {details.name}</h2>
      <br />
      <p className="text-white">
        This Section is pending due to device issue..
        <br />
        <p>So kindly, think positive about it. </p>
      </p>
    </div>
  );
};

export default Quizs;
