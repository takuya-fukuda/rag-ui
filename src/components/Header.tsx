import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <H1>RAGSYSTEM</H1>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #2a3f56;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

const H1 = styled.h1`
  margin: 0 8px;
`;
