import Logo from "../components/ui/loader";
import quotes from "../components/quotes";

const StartingPage = () => {
  const idx: number = Math.floor(Math.random() * quotes.length);

  return (
    <div className="flex flex-col h-screen items-center justify-evenly bg-bg-black text-txt-main">
      <h2 className="text-4xl">Vacancy Manager</h2>
      <h3 className="text-2xl">by KIWICode Solution</h3>
      <Logo active />
      <h2 className="text-2xl p-10 text-center">{quotes[idx]}</h2>
    </div>
  );
};

export default StartingPage;
