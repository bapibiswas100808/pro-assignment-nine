import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>E-Estate|Home</title>
      </Helmet>
      <Banner></Banner>
      <Products></Products>
    </div>
  );
};

export default Home;
