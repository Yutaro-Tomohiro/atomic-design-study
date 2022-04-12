import styled from "styled-components";
import { BaseButon } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButon)`
  background-color: #40514e;
`;
