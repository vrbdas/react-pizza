import { useForm, SubmitHandler } from 'react-hook-form';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useState } from 'react';

type Inputs = {
  phone: string;
};

export default function AppModal() {
  const [animationRef] = useAutoAnimate();

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
    setLoading(false);
  };

  const phoneRegExp = /^\+([1-9]\d{1,14})$/;

  return (
    <>
      <div className="modal__overlay">
        <div className="modal">
          <button className="close"></button>
          <h2 className="modal__title">Вход</h2>
          <p className="modal__subtitle">
            Войдите, чтобы отслеживать заказы, сохранять адреса, получать бонусы и персональные
            предложения.
          </p>
          <form className="modal__form" onSubmit={handleSubmit(onSubmit)}>
            <label className="modal__form-item">
              Ваш номер телефона
              <input
                className="modal__form-input"
                type="text"
                value={'+7'}
                {...register('phone', {
                  required: 'Введите номер',
                  pattern: {
                    value: phoneRegExp,
                    message: 'Некорректный номер',
                  },
                })}
              />
            </label>
            <div ref={animationRef}>
              {errors.phone && (
                <span className="modal__form-error" key={errors.phone.message}>
                  {errors.phone.message}
                </span>
              )}
            </div>
            <p className="modal__personal">
              Указывая номер, вы соглашаетесь с обработкой личных данных.
            </p>
          </form>
          <button type="submit" className="btn btn-bw">
            Войти
          </button>
        </div>
      </div>
    </>
  );
}
