import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/dashboard" className="logo">
        <img src="https://picsum.photos/seed/logo/80/40" alt="logo" />
      </Link>

      <Link to="/" className="nav-title">Home</Link>

      <div className="nav-actions">
        <Link to="/login" className="btn-green">Login</Link>
        <Link to="/signup" className="btn-green">SignUp</Link>
      </div>
    </header>
  );
}