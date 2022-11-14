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
      <AnimatedDiv variant="about-me">
        <StyledButton type="button" onClick={handleClick}>
          about me
        </StyledButton>
      </AnimatedDiv>
    );
  }
  return (
    <AnimatedDiv onClick={setIsClicked} variant="about-me">
      <h2>about me</h2>
      <ul>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
      </ul>
    </AnimatedDiv>
  );
}
