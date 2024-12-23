import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <nav className="">
        <span>My website</span>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> */}
        <Link to="/user">Users: </Link>
        
      </nav>
    </div>
  );
};

export default Header;
