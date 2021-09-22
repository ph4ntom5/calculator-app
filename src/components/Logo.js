import styled from "styled-components";

const Splitter = styled.text`
  color: --dark2-gray-cyan;
  opacity: 0.6;
  letter-spacing: 1rem;
  font-size: 2.4rem;
  font-weight: 700;
`;

const Logo = () => {
  return (
    <Splitter>
      SPLI
      <br />
      TTER
    </Splitter>
  );
};

export default Logo;
