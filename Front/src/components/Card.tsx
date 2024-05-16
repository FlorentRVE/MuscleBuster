
function Card() {
  return (
    <div className="flex justify-center items-center gap-16 p-10 my-10">

      <div className="flex flex-col justify-center items-center gap-5">
        <img src="images/group1.png" alt="modalite" className="" />
        <p className="font-bold text-xl">Nom du produit</p>
        <button className="bg-blue-800 text-white font-bold p-2 rounded-2xl w-[40%]">Voir</button>
        <p className="">Description du produit</p>
      </div>

      <div className="flex flex-col justify-center items-center gap-5">
        <img src="images/group2.png" alt="modalite" className="" />
        <p className="font-bold text-xl">Nom du produit</p>
        <button className="bg-orange-400 text-white font-bold p-2 rounded-2xl w-[40%]">Voir</button>
        <p className="">Description du produit</p>
      </div>

      <div className="flex flex-col justify-center items-center gap-5">
        <img src="images/group3.png" alt="modalite" className="" />
        <p className="font-bold text-xl">Nom du produit</p>
        <button className="bg-blue-800 text-white font-bold p-2 rounded-2xl w-[40%]">Voir</button>
        <p className="">Description du produit</p>
      </div>

    </div>
  );
}

export default Card