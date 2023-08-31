import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Header = () => {
  return (
    <>
      <nav>
        <h1>PixelVibe</h1>
        <main>
          <HashLink to="/pixelvibe/#home">Home</HashLink>
          <Link to="/contact">Contact</Link>
          <HashLink to="/pixelvibe/#about">About</HashLink>
          <HashLink to="/pixelvibe/#brands">Brands</HashLink>
          <Link to="/services">Services</Link>
        </main>
      </nav>
    </>
  );
};

export default Header;
