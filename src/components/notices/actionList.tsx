import { IAction } from "redux/VacancyQueries";
import ActionElement from "./actionElement";
import Button from "components/ui/button";
import { Link, useLocation, useParams } from "react-router-dom";

const ActionList = ({ actions }: { actions: IAction[] }) => {
  const location = useLocation();
  const { _id } = useParams();

  const disabledButton = !actions[actions.length - 1].fulfilled;

  return (
    <div className="relative overflow-hidden py-2">
      <div className="animate-slide">
        {actions.map(({ date, name, deadline }) => (
          <div key={date}>
            <ActionElement date={date} name={name} deadline={deadline} />
          </div>
        ))}
      </div>
      <div className="animate-show">
        <div className="flex flex-raw">
          <div className="ml-2 -mt-2 h-4 w-4 rounded-full bg-bg-black" />
          <div className="w-16 border-t-2 border-bg-grey" />
        </div>
        <div className="-mt-8 ml-20 w-48">
          <Link to={`/${_id}/addAction`} state={{ from: location }}>
            <Button variant="white" btnType="button" disabled={disabledButton}>
              New action
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ActionList;
