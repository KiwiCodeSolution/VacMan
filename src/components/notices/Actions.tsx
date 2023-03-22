import { IAction } from './ShortNotice';

const Actions = ({ name, deadline }: IAction) => {
  return (
    // <div className="flex justify-between text-txt-main">
    //   <div className="flex-1">
    //     <p>{name} </p>
    //   </div>
    //   <div className="flex-none">
    //     <p className="font-medium mb-2">{deadline}</p>
    //   </div>
    // </div>
  );
};

export default Actions;
