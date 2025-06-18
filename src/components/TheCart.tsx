import IconCart from '@/icons/IconCart';
import IconTrash from '@/icons/IconTrash';
import IconBack from '@/icons/IconBack';
import useCartStore from '@/stores/cartStore';
import useCatalogStore from '@/stores/catalogStore';
import AppCartItem from '@/components/AppCartItem';
import { Link, useNavigate } from 'react-router-dom';
import { useLoadUser } from '@/hooks/useLoadUser';
import useAuthModalStore from '@/stores/authModalStore';

export default function TheCart() {
  const { cart, clearCart } = useCartStore();
  const { getItem } = useCatalogStore();

  const { setAuthModal } = useAuthModalStore();

  const { user } = useLoadUser();

  const navigate = useNavigate();

  const totalPrice = (): number => {
    let sum = 0;
    for (const item of cart) {
      const catalogItem = getItem(item.id);
      if (catalogItem) {
        sum += catalogItem.price * item.quant;
      }
    }
    return sum;
  };

  const totalPizzas = () => cart.reduce((sum, item) => sum + item.quant, 0);

  function orderClick() {
    if (user) {
      navigate('/order');
    } else {
      setAuthModal(true);
    }
  }

  return (
    <>
      <section className="cart">
        <div className="cart__top">
          <h2 className="cart__title">
            <IconCart width={29} height={29} />
            Корзина
          </h2>
          <button className="cart__clear" onClick={() => clearCart()}>
            <IconTrash color="#7b7b7b" />
            Очистить корзину
          </button>
        </div>
        <div className="cart__middle">
          {cart.map((item, index) => (
            <AppCartItem key={`${item.id}_${item.dough}_${item.size}`} item={item} index={index} />
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-block">
            <div className="cart__total">
              Всего пицц: <span>{totalPizzas()} шт.</span>
            </div>
            <div className="cart__sum">
              Сумма заказа: <span>{totalPrice()} ₸</span>
            </div>
          </div>
          <div className="cart__bottom-block">
            <Link to="/" className="btn btn-back">
              <IconBack color="#7b7b7b" />
              Вернуться назад
            </Link>
            <button onClick={() => orderClick()} className="btn btn-order">
              Оформить заказ
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
