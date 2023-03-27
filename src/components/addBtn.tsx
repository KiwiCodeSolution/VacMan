import * as Icons from './iconsComponents';

const AddBtn = ({ clickFn }: { clickFn: () => void }) => (
  <button className="relative flex h-14 w-14" onClick={() => clickFn()}>
    <span className="animate-ping absolute inline-flex h-14 w-14 rounded-full bg-bg-black opacity-75" />
    <span className="relative inline-flex rounded-full h-14 w-14 bg-bg-black p-4">
      <Icons.Plus />
    </span>
  </button>
);
export default AddBtn;
