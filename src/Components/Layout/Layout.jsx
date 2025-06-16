import { Outlet } from "react-router";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./layout.css";
import { useState } from "react";

 
export default function Layout() {
 const [globalState, setGlobalState] = useState(
    { elektr: { total: 0, nds: 0 }, total: 0 },
    { gas: { total: 0, nds: 0 }, total: 0 },
    { hotwater: { total: 0, nds: 0 }, total: 0 },
    { rospodil: { total: 0, nds: 0 }, total: 0 },
    { teplo: { total: 0, nds: 0 }, total: 0 },
    { water: { total: 0, nds: 0 }, total: 0 }
  );

  return (
    <div className="layout">
      <Header />
      <div className="navbar-outlet">
        <Navbar />
        <Outlet context={{ globalState, setGlobalState }} />
      </div>
      <Footer />
    </div>
  );
}
