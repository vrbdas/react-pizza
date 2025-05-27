import IconCartEmpty from '@/icons/IconCartEmpty';
import { Link } from 'react-router-dom';

export default function TheCartEmpty() {
  return (
    <>
      <section className="cart-empty">
        <h2 className="cart-empty__title">Ваша корзина пуста</h2>
        <p className="cart-empty__subtitle">
          Похоже, вы ещё не выбрали ни одной пиццы.<br />Чтобы сделать заказ, вернитесь на главную
          страницу и выберите любимую пиццу!
        </p>
        <div className="cart-empty__img">
          <IconCartEmpty />
        </div>
        <Link to="/" className="cart-empty__btn">В каталог</Link>
      </section>
    </>
  );
}
