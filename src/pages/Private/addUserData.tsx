import AddUserInfoForm from "components/forms/AddUserInfoForm";
import NavHeader from "components/navHeader";

const AddUserData = () => {
  return (
    <>
      <NavHeader bg="bg-light" text="User information" skip="/" underlined />
      <AddUserInfoForm />
    </>
  );
};
export default AddUserData;
