import styled from "styled-components";
import Input from "./Input";
import Output from "./Output";

const Calculator = styled.section`
  margin-top: 8rem;
  min-width: 80rem;
  max-width: 85rem;
  height: 45rem;
  border-radius: 2rem;
  background-color: white;
  box-shadow: 0px 25px 30px #b2d9dc;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 600px) {
    position: relative;
    min-width: 100%;
    padding: 8rem 0;
    height: 70rem;
    display: flex;
    flex-direction: column;
    box-shadow: none;
    justify-content: center;
  }
`;

const Card = () => {
  return (
    <Calculator>
      <Input></Input>
      <Output></Output>
    </Calculator>
  );
};

export default Card;
