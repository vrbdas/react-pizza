import AppDeliveryMap from '@/components/AppDeliveryMap';
import IconDelivery from '@/icons/IconDelivery';
import { Link } from 'react-router-dom';

export default function PageDelivery() {
  return (
    <>
      <section className="delivery">
        <div className='delivery__top'>
          <h2 className="delivery__title">
            <IconDelivery width={29} height={29}/>
            Доставка
            </h2>
          <p className="delivery__text-gray">
            Готовим и доставляем свежую пиццу прямо к вам домой или в офис.
          </p>
        </div>
        <div className="delivery__columns">
          <div className="delivery__descr">
            <div>
              <h3 className="delivery__subtitle">Адрес нашей пиццерии</h3>
              <p className='delivery__text'>Алматы, ул. Толе би, 71.</p>
              <p className='delivery__text'>ТРЦ «Silk Way City»</p>
            </div>
            <div>
              <h2 className="delivery__subtitle">Условия доставки</h2>
              <div className="delivery__list">
                <div className="delivery__item"><span  className='delivery__text-gray'>Время доставки: </span><span>от 30 до 60 минут</span></div>
                <div className="delivery__item"><span className='delivery__text-gray'>Зона доставки: </span>центр Алматы</div>
                <div className="delivery__item"><span className='delivery__text-gray'>Бесплатная доставка: </span>от 4000 ₸</div>
                <div className="delivery__item"><span className='delivery__text-gray'>Платная доставка: </span>700 ₸</div>
              </div>
            </div>
            <div>
              <h3 className="delivery__subtitle">Как заказать</h3>
              <p className='delivery__text'>
                По телефону: <span>+7 (727) 123-45-67</span>
              </p>
              <p className='delivery__text'>Или через сайт — просто добавьте пиццу в корзину.</p>
            </div>
            <Link to="/" className="btn btn-bw">В каталог</Link>
          </div>
          <div className="delivery__map">
            <h3 className="delivery__subtitle">Карта зоны доставки</h3>
            <AppDeliveryMap />
          </div>
        </div>
      </section>
    </>
  );
}
