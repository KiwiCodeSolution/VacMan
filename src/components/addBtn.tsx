import { Link } from "react-router-dom";
import * as Icons from "./iconsComponents";

const AddBtn = () => (
  <Link to="0/add">
    <button className="relative flex h-14 w-14">
      <span className="animate-ping absolute top-2 left-2 inline-flex h-10 w-10 rounded-full bg-bg-black opacity-75" />
      <span className="relative inline-flex rounded-full h-14 w-14 bg-bg-black p-4">
        <Icons.Plus size={24} className="text-txt-white" />
      </span>
    </button>
  </Link>
);
export default AddBtn;
