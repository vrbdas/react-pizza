import { Outlet } from 'react-router-dom';
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';
import AppModal from '@/components/AppModal';
import { useState } from 'react';

export default function App() {


  
  return (
    <>
      <AppModal />
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
