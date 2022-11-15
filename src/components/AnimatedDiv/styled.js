import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const AnimatedDiv = styled(motion.div)`
  ${({ variant }) =>
    variant === "section" &&
    css`
      display: flex;
      align-items: center;
      flex-direction: column;
    `}
  ${({ variant }) =>
    variant === "projects" &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.5rem;
      margin-top: 1rem;
      border-radius: 2rem;
      background-color: #a8e890;
    `}
    ${({ variant }) =>
    variant === "contact-me" &&
    css`
      padding: 0.5rem;
      margin-top: 1rem;
      border-radius: 2rem;
      background-color: #749f82;
    `}
`;

export default AnimatedDiv;
