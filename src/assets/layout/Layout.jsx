import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar";

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
