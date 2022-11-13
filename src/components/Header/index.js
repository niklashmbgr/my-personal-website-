import StyledHeader from "./styled";
import { SocialIcon } from "react-social-icons";
import AnimatedDiv from "../AnimatedDiv/styled";

export default function Header() {
  return (
    <StyledHeader>
      <AnimatedDiv>
        <SocialIcon bgColor="transparent" fgColor="white" network="linkedin" />
        <SocialIcon bgColor="transparent" fgColor="white" network="github" />
      </AnimatedDiv>
      <AnimatedDiv>
        <SocialIcon bgColor="transparent" fgColor="white" network="email" />
        <SocialIcon bgColor="transparent" fgColor="white" network="whatsapp" />
      </AnimatedDiv>
    </StyledHeader>
  );
}
