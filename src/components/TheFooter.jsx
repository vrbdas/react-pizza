import IconGooglePlay from '@/icons/IconGooglePlay.jsx';
import IconAppStore from '@/icons/IconAppStore.jsx';

export default function TheSiteFooter() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <p className="footer__title">
              <strong>React Pizza</strong>© 2025
            </p>
            <ul className="footer__links">
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  О нас
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Контакты
                </a>
              </li>
            </ul>
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
