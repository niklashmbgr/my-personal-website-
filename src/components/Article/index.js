import StyledButton from "../Button/styled";
import { useState } from "react";
import AnimatedDiv from "../AnimatedDiv/styled";

export default function Article() {
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    setIsClicked(false);
  };

  if (isClicked) {
    return (
      <StyledButton type="button" onClick={handleClick}>
        about me
      </StyledButton>
    );
  }
  return (
    <AnimatedDiv onClick={setIsClicked}>
      <h2>about me</h2>
      <ul>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
      </ul>
    </AnimatedDiv>
  );
}
