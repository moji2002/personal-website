import Image from "next/image";
import s from "./contact.module.scss";

const Contact = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.inner}>
        <div className={s.leftHand}>
          <h3 className={s.text1}>Let's</h3>
          <h3 className={s.text1}>Connect</h3>
          <div className={s.socialBox}>
            <SocialIcon icon="linkedin" />
            <SocialIcon icon="github" />
          </div>
        </div>
        <div className={s.rightHand}>
          <Input label="Your name:" />
          <Input label="Your email address:" />

          <Input label="Content:" />
          <SendButton />
        </div>
      </div>
    </section>
  );
};

export default Contact;

const SocialIcon = ({ icon }) => {
  return (
    <div className={s.socialIcon}>
      <Image src={`/icons/${icon}.svg`} alt={icon} width={25} height={25} />
    </div>
  );
};

const Input = ({ label }) => {
  return (
    <div>
      <div className={s.inputLabel}>{label}</div>

      <input className={s.input} type="text" />
    </div>
  );
};

const SendButton = () => {
  return (
    <button className={s.sendButton}>
      <div className= {s.sendButtonText}>Send</div>
      <Image src="/icons/arrow.svg" alt="send" width={30} height={30} />
    </button>
  );
};
