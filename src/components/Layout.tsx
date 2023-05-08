import { Outlet } from "react-router";
import { Nav } from "./Nav";
import "./Layout.scss";

export const Layout = () => {
  return (
    <>
      <header>
        <Nav></Nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
};
