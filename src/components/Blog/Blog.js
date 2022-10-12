import React from "react";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";

const Blog = () => {
  return (
    <div style={{ backgroundColor: "#edffff" }}>
      <MenuBar></MenuBar>
      <div className="container">
        <h1 className="text-center mb-5">
          **THE BLOG LIST** <br />
        </h1>
        <div className="qsn-ans">
          <div className="qsn-1">
            <h2>Question : The Purpose of React Router ??</h2>
            <h6>
              Answer : React Router is a standard library for routing in React.
              It enables the navigation among views of various components in a
              React Application, allows changing the browser URL, and keeps the
              UI in sync with the URL.
            </h6>
          </div>
          <br />
          <br />
          <div className="qsn-2">
            <h2>Question : How to work Context API ??</h2>
            <h6>
              Answer : React context API, In this article you will explore what
              is Context API and how to use it in your React project. The
              Context API is a React structure that enables you to exchange
              unique details and assists in solving prop-drilling from all
              levels of your application.
            </h6>
          </div>
          <br />
          <br />

          <br />
          <br />
          <br />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
