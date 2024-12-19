import React, { useState, useEffect } from "react";
import JokeCard from "./JokeCard";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [joke, setJoke] = useState("null");

  const fetchJoke = async () => {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app-container">
      {joke ? (
        <JokeCard joke={joke} reloadJoke={fetchJoke} />
      ) : (
        <div className="text-center mt-5">Loading...</div>
      )}
    </div>
  );
}

export default App;
