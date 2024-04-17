import { Toaster } from "react-hot-toast";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Header></Header>
      <div>
        <Toaster />
      </div>
      <div>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Root;
