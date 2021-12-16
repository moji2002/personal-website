import Image from "next/image";
import s from "./experience.module.scss";

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
              icon="monitor"
              color="purple"
            />
            <JobTitleBox title="Front End Developer" icon="paint" />
            <JobTitleBox title="React enthusiastic" icon="thunder" />
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
        <Image src={`/icons/${icon}.svg`} alt={title} width={30} height={30} />
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
