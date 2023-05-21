import AppTitle from "../../../Helmet/AppTitle";
import BestSelling from "../BestSelling/BestSelling";
import Category from "../Category/Category";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import Services from "../Services/Services";
import SellBanner from "../sellBanner/SellBanner";

const Home = () => {
  return (
    <div>
      <AppTitle title="- Home" />
      <Header />
      <Gallery />
      <Category />
      <Services />
      <BestSelling />
      <SellBanner />
    </div>
  );
};

export default Home;
