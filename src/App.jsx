import React, { useState, useEffect } from "react";
import "./styles.css";

const App = () => {
  const [showFilms, setShowFilms] = useState(false);
  const [showPeople, setShowPeople] = useState(false);
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);

  function renderFilms() {
    setShowFilms(true);
    setShowPeople(false);
  }

  function renderPeople() {
    setShowPeople(true);
    setShowFilms(false);
  }

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return setFilms(response);
      });
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return setPeople(response);
      });
  });
  if (showFilms === false && showPeople === false) {
    return (
      <>
        <button
          type="button"
          class="btn btn-outline-info"
          onClick={renderFilms}
        >
          View Films
        </button>
        <button
          type="button"
          class="btn btn-outline-info"
          onClick={renderPeople}
        >
          View People
        </button>
      </>
    );
  } else if (showFilms === true && showPeople === false) {
    return (
      <>
        {" "}
        <button
          type="button"
          class="btn btn-outline-info"
          onClick={renderFilms}
        >
          View Films
        </button>
        <button
          type="button"
          class="btn btn-outline-info"
          onClick={renderPeople}
        >
          View People
        </button>
        {films.map((film) => {
          return (
            <>
              <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">{films.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{films.original_title}</h6>
                  <h6 class="card-subtitle mb-2 text-muted">{films.original_title_romanized}</h6>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="card-link">
                    Card link
                  </a>
                  <a href="#" class="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  } else if (showFilms === false && showPeople === true) {
    return (
      <>
        {" "}
        <button
          type="button"
          class="btn btn-outline-info"
          onClick={renderFilms}
        >
          View Films
        </button>
        <button
          type="button"
          class="btn btn-outline-info"
          onClick={renderPeople}
        >
          View People
        </button>
        {people.map((people) => {
          return (
            <>
              <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">people</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="card-link">
                    Card link
                  </a>
                  <a href="#" class="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  }

  //   return (
  //     <>
  //       <button type="button" class="btn btn-outline-info">
  //         View Films
  //       </button>
  //       <button type="button" class="btn btn-outline-info">
  //         View People
  //       </button>
  //     </>
  //   );
};

export default App;
