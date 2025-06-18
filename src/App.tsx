import { Outlet } from 'react-router-dom';
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';
import AppModal from '@/components/AppModal';
import useAuthModalStore from '@/stores/authModalStore';

export default function App() {
  const { authModal } = useAuthModalStore();

  return (
    <>
      {authModal && <AppModal />}
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
