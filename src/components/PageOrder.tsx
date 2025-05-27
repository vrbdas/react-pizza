export default function PageOrder() {
  return (
    <>
      <section className="order">
        <h2 className="order__title">Оформление заказа</h2>
        <p className="order__subtitle">Заполните форму, чтобы завершить оформление заказа</p>
        <form className="form">
          <label htmlFor="">
            Улица
            <input type="text" />
          </label>
          <label htmlFor="">
            Дом
            <input type="text" />
          </label>
          <label htmlFor="">
            Квартира
            <input type="text" />
          </label>
          <label htmlFor="">
            Комментарии для курьера
            <textarea name="" id=""></textarea>
          </label>
        </form>
        <p>Ваш заказ на сумму <span>1000 р.</span></p>
        <button>Завершить оформление</button>
      </section>
    </>
  );
}
