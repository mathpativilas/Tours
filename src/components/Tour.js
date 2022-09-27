import React, { useState } from "react";

const Tour = ({ item, removetour }) => {
  const [readmore, setreadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={item.image} alt={item.name} />
      <footer>
        <div className="tour-info">
          <h4>{item.name}</h4>
          <h4 className="tour-price">${item.price}</h4>
        </div>
        <p>
          {readmore ? item.info : `${item.info.substring(0, 200)}...`}

          <button onClick={() => setreadMore(!readmore)}>
            {readmore ? "show less" : "readmore"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removetour(item.id)}>
          {" "}
          not intrested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
