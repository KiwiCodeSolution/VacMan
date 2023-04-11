import AddUserInfoForm from "components/forms/AddUserInfoForm";
import NavHeader from "components/navHeader";

const AddUserData = () => {
  return (
    <>
      <NavHeader bg="bg-light" text="User information" skip="/" underlined />
      <div className="container mx-auto px-4">
        <AddUserInfoForm />
      </div>
    </>
  );
};
export default AddUserData;
