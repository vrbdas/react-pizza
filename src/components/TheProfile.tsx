import IconLogin from '@/icons/IconLogin';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import IconLogout from '@/icons/IconLogout';
import { useEffect, useState, useRef } from 'react';
import { auth } from '@/firebase';
import AppCartItem from '@/components/AppCartItem';
import IconEdit from '@/icons/IconEdit';
import IconSave from '@/icons/IconSave';
import axios from 'axios';
import useUserStore from '@/stores/userStore';

const url = 'https://react-pizza-f1a05-default-rtdb.asia-southeast1.firebasedatabase.app';

export default function TheProfile() {
  async function handleLogout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }

  const { user, userData } = useUserStore();

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

  const [name, setName] = useState('');
  const nameRef = useRef<HTMLInputElement>(null);

  const [address, setAddress] = useState('');
  const addressRef = useRef<HTMLInputElement>(null);

  const [edit, setEdit] = useState('');

  function editHandler(input: string) {
    if (input === 'name') {
      setEdit('name');
      nameRef.current?.focus();
    }
    if (input === 'address') {
      setEdit('address');
      addressRef.current?.focus();
    }
  }

  async function saveHandler() {
    if (!user) return;
    const token = await user.getIdToken();

    if (edit === 'name') {
      try {
        await axios.patch(`${url}/.json?auth=${token}`, { [`users/${user?.uid}/userName`]: name });
      } catch (err) {
        console.log(err);
      }
    }
    if (edit === 'address') {
      try {
        await axios.patch(`${url}/.json?auth=${token}`, { [`users/${user?.uid}/userAddress`]: address });
      } catch (err) {
        console.log(err);
      }
    }
    setEdit('');
  }

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        saveHandler();
      }
    };
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [name, address]);

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

        {user && (
          <div className="profile__data">
            <h3 className="profile__subtitle">Данные профиля</h3>
            <div className="profile__data-items">
              <div className="profile__data-item">
                <p className="profile__data-text-gray">Ваш номер телефона: </p>
              </div>
              <div className="profile__data-item">
                <p className="profile__data-text">{user?.phoneNumber}</p>
              </div>
              <div className="profile__data-item"></div>
              <div className="profile__data-item">
                <p className="profile__data-text-gray">Ваше имя: </p>
              </div>
              <div className="profile__data-item">
                <input
                  defaultValue={userData?.userName || ''}
                  ref={nameRef}
                  className="profile__input"
                  type="text"
                  readOnly={edit !== 'name'}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="profile__data-item">
                {edit !== 'name' ? (
                  <button onClick={() => editHandler('name')}>
                    <IconEdit color="#7b7b7b" />
                  </button>
                ) : (
                  <button onClick={() => saveHandler()}>
                    <IconSave color="#7b7b7b" />
                  </button>
                )}
              </div>
              <div className="profile__data-item">
                <p className="profile__data-text-gray">Ваш адрес доставки: </p>
              </div>
              <div className="profile__data-item">
                <input
                  defaultValue={userData?.userAddress || ''}
                  ref={addressRef}
                  className="profile__input"
                  type="text"
                  readOnly={edit !== 'address'}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="profile__data-item">
                {edit !== 'address' ? (
                  <button onClick={() => editHandler('address')}>
                    <IconEdit color="#7b7b7b" />
                  </button>
                ) : (
                  <button onClick={() => saveHandler()}>
                    <IconSave color="#7b7b7b" />
                  </button>
                )}
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
