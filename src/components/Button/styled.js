import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background: transparent;
  border: none;
  font-family: "Poppins";
  font-size: 1.5rem;

  ${({ variant }) =>
    variant === "send" &&
    css`
      padding: 0.5rem;
      margin-top: 1rem;
      border-radius: 2rem;
      background-color: #ff7171;
    `}
`;

export default StyledButton;
