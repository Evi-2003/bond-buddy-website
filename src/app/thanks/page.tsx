import Logo from "../logo.jpg";
import Image from "next/image";

import CountWidget from "../components/CountWidget";

const SmokeScreen = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center w-full">
      <Image src={Logo} width={300} height={200} alt="Logo BondBuddy" />
      <h1 className="text-4xl font-semibold">Bedankt!</h1>
      <h2 className="text-2xl font-medium">Namens iedereen</h2>

      <div className="my-3 flex gap-3 flex-col xl:flex-row">
        <CountWidget
          duration={3}
          count={1700000}
          title="Eenzaamheid boven de 65 jaar"
        />
        <CountWidget
          duration={5}
          count={396964}
          title="Ernstig eenzaam boven de 65 jaar"
        />
        <CountWidget
          duration={3}
          count={2958765}
          title="Eenzaamheid tussen de 18-65"
        />
      </div>
    </main>
  );
};

export default SmokeScreen;
