import React, { useState } from "react";
import Counter from "./components/UseStateCounter";
import EffectComponent from "./components/UseEffectQuote";
import ReducerComponent from "./components/ReducerComponent";
import styled from "styled-components";

const OuterContainer = styled.div`
  background-color: cyan;
  padding: 6px 6px;
  margin-top: 10px;
  margin-bottom: 21px;
  border-radius: 10px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 25px 0px #222222;
`;

const InnerContainer = styled.div`
  background-color: #222222;
  color: white;
  padding: 10px 10px;
  text-align: center;
  margin-top: 6px;
  margin-bottom: 6px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0px 0px 20px 0px deeppink;
`;

const MainHeading = styled.h1`
  color: deeppink;
  font-size: 44px;
  padding: 0;
  margin: 10px 10px;
  text-shadow: 2px 2px 4px #222222;
`;

const SectionHeading = styled.h3`
  color: cyan;
  font-size: 16px;
  font-weight: normal;
  padding: 0;
`;

function App() {
  const [theme, setTheme] = useState("light");

  const contextValue = {
    name: theme,
    setTheme: setTheme,
  };

  return (
    <OuterContainer>
      <MainHeading>Learning Hooks:</MainHeading>
      <InnerContainer>
        <SectionHeading>
          First, we have a simple counter using the useState hook:
        </SectionHeading>
        <Counter />
      </InnerContainer>
      <InnerContainer>
        <SectionHeading>
          Then we have a useEffect component, fresh with Star Wars:
        </SectionHeading>
        <EffectComponent />
      </InnerContainer>
      <InnerContainer>
        <SectionHeading>
          Finally, we have a useReducer component doing more counting:
        </SectionHeading>
        <ReducerComponent />
      </InnerContainer>
    </OuterContainer>
  );
}

export default App;
