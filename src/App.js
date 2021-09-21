import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "./globalstyles";

const Wrapper = styled.div`
  height: 100vh;
  background-color: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Card = styled.section`
  margin-top: 8rem;
  min-width: 80rem;
  max-width: 85rem;
  height: 40rem;
  border-radius: 2rem;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`;

const InputArea = styled.section`
  height: 85%;
  width: 45%;
  background-color: white;
  border-radius: 2rem;
`;

const Screen = styled.section`
  height: 85%;
  width: 45%;
  border-radius: 2rem;
  background-color: var(--very-dark-cyan);
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 85%;
  height: 5.5rem;
  background-color: var(--button);
  color: var(--very-dark-cyan);
  cursor: pointer;
  border: none;
  border-radius: 0.6rem;
  font-weight: bold;
  font-family: "Space Mono";
  font-size: 2.4rem;
  transition: 0.4s;

  &:hover {
    background-color: var(--bg);
    transition: 0.4s;
  }
`;

const Headline = styled.text`
  color: --dark2-gray-cyan;
  opacity: 0.6;
  letter-spacing: 1rem;
  font-size: 2.4rem;
  font-weight: 700;
`;
function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Headline>
        SPLI
        <br />
        TTER
      </Headline>
      <Card>
        <InputArea></InputArea>
        <Screen>
          <Button>RESET</Button>
        </Screen>
      </Card>
    </Wrapper>
  );
}

export default App;
