import StyledSection from "./styled";
import Article from "../Article";
import ProjectCard from "../ProjectCard";
import ContactForm from "../ContactForm";

export default function Section() {
  return (
    <StyledSection>
      <Article />
      <ProjectCard />
      <ContactForm />
    </StyledSection>
  );
}
