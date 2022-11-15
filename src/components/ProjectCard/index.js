import StyledButton from "../Button/styled";
import { useState } from "react";
import AnimatedDiv from "../AnimatedDiv/styled";
import Image from "next/image";
import cofteaBanner from "../../../public/COFTEAbanner.png";
import Link from "next/link";
import StyledLink from "../Link/styled";
import SVG from "../../../public/SVG/svg";
import StyledText from "../StyledText/styled";
import StyledProjectHeadline from "../StyledProjectHeadline/styled";

export default function ProjectCard() {
  const [isClicked, setIsClicked] = useState(true);
  const handleClick = () => {
    setIsClicked(false);
  };

  if (isClicked) {
    return (
      <AnimatedDiv variant="projects">
        <StyledButton type="button" onClick={handleClick}>
          my projects
        </StyledButton>
      </AnimatedDiv>
    );
  }

  return (
    <>
      <AnimatedDiv variant="projects">
        <StyledButton onClick={setIsClicked}>
          <SVG variant="close" />
        </StyledButton>
        <StyledProjectHeadline>COFTEA</StyledProjectHeadline>
        <Image
          src={cofteaBanner}
          alt="Project COFTEA"
          width={250}
          height={150}
          priority
        />

        <StyledText>
          COFTEA is a fictitious store which sells coffee and tea products.
        </StyledText>
        <StyledText>
          This was my capstone project while studying at neuefische.
        </StyledText>
        <Link href="https://github.com/niklashmbgr/coftea-app" legacyBehavior>
          <StyledLink>Github</StyledLink>
        </Link>
        <Link href="https://coftea.vercel.app/" legacyBehavior>
          <StyledLink>Live Demo</StyledLink>
        </Link>
      </AnimatedDiv>
    </>
  );
}
