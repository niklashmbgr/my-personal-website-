import StyledHeader from "./styled";
import { SocialIcon } from "react-social-icons";
import AnimatedDiv from "../AnimatedDiv/styled";

export default function Header() {
  return (
    <StyledHeader
      initial={{
        opacity: 0,
        scale: 1,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <AnimatedDiv
        initial={{
          x: -400,
          opacity: 1,
          scale: 1,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <SocialIcon bgColor="transparent" fgColor="white" network="linkedin" />
        <SocialIcon bgColor="transparent" fgColor="white" network="github" />
      </AnimatedDiv>
      <AnimatedDiv
        initial={{
          x: 400,
          opacity: 1,
          scale: 1,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <SocialIcon bgColor="transparent" fgColor="white" network="email" />
        <SocialIcon bgColor="transparent" fgColor="white" network="whatsapp" />
      </AnimatedDiv>
    </StyledHeader>
  );
}
