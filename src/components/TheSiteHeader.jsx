import IconLogo from '@/icons/IconLogo.jsx';

export default function TheSiteHeader() {
  return (
    <>
      <div className="site-header">
        <a className="site-header__logo">
          <IconLogo />
          <div className="site-header__logo-text">
            <h1 className="site-header__logo-title">React Pizza</h1>
            <p className="site-header__logo-subtitle">самая реактивная пицца</p>
          </div>
        </a>
        <a href="#" className="site-header__btn">
          <span className="site-header__btn-text">2850 ₸</span>
          <span className="site-header__btn-divider"></span>
          <div className="site-header__btn-cart">
            <img src="/icons/cart.svg" alt="cart" />
            <span className="site-header__btn-text">3</span>
          </div>
        </a>
      </div>
    </>
  );
}
