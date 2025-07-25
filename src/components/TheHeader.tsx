import { Link, useNavigate } from 'react-router-dom';
import IconLogo from '@/icons/IconLogo';
import IconCart from '@/icons/IconCart';
import useCartStore from '@/stores/cartStore';
import useCatalogStore from '@/stores/catalogStore';
import IconDelivery from '@/icons/IconDelivery';
import IconLogin from '@/icons/IconLogin';
import { useLoadCatalog } from '@/hooks/useLoadCatalog';
import useAuthModalStore from '@/stores/authModalStore';
import useUserStore from '@/stores/userStore';

export default function TheSiteHeader() {
  const cartStore = useCartStore();
  const catalogStore = useCatalogStore();

  useLoadCatalog();

  const { user } = useUserStore();

  const { setAuthModal } = useAuthModalStore();

  const navigate = useNavigate();

  const totalPrice = () => {
    return cartStore.cart.reduce((summ, item) => {
      const catalogItem = catalogStore.getItem(item.id);
      if (!catalogItem) return summ;
      return summ + catalogItem.price * item.quant;
    }, 0);
  };

  const totalPizzas = () => cartStore.cart.reduce((summ, item) => summ + item.quant, 0);

  function formatPhone(phone: string) {
    return `${phone.slice(0, 2)} (${phone.slice(2, 5)}) ${phone.slice(5, 8)}-${phone.slice(8, 10)}-${phone.slice(10, 12)}`;
  }

  function profileClick() {
    if (user) {
      navigate('/profile');
    } else {
      setAuthModal(true);
    }
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <Link to="/" className="header__logo">
              <IconLogo />
              <div className="header__logo-text">
                <h1 className="header__logo-title">React Pizza</h1>
                <p className="header__logo-subtitle">самая реактивная пицца</p>
              </div>
            </Link>
            <div className="header__right-menu">
              <button onClick={() => profileClick()} className="header__link">
                <IconLogin />
                {user ? formatPhone(user.phoneNumber ?? '') : 'Вход'}
              </button>
              <Link to="/delivery" className="header__link">
                <IconDelivery />
                Доставка
              </Link>
              <Link to="/cart" className="header__cart">
                <span className="header__cart-text">{totalPrice()} ₸</span>
                <span className="header__cart-divider"></span>
                <div className="header__cart-icon">
                  <IconCart color={'#fff'} />
                  <span className="header__cart-text">{totalPizzas()}</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
