import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";



function Navbar() {
  return (
    <div className="bg-orange-100 flex justify-between items-center">
      <a href="/">
        <img src="images/Logo.png" alt="logo" className="ml-10 my-5 w-56" />
      </a>

      <div className="flex gap-4 px-4 items-center text-xl">
        <a href="/">
          <p className="text-blue-950 hover:text-orange-400 hover:border-b-orange-400 hover:border-b-2">
            Accueil
          </p>
        </a>

        <a href="/catalogue">
          <p className="text-blue-950 hover:text-orange-400 hover:border-b-orange-400 hover:border-b-2">
            Catalogue
          </p>
        </a>
        <CiSearch className="text-blue-950 hover:text-orange-400" />

        <a href="/panier">
          <MdOutlineShoppingBag className="text-blue-950 hover:text-orange-400" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
