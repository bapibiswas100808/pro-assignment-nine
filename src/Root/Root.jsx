import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Header></Header>
      <div className="">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Root;
