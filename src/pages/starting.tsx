import Logo from "../components/ui/loader";
import quotes from "../components/quotes";

const StartingPage = () => {
  const idx: number = Math.floor(Math.random() * quotes.length);

  return (
    <div className="flex flex-col h-screen items-center justify-evenly bg-bg-black text-txt-main">
      <h2 className="text-txt-orange text-4xl">Vacancy Manager</h2>
      <h3 className="text-txt-orange text-2xl">by KiWiCode Solution</h3>
      <Logo active />
      <p className="mx-[-20px]"> Тут могла быть ваша реклама </p>
      <h2 className="border border-double border-txt-orange h-[40%] w-[80%] rounded-3xl marker:text-3xl p-8 text-center bg-bg-grey text-txt-orange">
        {quotes[idx]}
      </h2>
    </div>
  );
};

export default StartingPage;
