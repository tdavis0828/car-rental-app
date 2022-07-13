import { StyledHeader } from '../styles/Styles';

const Header = () => {
  return (
    <StyledHeader>
      <section>
        <h3>
          Find a vehicle <a href="/">Or edit an existing reservation</a>
        </h3>
        <p>Pick-up Location</p>
        <form>
          <input type="text" placeholder="Zip Code, City, Airport" />
          <button type="submit">
            <i className="fa-solid fa-location-crosshairs"></i>
          </button>
        </form>
      </section>
    </StyledHeader>
  );
};

export default Header;
