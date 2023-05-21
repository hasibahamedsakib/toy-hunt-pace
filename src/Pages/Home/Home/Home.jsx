import AppTitle from "../../../Helmet/AppTitle";
import BestSelling from "../BestSelling/BestSelling";

import Header from "../Banner/Banner";
import ToyCategory from "../Category/ToyCatagory/ToyCategory";
import Gallery from "../Gallery/Gallery";
import Services from "../Services/Services";
import SellBanner from "../sellBanner/SellBanner";

const Home = () => {
  return (
    <div>
      <AppTitle title="- Home" />
      <Header />
      <Gallery />
      <ToyCategory />
      <Services />
      <BestSelling />
      <SellBanner />
    </div>
  );
};

export default Home;
