import { useEffect, useState, useContext } from "react";
import { ProduitContext } from "../App";
import Produit from "../models/produit";
import * as api from "../utils/api";

function Grid() {
  const [data, setData] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const { Produit } = useContext(ProduitContext);

  useEffect(() => {
    api.getProduits().then((data) => {
      setData(data);
    });
  }, []);

  const addToCart = (item: Produit) => {
    const existingItem: Produit | undefined = Produit.find(
      (produit: Produit) => produit.id === item.id
    );

    if (existingItem) {
      existingItem.quantite += 1;
      setAlertMessage(`${existingItem.label} a été ajouter à votre panier.`);
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    } else {
      Produit.push(item);
      setAlertMessage(`${item.label} a été ajouter à votre panier.`);
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  };
  const [searchValue, setSearchValue] = useState("");

  function getsearch(e: any) {
    e.preventDefault();
    setSearchValue(searchValue);
  }

  let dataFiltered = data.filter((produit) => {
    let { label }: { label: string } = produit;
    const inputValue = searchValue.toLowerCase();

    return label.toLowerCase().includes(inputValue);
  });

  return (
    <div>
      <form className="flex flex-col mb-4 w-[80%] mx-auto mt-10" onSubmit={getsearch}>
        <input
          id="inputText"
          type="text"
          className="p-2 rounded-lg w-full mb-2 border-blue-900 border-2"
          placeholder="Rechercher"
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
      </form>

      <div>
        {showAlert && (
          <p className="text-center bg-green-500 w-1/3 mx-auto p-2 rounded-lg font-bold text-slate-50">
            {alertMessage}
          </p>
        )}
      </div>

      <div className="flex gap-4 m-10 flex-wrap justify-center">
        {dataFiltered.map((item: Produit) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md w-1/4 py-10"
          >
            <img src={item.imageURL} className=" h-56 w-auto" />

            <div className="flex gap-10 mt-5">
              <div>
                <p>{item.label}</p>
                <p className="font-bold">{item.prix}$</p>
              </div>

              <img
                src="images/cart.png"
                alt="cart"
                className="h-10 hover:cursor-pointer hover:scale-125 active:scale-150"
                onClick={() => addToCart(item)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
