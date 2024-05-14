import { useContext, useRef } from "react";
import { TotalContext, ProduitContext } from "../App";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import emailjs from "@emailjs/browser";
import * as api from "../utils/api";

function Paiement() {
  const { Total } = useContext(TotalContext);
  const { Produit } = useContext(ProduitContext);
  const navigate = useNavigate();

  console.log(Produit);

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_7akwelr", "template_zfm0whe", form.current, {
          publicKey: "KALFQqBpI4v0iJJzk",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  const sendPaiement = (e: any) => {
    e.preventDefault();

    let data = {
      nom: form.current?.nom.value,
      adresse: form.current?.adresse.value,
      mail: form.current?.mail.value,
      nomCarte: form.current?.nomCarte.value,
      numeroCarte: form.current?.numeroCarte.value,
      dateExpiration: form.current?.dateExpiration.value,
      cvv: form.current?.cvv.value,
      commandes: Produit,
    };
    
    console.log(data);
    // api.postPaiement(data);
    sendEmail;
    navigate("/success");
  };

  return (
    <div className="flex flex-col">
      <Navbar />

      <Title title="Paiement" />

      <p className="text-3xl text-center my-5">
        Prix Total de votre commande : {Total.toString()}$
      </p>

      <form
        className="flex gap-5 w-[80%] mx-auto mb-40"
        ref={form}
        onSubmit={sendPaiement}
      >
        {/* Livraison */}
        <div className="flex-1 flex flex-col p-5 gap-5">
          <p className="bg-orange-400 w-full text-center font-bold p-2 rounded-lg">
            Adresse de livraison
          </p>

          <div className="flex justify-between gap-2">
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              name="nom"
              id="nom"
              className="flex-1 rounded-md border-2 border-gray-200"
            />
          </div>

          <div className="flex justify-between gap-2">
            <label htmlFor="adresse">Adresse</label>
            <input
              type="text"
              name="adresse"
              id="adresse"
              className="flex-1 rounded-md border-2 border-gray-200"
            />
          </div>

          <div className="flex justify-between gap-2">
            <label htmlFor="mail">Mail</label>
            <input
              type="text"
              name="mail"
              id="mail"
              className="flex-1 rounded-md border-2 border-gray-200"
            />
          </div>
        </div>

        {/* Paiement */}
        <div className="flex flex-1 flex-col p-5 gap-5">
          <p className="bg-orange-400 w-full text-center font-bold p-2 rounded-lg">
            Paiement
          </p>

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
            <label htmlFor="dateExpiration">Date d'expiration</label>
            <div className="flex flex-1 gap-2">
              <select
                name="dateExpiration"
                id="dateExpiration"
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

          <div className="flex justify-end gap-4 py-4">
            <button
              className="bg-gray-200 rounded-lg px-2 py-1"
              onClick={() => navigate("/panier")}
            >
              Retour au panier
            </button>

            <button
              type="submit"
              className="bg-orange-400 text-white font-bold rounded-lg px-2 py-1"
              onClick={sendPaiement}
            >
              PAYER
            </button>
          </div>
        </div>
      </form>

      <Footer />
    </div>
  );
}

export default Paiement;
