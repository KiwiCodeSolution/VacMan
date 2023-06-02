import { effectButton } from "utils/stylesHelpers";

interface IButton {
  children: string | JSX.Element | JSX.Element[];
  variant?: "black" | "white";
  btnType?: "submit" | "button" | "reset" | undefined;
  clickFn?: (() => void) | undefined;
  disabled?: boolean | undefined;
  icon?: string | JSX.Element | JSX.Element[] | undefined;
}

// eslint-disable-next-line prettier/prettier

export default function Button({ children, variant, btnType, clickFn, disabled, icon }: IButton) {
  const disabledButtonStyle = disabled ? `border-txt-grey` : `${effectButton} border-txt-black`;

  const button = `flex rounded-xl mx-auto py-3 h-12 w-full max-w-[300px] justify-center border text-base items-center font-bold ${disabledButtonStyle}`;

  const currentStyle = variant
    ? `${button} text-txt-${variant === "black" ? "white" : "main"} bg-bg-${variant}`
    : button;
  const handleClick = () => (clickFn ? clickFn() : null);
  return (
    <button type={btnType || "button"} className={currentStyle} onClick={handleClick} disabled={disabled}>
      {icon}
      {children}
    </button>
  );
}
