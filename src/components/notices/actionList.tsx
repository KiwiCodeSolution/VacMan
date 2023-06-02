/* eslint-disable react/no-array-index-key */
import { IAction } from "redux/VacancyQueries";
import ActionElement from "./actionElement";
import Button from "components/ui/button";
import { Link, useLocation, useParams } from "react-router-dom";

const ActionList = ({ actions, isArchived }: { actions: IAction[]; isArchived?: boolean | undefined }) => {
  const location = useLocation();
  const { _id } = useParams();

  const disabledButton = !actions[actions.length - 1].fulfilled || isArchived;

  return (
    <div className="relative overflow-hidden py-2">
      <div className="animate-slide">
        {actions.map((action, index) => (
          <div key={action.date + index}>
            <ActionElement action={action} />
          </div>
        ))}
      </div>
      <div className="animate-show">
        <div className="flex flex-raw">
          <div className="ml-2 -mt-2 h-4 w-4 rounded-full bg-bg-black" />
          <div className="w-14 border-t-2 border-bg-grey" />
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
