interface IButton {
  children: string | JSX.Element | JSX.Element[];
  variant?: 'black' | 'white';
  btnType?: 'submit' | 'button' | 'reset' | undefined;
  clickFn?: (() => void) | undefined;
}

// eslint-disable-next-line prettier/prettier
const button = 'flex bg-black rounded-xl border mx-auto my-6 py-3 h-12 w-11/12 justify-center text-base items-center font-bold';

export default function Button({ children, variant, btnType, clickFn }: IButton) {
  const currentStyle = variant
    ? `${button} text-txt-${variant === 'black' ? 'white' : 'main'} bg-bg-${variant}`
    : button;
  const handleClick = () => (clickFn ? clickFn() : null);
  return (
    <button type={btnType || 'button'} className={currentStyle} onClick={handleClick}>
      {children}
    </button>
  );
}
