import IconCart from '@/icons/IconCart';
import { Link, useNavigate } from 'react-router-dom';
import IconBack from '@/icons/IconBack';
import useCartStore from '@/stores/cartStore';
import useCatalogStore from '@/stores/catalogStore';
import AppCartItem from '@/components/AppCartItem';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useUserStore from '@/stores/userStore';
import { useLoadUser } from '@/hooks/useLoadUser';

export default function TheOrder() {
  const { cart, clearCart } = useCartStore();

  const { getItem } = useCatalogStore();

  const navigate = useNavigate();

  const { user, userData } = useUserStore();

  const [animationRef] = useAutoAnimate();

  const { reloadUserData } = useLoadUser();

  const url =
    'https://react-pizza-f1a05-default-rtdb.asia-southeast1.firebasedatabase.app';

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

  useEffect(() => {
    reset({
      name: userData?.userName || '',
      phone: user?.phoneNumber?.slice(2) || '',
      address: userData?.userAddress || '',
      comment: '',
    });
  }, [user, userData]); // значения по умолчанию из профиля или пустые

  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);

    const newOrderKey = Date.now().toString();

    const orderData = {
      name: data.name.trim().slice(0, 50),
      phone: `+7${data.phone}`,
      address: data.address.trim().slice(0, 100),
      comment: data.comment.trim().slice(0, 200),
      cart: [...cart],
    };

    try {
      if (!user) return;
      
      const token = await user.getIdToken();
      await axios.patch(`${url}/.json?auth=${token}`, {
        [`users/${user.uid}/orders/${newOrderKey}`]: orderData,
      });

      await reloadUserData(user); // чтобы сразу обновить заказы в профиле
      reset();
      clearCart();
      navigate('/order-success');
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <>
      <section className="order">
        <div className="order__column">
          <h2 className="order__title">
            <IconCart width={29} height={29} />
            Оформление заказа
          </h2>
          <p className="order__subtitle">Заполните форму, чтобы завершить оформление заказа</p>
          <form
            id="order-form"
            className="order-form"
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
          >
            <label className="order-form__item">
              Имя
              <input
                className="order-form__input"
                type="text"
                maxLength={50}
                {...register('name', { required: 'Введите имя' })}
              />
              <div ref={animationRef}>
                {errors.name && <span className="order-form__error">{errors.name.message}</span>}
              </div>
            </label>
            <label className="order-form__item">
              Номер телефона
              <div className="order-form__input-wrapper">
                <span className="order-form__input-prefix">+7</span>
                <input
                  className="order-form__input order-form__input-phone"
                  placeholder="XXXXXXXXXX"
                  maxLength={10}
                  {...register('phone', {
                    required: 'Введите номер',
                    validate: {
                      checkFormat: (value) => /^[0-9]*$/.test(value) || 'Некорректный номер',
                      checkLength: (value) => value.length === 10 || 'Номер слишком короткий',
                    },
                  })}
                />
              </div>
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
                maxLength={100}
                {...register('address', { required: 'Введите адрес' })}
              />
              <div ref={animationRef}>
                {errors.address && (
                  <span className="order-form__error">{errors.address.message}</span>
                )}
              </div>
            </label>
            <label className="order-form__item order-form__comment">
              Комментарий к заказу
              <textarea
                maxLength={200}
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
            <button className="btn btn-order" form="order-form" disabled={loading}>
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
