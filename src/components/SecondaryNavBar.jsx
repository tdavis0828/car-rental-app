import { NavLink } from 'react-router-dom';
import { StyledSecondaryNav } from '../styles/Styles';

const SecondaryNavBar = () => {
  return (
    <StyledSecondaryNav>
      <NavLink to="/about">Reservations</NavLink>
      <NavLink to="/about">Current Fleet</NavLink>
      <NavLink to="/about">Locations</NavLink>
      <NavLink to="/about">For Businesses</NavLink>
    </StyledSecondaryNav>
  );
};

export default SecondaryNavBar;
