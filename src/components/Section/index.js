import StyledSection from "./styled";
import ProfileImage from "../Image";
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
