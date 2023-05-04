import { Outlet } from "react-router";
import { Nav } from "./Nav";

export const Layout = () => {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
    </>
  );
};
