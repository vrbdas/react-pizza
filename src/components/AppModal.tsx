import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { auth } from '@/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from 'firebase/auth';
import useAuthModalStore from '@/stores/authModalStore';
import { useLoadUser } from '@/hooks/useLoadUser';
import { IMaskInput } from 'react-imask';
import AppTestAttention from '@/components/AppTestAttention';

type Inputs = {
  phone: string;
  code?: string;
};

declare global {
  interface Window {
    recaptchaVerifier?: RecaptchaVerifier;
  }
}

export default function AppModal() {
  const [animationRef] = useAutoAnimate();
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<string | null>(null);
  const { setAuthModal } = useAuthModalStore();

  const { reloadUserData } = useLoadUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<Inputs>();

  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: () => {
          console.log('reCAPTCHA успешно пройдена');
        },
      });
      window.recaptchaVerifier.render().catch(console.error);
    }

    return () => {
      window.recaptchaVerifier?.clear();
      window.recaptchaVerifier = undefined;
    };
  }, []);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setAlert(null);
    if (!confirmationResult) {
      await handlePhoneSubmit(data);
    } else {
      await handleCodeSubmit(data.code || '');
    }
  };

  const handlePhoneSubmit = async (data: Inputs) => {
    setLoading(true);
    const fullPhone = `+7${data.phone}`;

    try {
      const appVerifier = window.recaptchaVerifier!;
      const result = await signInWithPhoneNumber(auth, fullPhone, appVerifier);
      setConfirmationResult(result);
    } catch (err) {
      console.error(err);
      setAlert('Ошибка отправки SMS. Повторите попытку позже.');
    } finally {
      setLoading(false);
    }
  };

  const handleCodeSubmit = async (code: string) => {
    if (!code) {
      setAlert('Введите код из SMS');
      return;
    }

    if (!confirmationResult) {
      setAlert('Что-то пошло не так. Попробуйте сначала.');
      return;
    }

    setLoading(true);

    try {
      // подтвердает код и получает user из результата подтверждения
      const userCredential = await confirmationResult.confirm(code);

      reloadUserData(userCredential.user); // сразу загружает пользователя, нужно если вход прямо со страницы профиля

      reset();
      setConfirmationResult(null);
      setAuthModal(false);
    } catch (err) {
      console.error(err);
      setAlert('Неверный код. Попробуйте снова.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal__overlay">
      <AppTestAttention />
      <div className="modal">
        <div className="modal__main">
          <div ref={animationRef} style={{ position: 'absolute', top: '0', left: '0' }}>
            {alert && <div className="modal__alert">{alert}</div>}
          </div>
          <button className="modal-close" onClick={() => setAuthModal(false)}></button>
          <h2 className="modal__title">Вход</h2>
          <p className="modal__subtitle">
            Войдите, чтобы сохранять адрес доставки и историю заказов — это поможет быстрее
            оформлять заказы в будущем.
          </p>
          <form id="modal-form" className="modal__form" onSubmit={handleSubmit(onSubmit)}>
            <label className="modal__form-item">
              Ваш номер телефона
              <div className="modal__input-wrapper">
                <span className="modal__input-prefix">+7</span>
                <IMaskInput
                  mask="(000) 000-00-00"
                  unmask={true} // сохраняет только цифры в form.phone
                  onAccept={(value: string) => {
                    setValue('phone', value, { shouldValidate: true });
                  }}
                  readOnly={!!confirmationResult}
                  autoComplete="off"
                  className="modal__input"
                  placeholder="XXXXXXXXXX"
                  maxLength={15}
                  {...register('phone', {
                    required: 'Введите номер',
                    validate: {
                      checkFormat: (value) => /^[0-9]*$/.test(value) || 'Некорректный номер',
                      checkLength: (value) => value.length === 10 || 'Номер слишком короткий',
                    },
                  })}
                  inputRef={(el) => {
                    if (el) register('phone').ref(el); // передаёт DOM-элемент в react-hook-form
                  }}
                />
              </div>
              <div ref={animationRef}>
                {errors.phone && <span className="modal__form-error">{errors.phone.message}</span>}
              </div>
            </label>

            {confirmationResult && (
              <label className="modal__form-item">
                Код из SMS
                <input
                  autoComplete="off"
                  className="modal__input modal__input-code"
                  placeholder="XXXXXX"
                  maxLength={6}
                  onFocus={() => setAlert(null)}
                  {...register('code', {
                    required: 'Введите код',
                    validate: {
                      checkFormat: (value) =>
                        (!!value && /^[0-9]*$/.test(value)) || 'Некорректный формат',
                      checkLength: (value) =>
                        (!!value && value.length === 6) || 'Код слишком короткий',
                    },
                  })}
                />
                <div ref={animationRef}>
                  {errors.code && <span className="modal__form-error">{errors.code.message}</span>}
                </div>
              </label>
            )}
          </form>

          <button
            type="submit"
            form="modal-form"
            className="btn btn-bw modal__btn"
            disabled={loading}
          >
            {confirmationResult ? 'Подтвердить код' : 'Войти'}
          </button>

          <p className="modal__personal">
            Нажимая кнопку, вы соглашаетесь с обработкой личных данных.
          </p>

          <div id="recaptcha-container"></div>
        </div>
      </div>
    </div>
  );
}
