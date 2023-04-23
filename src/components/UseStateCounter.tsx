
import React, { useState } from "react";
import styled from "styled-components";

const ComponentText = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: deeppink;
  padding: 0;
`;

const Button = styled.button`
  background-color: deeppink;
  border: none;
  color: white;
  font-family: monospace;
  font-weight: bold;
  box-shadow: 0px 0px 5px 0px cyan;
  font-size: 16px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5px;
`;

function StateComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>Click Me to Count</Button>
      <ComponentText>You clicked {count} times!</ComponentText>
    </div>
  );
}

export default StateComponent;
