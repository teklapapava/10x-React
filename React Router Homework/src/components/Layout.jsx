import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  const activeStyle = { fontWeight: "bold", color: "blue" };
  return (
    <div>
      <nav style={{ marginBottom: "20px" }}>
        <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>Home</NavLink> |{" "}
        <NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : undefined}>About</NavLink> |{" "}
        <NavLink to="/contact" style={({ isActive }) => isActive ? activeStyle : undefined}>Contact</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
