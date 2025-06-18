import IconLogin from '@/icons/IconLogin';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import IconLogout from '@/icons/IconLogout';
import { useEffect, useState } from 'react';
import { auth } from '@/firebase';
import axios from 'axios';
import { useLoadUser } from '@/hooks/useLoadUser';
import AppCartItem from '@/components/AppCartItem';

type OrderItem = {
  id: number;
  size: number;
  dough: string;
  quant: number;
};

type Order = {
  address: string;
  cart: OrderItem[];
  comment: string;
  name: string;
  phone: string;
};

type UserData = {
  name?: string;
  address?: string;
  orders?: Record<string, Order>;
};

export default function TheProfile() {
  async function handleLogout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }

  const { user } = useLoadUser();

  const url = 'https://react-pizza-f1a05-default-rtdb.asia-southeast1.firebasedatabase.app';

  const [loading, setLoading] = useState(false);

  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if (!user) return;

    const loadUserData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${url}/users/${user?.uid}.json`);
        setUserData(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, [user]);

  function formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp);

    return date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  return (
    <>
      <section className="profile">
        <div className="profile__top">
          <h2 className="profile__title">
            <IconLogin width={29} height={29} />
            Профиль
          </h2>
          <button className="profile__logout" onClick={() => handleLogout()}>
            <IconLogout color="#7b7b7b" />
            Выход из профиля
          </button>
        </div>

        {userData && (
          <div className="profile__data">
            <h3 className="profile__subtitle">Данные профиля</h3>
            <div className="profile__data-items">
              <div className="profile__data-item">
                <p>Ваш номер телефона: {user?.phoneNumber}</p>
              </div>
              <div className="profile__data-item">
                <p>Ваше имя: {userData?.name}</p>
                <input className="profile__input" type="text" placeholder="Введите имя" />
                <button>{userData?.name ? 'Изменить' : 'Добавить'}</button>
              </div>
              <div className="profile__data-item">
                <p>Ваш адрес доставки: {userData?.address}</p>
                <input className="profile__input" type="text" placeholder="Введите адрес" />
                <button>{userData?.address ? 'Изменить' : 'Добавить'}</button>
              </div>
            </div>
          </div>
        )}

        {userData?.orders ? (
          <div className="profile__orders">
            <h3 className="profile__subtitle">История заказов</h3>
            <div className="profile__orders-items">
              {Object.entries(userData.orders)
                .reverse()
                .map(([orderId, order]) => (
                  <div className="profile__orders-item" key={orderId}>
                    <div className="profile__orders-item-top">
                      <h4 className="profile__order-title">Заказ номер {orderId}</h4>
                      <p className="profile__order-date">{formatTimestamp(+orderId)}</p>
                    </div>
                    {order.cart.map((item, index) => (
                      <AppCartItem
                        key={`${item.id}_${item.dough}_${item.size}`}
                        item={item}
                        index={index}
                        controls={false}
                        small={true}
                      />
                    ))}
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div>
            <h3>Заказов пока не было</h3>
          </div>
        )}

        <Link to="/" className="btn btn-bw">
          В каталог
        </Link>
      </section>
    </>
  );
}
