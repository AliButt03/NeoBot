import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        NeoBot
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/docs">Docs</Link>
        <Link to="/login">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;
