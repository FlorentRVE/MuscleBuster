import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { useEffect, useState, useContext } from "react";
import { ProduitContext } from "../App";

function Panier() {
  let [total, setTotal] = useState(0);

  const { Produit } = useContext(ProduitContext);
  console.log(Produit);

  useEffect(() => {
      Produit.forEach(element => {
        // setTotal(total += element.prix);
      });
  }, [Produit]);

  return (
    <div className="flex flex-col">
      <Navbar />

      <Title title="Panier" />

      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-evenly items-center w-[80%] bg-orange-500 p-2">
          <p>Ref#</p>
          <p>Produit</p>
          <p>Qte</p>
          <p>ID</p>
          <p>Prix</p>
        </div>

        <div className="flex flex-col items-center w-full">
          {Produit.map((produit) => {
            return (
              <div className="flex justify-evenly items-center w-[80%]">
                <img src={produit.img} className=" h-20 w-auto" />
                <p>{produit.label}</p>
                <p>qte</p>
                <p>{produit.id}</p>
                <p>{produit.prix}</p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between items-center w-[80%] bg-orange-500 p-5">
          <div></div>
          <p>
            Total: <span>{total}</span>
          </p>
        </div>
      </div>

      <div>
        <button className="bg-blue-800 text-white font-bold p-2 rounded-2xl w-[40%]">
          Valider la commande
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Panier;
