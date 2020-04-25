import React, { FC } from "react";

interface IProps {
  colIndex: number;
  rowIndex: number;
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  return (
    <div>
      |{rowIndex}
      {colIndex}|
    </div>
  );
};

export default Block;
