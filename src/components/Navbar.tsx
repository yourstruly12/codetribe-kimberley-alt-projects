import { Menu, Search } from "lucide-react";
import { NAV_ITEMS } from "../data/data";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <a href="#" className="logo">
          <span>PLAY</span>
          <strong>NFT</strong>
        </a>

        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">

          <div className="search-box">
            <Search size={17} />
            <input
              type="text"
              placeholder="Search"
            />
          </div>

          <button className="register-btn">
            Register
          </button>

          <button className="menu-btn" aria-label="Open menu">
            <Menu size={24} />
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;