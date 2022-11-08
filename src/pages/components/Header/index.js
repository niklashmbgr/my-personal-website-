import StyledHeader from "./styled";
import { SocialIcon } from "react-social-icons";

export default function Header() {
  return (
    <StyledHeader>
      <SocialIcon bgColor="transparent" fgColor="white" network="linkedin" />
      <SocialIcon bgColor="transparent" fgColor="white" network="github" />
      <SocialIcon bgColor="transparent" fgColor="white" network="email" />
      <SocialIcon bgColor="transparent" fgColor="white" network="whatsapp" />
    </StyledHeader>
  );
}
