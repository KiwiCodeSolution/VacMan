import * as Icons from '../img/iconsComponents';

const AddBtn = () => (
  <span className="relative flex h-14 w-14">
    <span className="animate-ping absolute inline-flex h-14 w-14 rounded-full bg-slate-400 opacity-75" />
    <span className="relative inline-flex rounded-full h-14 w-14 bg-slate-900 p-4">
      <Icons.Plus />
    </span>
  </span>
);
export default AddBtn;
