import styled from "styled-components";
import { motion } from "framer-motion";

const StyledHeader = styled(motion.header)`
  position: sticky;
  top: 0.5rem;
  margin: 1rem;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: black;
`;

export default StyledHeader;
