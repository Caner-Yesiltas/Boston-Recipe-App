import styled from 'styled-components';
import Flex from '../../components/globalStyles/Flex';
import { Link } from 'react-router-dom';

const Nav = styled(Flex)`
  padding: 0.2rem 1rem;
  background: ${({ theme }) => theme.colors.navBgColor};
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.mainColor};
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    display: block;
  }
`;

export const Menu = styled(Flex)`
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;
    width: 100%;
    max-height:${({isOpen}) => isOpen ? "25rem" : "0"};
    overflow:hidden;
  }
`;

export const Logo = styled(Link)`
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.logoColor};
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
   transition: all 0.3s ease-in;

  span {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.mainColor};
  }
`;

export const MenuLink = styled(Link)`
  text-align: center;
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.linkColor};
  transition: all 0.3s ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
    font-weight: bold;
  }

  @media (max-width: ${({theme}) => theme.screens.lg}) {
  border-bottom: 1px solid ${({theme}) =>theme.colors.linkColor}};
  width:100%;
`;

export default Nav;
