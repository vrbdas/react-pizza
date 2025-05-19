import TheSiteHeader from '@/components/TheSiteHeader.jsx';
import TheSiteFooter from '@/components/TheSiteFooter.jsx';
import TheCatalog from '@/components/TheCatalog.jsx';
import TheFilters from '@/components/TheFilters.jsx';

export default function Root() {
  return (
    <>
      <header>
        <div className="container">
          <TheSiteHeader />
        </div>
      </header>
      <main>
        <div className="container">
          <TheFilters />
          <TheCatalog />
        </div>
      </main>
      <footer>
        <div className="container">
          <TheSiteFooter />
        </div>
      </footer>
    </>
  );
}