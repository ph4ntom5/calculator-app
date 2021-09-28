import styled from "styled-components";
import Dollar from ".././assets/icon-dollar.svg";
import UserIcon from "../assets/icon-person.svg";
import { useState, useRef } from "react";

const InputArea = styled.section`
  height: 85%;
  width: 45%;
  background-color: white;
  border-radius: 2rem;
  @media (max-width: 600px) {
    min-width: 75%;
    padding: 3rem;
  }
`;

const Heading = styled.text`
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--dark-gray-cyan);
`;
const InputWrapper = styled.section`
  display: flex;
  width: 100%;
  img {
    width: 1.3rem;
    height: 1.6rem;
    position: absolute;
    margin-top: 1.7rem;
    padding-left: 1.5rem;
  }
`;
const BillInput = styled.input`
  width: 100%;
  height: 4rem;
  margin-top: 0.5rem;
  margin-bottom: 4rem;
  border: none;
  border-radius: 0.4rem;
  text-align: right;
  font-size: 2.4rem;
  font-family: "Space Mono";
  font-weight: bold;
  color: var(--very-dark-cyan);
  background-color: var(--light-gray-cyan);
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::number {
    padding-right: 2rem;
  }
  &:focus {
    border: 2px solid var(--button);
    outline: none;
  }
  &::placeholder {
    padding-left: 2rem;
    font-weight: bold;
    font-size: 2.4rem;
    color: var(--dark2-gray-cyan);
    opacity: 0.6;
    text-align: right;
    padding-right: 2rem;
  }
`;

const TipSelect = styled.section`
  margin-top: 1rem;
  margin-bottom: 4.5rem;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr;
  grid-row-gap: 0.1rem;
  width: 100%;
  height: 30%;
`;

const TipButton = styled.button`
  background-color: var(--very-dark-cyan);
  width: 90%;
  height: 4.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: white;
  font-family: "Space Mono";
  font-weight: bold;
  font-size: 2rem;
  transition: 0.4s;

  &:hover {
    background-color: var(--button);
    transition: 0.4s;
  }
`;

const CustomButton = styled.input`
  background-color: var(--light-gray-cyan);
  width: 90%;
  height: 4.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: var(--very-dark-cyan);
  font-family: "Space Mono";
  font-weight: bold;
  font-size: 2rem;
  transition: 0.4s;
  text-align: right;

  &:focus {
    border: 2px solid var(--button);
    outline: none;
  }

  -moz-appearance: textfield;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::placeholder {
    text-align: center;
    color: var(--very-dark-cyan);
  }
`;

const Input = () => {
  const [data, setData] = useState(0);
  const getToPay1 = useRef(0);
  const getValue = (val) => {
    setData(val.target.value);
  };
  return (
    <InputArea>
      <Heading>Bill</Heading>
      <InputWrapper>
        <img src={Dollar} alt="dollar sign icon"></img>
        <BillInput
          id="topay1"
          onChange={getValue}
          type="number"
          placeholder={"00.00"}
        />
      </InputWrapper>
      <Heading>Select Tip %</Heading>
      <TipSelect>
        <TipButton>5%</TipButton>
        <TipButton>10%</TipButton>
        <TipButton>15%</TipButton>
        <TipButton>25%</TipButton>
        <TipButton>50%</TipButton>
        <CustomButton type="number" placeholder="Custom"></CustomButton>
      </TipSelect>

      <Heading>Number of People</Heading>
      <InputWrapper>
        <img src={UserIcon} alt="dollar sign icon"></img>

        <BillInput type="number" />
      </InputWrapper>
    </InputArea>
  );
};

export default Input;
