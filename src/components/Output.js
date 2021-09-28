import styled from "styled-components";

const Screen = styled.section`
  height: 85%;
  width: 45%;
  border-radius: 2rem;
  background-color: var(--very-dark-cyan);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    min-width: 75%;
    padding: 3rem;
    margin-bottom: 6rem;
  }
`;

const Button = styled.button`
  margin-top: 13rem;
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

  @media (max-width: 600px) {
    margin-top: 6rem;
  }

  &:hover {
    background-color: var(--bg);
    transition: 0.4s;
  }
`;

const Amount = styled.section`
  width: 85%;
  margin-top: 5rem;
  margin-bottom: -2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  span {
    font-size: 1.6rem;
    color: var(--light-gray-cyan);
    font-weight: bold;

    p {
      margin-top: -0.1rem;
      font-size: 1.2rem;
      color: var(--dark2-gray-cyan);
    }
  }
`;

const Result = styled.text`
  margin-top: -1.2rem;
  font-size: 4.2rem;
  color: var(--primary-color);
  font-weight: bold;
`;

const Output = () => {
  return (
    <Screen>
      <Amount>
        <span>
          Tip Amount
          <p>/ person</p>
        </span>
        <Result>$4.27</Result>
      </Amount>
      <Amount>
        <span>
          Total
          <p>/ person</p>
        </span>
        <Result></Result>
      </Amount>
      <Button>RESET</Button>
    </Screen>
  );
};

export default Output;
