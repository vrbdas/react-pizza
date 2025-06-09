import { Link } from 'react-router-dom';

export default function PageOrderSuccess() {
  return (
    <>
      <section className="page-alert">
        <h2 className="page-alert__title">Ваш заказ успешно оформлен!</h2>
        <p className="page-alert__subtitle">
          В ближайшее время с вами свяжется наш менеджер для подтверждения деталей. <br />
          Пожалуйста, держите телефон под рукой.
        </p>
        <img className="page-alert__img" src="/order-delivery.svg" alt="order-delivery"></img>
        <Link to="/" className="btn btn-bw">
          В каталог
        </Link>
      </section>
    </>
  );
}