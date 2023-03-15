import './styles.css';

interface IButton {
  children: string;
  variant?: 'black' | 'white';
  btnType?: 'submit' | 'button' | 'reset' | undefined;
  clickFn?: (() => void) | undefined;
}

const button = 'flex bg-black rounded-md border mx-auto my-6 py-3 h-12 w-11/12 justify-center items-center font-bold';

export default function Button({ children, variant, btnType, clickFn }: IButton) {
  const currentStyle = variant
    ? `${button} text-txt-${variant === 'black' ? 'white' : 'black'} bg-bg-${variant}`
    : button;
  const handleClick = () => (clickFn ? clickFn() : null);
  return (
    <button type={btnType || 'button'} className={currentStyle} onClick={handleClick}>
      {children}
    </button>
  );
}
