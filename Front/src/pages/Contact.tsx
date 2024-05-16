import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { GiPositionMarker } from "react-icons/gi";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_7akwelr", "template_zfm0whe", form.current, {
          publicKey: "KALFQqBpI4v0iJJzk",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <Title title="Contact" />
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="flex w-[80%] gap-10 justify-between">
          <div className="shadow-xl flex flex-col gap-5 p-10 w-[30%]">
            <p className="text-xl font-bold mb-5">Contact Information</p>

            <div className="flex items-center gap-2">
              <GiPositionMarker />
              <p>44 rue du muscle</p>
            </div>

            <div className="flex items-center gap-2">
              <BsTelephone />
              <p>02 56 25 32 14</p>
            </div>

            <div className="flex items-center gap-2">
              <CiMail />
              <p>MuscleBuster@mail.fr</p>
            </div>
          </div>

          <div className="p-10 shadow-xl w-[70%]">
            <p className="text-xl font-bold mb-5">Envoyez nous un mail</p>
            <form
              className="flex flex-col gap-3"
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                type="text"
                placeholder="Nom"
                className="w-full border-blue-900 border-2 p-2 rounded-lg"
                name="nom"
                id="nom"
              />

              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-1/2 border-blue-900 border-2 p-2 rounded-lg"
                  name="mail"
                  id="mail"
                />
                <input
                  type="text"
                  placeholder="Sujet"
                  className="w-1/2 border-blue-900 border-2 p-2 rounded-lg"
                  name="sujet"
                  id="sujet"
                />
              </div>

              <textarea
                className="w-full border-blue-900 border-2 p-2 rounded-lg"
                placeholder="Message"
                name="message"
                id="message"
              ></textarea>

              <button
                type="submit"
                className="bg-orange-400 text-white font-bold p-2 rounded-2xl w-20 self-end hover:scale-125"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
        <img src="images/contact.png" alt="logo" className="w-72 mt-40" />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
