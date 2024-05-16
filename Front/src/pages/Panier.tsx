import { useEffect, useContext } from "react";
import { ProduitContext, TotalContext } from "../App";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { MdDeleteForever } from "react-icons/md";
import Produit from "../models/produit";
import * as api from "../utils/api";

function Panier() {

  const { Produit, setProduit } = useContext(ProduitContext);
  const { Total, setTotal } = useContext(TotalContext);

  useEffect(() => {
    setTotal(
      Produit.reduce(
        (Total: number, item: Produit) => Total + item.prix * item.quantite,
        0
      )
    );
  }, [Produit]);

  const deleteProduit = (item: Produit) => {
    setProduit(Produit.filter((produit: Produit) => produit !== item));
  };

  const quantiteProduit = (item: Produit, e: any) => {
    setProduit(
      Produit.filter(() => (item.quantite = parseInt(e.target.value)))
    );
  };

  const sendPaiement = async () => {
    let data = {
      produit: Produit,
    };
    const url = await api.postPaiement(data);
    window.location.href = url;
  };

  return (
    <div className="flex flex-col">
      <Navbar />

      <Title title="Panier" />

      <div className="flex flex-col justify-center mt-20 w-[80%] mx-auto">
        <div className="flex items-center justify-evenly bg-orange-400 p-2 font-bold">
          <p></p>
          <p>Produit</p>
          <p>Quantite</p>
          <p>Prix</p>
        </div>

        <div className="flex flex-col bg-slate-100 p-10 w-full">
          {Produit.map((produit: Produit) => {
            return (
              <div
                key={produit.id}
                className="flex justify-evenly items-center gap-10 py-5 border-b-slate-300 border-b-2"
              >
                <img src={produit.imageURL} className=" h-20 w-auto" />
                <p>{produit.label}</p>
                <input
                  type="number"
                  defaultValue={produit.quantite}
                  min={1}
                  className="w-10 border-2 border-slate-400 rounded-lg text-center"
                  onChange={() => quantiteProduit(produit, event)}
                />
                <p>{produit.prix}$</p>
                <MdDeleteForever
                  className="text-2xl text-red-600 hover:cursor-pointer hover:scale-110"
                  onClick={() => deleteProduit(produit)}
                />
              </div>
            );
          })}
        </div>

        <div className="flex justify-between items-center bg-orange-400 p-5 font-bold">
          <div></div>
          <p className="text-2xl">
            Total: <span>{Total.toString()}$</span>
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div></div>

          <div className="flex gap-4 py-4 my-10">
              <button
                className="bg-orange-400 text-white font-bold rounded-lg px-2 py-1"
                onClick={() => sendPaiement()}
              >
                PAYER
              </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Panier;
