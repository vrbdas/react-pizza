import { useState } from 'react';
import IconPlus from '@/icons/IconPlus';
import useCartStore from '@/stores/cartStore';

interface AppCardProps {
  id: number;
  title: string;
  descr: string;
  price: number;
  image: string;
}

export default function AppCard({ id, title, descr, price, image }: AppCardProps) {
  const cartStore = useCartStore();

  const [cardOptions, setCardOptions] = useState<{
    id: number;
    dough: string;
    size: number;
  }>({
    id: id,
    dough: 'standart',
    size: 30,
  });

  function cardDoughClick(dough: string) {
    setCardOptions({ ...cardOptions, dough: dough });
  }

  function cardSizeClick(size: number) {
    setCardOptions({ ...cardOptions, size: size });
  }

  function btnClick() {
    cartStore.addItem({
      id: cardOptions.id,
      dough: cardOptions.dough,
      size: cardOptions.size,
      quant: 1,
    });
  }

  function cartCounter() {
    return cartStore.cart
      .filter((item) => item.id === id)
      .reduce((summ, item) => summ + item.quant, 0);
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
          <p className="card__price">{price} ₸</p>
          <button className="card__btn" onClick={btnClick}>
            <IconPlus color='#fe5f1e' />
            Добавить
            {cartCounter() > 0 && 
              <span className="card__btn-quantity">{cartCounter()}</span>
            }
          </button>
        </div>
      </div>
    </>
  );
}
