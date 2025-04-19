import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer className="animate" />
    </>
  );
};

export default Layout;
