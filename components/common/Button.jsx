import Image from "next/image";
import s from "./button.module.scss";

const Button = ({ primary = true, label = "Click here", icon, onClick }) => {
  return (
    <button className={`${s.box} ${!primary && s.secondary}`} onClick={onClick}>
      {icon && (
        <div className={s.icon}>
          <Image src={`/icons/${icon}.svg`} width={18} height={14} alt={icon} />
        </div>
      )}
      <div>{label}</div>
    </button>
  );
};

export default Button;
