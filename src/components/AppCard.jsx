import { useState } from 'react';

export default function AppCard({ id, title, descr, price, image }) {
  const [cardOptions, setCardOptions] = useState({
    id: id,
    dough: 'standart',
    size: 30,
  });

  const sizes = [25, 30, 35];

  function cardDoughClick(dough) {
    setCardOptions({ ...cardOptions, dough: dough });
  }

  function cardSizeClick(size) {
    setCardOptions({ ...cardOptions, size: size });
  }

  return (
    <>
      <div className="card">
        <img className="card__img" src={image} alt="pizza" />
        <h3 className="card__title">{title}</h3>
        <p className="card__descr">{descr}</p>
        <div className="card__options">
          <ul className="card__dough">
            <li
              className={`card__dough-item ${cardOptions.dough === 'standart' ? 'active' : ''}`}
              onClick={() => cardDoughClick('standart')}
            >
              традиционное
            </li>
            <li
              className={`card__dough-item ${cardOptions.dough === 'thin' ? 'active' : ''}`}
              onClick={() => cardDoughClick('thin')}
            >
              тонкое
            </li>
          </ul>
          <ul className="card__size">
            <li
              className={cardOptions.size === 25 ? 'card__size-item active' : 'card__size-item'}
              onClick={() => cardSizeClick(25)}
            >
              25 см.
            </li>
            <li
              className={cardOptions.size === 30 ? 'card__size-item active' : 'card__size-item'}
              onClick={() => cardSizeClick(30)}
            >
              30 см.
            </li>
            <li
              className={cardOptions.size === 35 ? 'card__size-item active' : 'card__size-item'}
              onClick={() => cardSizeClick(35)}
            >
              35 см.
            </li>
          </ul>
        </div>
        <div className="card__footer">
          <p className="card__price">{price} ₽</p>
          <button className="card__btn">
            <img src="/icons/plus.svg" alt="plus" />
            Добавить
            <span className="card__btn-quantity">2</span>
          </button>
        </div>
      </div>
    </>
  );
}
