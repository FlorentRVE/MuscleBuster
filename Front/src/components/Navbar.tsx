import { MdOutlineShoppingBag } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="bg-orange-100 flex justify-between items-center">
      <img
        src="images/Logo.png"
        alt="logo"
        className="ml-10 my-5 w-56 hover:cursor-pointer"
        onClick={() => navigate("/")}
      />

      <div className="flex gap-4 px-4 items-center text-xl">
        <p
          className="text-blue-950 hover:text-orange-400 hover:border-b-orange-400 hover:border-b-2 hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          Accueil
        </p>

        <p
          className="text-blue-950 hover:text-orange-400 hover:border-b-orange-400 hover:border-b-2 hover:cursor-pointer"
          onClick={() => navigate("/catalogue")}
        >
          Catalogue
        </p>

        <MdOutlineShoppingBag
          className="text-blue-950 hover:text-orange-400 hover:cursor-pointer"
          onClick={() => navigate("/panier")}
        />
      </div>
    </div>
  );
}

export default Navbar;
