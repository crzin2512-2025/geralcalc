import { DiffDate } from "./components/DiffDate";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

const Page = () => {
  return (
    <div className="w-full mx-auto">
      <Header />
      <main className="container mx-auto h-screen bg-red-400">
        <Hero />
        <DiffDate/>
      </main>
      <Footer />
    </div>
  )
}

export default Page;
