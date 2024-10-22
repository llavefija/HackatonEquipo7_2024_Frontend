import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <div>Navbar</div>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
