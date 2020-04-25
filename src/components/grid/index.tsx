import React, { FC } from "react";

const Grid: FC = () => {
  return (
    <div className="">
      {[...Array(9)].map((_, rowIndex) => (
        <div className="">
          {[...Array(9)].map((_, colIndex) => (
            <div data-cy="grid"></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
