import s from "./experience.module.scss";
import * as icons from "../common/icons";

const Experience = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.inner}>
        <div className={s.leftHand}>
          <div className={s.text1}>2+</div>
          <div className={s.text2}>Years</div>
          <div className={s.text2}>Experience</div>
          <div className={s.text2}>Working</div>
        </div>

        <div className={s.rightHand}>
          <h3 className={s.text3}>Developer specialized in frontend </h3>
          <div className={s.jobTitleContainer}>
            <JobTitleBox
              title="Node.js Experience"
              icon={<icons.Monitor />}
              color="purple"
            />
            <JobTitleBox title="Front End Developer" icon={<icons.Paint />} />
            <JobTitleBox title="React enthusiastic" icon={<icons.Thunder />} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

const JobTitleBox = ({ color = "gray", icon, title }) => {
  return (
    <div className={`${s.jobBox} ${s[color]}`}>
      <div className={s.jobInner}>
        {icon}
        <h3
          style={{ color: color === "gray" ? "#000" : "#fff" }}
          className={s.jobTitle}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};
