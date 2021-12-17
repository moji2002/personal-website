import Image from "next/image";
import s from "./contact.module.scss";
import toast from "react-hot-toast";
import { useRef, useState } from "react";
import validateEmail from "../../lib/validateEmail";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const contentRef = useRef();
  const buttonRef = useRef();

  const initialState = { value: "", error: false };

  const [nameInput, setNameInput] = useState(initialState);
  const [emailInput, setEmailInput] = useState(initialState);
  const [contentInput, setContentInput] = useState(initialState);

  const handleSendClick = async () => {
    if (nameInput.value.length < 3) {
      setNameInput((prev) => ({ ...prev, error: true }));
      return toast("What was your name?");
    }

    if (!validateEmail(emailInput.value)) {
      setEmailInput((prev) => ({ ...prev, error: true }));
      return toast("Check your Email please!");
    }

    if (contentInput.value.length < 5) {
      setContentInput((prev) => ({ ...prev, error: true }));
      return toast("Just that?");
    }

    const promise = fetch(window.location.href + "/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameInput.value,
        email: emailInput.value,
        content: contentInput.value,
      }),
    });

    toast.promise(promise, {
      loading: "Loading",
      success: "Got the info, tnx for contacting me",
      error: "Error",
    });

    // clear inputs
    setNameInput((prev) => ({ ...prev, value: "" }));
    setEmailInput((prev) => ({ ...prev, value: "" }));
    setContentInput((prev) => ({ ...prev, value: "" }));
  };

  return (
    <section id="contact" className={s.wrapper}>
      <div className={s.inner}>
        <div className={s.leftHand}>
          <h3 className={s.text1}>Let&apos;s</h3>
          <h3 className={s.text1}>Connect</h3>
          <div className={s.socialBox}>
            <SocialIcon
              icon="linkedin"
              onClick={() =>
                window.open("https://www.linkedin.com/in/mojtaba-beheshti/")
              }
            />
            <SocialIcon
              icon="github"
              onClick={() => window.open("https://github.com/moji2002")}
            />
          </div>
        </div>
        <div className={s.rightHand}>
          <Input
            inputRef={nameRef}
            error={nameInput.error}
            label="Your name:"
            setInput={setNameInput}
            value={nameInput.value}
            nextFocusRef={emailRef}
          />
          <Input
            inputRef={emailRef}
            error={emailInput.error}
            label="Your email address:"
            setInput={setEmailInput}
            value={emailInput.value}
            nextFocusRef={contentRef}
          />
          <Input
            inputRef={contentRef}
            error={contentInput.error}
            label="Content:"
            setInput={setContentInput}
            value={contentInput.value}
            nextFocusRef={buttonRef}
          />
          <SendButton buttonRef={buttonRef} onClick={handleSendClick} />
        </div>
      </div>
    </section>
  );
};

export default Contact;

const SocialIcon = ({ icon, onClick }) => {
  return (
    <div className={s.socialIcon} onClick={onClick}>
      <Image src={`/icons/${icon}.svg`} alt={icon} width={25} height={25} />
    </div>
  );
};

const Input = ({ label, inputRef, error, setInput, value, nextFocusRef }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && nextFocusRef) {
      nextFocusRef.current?.focus();
    }
  };
  return (
    <div>
      <div className={s.inputLabel}>{label}</div>
      <input
        onKeyDown={handleKeyDown}
        ref={inputRef}
        value={value}
        className={`${s.input} ${error && s.inputError}`}
        type="text"
        onChange={(e) => setInput({ value: e.target.value, error: false })}
      />
    </div>
  );
};

const SendButton = ({ onClick, buttonRef }) => {
  return (
    <button onClick={onClick} className={s.sendButton} ref={buttonRef}>
      <div className={s.sendButtonText}>Send</div>
      <Image src="/icons/arrow.svg" alt="send" width={30} height={30} />
    </button>
  );
};
