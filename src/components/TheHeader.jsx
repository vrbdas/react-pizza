import { Link } from 'react-router-dom';
import IconLogo from '@/icons/IconLogo.jsx';

export default function TheSiteHeader() {
  return (
    <>
      <header className='header'>
        <div className="container">
          <div className="header__inner">
            <a className="header__logo">
              <IconLogo />
              <div className="header__logo-text">
                <h1 className="header__logo-title">React Pizza</h1>
                <p className="header__logo-subtitle">самая реактивная пицца</p>
              </div>
            </a>
            <Link to="/cart" className="header__btn">
              <span className="header__btn-text">2850 ₸</span>
              <span className="header__btn-divider"></span>
              <div className="header__btn-cart">
                <img src="/icons/cart.svg" alt="cart" />
                <span className="header__btn-text">3</span>
              </div>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
