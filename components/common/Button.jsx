import Image from "next/image";
import s from "./button.module.scss";

const Button = ({
  variant = "primary",
  label = "Click here",
  icon,
  onClick,
}) => {
  return (
    <button
      className={`${s.box} ${variant !== "primary" && s.secondary}`}
      onClick={onClick}
    >
      {icon && (
        <div className={s.icon}>
          {icon}
        </div>
      )}
      <div>{label}</div>
    </button>
  );
};

export default Button;
