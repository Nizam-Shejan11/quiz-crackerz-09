import React from "react";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";

const Blog = () => {
  return (
    <div style={{ backgroundColor: "#edffff" }}>
      <MenuBar></MenuBar>
      <div className="container">
        <h1 className="text-center mb-5">
          ### **THE BLOG LIST** <br />
        </h1>

        <h3 className="text-start">
          ***The Need-blinds{" "}
          <span className="text-success">
            [Your financial need doesn’t affect your admission]
          </span>
          *** <br />
          <br />
          <br />
        </h3>

        <p className="text-start">
          1. Amherst College [Fullride]
          <br />
          2. Harvard University [Fullride]
          <br />
          3. Massachusetts Institute of Technology [Fullride]
          <br />
          4. Princeton University [Fullride]
          <br />
          5. Yale University [Fullride]
          <br />
          6. New York University Abu Dhabi [Fullride]
          <br />
          <br />
        </p>

        <h3 className="text-start">
          ***The Need-baseds/Need-awares/Need-sensitives{" "}
          <span className="text-danger">
            [Your financial need affects your admission]
          </span>{" "}
          ***
          <br />
          <br />
          <br />
        </h3>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
