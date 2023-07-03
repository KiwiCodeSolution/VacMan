/* eslint-disable prettier/prettier */
import NavHeader from "components/navHeader";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { sendFeedback } from "redux/userOperations";

const HelpFeedback = () => {
  const dispatch = useAppDispatch();
  const { email, profile} = useAppSelector(state => state.user);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log((e.currentTarget.elements.namedItem("text") as HTMLInputElement).value);
    const text = (e.currentTarget.elements.namedItem("text") as HTMLInputElement).value;

    dispatch(sendFeedback({ text, email, profile }));
  };

  return (
    <>
      <NavHeader prevAddress="/settings" text="Help & Feedback" />
      <p className="text-txt-main text-center text-xl px-3 pb-4">
        If you have any questions or offers type it here and press <u>send</u> button below. We will reply as soon as
        possible
      </p>
      <form onSubmit={onSubmit}>
        <input
          name="text"
          className="mx-8 mb-4 p-4 w-[318px] h-48 text-start border border-bg-grey rounded-xl shadow-xl"
          placeholder="write here .."
        />
        <button className="flex rounded-xl mx-auto py-3 h-12 w-full max-w-[300px] justify-center border border-bg-grey text-base items-center font-bold">
          Send
        </button>
      </form>
    </>
  );
};
export default HelpFeedback;
