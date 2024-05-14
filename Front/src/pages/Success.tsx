import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

function Success() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <Navbar />

      <Title title="Commande passée !" />

      <div className="flex flex-col justify-center items-center gap-8 my-10">
        <p>Merci pour votre commande !</p>
        <p>Un mail vous à été envoyé !</p>

        <button
          className="bg-orange-400 text-white font-bold p-2 rounded-2xl w-[20%]"
          onClick={() => navigate("/catalogue")}
        >
          Retourner au catalogue
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Success;
