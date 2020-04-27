import React, { FC, Children } from "react";
import { GRID } from "typings";

import { Container, Row } from "./styles";
import Block from "./block";
import { createFullGrid } from "utils";

const Grid: FC = () => {
  const grid = createFullGrid();
  console.log(grid);

  return (
    <Container>
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row>
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block rowIndex={rowIndex} colIndex={colIndex} />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;
