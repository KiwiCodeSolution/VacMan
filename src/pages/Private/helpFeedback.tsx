import NavHeader from "components/navHeader";

const HelpFeedback = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log((e.currentTarget.elements.namedItem("text") as HTMLInputElement).value);
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
        <button>Send</button>
      </form>
    </>
  );
};
export default HelpFeedback;
