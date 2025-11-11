import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import BottomNav from './components/BottomNav';
import Profile from './pages/Profile';
import License from './pages/License';
import FineTracker from './pages/FineTracker';
import Settings from './pages/Settings';
import ErrorBoundary from './components/ErrorBoundary';
import { AnimatePresence, motion } from 'framer-motion';

const pages = [
  { component: Profile, key: 'profile' },
  { component: License, key: 'license' },
  { component: FineTracker, key: 'fines' },
  { component: Settings, key: 'settings' },
];

const App: React.FC = () => {
  const [[currentPage, direction], setCurrentPage] = useState<[number, number]>([0, 0]);

  const setPage = (newPage: number) => {
    if (newPage === currentPage) return;
    const newDirection = newPage > currentPage ? 1 : -1;
    setCurrentPage([newPage, newDirection]);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
  };

  const PageComponent = pages[currentPage].component;

  return (
    <ErrorBoundary>
      <AppProvider>
        <div className="h-screen w-screen flex flex-col font-sans antialiased max-w-lg mx-auto bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-slate-950 dark:via-black dark:to-slate-950 shadow-2xl overflow-hidden">
          <main className="flex-grow overflow-y-auto relative pb-28">
             <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentPage}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                    scale: { type: 'spring', stiffness: 300, damping: 30 },
                  }}
                  className="absolute top-0 left-0 w-full h-full"
                >
                  <PageComponent />
                </motion.div>
             </AnimatePresence>
          </main>
          <BottomNav activePage={currentPage} setPage={setPage} />
        </div>
      </AppProvider>
    </ErrorBoundary>
  );
};

export default App;