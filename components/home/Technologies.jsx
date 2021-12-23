import s from "./technologies.module.scss";
import * as icons from "../common/icons";

const Technologies = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.inner}>
        <div className={s.icon}>
          <icons.Html />
        </div>
        <div className={s.icon}>
          <icons.Css />
        </div>
        <div className={s.icon}>
          <icons.Sass />
        </div>
        <div className={s.icon}>
          <icons.React />
        </div>
        <div className={s.icon}>
          <icons.Figma />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
