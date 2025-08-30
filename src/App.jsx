// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Layout from "./components/Layout";
// // import Home from "./pages/Home";
// // import About from "./pages/About";
// // import Contact from "./pages/Contact";
// // import User from "./pages/User";
// // import NotFound from "./pages/NotFound";

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         {/* Layout wrapper */}
// //         <Route path="/" element={<Layout />}>
// //           <Route index element={<Home />} /> 
// //           <Route path="about" element={<About />} />
// //           <Route path="contact" element={<Contact />} />
// //           <Route path="user/:username" element={<User />} />
// //           <Route path="*" element={<NotFound />} />
// //         </Route>
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;

// import { Routes, Route, Link, NavLink, Outlet, useParams, useNavigate, useSearchParams } from "react-router-dom"

// // Layout component with navigation
// function Layout() {
//   return (
//     <div>
//       <nav>
//         <NavLink to="/" end style={({ isActive }) => ({ margin: 5, color: isActive ? "red" : "blue" })}>Home</NavLink>
//         <NavLink to="/about" style={({ isActive }) => ({ margin: 5, color: isActive ? "red" : "blue" })}>About</NavLink>
//         <NavLink to="/contact" style={({ isActive }) => ({ margin: 5, color: isActive ? "red" : "blue" })}>Contact</NavLink>
//       </nav>
//       <hr />
//       <Outlet />
//     </div>
//   )
// }

// function Home() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>Welcome to my React Router project 🚀</p>
//       <nav>
//         <Link to="/about">About</Link> |{" "}
//         <Link to="/contact">Contact</Link> |{" "}
//         <Link to="/user/Alex">User Alex</Link> |{" "}
//         <Link to="/user/Sarah">User Sarah</Link> |{" "}
//         <Link to="/contact?ref=homepage">Contact (ref=homepage)</Link> |{" "}
//         <Link to="/contact?ref=ad-campaign">Contact (ref=ad-campaign)</Link>
//       </nav>
//     </div>
//   )
// }

// function About() {
//   const [searchParams] = useSearchParams()
//   const topic = searchParams.get("topic")

//   return (
//     <div>
//       <h1>About Page</h1>
//       <p>This project is a React Router homework example.</p>
//       {topic && <p>Showing topic: {topic}</p>}
//     </div>
//   )
// }

// function Contact() {
//   const [searchParams] = useSearchParams()
//   const ref = searchParams.get("ref")
//   const navigate = useNavigate()

//   return (
//     <div>
//       <h1>Contact Page</h1>
//       {ref && <p>Referred from: {ref}</p>}
//       <form>
//         <input type="text" placeholder="Name" />
//         <br />
//         <textarea placeholder="Message"></textarea>
//         <br />
//         <button type="submit">Send</button>
//       </form>
//       <br />
//       <button onClick={() => navigate("/")}>Go Home</button>
//     </div>
//   )
// }

// function User() {
//   const { username } = useParams()
//   const navigate = useNavigate()

//   return (
//     <div>
//       <h1>User Page</h1>
//       <p>Username: {username}</p>
//       <button onClick={() => navigate(-1)}>Go Back</button>
//     </div>
//   )
// }

// // NotFound page for undefined routes
// function NotFound() {
//   return <h1>404 - Page Not Found</h1>
// }

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="user/:username" element={<User />} />
//         <Route path="*" element={<NotFound />} />
//       </Route>
//     </Routes>
//   )
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import User from "./components/User.jsx";
import NotFound from "./components/NotFound.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="user/:username" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
