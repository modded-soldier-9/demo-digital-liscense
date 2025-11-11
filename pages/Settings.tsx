import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { Language, LanguageNames } from '../types';
import { ChevronDownIcon, SunIcon, MoonIcon, SettingsIcon } from '../components/icons';
import { motion } from 'framer-motion';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme, t } = useTranslations();
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
         <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
           isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-200 text-slate-600'
         }`}>
           {isDark ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
         </div>
         <div>
           <span className="text-base font-semibold text-slate-800 dark:text-slate-100 block">{t('settings_appearance_dark_mode')}</span>
           <span className="text-xs text-slate-500 dark:text-slate-400">{t('settings_appearance_dark_mode_desc')}</span>
         </div>
      </div>
      <motion.button
        onClick={toggleTheme}
        whileTap={{ scale: 0.95 }}
        className={`relative inline-flex items-center h-7 rounded-full w-14 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue-500 dark:focus:ring-offset-slate-900 shadow-md ${
          isDark ? 'bg-gradient-to-r from-brand-blue-600 to-brand-blue-700' : 'bg-slate-300'
        }`}
        aria-label="Toggle dark mode"
      >
        <motion.span
          layout
          transition={{ type: 'spring', stiffness: 700, damping: 30 }}
          className={`inline-block w-5 h-5 transform bg-white rounded-full shadow-lg ${
            isDark ? 'translate-x-8' : 'translate-x-1'
          }`}
        />
      </motion.button>
    </div>
  );
};


const Settings: React.FC = () => {
  const { t, language, setLanguage } = useTranslations();
  
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as Language);
  };

  return (
    <div className="p-4 sm:p-6 bg-transparent min-h-full relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/40 via-transparent to-brand-blue-50/30 dark:from-slate-950/40 dark:via-transparent dark:to-brand-blue-950/20 pointer-events-none" />
      
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8 relative z-10"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 flex items-center justify-center shadow-lg">
            <SettingsIcon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{t('settings_title')}</h1>
        </div>
      </motion.header>

      <div className="space-y-4 relative z-10">
        {/* Appearance Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50"
        >
          <h2 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <div className="w-1 h-4 bg-gradient-to-b from-brand-blue-500 to-brand-blue-600 rounded-full" />
            {t('settings_appearance')}
          </h2>
          <ThemeToggle />
        </motion.div>

        {/* Language Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50"
        >
          <h2 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <div className="w-1 h-4 bg-gradient-to-b from-brand-blue-500 to-brand-blue-600 rounded-full" />
            {t('settings_language_section')}
          </h2>
          <label htmlFor="language-select" className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">
            {t('settings_language')}
          </label>
          <div className="relative">
            <select
              id="language-select"
              value={language}
              onChange={handleLanguageChange}
              className="w-full appearance-none bg-slate-100 dark:bg-slate-700/50 border-2 border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white text-base rounded-xl focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500 block p-3.5 transition shadow-sm hover:shadow-md"
            >
              {Object.entries(LanguageNames).map(([code, name]) => (
                <option key={code} value={code}>{name}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500 dark:text-slate-400">
              <ChevronDownIcon className="w-5 h-5" />
            </div>
          </div>
        </motion.div>

        {/* App Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50"
        >
          <h2 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <div className="w-1 h-4 bg-gradient-to-b from-brand-blue-500 to-brand-blue-600 rounded-full" />
            {t('settings_app_info_section')}
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-700">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{t('settings_version')}</span>
              <span className="font-mono text-sm font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-lg">1.1.0</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{t('settings_build')}</span>
              <span className="font-mono text-sm font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-lg">20240727.1</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Settings;