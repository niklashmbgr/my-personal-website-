import StyledSection from "./styled";
import Article from "../Article/index";
import ProjectCard from "../ProjectCard";
import ContactForm from "../ContactForm";
import memoji from "../../../public/memoji.png";
import Image from "next/image";
import StyledImageText from "../StyledImageText/styled";
import AnimatedDiv from "../AnimatedDiv/styled";

export default function Section() {
  return (
    <StyledSection>
      <AnimatedDiv
        variant="section"
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <Image
          src={memoji}
          alt="profile memoji"
          width={240}
          height={220}
          priority
        />
        <StyledImageText>Junior Frontend Developer</StyledImageText>
        <Article />
      </AnimatedDiv>
      <ProjectCard />
      <ContactForm />
    </StyledSection>
  );
}
