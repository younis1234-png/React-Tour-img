import React, { useState } from "react";

const Tour = ({ id, name, image, info, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tout-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}.....`}
          <button onClick={() => setReadMore(!readMore)}>
            {/* our button */}
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button
          onClick={() => {
            removeTour(id);
          }}
          className="delete-btn"
        >
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
