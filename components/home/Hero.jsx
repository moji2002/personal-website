import Button from "../common/Button";
import Image from "next/image";
import s from "./hero.module.scss";
import * as icons from "../common/icons";
import { useState } from "react";

const Hero = () => {
  const [isImageLoaded, setImageLoaded] = useState(false);
  return (
    <div className={s.wrapper}>
      <div
        className={s.imgWrapper}
        style={{ opacity: isImageLoaded ? 0.3 : 0 }}
      >
        <Image
          src="/images/hero.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
          sizes="50vw"
          onLoadingComplete={() => setImageLoaded(true)}
        />
      </div>
      <div className={s.inner}>
        <h1 className={s.headerText}>Hello!</h1>
        <h1 className={s.headerText}>I&apos;m Mojtaba Beheshti</h1>
        <p className={s.text}>
          I&apos;m a web developer based in Iran/earth who loves to craft
          attractive web sites and best experiences for users
        </p>
        <div className={s.btnBox}>
          <Button
            label="Email me"
            icon={<icons.Email />}
            onClick={() => window.open("mailto: moji2002@gmail.com")}
          />
          {/* <Button
            primary={false}
            label="Download CV"
            icon="download"
            onClick={() => window.open("/Resume-Mojtaba-beheshti.pdf")}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
