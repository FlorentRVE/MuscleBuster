import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

function About() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Title title="A propos" />
      <div className="flex flex-col justify-center items-center">
        <p className="p-10 w-1/2">
          MuscleBuster est bien plus qu'une simple enseigne de vente de
          compléments alimentaires sportifs. Fondée par des passionnés de
          fitness et de nutrition, notre entreprise s'engage à fournir à nos
          clients les meilleurs produits pour les aider à atteindre leurs
          objectifs sportifs et à maintenir une vie saine. Chez MuscleBuster,
          nous comprenons que chaque individu a des besoins nutritionnels
          spécifiques en fonction de son niveau d'activité physique, de ses
          objectifs personnels et de son métabolisme. C'est pourquoi nous
          proposons une large gamme de compléments alimentaires soigneusement
          sélectionnés pour répondre à ces besoins variés. Notre équipe est
          composée de professionnels de la santé et de la nutrition qui sont là
          pour vous conseiller et vous guider dans le choix des produits les
          plus adaptés à vos besoins. Que vous soyez un sportif de haut niveau,
          un amateur de fitness ou simplement à la recherche d'un mode de vie
          plus sain, MuscleBuster est là pour vous accompagner dans votre
          parcours. La qualité est au cœur de notre démarche. Nous travaillons
          en étroite collaboration avec des fabricants réputés pour garantir que
          nos produits respectent les normes les plus strictes en matière de
          sécurité et d'efficacité. Votre satisfaction est notre priorité, et
          nous nous engageons à vous fournir des produits de la plus haute
          qualité pour vous aider à atteindre vos objectifs sportifs.
          MuscleBuster est plus qu'une boutique en ligne, c'est une communauté
          de passionnés de sport et de bien-être. Rejoignez-nous dans notre
          mission d'encourager et d'inspirer chacun à vivre une vie active et
          équilibrée.
        </p>
        <img src="images/about.png" alt="logo" className="w-56" />
      </div>
      <Footer />
    </div>
  );
}

export default About;
