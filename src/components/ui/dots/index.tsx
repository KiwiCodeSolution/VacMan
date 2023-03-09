import './styles.css';

interface IDotsProps {
  amount: number;
  activeIndex: number;
}

export default function Dots({ amount, activeIndex }: IDotsProps) {
  const dots = Array.from({ length: amount - 1 }, (v, i) => i);
  console.log(dots);
  return (
    <div className="dots">
      {dots.map((item, index) => (
        <div key={item} className={`dots__item${index === activeIndex ? ' dots__item_active' : ''}`} />
      ))}
      {/* <div className="dots__item" /> */}
    </div>
  );
}
