import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to my React Router project </p>
      <nav>
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/user/Alex">User Alex</Link> |{" "}
        <Link to="/user/Sarah">User Sarah</Link> |{" "}
        <Link to="/contact?ref=homepage">Contact</Link> |{" "}
        <Link to="/contact?ref=newsletter">Contact</Link>
      </nav>
    </div>
  );
}
