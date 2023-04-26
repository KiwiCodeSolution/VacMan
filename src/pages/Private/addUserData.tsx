import AddUserInfoForm from "components/forms/AddUserInfoForm";
import NavHeader from "components/navHeader";
import { useLocation } from "react-router-dom";

const AddUserData = () => {
  const location = useLocation();
  return (
    <>
      <NavHeader
        prevAddress={location?.state?.from.pathname ?? "/"}
        bg="bg-light"
        text="User information"
        skip="/"
        underlined
      />
      <div className="container mx-auto px-4">
        <AddUserInfoForm />
      </div>
    </>
  );
};
export default AddUserData;
