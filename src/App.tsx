import { Outlet } from 'react-router-dom';
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';
import AppModal from '@/components/AppModal';
import useAuthModalStore from '@/stores/authModalStore';
import { useState, useEffect } from 'react';
import IconTop from '@/icons/IconTop';
import { useLoadUser } from '@/hooks/useLoadUser';

export default function App() {
  const { authModal } = useAuthModalStore();

  const [showScrollTop, setShowScrollTop] = useState(false);

  useLoadUser();

  useEffect(() => {
    function handleScroll() {
      setShowScrollTop(document.documentElement.scrollTop > document.documentElement.clientHeight);
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {authModal && <AppModal />}

      {showScrollTop && (
        <button
          className="scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <IconTop color="#fff" />
        </button>
      )}

      <TheHeader />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <TheFooter />
    </>
  );
}

// document.documentElement.scrollTop - на сколько было прокручено от верха, в начале 0
// document.documentElement.clientHeight - высота видимой части (окна)
// document.documentElement.scrollHeight - высота всей страницы, включая скрытую часть
// scrollTop + clientHeight === scrollHeight когда прокрутили до конца
