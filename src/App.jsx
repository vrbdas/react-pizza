import { Outlet } from 'react-router-dom';
import TheHeader from '@/components/TheHeader.jsx';
import TheFooter from '@/components/TheFooter.jsx';

export default function Root() {
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