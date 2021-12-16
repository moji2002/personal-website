import Button from "../common/Button";
import Image from "next/image";
import s from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.imgWrapper}>
        <Image src="/images/hero.jpg" alt="" layout="fill" objectFit="cover" />
      </div>
      <div className={s.inner}>
        <h1>Hello!</h1>
        <h1>I&apos;m Mojtaba Beheshti</h1>
        <p className={s.text}>
          I&apos;m a web developer based in Iran / earth who loves to craft
          attractive web sites and best experiences for others
        </p>
        <div className={s.btnBox}>
          <Button label="Email me" icon="email" />
          <Button primary={false} label="Download CV" icon="download" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
