interface IButton {
  children: string | JSX.Element | JSX.Element[];
  variant?: "black" | "white";
  btnType?: "submit" | "button" | "reset" | undefined;
  clickFn?: (() => void) | undefined;
}

// eslint-disable-next-line prettier/prettier
const button =
  "flex rounded-xl mx-auto py-3 h-12 w-11/12 max-w-[300px] justify-center border border-txt-black text-base items-center font-bold hover:shadow-[0_5px_20px_-5px_rgba(0,0,0,0.3)] focus:shadow-[0_5px_20px_-5px_rgba(0,0,0,0.3)]";

export default function Button({ children, variant, btnType, clickFn }: IButton) {
  const currentStyle = variant
    ? `${button} text-txt-${variant === "black" ? "white" : "main"} bg-bg-${variant}`
    : button;
  const handleClick = () => (clickFn ? clickFn() : null);
  return (
    <button type={btnType || "button"} className={currentStyle} onClick={handleClick}>
      {children}
    </button>
  );
}
