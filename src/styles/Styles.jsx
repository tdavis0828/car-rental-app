import styled from 'styled-components';

export const StyledNav = styled.nav`
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #73777b;
  & div {
    & a {
      color: #ec994b;
      text-decoration: none;
      font-size: 1.3rem;
      padding: 0 1rem;
      & i {
        margin-right: 0.5rem;
      }
      &:hover {
        text-decoration: underline;
      }
    }

    & img {
      width: 85px;
      height: 85px;
      margin: 0 5rem;
    }

    & button {
      background: #ec994b;
      color: #73777b;
      border: none;
      border-radius: 5px;
      padding: 0.75rem;
      margin-right: 1rem;
      font-size: 1.2rem;
    }
  }
`;

export const StyledSecondaryNav = styled.nav`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background: #f1eee9;
  & a {
    color: #15133c;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledHeader = styled.header`
  height: 55vh;
  width: 100%;
  background: url('https://images.unsplash.com/photo-1616805111699-0e52fa62f779?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  & section {
    height: 50%;
    width: 55%;
    background: #fff;
    position: absolute;
    bottom: -25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.3);
    & h3 {
      font-size: 2rem;
      font-weight: 300;
      margin: 0;
      & a {
        font-size: 1rem;
        color: #000;
      }
    }
    & p {
      font-size: 1.75rem;
      font-weight: 200;
    }
    & form {
      width: 100%;
    }
    & input {
      width: 75%;
      height: 35px;
      border-radius: 25px;
      border: 2px solid #73777b;
      text-align: center;
      margin: 0 10%;
      font-size: 1.25rem;
    }
    & button {
      transform: translateX(-10rem);
      background: none;
      border: none;
      font-size: 1.5rem;
      color: #73777b;
      cursor: pointer;
    }
  }
`;

export const StyledCard = styled.article`
  height: 450px;
  width: 400px;
  border-radius: 5px;
  ${'' /* border: 1px solid #73777b; */}
  position: relative;
  transition: transform 0.35s ease;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
    transition: transform 0.35s ease;
  }
  & img {
    width: 400px;
    height: 250px;
    position: absolute;
    top: 0;
    border-radius: 5px 5px 0 0;
  }

  & div {
    position: absolute;
    bottom: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    & h3 {
      margin: 0;
    }
    & p {
      margin: 0.5rem;
    }
    & button {
      width: 70%;
      padding: 0.5rem;
      background: #ec994b;
      color: #fff;
      border: none;
      border-radius: 5px;
      font-size: 1.1rem;
      cursor: pointer;
      opacity: 85%;
      transition: opacity 0.35s ease;
      &:hover {
        opacity: 100%;
        transition: opacity 0.35s ease;
      }
    }
  }
`;

export const StyledContainer = styled.section`
  height: 85vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
