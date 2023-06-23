import AddUserInfoForm from "components/forms/AddUserInfoForm";
import InputCustomData from "components/modal/InputCustomDataModal";
import NavHeader from "components/navHeader";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const AddUserData = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <InputCustomData setShowModal={setShowModal} />}
      <NavHeader
        prevAddress={location?.state?.from.pathname ?? "/"}
        bg="bg-bg-light"
        text="User information"
        skip="/"
        underlined
      />
      <div className="container mx-auto px-4">
        <p className="bg-app-blue rounded-md text-center">Empty fields stay invisible in Profile</p>
        <AddUserInfoForm setShowModal={setShowModal} />
      </div>
    </>
  );
};
export default AddUserData;
