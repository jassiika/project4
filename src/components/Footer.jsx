import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 Upskill Mafia All rights reserved.</p>
      <Link to="/signup" className="footer-btn">Register for free</Link>
    </footer>
  );
}