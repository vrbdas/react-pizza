import { Link } from 'react-router-dom';


export default function PageNotFound() {
  return (
    <>
      <section className="page-alert">
        <h2 className="page-alert__title">Упс! Такой страницы не существует</h2>
        <p className="page-alert__subtitle">
          Похоже, вы свернули не туда. <br/>Страница, которую вы ищете, не найдена.
        </p>
        <img className="page-alert__img" src='/not-found.svg' alt='not-found'></img>
        <Link to="/" className="btn btn-bw">
          В каталог
        </Link>
      </section>
    </>
  );
}
