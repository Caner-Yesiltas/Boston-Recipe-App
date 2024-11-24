import { Link } from 'react-router-dom';
import Nav from "./Navbar.style"

const Navbar = () => {
  return (
    <Nav justify="space-between" wrap="wrap"> 
      <div>
        <i>{'Boston🐧'}</i>
        <span>Recipe</span>
      </div>
      <div>
        <Link to="/" >Home</Link>
        <Link to="about"  >About </Link>
        <Link to="register" >Register</Link>
        <Link to="login" >Logout</Link>
      </div>
    </Nav>
  );
};

export default Navbar;
