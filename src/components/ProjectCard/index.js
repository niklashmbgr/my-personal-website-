import StyledButton from "../Button/styled";
import { useState } from "react";
import AnimatedDiv from "../AnimatedDiv/styled";
import Image from "next/image";
import cofteaBanner from "../../../public/COFTEAbanner.png";
import Link from "next/link";
import StyledLink from "../Link/styled";
import SVG from "../../../public/SVG/svg";

export default function ProjectCard() {
  const [isClicked, setIsClicked] = useState(true);
  const handleClick = () => {
    setIsClicked(false);
  };

  if (isClicked) {
    return (
      <AnimatedDiv
        variant="projects"
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
          duration: 1.2,
        }}
      >
        <StyledButton type="button" onClick={handleClick}>
          my projects
        </StyledButton>
      </AnimatedDiv>
    );
  }

  return (
    <>
      <AnimatedDiv>
        <StyledButton onClick={setIsClicked}>
          <SVG variant="close" />
        </StyledButton>
        <h2>COFTEA</h2>
        <Image
          src={cofteaBanner}
          alt="Project COFTEA"
          width={250}
          height={150}
          priority
        />
        <p>description:</p>
        <Link href="https://github.com/" legacyBehavior>
          <StyledLink>Github</StyledLink>
        </Link>
        <Link href="https://vercel.com/" legacyBehavior>
          <StyledLink>Live Demo</StyledLink>
        </Link>
      </AnimatedDiv>
    </>
  );
}
