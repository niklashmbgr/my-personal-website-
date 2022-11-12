import StyledSection from "./styled";
import ProfileImage from "../Image";
import Article from "../Article";
import ProjectCard from "../ProjectCard";
import ContactForm from "../ContactForm";

export default function Section() {
  return (
    <StyledSection>
      <ProfileImage />
      <Article />
      <ProjectCard />
      <ContactForm />
    </StyledSection>
  );
}
