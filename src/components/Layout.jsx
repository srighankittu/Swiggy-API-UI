import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <TopNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
