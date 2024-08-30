import React from "react";
import OneMovieSlider from "./components/OneMovieSlider";
import OneMovieAdvancedSlider from "./components/OneMovieAdvancedSlider";

const App = () => {
  return (
    <div className="sliders">
      <div className="slider">
        <OneMovieSlider />
      </div>
      <div>
        <OneMovieAdvancedSlider />
      </div>
    </div>
  );
};

export default App;
