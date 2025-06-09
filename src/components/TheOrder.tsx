import IconCart from '@/icons/IconCart';
import { Link, useNavigate } from 'react-router-dom';
import IconBack from '@/icons/IconBack';
import useCartStore from '@/stores/cartStore';
import useCatalogStore from '@/stores/catalogStore';
import AppCartItem from '@/components/AppCartItem';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useState } from 'react';

export default function TheOrder() {
  const { cart, clearCart } = useCartStore();
  const { getItem } = useCatalogStore();
  const navigate = useNavigate();

  const [animationRef] = useAutoAnimate();

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

  type Inputs = {
    name: string;
    phone: string;
    address: string;
    comment: string;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);

    // Заглушка для теста
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(3000);

    console.log(data);
    reset();
    navigate('/order-success');
    clearCart();
    setLoading(false);
  };

  const phoneRegExp = /^\+([1-9]\d{1,14})$/;

  return (
    <>
      <section className="order">
        <div className="order__column">
          <h2 className="order__title">
            <IconCart width={29} height={29} />
            Оформление заказа
          </h2>
          <p className="order__subtitle">Заполните форму, чтобы завершить оформление заказа</p>
          <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
            <label className="order-form__item">
              Имя
              <input
                className="order-form__input"
                type="text"
                {...register('name', { required: 'Введите имя' })}
              />
              <div ref={animationRef}>
                {errors.name && <span className="order-form__error">{errors.name.message}</span>}
              </div>
            </label>
            <label className="order-form__item">
              Номер телефона
              <input
                className="order-form__input"
                type="text"
                {...register('phone', {
                  required: 'Введите номер',
                  pattern: {
                    value: phoneRegExp,
                    message: 'Некорректный номер',
                  },
                })}
              />
              <div ref={animationRef}>
                {errors.phone && (
                  <span className="order-form__error" key={errors.phone.message}>
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </label>
            <label className="order-form__item order-form__address">
              Адрес доставки
              <input
                className="order-form__input"
                type="text"
                {...register('address', { required: 'Введите адрес' })}
              />
              <div ref={animationRef}>
                {errors.address && <span className="order-form__error">{errors.address.message}</span>}
              </div>
            </label>
            <label className="order-form__item order-form__comment">
              Комментарий к заказу
              <textarea
                className="order-form__input order-form__comment-textarea"
                {...register('comment')}
              ></textarea>
            </label>
          </form>
          <div className="order__btns">
            <Link to="/cart" className="btn btn-back">
              <IconBack />
              Вернуться назад
            </Link>
            <button className="btn btn-order" form="my-form" disabled={loading}>
              Завершить оформление
            </button>
          </div>
        </div>

        <div className="order__column">
          <p className="order__sum">
            Ваш заказ на сумму <span>{totalPrice()} ₸</span>
          </p>
          <div className="cart__middle">
            {cart.map((item, index) => (
              <AppCartItem
                key={`${item.id}_${item.dough}_${item.size}`}
                item={item}
                index={index}
                controls={false}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
