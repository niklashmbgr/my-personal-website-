import StyledSection from "./styled";
import ProfileImage from "../Image";
import AnimatedDiv from "../AnimatedDiv/styled";
import Article from "../Article";
import ProjectCard from "../ProjectCard";

export default function Section() {
  return (
    <StyledSection>
      <ProfileImage />
      <Article />
      <ProjectCard />
    </StyledSection>
  );
}
