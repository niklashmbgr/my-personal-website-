import StyledSection from "./styled";
import ProfileImage from "../Image";
import AnimatedDiv from "../AnimatedDiv/styled";
import Article from "../Article";

export default function Section() {
  return (
    <StyledSection>
      <ProfileImage />
      <AnimatedDiv variant="about-me">
        <Article />
      </AnimatedDiv>
    </StyledSection>
  );
}
