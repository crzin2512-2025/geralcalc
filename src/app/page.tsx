import { DiffDate } from "./components/DiffDate";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const Page = () => {
  return (
    <div className="w-full overflow-x-hidden mx-auto">
      <Header />
      <main className="container mx-auto min-h-screen flex flex-col items-center justify-center bg-gray-300 overflow-x-hidden">
        <DiffDate />
      </main>
      <Footer />
    </div>
  )
}

export default Page;
