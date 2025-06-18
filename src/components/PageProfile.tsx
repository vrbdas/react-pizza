import TheProfile from '@/components/TheProfile';
import { useLoadUser } from '@/hooks/useLoadUser';
import { Link } from 'react-router-dom';

export default function PageProfile() {
  const { user } = useLoadUser();

  return user ? (
    <TheProfile />
  ) : (
    <section className="page-alert">
      <h2 className="page-alert__title">Вы не вошли в профиль</h2>
      <p className="page-alert__subtitle">
        Похоже, вы ещё не вошли в профиль.
        <br />
        Нажмите кнопку «Вход» в шапке страницы, чтобы авторизоваться.
      </p>
      <img className="page-alert__img" src="/not-found.svg" alt="not-found"></img>
      <Link to="/" className="btn btn-bw">
        В каталог
      </Link>
    </section>
  );
}
