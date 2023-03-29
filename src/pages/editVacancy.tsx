import * as Icons from "components/iconsComponents";
import { Link, useLocation } from "react-router-dom";

const EditVacancy = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[1];

  return (
    <>
      <button className="flex-none hover:scale-110 focus:scale-110">
        <Link to={`/${id}/details`}>
          <Icons.ArrowBack />
        </Link>
      </button>
      <h2>Edit Vacancy page</h2>
    </>
  );
};
export default EditVacancy;
