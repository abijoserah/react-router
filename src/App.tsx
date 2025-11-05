import { Link, Outlet } from "react-router";

export function App() {
  return (
    <>
      <Link to="/about">About</Link>
      <br />
      <Link to="/">Home</Link>
      <Outlet />
      <br />
      <footer>Mon beau footer</footer>
    </>
  )
}