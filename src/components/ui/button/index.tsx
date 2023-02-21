import './styles.css';

interface IButton {
  children: string;
  variant?: 'dark' | 'orange';
  btnType?: 'submit' | 'button' | 'reset' | undefined;
  clickFn?: (() => void) | undefined;
}

export default function Button({ children, variant, btnType, clickFn }: IButton) {
  const currentStyle = variant ? `btn btn_${variant}` : `btn`;
  const handleClick = () => {
    if (clickFn) {
      clickFn();
    }
  };
  return (
    <button type={btnType || 'button'} className={currentStyle} onClick={handleClick}>
      {children}
    </button>
  );
}
