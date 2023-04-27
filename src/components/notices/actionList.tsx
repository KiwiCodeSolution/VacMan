import { IAction } from "redux/VacancyQueries";
import ActionElement from "./actionElement";
import Button from "components/ui/button";
import { Link, useLocation, useParams } from "react-router-dom";

const ActionList = ({ actions }: { actions: IAction[] }) => {
  const location = useLocation();
  const { _id } = useParams();
  return (
    <>
      {actions.map(({ date, name, deadline }) => (
        <div key={date}>
          <ActionElement date={date} name={name} deadline={deadline} />
        </div>
      ))}
      <div className="flex flex-raw">
        <div className="ml-[7px] -mt-2 flex h-4 w-4 items-center justify-center rounded-full bg-app-green" />
        <div className="w-16 border-t-2 border-bg-grey" />
      </div>
      <div className="-mt-8 ml-20 w-40">
        <Link to={`/${_id}/addAction`} state={{ from: location }}>
          <Button variant="white" btnType="button">
            New action
          </Button>
        </Link>
      </div>
    </>
  );
};
export default ActionList;
