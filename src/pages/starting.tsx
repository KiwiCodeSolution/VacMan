import Logo from '../components/ui/loader';
import quotes from '../components/quotes';

const StartingPage = () => {
  const idx: number = Math.floor(Math.random() * quotes.length);

  return (
    <div className="flex flex-col h-screen items-center justify-evenly bg-slate-900 text-sky-200">
      <h2 className="text-4xl">Vacancy Manager</h2>
      <Logo />
      <h2 className="text-2xl p-10 text-center">{quotes[idx]}</h2>
    </div>
  );
};

export default StartingPage;
