import StyledHeader from "./styled";
import { SocialIcon } from "react-social-icons";
import AnimatedDiv from "../AnimatedDiv/styled";
import StyledSpan from "../StyledSpan/styled";

export default function Header() {
  return (
    <StyledHeader
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <AnimatedDiv
        initial={{
          opacity: 1,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <StyledSpan>menu</StyledSpan>
      </AnimatedDiv>
      <AnimatedDiv
        initial={{
          opacity: 1,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <SocialIcon bgColor="transparent" fgColor="white" network="linkedin" />
        <SocialIcon bgColor="transparent" fgColor="white" network="github" />
        <SocialIcon bgColor="transparent" fgColor="white" network="email" />
      </AnimatedDiv>
    </StyledHeader>
  );
}
