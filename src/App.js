import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";

import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removetour = (id) => {
    const newtours = tours.filter((tour) => tour.id !== id);
    setTours(newtours);
  };

  const fetchtours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }

    console.log(tours);
  };

  useEffect(() => {
    fetchtours();
  }, []);

  return (
    <main>
      {loading ? <Loading /> : <Tours tours={tours} removetour={removetour} />}

      {tours.length === 0 && loading === false && (
        <main className="title">
          <h2>no tours left</h2>

          <button className="btn" onClick={() => fetchtours()}>
            refresh
          </button>
        </main>
      )}
    </main>
  );
}

export default App;
