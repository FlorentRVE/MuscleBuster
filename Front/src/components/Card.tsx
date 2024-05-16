
import { useNavigate } from "react-router-dom";

function Card() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center gap-16 p-10 my-10">
      <div className="flex flex-col justify-center items-center gap-5">
        <img src="images/group1.png" alt="modalite" className="" />
        <p className="font-bold text-xl">CARNITINE</p>
        <button
          className="bg-blue-800 text-white font-bold p-2 rounded-2xl w-[40%]"
          onClick={() => navigate("/catalogue")}
        >
          Voir
        </button>
      </div>

      <div className="flex flex-col justify-center items-center gap-5">
        <img src="images/group2.png" alt="modalite" className="" />
        <p className="font-bold text-xl">JUGGERNAUT</p>
        <button
          className="bg-orange-400 text-white font-bold p-2 rounded-2xl w-[40%]"
          onClick={() => navigate("/catalogue")}
        >
          Voir
        </button>
      </div>

      <div className="flex flex-col justify-center items-center gap-5">
        <img src="images/group3.png" alt="modalite" className="" />
        <p className="font-bold text-xl">CITRULLINE</p>
        <button
          className="bg-blue-800 text-white font-bold p-2 rounded-2xl w-[40%]"
          onClick={() => navigate("/catalogue")}
        >
          Voir
        </button>
      </div>
    </div>
  );
}

export default Card