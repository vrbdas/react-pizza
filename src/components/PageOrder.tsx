import TheOrder from '@/components/TheOrder';
import useCartStore from '@/stores/cartStore';
import { useLoadUser } from '@/hooks/useLoadUser';
import { Link } from 'react-router-dom';

export default function PageOrder() {
  const { cart } = useCartStore();
  const { user } = useLoadUser();

  return cart.length > 0 && user ? (
    <TheOrder />
  ) : (
    <section className="page-alert">
      <h2 className="page-alert__title">Невозможно оформить заказ</h2>
      <p className="page-alert__subtitle">
        Похоже, ваша корзина пуста или вы ещё не вошли в профиль.
        <br />
         Чтобы сделать заказ, добавьте пиццу в корзину и войдите в профиль через шапку страницы.
      </p>
      <img className="page-alert__img" src="/cart-empty.svg" alt="cart-empty"></img>
      <Link to="/" className="btn btn-bw">
        В каталог
      </Link>
    </section>
  );
}
