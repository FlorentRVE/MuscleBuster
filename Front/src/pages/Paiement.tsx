import { useContext } from "react";
import { TotalContext, ProduitContext } from "../App";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title";



function Paiement() {

  const { Total } = useContext(TotalContext);
  const { Produit } = useContext(ProduitContext);
  const navigate = useNavigate();

  console.log(Produit);

  return (
    <div className="flex flex-col">
      <Navbar />

      <Title title="Paiement" />

      <p className="text-3xl text-center my-5">
        Prix Total de votre commande : {Total.toString()}$
      </p>

      <div className="flex gap-5 justify-center w-[80%] mx-auto mb-40">

        <div className="flex flex-col w-full p-2">

          <p className="bg-orange-400 w-full text-center font-bold p-2 rounded-lg">
            Adresse de livraison
          </p>

          <form className="py-5 flex flex-col gap-5">
            <div className="flex justify-between gap-2">
              <label htmlFor="nomCarte">Nom</label>
              <input
                type="text"
                name="nom"
                id="nom"
                className="flex-1 rounded-md border-2 border-gray-200"
              />
            </div>

            <div className="flex justify-between gap-2">
              <label htmlFor="numeroCarte">Adresse</label>
              <input
                type="text"
                name="adresse"
                id="adresse"
                className="flex-1 rounded-md border-2 border-gray-200"
              />
            </div>

            <div className="flex justify-between gap-2">
              <label htmlFor="cvv">Mail</label>
              <input
                type="text"
                name="mail"
                id="mail"
                className="flex-1 rounded-md border-2 border-gray-200"
              />
            </div>
          </form>
        </div>

        <div className="flex flex-col w-full p-2">

          <p className="bg-orange-400 w-full text-center font-bold p-2 rounded-lg">
            Paiement
          </p>

          <form className="py-5 flex flex-col gap-5">
            <div className="flex justify-between gap-2">
              <label htmlFor="nomCarte">Nom sur la carte</label>
              <input
                type="text"
                name="nomCarte"
                id="nomCarte"
                className="flex-1 rounded-md border-2 border-gray-200"
              />
            </div>

            <div className="flex justify-between gap-2">
              <label htmlFor="numeroCarte">Numéro de la carte</label>
              <input
                type="text"
                name="numeroCarte"
                id="numeroCarte"
                className="flex-1 rounded-md border-2 border-gray-200"
              />
            </div>

            <div className="flex justify-between gap-2">
              <label htmlFor="numeroCarte">Date d'expiration</label>
              <div className="flex flex-1 gap-2">
                <select
                  name="numeroCarte"
                  id="numeroCarte"
                  className="flex-1 rounded-md border-2 border-gray-200"
                >
                  <option value="01">01</option>
                </select>

                <select
                  name="numeroCarte"
                  id="numeroCarte"
                  className="flex-1 rounded-md border-2 border-gray-200"
                >
                  <option value="01">01</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between gap-2">
              <label htmlFor="cvv">Numéro CVV</label>
              <input
                type="text"
                name="cvv"
                id="cvv"
                className="flex-1 rounded-md border-2 border-gray-200"
              />
            </div>
          </form>

          <div className="flex justify-end gap-4 py-4">
            <button
              className="bg-gray-200 rounded-lg px-2 py-1"
              onClick={() => navigate("/panier")}
            >
              Retour au panier
            </button>

            <button className="bg-orange-400 text-white font-bold rounded-lg px-2 py-1">
              PAYER
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Paiement;
