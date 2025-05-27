import { Outlet } from 'react-router-dom';
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';

export default function App() {
  return (
    <>
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