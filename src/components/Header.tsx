import { useAppSelector } from 'hooks/reduxHooks';
import * as Icons from './iconsComponents';

const Header = () => {
  const { profile } = useAppSelector(state => state.user);
  return (
    <div className="flex items-center">
      {profile.avatar ? <img src={profile.avatar} className="w-14 h-14 rounded-full" alt="avatar" /> : <Icons.Avatar />}
      <p className="ml-4 w-{178} text-xl text-txt-main">Hello, {profile.name || 'unonymous'}</p>
      <div className="w-{34}">
        <Icons.Bell />
      </div>
    </div>
  );
};
export default Header;
