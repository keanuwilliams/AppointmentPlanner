import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ objs }) => {
  return (
    <div>
      {objs.map((object, index) => <Tile object={object} key={index} />)}
    </div>
  );
};
