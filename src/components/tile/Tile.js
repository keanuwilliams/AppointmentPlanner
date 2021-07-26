import React from "react";

export const Tile = ({ object }) => {
  const title = Object.values(object)[0];
  const array = Object.values(object);

  return (
    <div className="tile-container">
      <p className="tile-title">{title}</p>
      { array.map((obj, index) => index > 0 && <p className="tile" key={index}>{obj}</p>) }
    </div>
  );
};
