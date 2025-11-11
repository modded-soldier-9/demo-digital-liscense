import React, { useState, useMemo, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useTranslations } from '../hooks/useTranslations';
import { FineStatus } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { SortAscIcon, SortDescIcon, LocationIcon, CalendarIcon } from '../components/icons';

type SortKey = 'date' | 'amount';
type SortOrder = 'asc' | 'desc';

const FineStatusBadge: React.FC<{ status: FineStatus }> = ({ status }) => {
  const { t } = useTranslations();
  const baseClasses = "px-3 py-1.5 text-xs font-bold rounded-full text-white shadow-md";
  const statusMap = {
    [FineStatus.Paid]: { text: t('fines_status_paid'), color: 'bg-gradient-to-r from-green-500 to-green-600' },
    [FineStatus.Unpaid]: { text: t('fines_status_unpaid'), color: 'bg-gradient-to-r from-red-500 to-red-600' },
    [FineStatus.Disputed]: { text: t('fines_status_disputed'), color: 'bg-gradient-to-r from-yellow-500 to-yellow-600' },
  };
  return <span className={`${baseClasses} ${statusMap[status].color}`}>{statusMap[status].text}</span>;
};

const FineTracker: React.FC = () => {
  const { fines } = useContext(AppContext)!;
  const { t } = useTranslations();
  const [filter, setFilter] = useState<FineStatus | 'All'>('All');
  const [sortKey, setSortKey] = useState<SortKey>('date');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  const filteredAndSortedFines = useMemo(() => {
    const filtered = fines.filter(fine => filter === 'All' || fine.status === filter);
    return filtered.sort((a, b) => {
      let comparison = 0;
      if (sortKey === 'date') {
        comparison = new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        comparison = b.amount - a.amount;
      }
      return sortOrder === 'asc' ? -comparison : comparison;
    });
  }, [fines, filter, sortKey, sortOrder]);

  const totalAmount = useMemo(() => fines.reduce((sum, fine) => sum + fine.amount, 0), [fines]);
  const outstandingAmount = useMemo(() => fines
    .filter(f => f.status === FineStatus.Unpaid || f.status === FineStatus.Disputed)
    .reduce((sum, fine) => sum + fine.amount, 0), [fines]);

  const formatCurrency = (amount: number) => `R ${amount.toFixed(2)}`;

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('desc');
    }
  };

  const filterOptions: (FineStatus | 'All')[] = ['All', FineStatus.Unpaid, FineStatus.Paid, FineStatus.Disputed];

  return (
    <div className="p-4 sm:p-6 bg-transparent min-h-full relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 via-transparent to-orange-50/20 dark:from-red-950/20 dark:via-transparent dark:to-orange-950/10 pointer-events-none" />
      
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6 relative z-10"
      >
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{t('fines_title')}</h1>
      </motion.header>

      {/* Enhanced Stat Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 p-5 rounded-2xl shadow-lg hover-lift relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10" />
          <p className="text-sm font-medium text-white/90 mb-1">{t('fines_total')}</p>
          <p className="text-2xl font-bold text-white">{formatCurrency(totalAmount)}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="bg-gradient-to-br from-red-500 to-red-600 p-5 rounded-2xl shadow-lg hover-lift relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10" />
          <p className="text-sm font-medium text-white/90 mb-1">{t('fines_outstanding')}</p>
          <p className="text-2xl font-bold text-white">{formatCurrency(outstandingAmount)}</p>
        </motion.div>
      </div>

      {/* Enhanced Filters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 mb-6 space-y-5 relative z-10"
      >
        <div>
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 block">{t('fines_filter_by_status')}</label>
          <div className="flex flex-wrap gap-2">
            {filterOptions.map(option => (
              <motion.button
                key={option}
                onClick={() => setFilter(option)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all shadow-sm ${
                  filter === option
                    ? 'bg-gradient-to-r from-brand-blue-600 to-brand-blue-700 text-white shadow-md shadow-brand-blue-500/30'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600'
                }`}
              >
                {option === 'All' ? t('fines_status_all') : t(`fines_status_${option.toLowerCase()}`)}
              </motion.button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 block">{t('fines_sort_by')}</label>
          <div className="flex gap-2">
            <motion.button
              onClick={() => toggleSort('date')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-full transition-all shadow-sm ${
                sortKey === 'date'
                  ? 'bg-gradient-to-r from-brand-blue-600 to-brand-blue-700 text-white shadow-md shadow-brand-blue-500/30'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600'
              }`}
            >
              <span>{t('fines_date')}</span>
              {sortKey === 'date' && (sortOrder === 'asc' ? <SortAscIcon className="w-4 h-4" /> : <SortDescIcon className="w-4 h-4" />)}
            </motion.button>
            <motion.button
              onClick={() => toggleSort('amount')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-full transition-all shadow-sm ${
                sortKey === 'amount'
                  ? 'bg-gradient-to-r from-brand-blue-600 to-brand-blue-700 text-white shadow-md shadow-brand-blue-500/30'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600'
              }`}
            >
              <span>{t('fines_amount')}</span>
              {sortKey === 'amount' && (sortOrder === 'asc' ? <SortAscIcon className="w-4 h-4" /> : <SortDescIcon className="w-4 h-4" />)}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Fine Cards */}
      <div className="space-y-3 relative z-10">
        <AnimatePresence>
          {filteredAndSortedFines.length > 0 ? (
            filteredAndSortedFines.map((fine, index) => (
              <motion.div
                key={fine.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover-lift"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-grow min-w-0">
                    <p className="font-bold text-lg text-slate-900 dark:text-white mb-2">{fine.description}</p>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <LocationIcon className="w-4 h-4 flex-shrink-0 text-brand-blue-500" />
                        <span className="truncate">{fine.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CalendarIcon className="w-4 h-4 flex-shrink-0 text-brand-blue-500" />
                        <span>{new Date(fine.date).toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 flex flex-col items-end gap-2">
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{formatCurrency(fine.amount)}</p>
                    <FineStatusBadge status={fine.status} />
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 bg-white/50 dark:bg-slate-800/50 rounded-2xl backdrop-blur-sm"
            >
              <p className="text-lg text-slate-500 dark:text-slate-400">{t('fines_no_fines_found')}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FineTracker;