import Button from "../common/Button";
import s from "./nav.module.scss";

const Nav = () => {
  return (
    <nav className={s.wrapper}>
      <div className={s.inner}>
        <div className={s.logoBox}>
          mb<span>.</span>
        </div>
        <div className={s.btnBox}>
          {/* <Button label="Home" primary={false} />
          <Button label="About" primary={false} />
          <Button label="Services" primary={false} /> */}
        </div>
        <div>
          <Button
            label="contact"
            onClick={() => document.getElementById("contact").scrollIntoView()}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
