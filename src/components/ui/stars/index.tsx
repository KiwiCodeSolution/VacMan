/* eslint-disable prettier/prettier */
import * as Icons from 'components/iconsComponents';

interface IStarsProps {
  amount: number;
  active: number;
}

export default function Stars({ amount, active }: IStarsProps) {
  const stars = Array.from({ length: amount - active }, (v, i) => i);
  const starsActive = Array.from({ length: active }, (v, i) => i);
  return (
    <ul className="flex gap-x-0.5">
      {starsActive.map((itemActive) => (
        <li key={itemActive}>
          <Icons.Star fill />
        </li>
      ))}
      {stars.map((item) => (
        <li key={item}>
          <Icons.Star />
        </li>
      ))}
    </ul>
  );
}
