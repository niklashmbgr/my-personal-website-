import { useTypewriter } from "react-simple-typewriter";
import StyledHeadline from "./styled";

export default function TypeText() {
  const [text] = useTypewriter({
    words: ["Junior Frontend Developer"],
    loop: 1,
  });

  return (
    <>
      <StyledHeadline>{text}</StyledHeadline>
    </>
  );
}
