
function Modalite() {
  return (
    <div className="bg-orange-100 flex justify-center items-center gap-16 p-10 mt-10">

        <div className="flex flex-col justify-center items-center">
            <img src="images/star.png" alt="modalite" className="" />
            <p className="text-blue-950 font-bold mt-4">Produit français</p>
        </div>

        <div className="flex flex-col justify-center items-center">
            <img src="images/ship.png" alt="modalite" className="" />
            <p className="text-blue-950 font-bold mt-4">Livraison sur toute l'île</p>
        </div>

        <div className="flex flex-col justify-center items-center">
            <img src="images/flask.png" alt="modalite" className="" />
            <p className="text-blue-950 font-bold mt-4">Produits testés et approuvés</p>
        </div>

    </div>
  )
}

export default Modalite