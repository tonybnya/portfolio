import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div
      className="min-h-screen bg-repeat relative bg-black"
      style={{ backgroundImage: "url('/assets/images/noise.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#050403]/15" />
      <div className="relative z-10">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
