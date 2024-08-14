import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2024 test Inc.</SFooter>;
};

const SFooter = styled.footer`
  background-color: #2a3f56;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
