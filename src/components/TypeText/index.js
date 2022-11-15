import { useTypewriter } from "react-simple-typewriter";
import StyledHeadline from "./styled";

export default function TypeText() {
  const [text] = useTypewriter({
    words: ["Hello, I'm Niklas"],
    loop: 1,
  });

  return (
    <>
      <StyledHeadline>{text}</StyledHeadline>
    </>
  );
}
