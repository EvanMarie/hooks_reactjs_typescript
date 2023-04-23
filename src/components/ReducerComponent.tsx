import React, { useReducer } from "react";
import styled from "styled-components";

const ComponentText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: deeppink;
  margin: 0;
  padding: 8px 8px;
`;

const Button = styled.button`
  background-color: deeppink;
  border: none;
  color: white;
  box-shadow: 0px 0px 5px 0px cyan;
  font-size: 23px;
  margin: 10px 10px;
  width: 100px;
  padding: 8px 8px;
  text-align: center;
  border-radius: 5px;
`;

interface State {
  count: number;
  isEven: boolean;
}

type Action = { type: "increment" } | { type: "decrement" };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
        isEven: (state.count + 1) % 2 === 0,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
        isEven: (state.count - 1) % 2 === 0,
      };
    default:
      throw new Error("Invalid Action Type.");
  }
}

function ReducerCounter() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    isEven: false,
  });
  return (
    <div>
      <Button onClick={() => dispatch({ type: "increment" })}>+</Button>
      <Button onClick={() => dispatch({ type: "decrement" })}>-</Button>
      <ComponentText>Our current number state is: {state.count}</ComponentText>
      <ComponentText>
        {" "}
        We are in an {state.isEven ? "even" : "odd"} state.
      </ComponentText>
    </div>
  );
}

export default ReducerCounter;
