import Footer from "../components/Footer";
import Grid from "../components/Grid";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

function Catalog() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Title title = "Catalogue"/>
      <Grid />
      <Footer />
    </div>
  );
}

export default Catalog;
