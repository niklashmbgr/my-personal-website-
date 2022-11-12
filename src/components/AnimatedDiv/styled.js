import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const AnimatedDiv = styled(motion.div)`
  ${({ variant }) =>
    variant === "about-me" &&
    css`
      padding: 0.5rem;
      margin-top: 1rem;
      border-radius: 2rem;
      background-color: #99c4c8;
    `}
  ${({ variant }) =>
    variant === "projects" &&
    css`
      padding: 0.5rem;
      margin-top: 1rem;
      border-radius: 2rem;
      background-color: #c7d36f;
    `}
`;

export default AnimatedDiv;
