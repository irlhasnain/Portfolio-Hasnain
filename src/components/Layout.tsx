import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { MobileDrawer } from './MobileDrawer';
import { Footer } from './Footer';

export function Layout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={isHome ? "relative h-[100dvh] w-full overflow-hidden" : "min-h-screen w-full flex flex-col px-6 sm:px-10 pb-8"}>
      <Header onOpenDrawer={() => setIsDrawerOpen(true)} />
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      
      <main className={isHome ? "h-full w-full" : "flex-grow pt-32 sm:pt-40 max-w-5xl mx-auto w-full"}>
        <Outlet />
      </main>

      {!isHome && <Footer />}
    </div>
  );
}
