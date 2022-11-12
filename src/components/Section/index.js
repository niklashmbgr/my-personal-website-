import StyledSection from "./styled";
import ProfileImage from "../Image";
import AnimatedDiv from "../AnimatedDiv/styled";
import Article from "../Article";
import ProjectCard from "../ProjectCard";

export default function Section() {
  return (
    <StyledSection>
      <ProfileImage />
      <AnimatedDiv
        variant="about-me"
        initial={{
          y: 500,
          opacity: 0,
          scale: 1,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <Article />
      </AnimatedDiv>
      <ProjectCard />
    </StyledSection>
  );
}
