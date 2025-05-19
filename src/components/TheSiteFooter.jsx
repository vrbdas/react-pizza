import IconGooglePlay from '@/icons/IconGooglePlay.jsx';
import IconAppStore from '@/icons/IconAppStore.jsx';

export default function TheSiteFooter() {
  return (
    <>
      <div className="site-footer">
        <p className="site-footer__title">
          <strong>React Pizza</strong>© 2025
        </p>
        <ul className="site-footer__links">
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>О нас</a>
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>Доставка</a>
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>Контакты</a>
          </li>
        </ul>
        <div className="site-footer__social">
          <a href="#" onClick={(e) => e.preventDefault()} className="site-footer__social-item">
            <IconAppStore />
          </a>
          <a href="#" onClick={(e) => e.preventDefault()} className="site-footer__social-item">
            <IconGooglePlay />
          </a>
        </div>
      </div>
    </>
  );
}
