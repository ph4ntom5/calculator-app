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
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
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
