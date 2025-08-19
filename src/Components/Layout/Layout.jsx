import { Outlet } from "react-router";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./layout.css";





  export default function Layout() {


return (
  <div className="layout">
    <Header />
      <div className="navbar-outlet">
        <Navbar />
        <Outlet  />
        
      </div>
      <Footer />
    </div>
  );
}
