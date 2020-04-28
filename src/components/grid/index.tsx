import React, { FC, Children, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import { createGrid, IReducer } from "reducers";
import useMousetrap from "react-hook-mousetrap";

import { Container, Row } from "./styles";
import Block from "./block";
import { INDEX, BLOCK_COORDS } from "typings";

interface IState {
  selectedBlock?: BLOCK_COORDS;
}

const Grid: FC = () => {
  const state = useSelector<IReducer, IState>(({ selectedBlock }) => ({
    selectedBlock,
  }));
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const create = useCallback(() => dispatch(createGrid()), [dispatch]);
  useEffect(() => {
    create();
  }, [create]);

  function moveDown() {
    if (state.selectedBlock) console.log("down");
  }

  function moveLeft() {
    if (state.selectedBlock) console.log("left");
  }

  function moveRight() {
    if (state.selectedBlock) console.log("right");
  }

  function moveUp() {
    if (state.selectedBlock) console.log("up");
  }

  useMousetrap("down", moveDown);
  useMousetrap("left", moveLeft);
  useMousetrap("right", moveRight);
  useMousetrap("up", moveUp);

  return (
    <Container>
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row>
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block
                  rowIndex={rowIndex as INDEX}
                  colIndex={colIndex as INDEX}
                />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;
