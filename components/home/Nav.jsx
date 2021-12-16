import Image from "next/image";
import Link from "next/link";
import Button from "../common/Button";
import s from "./nav.module.scss";

const Nav = () => {
  return (
    <nav className={s.wrapper}>
      <div className={s.inner}>
        <div className={s.logoBox}>mb.</div>
        <div className={s.btnBox}>
          <Button label="Home" primary={false} />
          <Button label="About" primary={false} />
          <Button label="Services" primary={false} />
        </div>
        <div>
          <Button label="contact"  />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
