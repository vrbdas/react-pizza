import { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/firebase';

export function useLoadUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // onAuthStateChanged подписывается на изменения аутентификации
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // при размонтировании компонента удалить подписку
  }, []);

  return { user };
}

// возвращает такой объект из firebase:
// user: {
//     "uid": "...",
//     "emailVerified": false,
//     "isAnonymous": false,
//     "phoneNumber": "+79999999999",
//     "providerData": [
//         {
//             "providerId": "phone",
//             "uid": "+79999999999",
//             "displayName": null,
//             "email": null,
//             "phoneNumber": "+79999999999",
//             "photoURL": null
//         }
//     ],
//     "stsTokenManager": {
//         "refreshToken": "...",
//         "accessToken": "...",
//         "expirationTime": 1750082151350
//     },
//     "createdAt": "1749487938901",
//     "lastLoginAt": "1750072569451",
//     "apiKey": "...",
//     "appName": "[DEFAULT]"
// }
