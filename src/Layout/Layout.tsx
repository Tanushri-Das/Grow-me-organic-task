
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
