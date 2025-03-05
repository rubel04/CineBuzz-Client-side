import { Outlet } from "react-router";
import Navbar from "./COMPONENTS/Navbar";
import Footer from "./COMPONENTS/Footer";
import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";
import LoadingSpinner from "./COMPONENTS/LoadingSpinner";

const MainLayout = () => {
  const { isLoading } = useContext(AuthContext);
  return (
    <>
      {isLoading ? (
        <div className="h-screen flex items-center justify-center"><LoadingSpinner /></div>
      ) : (
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
      )}
    </>
  );
};

export default MainLayout;
