import AddUserInfoForm from "components/forms/AddUserInfoForm";
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
