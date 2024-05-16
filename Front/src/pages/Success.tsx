import { useNavigate, useSearchParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Success() {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const mail = params.get("mail");

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm("service_7akwelr", "template_zn7gbwi", form.current, {
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
    navigate("/catalogue");
  };

  return (
    <div className="flex flex-col">
      <Navbar />

      <Title title="Commande passée !" />

      <div className="flex flex-col justify-center items-center gap-8 my-10">
        <p>Merci pour votre commande !</p>
        <p>Un mail vous à été envoyé à l'adresse :</p>
        <form
          className="flex flex-col justify-center items-center gap-5 w-[80%] "
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            className="w-full text-center text-blue-900 text-2xl font-bold"
            name="mail"
            id="mail"
            value={mail ?? ""}
          />
          <button
            type="submit"
            className="bg-orange-400 text-white font-bold p-2 rounded-2xl w-[30%]"
            // onClick={() => navigate("/catalogue")}
          >
            Retourner au catalogue
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Success;
