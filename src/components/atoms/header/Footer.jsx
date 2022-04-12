import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2022 test Inc.</SFooter>;
};

const SFooter = styled.footer`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
