import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
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

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input
        type="text"
        name="from_name"
        placeholder="your full name"
        required
      ></input>
      <input type="text" name="email" placeholder="your email" required></input>
      <textarea name="message" placeholder="your message" required></textarea>
      <button>send </button>
      <div>{result ? <Message /> : null} </div>
    </form>
  );
}
