import Image from "next/image";
import s from "./technologies.module.scss";

const Technologies = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.inner}>
        <Item img="html" />
        <Item img="css" />
        <Item img="sass" />
        <Item img="react" />
        <Item img="figma" />
      </div>
    </section>
  );
};

export default Technologies;

const Item = ({ img }) => {
  return (
    <div className={s.item}>
      <Image src={`/icons/${img}.svg`} width={100} height={100} alt={img} />
    </div>
  );
};
