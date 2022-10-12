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
