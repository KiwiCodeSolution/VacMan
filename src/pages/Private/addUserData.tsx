import AddUserInfoForm from "components/forms/addUserInfoForm";
import NavHeader from "components/navHeader";

const AddUserData = () => {
  return (
    <>
      <NavHeader text="User information" nextAddress="/" />
      <AddUserInfoForm />;
    </>
  );
};
export default AddUserData;
