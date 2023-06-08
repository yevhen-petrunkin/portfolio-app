import logo from '../images/logo-photo.jpg';
import { RxHamburgerMenu } from 'react-icons/Rx';

const Header = function () {
  return (
    <header className="header">
      <div className="topline">
        <a
          href="https://www.linkedin.com/in/yevhen-petrunkin-503617259/"
          className="logo"
          target="_blank"
          rel="noopener"
        >
          <span className="logo__img--wrapper">
            <img className="logo__img" src={logo} alt="My Photo" />
          </span>
          <span className="logo__text">Y.Petrunkin</span>
        </a>

        <div className="topline__decoration"></div>

        <div className="topline__contacts">
          <span className="topline__phonenumber">
            <span className="topline__category">Phone:</span>
            <a className="topline__number" href="tel:+380962978729">
              +38(096)29-787-29
            </a>
          </span>

          <span className="topline__separator"></span>

          <div className="topline__mylocation">
            <span className="topline__category">Location:</span>
            <span className="topline__location">Shostka, Ukraine</span>
          </div>
        </div>

        <div className="topline__decoration"></div>

        <button className="burger__button" type="button">
          <RxHamburgerMenu className="burger__icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
