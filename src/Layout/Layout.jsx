import { Outlet } from "react-router-dom"
import Navbar from "../components/Layout/Nabar";

const Layout = () => {
  return (
    <div>
        <Navbar/>
      <Outlet />
    </div>
  );
}

export default Layout
