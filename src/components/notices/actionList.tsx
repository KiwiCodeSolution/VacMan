import { IAction } from "redux/VacancyQueries";
import ActionElement from "./actionElement";
import Button from "components/ui/button";

const ActionList = ({ actions }: { actions: IAction[] }) => {
  return (
    <>
      <p>Action List</p>
      {actions.map(({ date, name, deadline }) => (
        <li key={deadline}>
          <ActionElement date={date} name={name} deadline={deadline} />
        </li>
      ))}
      <Button variant="white" btnType="button">
        Add new action
      </Button>
    </>
  );
};
export default ActionList;
