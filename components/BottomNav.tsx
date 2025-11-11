import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { ProfileIcon, LicenseIcon, FinesIcon, SettingsIcon } from './icons';
import { motion } from 'framer-motion';

interface BottomNavProps {
  activePage: number;
  setPage: (pageIndex: number) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activePage, setPage }) => {
  const { t } = useTranslations();

  const navItems = [
    { label: t('nav_profile'), icon: ProfileIcon, pageIndex: 0 },
    { label: t('nav_license'), icon: LicenseIcon, pageIndex: 1 },
    { label: t('nav_fines'), icon: FinesIcon, pageIndex: 2 },
    { label: t('nav_settings'), icon: SettingsIcon, pageIndex: 3 },
  ];

  return (
    <div className="absolute bottom-4 left-0 right-0 flex justify-center z-50 px-4">
      <nav className="flex items-center gap-1.5 p-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 dark:border-slate-700/60 relative overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
        
        {navItems.map((item) => (
          <motion.button
            key={item.pageIndex}
            onClick={() => setPage(item.pageIndex)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative flex flex-col items-center justify-center w-16 h-14 rounded-xl transition-all duration-300 ${
              activePage !== item.pageIndex 
                ? 'text-slate-500 dark:text-slate-400 hover:text-brand-blue-500 dark:hover:text-brand-blue-300' 
                : ''
            }`}
          >
            {activePage === item.pageIndex && (
              <>
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 bg-gradient-to-br from-brand-blue-600 to-brand-blue-700 rounded-xl shadow-lg shadow-brand-blue-500/50"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-brand-blue-400 rounded-xl blur-xl opacity-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                />
              </>
            )}
            <div className={`relative z-10 flex flex-col items-center justify-center transition-all ${
              activePage === item.pageIndex ? 'text-white' : ''
            }`}>
              <motion.div
                animate={{
                  scale: activePage === item.pageIndex ? 1.1 : 1,
                  y: activePage === item.pageIndex ? -2 : 0,
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <item.icon className={`h-6 w-6 transition-all ${activePage === item.pageIndex ? '' : ''}`} />
              </motion.div>
              <motion.span
                className={`text-[10px] font-bold transition-all duration-300 mt-0.5 ${
                  activePage === item.pageIndex 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-1 h-0'
                }`}
              >
                {item.label}
              </motion.span>
            </div>
          </motion.button>
        ))}
      </nav>
    </div>
  );
};

export default BottomNav;