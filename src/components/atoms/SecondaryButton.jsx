import styled from "styled-components";
import { BaseButon } from "./button/BaseButton";

export const SecondaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButon)`
  background-color: #11999e;
`;
