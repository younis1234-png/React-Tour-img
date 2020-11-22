import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="Title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
          {
            /* to get access to the rest of the properites in our array our api like name,image,price we can ust do {...tour} */
          }
        })}
      </div>
    </section>
  );
};

export default Tours;
