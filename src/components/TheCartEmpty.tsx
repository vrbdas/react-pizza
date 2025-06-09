import { Link } from 'react-router-dom';

export default function PageAlert() {
  return (
    <>
      <section className="page-alert">
        <h2 className="page-alert__title">Ваша корзина пуста</h2>
        <p className="page-alert__subtitle">
          Похоже, вы ещё не выбрали ни одной пиццы.<br />Чтобы сделать заказ, вернитесь на главную
          страницу и выберите любимую пиццу!
        </p>
        <img className="page-alert__img" src='/cart-empty.svg' alt='cart-empty'></img>
        <Link to="/" className="btn btn-bw">В каталог</Link>
      </section>
    </>
  );
}
