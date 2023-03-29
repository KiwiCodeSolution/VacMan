/* eslint-disable prettier/prettier */
import * as Icons from 'components/iconsComponents';

interface IStarsProps {
  amount: number;
  active: number;
  large?: boolean;
}

export default function Stars({ amount, active, large }: IStarsProps) {
  const stars = Array.from({ length: amount - active }, (v, i) => i);
  const starsActive = Array.from({ length: active }, (v, i) => i);
  return (
    <ul className="flex gap-x-0.5">
      {starsActive.map((itemActive) => (
        <li key={itemActive}>
          <Icons.Star size={large ? '40' : '14'} className="fill-txt-black" />
        </li>
      ))}
      {stars.map((item) => (
        <li key={item}>
          <Icons.Star size={large ? '40' : '14'} />
        </li>
      ))}
    </ul>
  );
}
