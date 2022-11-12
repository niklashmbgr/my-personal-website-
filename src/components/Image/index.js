import Image from "next/image";
import AnimatedDiv from "../AnimatedDiv/styled";

export default function ProfileImage() {
  return (
    <AnimatedDiv
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <Image
        src="/memoji.png"
        alt="profile memoji"
        width={150}
        height={150}
        priority
      />
    </AnimatedDiv>
  );
}
