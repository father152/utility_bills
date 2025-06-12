import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Components/Layout/Layout";
import Golovna from "./Components/Golovna/Golovna";
import Kvartplata from "./Components/Navbar/Kvartplata/Kvartplata";
import Water from "./Components/Navbar/Water/Water";
import Hotwater from "./Components/Navbar/Hotwater/Hotwater";
import Gas from "./Components/Navbar/Gas/Gas";
import Elektr from "./Components/Navbar/Elektr/Elektr";
import Teplo from "./Components/Navbar/Teplo/Teplo";
import Rospodil from "./Components/Navbar/Rospodil/Rospodil";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Golovna />,
        },
        {
          path: "kvartplata",
          element: <Kvartplata />,
        },
        {
          path: "water",
          element: <Water />,
        },
        {
          path: "hotwater",
          element: <Hotwater />,
        },
        {
          path: "gas",
          element: <Gas />,
        },
        {
          path: "elektr",
          element: <Elektr />,
        },
        {
          path: "teplo",
          element: <Teplo />,
        },
        {
          path: "rospodil",
          element: <Rospodil />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
