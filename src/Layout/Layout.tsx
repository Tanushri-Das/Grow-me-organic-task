
import { Outlet } from "react-router-dom";
import Header from "../Components/Shared/Header/Header";
import Footer from "../Components/Shared/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet></Outlet>
      <Footer/>
    </div>
  );
};

export default Layout;
