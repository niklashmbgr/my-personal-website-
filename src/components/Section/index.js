import StyledSection from "./styled";
import Article from "../Article";
import ProjectCard from "../ProjectCard";
import ContactForm from "../ContactForm";
import memoji from "../../../public/memoji.png";
import Image from "next/image";

export default function Section() {
  return (
    <StyledSection>
      <Image
        src={memoji}
        alt="profile memoji"
        width={240}
        height={220}
        priority
      />
      <Article />
      <ProjectCard />
      <ContactForm />
    </StyledSection>
  );
}
