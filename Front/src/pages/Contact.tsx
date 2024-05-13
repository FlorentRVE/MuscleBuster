import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { GiPositionMarker } from "react-icons/gi";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";

function Contact() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Title title="Contact" />
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="flex w-[80%] gap-10 justify-between">
          <div className="bg-blue-300 p-10 w-[30%]">
            <p className="text-xl font-bold mb-5">Contact Information</p>

            <div className="flex gap-2">
              <GiPositionMarker />
              <p>Adresse</p>
            </div>

            <div className="flex gap-2">
              <BsTelephone />
              <p>02 56 25 32 14</p>
            </div>

            <div className="flex gap-2">
              <CiMail />
              <p>test@mail.fr</p>
            </div>
          </div>

          <div className="p-10 bg-red-300 w-[70%]">
            <p className="text-xl font-bold mb-5">Envoyez nous un mail</p>
            <form className="flex flex-col gap-3">
              <input type="text" placeholder="Nom" className="w-full" />

              <div className="flex gap-3">
                <input type="text" placeholder="Email" className="w-1/2" />
                <input type="text" placeholder="Sujet" className="w-1/2" />
              </div>

              <textarea className="w-full" placeholder="Message"></textarea>

              <button className="bg-orange-400 text-white font-bold p-2 rounded-2xl w-20 self-end">
                Envoyer
              </button>
            </form>
          </div>
        </div>
        <img src="images/contact.png" alt="logo" className="w-72 mt-40"/>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
