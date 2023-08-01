import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src="./src/assets/home-icon.png" />
      </Link>
    </div>
  );
}
export default Navbar;
