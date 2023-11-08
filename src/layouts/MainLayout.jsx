import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticleBackground from "../Particles/Particle";

const MainLayout = () => {
  return (
    // <div>
    //   <Navbar />
    //   <div className="min-h-[47vh]">
    //     <ParticleBackground />
    //     <Outlet />
    //   </div>
    //   <Footer />
    // </div>
    <div>
      <ParticleBackground />
      <Navbar />
      <div className="min-h-[47vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
