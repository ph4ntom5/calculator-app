import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "./globalstyles";
import Card from "./components/Card";
import Logo from "./components/Logo";

const Wrapper = styled.div`
  height: 100vh;
  background-color: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    padding-top: 21rem;
    margin-bottom: 5rem;
    height: 100vh;
  }
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Logo />
      <Card />
    </Wrapper>
  );
}

export default App;
