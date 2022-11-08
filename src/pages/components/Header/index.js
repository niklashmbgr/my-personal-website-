import StyledHeader from "./styled";
import { SocialIcon } from "react-social-icons";

export default function Header() {
  return (
    <StyledHeader>
      <SocialIcon network="linkedin" />
      <SocialIcon network="github" />
      <SocialIcon network="email" />
      <SocialIcon network="whatsapp" />
    </StyledHeader>
  );
}
