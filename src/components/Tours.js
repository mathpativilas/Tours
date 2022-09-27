import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removetour }) => {
  return (
    <section className="title">
      <h2>ours tours</h2>
      <div className="underline"></div>
      {tours.map((item) => {
        return <Tour removetour={removetour} key={item.id} item={item} />;
      })}
    </section>
  );
};

export default Tours;
