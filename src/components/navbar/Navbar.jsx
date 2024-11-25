import { Link } from 'react-router-dom';
import Nav, { Logo, Menu, MenuLink, Hamburger } from './Navbar.style';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <Nav justify='space-between' wrap='wrap'>
      <Logo to='/'>
        <i>{'Boston🐧'}</i>
        <span>Recipe</span>
      </Logo>

      <Hamburger onClick={() => setisOpen(!isOpen)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu isOpen={isOpen} onClick={()=> setisOpen(false)}>
        <MenuLink to='/'>Home</MenuLink>
        <MenuLink to='about'>About </MenuLink>
        <MenuLink to='register'>Register</MenuLink>
        <MenuLink to='login' onClick={()=>sessionStorage.clear()} >Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
