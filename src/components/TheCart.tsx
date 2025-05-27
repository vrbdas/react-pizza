import IconCart from '@/icons/IconCart';
import IconTrash from '@/icons/IconTrash';
import IconBack from '@/icons/IconBack';
import useCartStore from '@/stores/cartStore';
import useCatalogStore from '@/stores/catalogStore';
import AppCartItem from './AppCartItem';
import { Link } from 'react-router-dom';

export default function TheCart() {
  const cartStore = useCartStore();
  const catalogStore = useCatalogStore();
  const totalPrice = () =>
    cartStore.cart.reduce((summ, item) => {
      const catalogItem = catalogStore.getItem(item.id);
      if (!catalogItem) return summ;
      return summ + catalogItem.price * item.quant;
    }, 0);
  const totalPizzas = () => cartStore.cart.reduce((summ, item) => summ + item.quant, 0);
  return (
    <>
      <section className="cart">
        <div className="cart__top">
          <h2 className="cart__title">
            <IconCart width={29} height={29} />
            Корзина
          </h2>
          <button className="cart__clear" onClick={() => cartStore.clearCart()}>
            <IconTrash />
            Очистить корзину
          </button>
        </div>
        <div className="cart__middle">
          {cartStore.cart.map((item, index) => (
            <AppCartItem key={`${item.id}_${item.dough}_${item.size}`} item={item} index={index} />
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-block">
            <div className="cart__total">
              Всего пицц: <span>{totalPizzas()} шт.</span>
            </div>
            <div className="cart__summ">
              Сумма заказа: <span>{totalPrice()} ₸</span>
            </div>
          </div>
          <div className="cart__bottom-block">
            <Link to="/" className="cart__btn cart__btn-back">
              <IconBack />
              Вернуться назад
            </Link>
            <Link to="/order" className="cart__btn cart__btn-order">Оформить заказ</Link>
          </div>
        </div>
      </section>
    </>
  );
}
