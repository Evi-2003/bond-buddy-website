import CountWidget from './components/CountWidget'
import InterestForm from './components/InterestForm'
import Logo from './logo.png'
import Image from 'next/image'

const SmokeScreen = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center w-full gap-2">
      <Image src={Logo} width={500} height={200} alt="Logo BondBuddy" className="h-[200px] object-cover" />
      <h1 className="text-4xl font-semibold">BondBuddy</h1>
      <h2 className="text-2xl font-medium">Klaar om eenzaamheid te bestrijden?</h2>

      <div className="my-3 flex gap-3 flex-col xl:flex-row">
        <CountWidget count={1700000} title="Eenzaamheid boven de 65 jaar" />
        <CountWidget count={396964} title="Ernstig eenzaam boven de 65 jaar" />
        <CountWidget count={2958765} title="Eenzaamheid tussen de 18-65" />
      </div>

      <InterestForm />
    </main>
  )
}

export default SmokeScreen
