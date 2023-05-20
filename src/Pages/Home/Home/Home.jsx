import Category from "../Category/Category";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import Services from "../Services/Services";
import SellBanner from "../sellBanner/SellBanner";

const Home = () => {
  return (
    <div>
      <Header />
      <Gallery />
      <Category />
      <Services />
      <SellBanner />
    </div>
  );
};

export default Home;
