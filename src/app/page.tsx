import CountWidget from "./components/CountWidget";
import InterestForm from "./components/InterestForm";
import Logo from "./logo.jpg";
import Image from "next/image";

const SmokeScreen = () => {
  return (
    <main className="min-h-screen py-6 flex flex-col items-center justify-center w-full gap-2">
      <Image src={Logo} width={300} height={200} alt="Logo BondBuddy" />

      <h1 className="text-4xl font-semibold">BondBuddy</h1>
      <h2 className="text-2xl font-medium text-balance text-center w-full">
        Klaar om eenzaamheid te bestrijden?
      </h2>

      <div className="my-3 flex gap-3 flex-col xl:flex-row">
        <CountWidget
          duration={3}
          count={2294590}
          title="Eenzaamheid boven de 65 jaar"
        />
        <CountWidget
          duration={5}
          count={2958765}
          title="Eenzaamheid tussen de 18-65"
        />
        <CountWidget
          duration={3}
          count={396964}
          title="Ernstig eenzaam boven de 65 jaar"
        />
      </div>

      <InterestForm />
    </main>
  );
};

export default SmokeScreen;
