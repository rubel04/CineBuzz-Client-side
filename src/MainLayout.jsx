import { Outlet } from "react-router";
import Navbar from "./COMPONENTS/Navbar";
import Footer from "./COMPONENTS/Footer";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer className="mt-16">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
