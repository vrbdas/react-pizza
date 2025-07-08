import TheProfile from '@/components/TheProfile';
import { Link } from 'react-router-dom';
import useUserStore from '@/stores/userStore';

export default function PageProfile() {
  const { user, loading } = useUserStore();

  if (loading) {
    return (
      <div className="loader__wrapper">
        <div className="loader"></div>
      </div>
    );
  }

  if (user) {
    return <TheProfile />;
  }

  return (
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
