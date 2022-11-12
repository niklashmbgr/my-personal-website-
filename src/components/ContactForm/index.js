import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import StyledButton from "../Button/styled";
import AnimatedDiv from "../AnimatedDiv/styled";
import StyledForm from "./styled";

export default function ContactForm() {
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    setIsClicked(false);
  };
  const [result, showResult] = useState(false);
  const Message = () => {
    return (
      <>
        <span>Your message has been successfully sent! </span>
        <span> i will contact you as soon as possible </span>
      </>
    );
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_agoq3kd",
        "template_iohyuus",
        form.current,
        "OnT8t2Z0TTsEfSTHI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  if (isClicked) {
    return (
      <>
        <AnimatedDiv
          variant="contact-me"
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
            duration: 1.4,
          }}
        >
          <StyledButton type="button" onClick={handleClick}>
            contact me
          </StyledButton>
        </AnimatedDiv>
      </>
    );
  }

  return (
    <AnimatedDiv>
      <StyledForm ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="from_name"
          placeholder="your full name"
          required
        ></input>
        <input
          type="text"
          name="email"
          placeholder="your email"
          required
        ></input>
        <textarea name="message" placeholder="your message" required></textarea>
        <StyledButton variant="send">send </StyledButton>
        {result ? <Message /> : null}
      </StyledForm>
    </AnimatedDiv>
  );
}
