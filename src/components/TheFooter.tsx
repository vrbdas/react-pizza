import IconGooglePlay from '@/icons/IconGooglePlay';
import IconAppStore from '@/icons/IconAppStore';
import { Link } from 'react-router-dom';

export default function TheSiteFooter() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__title">
              <strong>React Pizza</strong>© 2025
            </div>
            <nav className="footer__nav">
              <button className="footer__link">
                Вход
              </button>
              <Link to="/delivery" className="footer__link">
                Доставка
              </Link>
              <Link to="/cart" className="footer__link">
                Корзина
              </Link>
            </nav>
            <div className="footer__social">
              <a href="#" onClick={(e) => e.preventDefault()} className="footer__social-item">
                <IconAppStore />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="footer__social-item">
                <IconGooglePlay />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
