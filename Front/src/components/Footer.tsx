import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[url('/images/Footer.png')] bg-cover text-white flex flex-col justify-between items-center footer-bg p-10">
      <div className="flex justify-evenly gap-4 px-4 w-full mb-20">
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-bold">Menu</p>
          <a href="/">
            <p className="hover:text-orange-400">Accueil</p>
          </a>
          <a href="/catalogue">
            <p className="hover:text-orange-400">Catalogue</p>
          </a>
        </div>

        <p className="text-2xl font-bold">Contact</p>

        <div className="flex flex-col gap-4">
          <p className="text-2xl font-bold">A propos</p>
          <a href="/about">
            <p className="hover:text-orange-400">A propos de nous</p>
          </a>
        </div>
      </div>

      <div className="flex gap-4 text-orange-400 my-5 w-full justify-center">
        <FaFacebookF className="text-4xl border-orange-400 border-2 rounded-full p-2" />
        <FaInstagram className="text-4xl border-orange-400 border-2 rounded-full p-2" />
      </div>

      <div className="py-5 border-t-gray-500 border-t-2 w-[70%] text-center">
        <p>2024. Tous droits réservé</p>
      </div>
    </div>
  );
}

export default Footer;
