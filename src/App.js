import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  // state values
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);

    /// starting with loading and getting into the toure componenet
    try {
      const response = await fetch(url);
      const tours = await response.json();
      // console.log(tours);
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    // make sure it only runs ones []
    fetchTours();
  }, []);

  if (loading) {
    // if loading is true
    return (
      <main>
        <Loading />
      </main>
    );
  }
  //
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours lefte </h2>
          {/* // we gonna set a button to cal our array */}
          <button className="btn" onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    // else return the Tours components
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
