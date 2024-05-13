import Card from "../components/Card";
import Footer from "../components/Footer"
import Landing from "../components/Landing";
import Modalite from "../components/Modalite";
import Navbar from "../components/Navbar"
import Sponso from "../components/Sponso";


function HomePage() {

  return (
    <div className="flex flex-col">
      <Navbar />
      
      <Landing />
      <Sponso />
      <Modalite />
      <Card />

      <Footer />
    </div>
  );

}

export default HomePage