interface IButton {
  children: string | JSX.Element | JSX.Element[];
  variant?: "black" | "white";
  btnType?: "submit" | "button" | "reset" | undefined;
  clickFn?: (() => void) | undefined;
  disabled?: boolean | undefined;
}

// eslint-disable-next-line prettier/prettier
export const effectButton =
  "hover:shadow-[0_5px_20px_-5px_rgba(0,0,0,0.3)] focus:shadow-[0_5px_20px_-5px_rgba(0,0,0,0.3)]";

export default function Button({ children, variant, btnType, clickFn, disabled }: IButton) {
  const disabledButtonStyle = disabled ? `border-txt-grey` : `${effectButton} border-txt-black`;

  const button = `flex rounded-xl mx-auto py-3 h-12 w-11/12 max-w-[300px] justify-center border text-base items-center font-bold ${disabledButtonStyle}`;

  const currentStyle = variant
    ? `${button} text-txt-${variant === "black" ? "white" : "main"} bg-bg-${variant}`
    : button;
  const handleClick = () => (clickFn ? clickFn() : null);
  return (
    <button type={btnType || "button"} className={currentStyle} onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
}
