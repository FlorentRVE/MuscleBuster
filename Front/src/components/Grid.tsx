import { useEffect, useState, useContext } from "react";
import { ProduitContext } from "../App";

function Grid() {

  const [data, setData] = useState([]);
  const {Produit} = useContext(ProduitContext);

  useEffect(() => {
    const getData = async () => {      
      await fetch("http://localhost:3000/produit")
        .then((res) => res.json())
        .then((data) => setData(data));
    }
    getData();
    
  }, []);

  const addToCart = (item: any) => {
    
    if(Produit.includes(item)) {
      item.quantite += 1;
    } else {
      Produit.push(item);
    }
    console.log(Produit);
  }
  
  return (
    <div>
      <div className="w-full flex justify-between p-10">
        <div></div>
        <form className="flex gap-4">
          <label className="text-blue-950 font-bold">Trie par</label>
          <select className="text-black w-28 px-2">
            <option>Prix</option>
            <option>Catégorie</option>
          </select>
        </form>
      </div>

      <div className="flex gap-4 m-10">
        {data.map((item: any) => (
          <div key={item.id} className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md w-1/4 py-10">

            <img src={item.img} className=" h-56 w-auto"/>

            <div className="flex gap-10 mt-5">
              <div>
                <p>{item.label}</p>
                <p className="font-bold">{item.prix}$</p>
              </div>

              <img src="images/cart.png" alt="cart" className="h-10 hover:cursor-pointer" onClick={() => addToCart(item)}/>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
