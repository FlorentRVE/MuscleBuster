import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="bg-orange-100 flex justify-between items-center">
      <img
        src="images/Logo.png"
        alt="logo"
        className="ml-10 my-5 w-56"
        onClick={() => navigate("/")}
      />

      <div className="flex gap-4 px-4 items-center text-xl">
        <p
          className="text-blue-950 hover:text-orange-400 hover:border-b-orange-400 hover:border-b-2"
          onClick={() => navigate("/")}
        >
          Accueil
        </p>

        <p
          className="text-blue-950 hover:text-orange-400 hover:border-b-orange-400 hover:border-b-2"
          onClick={() => navigate("/catalogue")}
        >
          Catalogue
        </p>
        <CiSearch className="text-blue-950 hover:text-orange-400" />

        <MdOutlineShoppingBag
          className="text-blue-950 hover:text-orange-400"
          onClick={() => navigate("/panier")}
        />
      </div>
    </div>
  );
}

export default Navbar;
