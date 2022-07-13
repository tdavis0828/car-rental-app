import { NavLink } from 'react-router-dom';
import Logo from '../imgs/CompanyLogo.png';
import { StyledNav } from '../styles/Styles';

const Navbar = () => {
  return (
    <StyledNav>
      <div className="logo">
        <img src={Logo} alt="Logo of car with text of RoadRunners below" />
      </div>
      <div className="navLinks">
        <NavLink to="/about">Help</NavLink>
        <NavLink to="/about">$ USD</NavLink>
        <NavLink to="/about">
          <i className="fa-solid fa-location-arrow"></i>Rentals Near You
        </NavLink>
        <button type="button">Sign In/Sign up</button>
      </div>
    </StyledNav>
  );
};

export default Navbar;
