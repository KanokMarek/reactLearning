import { useState } from "react";
import allMovies from "./data";
import categories from "./categories";

const App = () => {
  const [typeOfMovie, setTypeOfMovie] = useState("komedie");

  const vysledneFilmy = allMovies.filter((oneMovie) => {
    return oneMovie.category === typeOfMovie;
  });
  console.log(vysledneFilmy);

  return (
    <div>
      <div className="allBtn">
        {categories.map((oneCategory, index) => {
          return (
            <button className="oneBtn" key={index}
              onClick={() => {
                setTypeOfMovie(oneCategory);
              }}
            >
              {oneCategory}
            </button>
          );
        })}
      </div>
      <div className="allMovies">
        {vysledneFilmy.map((oneMovie) => {
          const { id, image, title, age, tags, description } = oneMovie;

          return (
            <div className="oneMovie" key={id}>
              <img src={image} alt="" />
              <h2>{title}</h2>
              <p>{age}</p>
              <p>{tags}</p>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
