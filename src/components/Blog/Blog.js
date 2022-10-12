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
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
