import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const useTranslations = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useTranslations must be used within an AppProvider');
  }
  return context;
};