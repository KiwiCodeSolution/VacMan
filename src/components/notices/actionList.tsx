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
        <div key={deadline}>
          <ActionElement date={date} name={name} deadline={deadline} />
        </div>
      ))}
      <Link to={`/${_id}/addAction`} state={{ from: location }}>
        <Button variant="white" btnType="button">
          New action
        </Button>
      </Link>
    </>
  );
};
export default ActionList;
