/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import Button from "components/ui/button";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import React from "react";
import { updateProfile } from "redux/userOperations";

const InputCustomData = ({ setShowModal }: { setShowModal: (prop: boolean) => void }) => {
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector(state => state.user);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newField = event.currentTarget.field.value;
    dispatch(updateProfile({ ...profile, [newField]: "" }));
    setShowModal(false);
  };
  return (
    <div className="w-full h-1/4 absolute top-3/4 p-4 bg-bg-blue z-10">
      <form onSubmit={handleSubmit}>
        <input
          name="field"
          type="text"
          placeholder="Input field name"
          className="w-full h-8 px-2 py-1 outline-none rounded-md border"
        />
        <div className="flex flex-row justify-between gap-x-8 m-4">
          <Button btnType="submit" variant="white">
            Save new field
          </Button>
          <Button btnType="button" variant="white" clickFn={() => setShowModal(false)}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};
export default InputCustomData;
