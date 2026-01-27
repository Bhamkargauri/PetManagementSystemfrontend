import { ToastContainer } from "react-toastify";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PetList from "./components/PetList";
import PromoBanner from "./components/PromoBanner";
import Services from "./components/Services";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PetList />
      <Services />
      <PromoBanner />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
