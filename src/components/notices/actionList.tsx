import { IAction } from "redux/VacancyQueries";
import ActionElement from "./actionElement";
import Button from "components/ui/button";
import { Link, useLocation, useParams } from "react-router-dom";

const ActionList = ({ actions }: { actions: IAction[] }) => {
  const location = useLocation();
  const { _id } = useParams();

  const animationTime = `${actions.length + 1}s`;

  return (
    // <div className="animate-slide overflow-hidden">
    <div>
      {actions.map(({ date, name, deadline }, index) => (
        <div key={date}>
          <ActionElement date={date} name={name} deadline={deadline} index={index} />
        </div>
      ))}
      <div className={`animate__animated animate__fadeInDown animate__delay-${animationTime}`}>
        <div className="flex flex-raw">
          <div className="ml-2 -mt-2 h-4 w-4 rounded-full bg-bg-black" />
          <div className="w-16 border-t-2 border-bg-grey" />
        </div>
        <div className="-mt-8 ml-20 w-48">
          <Link to={`/${_id}/addAction`} state={{ from: location }}>
            <Button variant="white" btnType="button">
              New action
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ActionList;
