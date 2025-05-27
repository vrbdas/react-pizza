import { Link } from 'react-router-dom';
import IconLogo from '@/icons/IconLogo';
import IconCart from '@/icons/IconCart';
import useCartStore from '@/stores/cartStore';
import useCatalogStore from '@/stores/catalogStore';

export default function TheSiteHeader() {
  const cartStore = useCartStore();
  const catalogStore = useCatalogStore();

  const totalPrice = () => {
    return cartStore.cart.reduce((summ, item) => {
      const catalogItem = catalogStore.getItem(item.id);
      if (!catalogItem) return summ;
      return summ + catalogItem.price * item.quant;
    }, 0);
  };

  const totalPizzas = () => cartStore.cart.reduce((summ, item) => summ + item.quant, 0);

  return (
    <>
      <header className='header'>
        <div className="container">
          <div className="header__inner">
            <Link to="/" className="header__logo">
              <IconLogo />
              <div className="header__logo-text">
                <h1 className="header__logo-title">React Pizza</h1>
                <p className="header__logo-subtitle">самая реактивная пицца</p>
              </div>
            </Link>
            <Link to="/cart" className="header__btn">
              <span className="header__btn-text">{totalPrice()} ₸</span>
              <span className="header__btn-divider"></span>
              <div className="header__btn-cart">
                <IconCart color={'#fff'} />
                <span className="header__btn-text">{totalPizzas()}</span>
              </div>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
