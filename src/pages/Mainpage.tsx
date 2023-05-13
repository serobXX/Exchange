import { Outlet } from "react-router-dom";
import Head from "../components/Navbar";

const Mainpage = () => {
  return (
    <div>
      <Head />
      <div className="mx-auto max-w-screen-md py-12">
        <Outlet />
      </div>
    </div>
  );
}

export default Mainpage;