import AllProductPage from "./AllProductPage";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Topbar from "./Topbar";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Slider />
      <AllProductPage />
      <Footer />
    </div>
  );
};

export default Home;
