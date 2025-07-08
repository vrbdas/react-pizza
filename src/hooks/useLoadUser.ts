import { useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/firebase';
import axios from 'axios';
import useUserStore from '@/stores/userStore';

const url = 'https://react-pizza-f1a05-default-rtdb.asia-southeast1.firebasedatabase.app';

export function useLoadUser() {
  const { setUser, setUserData, setLoading } = useUserStore();

  useEffect(() => {
    setLoading(true);

    // onAuthStateChanged подписывается на изменения аутентификации
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      try {
        setUser(currentUser);

        if (currentUser) {
          await loadUserData(currentUser);
        } else {
          setUserData(null);
        }
      } catch (err) {
        console.error('Ошибка при загрузке пользователя:', err);
        setUserData(null);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe(); // при размонтировании компонента удалить подписку
  }, []);

  async function loadUserData(currentUser: User ) {
    const token = await currentUser.getIdToken(); // получает idToken
    const response = await axios.get(`${url}/users/${currentUser.uid}.json?auth=${token}`);
    setUserData(response.data);
  }

  return { reloadUserData: loadUserData };
}