import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useTranslations } from '../hooks/useTranslations';
import { motion } from 'framer-motion';
import { IdCardIcon, LocationIcon, PhoneIcon, EmailIcon } from '../components/icons';

const InfoRow: React.FC<{ label: string; value: string; icon: React.FC<{ className?: string }>; index: number }> = ({ label, value, icon: Icon, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1, duration: 0.3 }}
    className="px-5 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-colors duration-200"
  >
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 mt-1">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 flex items-center justify-center shadow-md">
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>
      <div className="flex-grow min-w-0">
        <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">{label}</p>
        <p className="text-base font-medium text-slate-800 dark:text-slate-200 break-words">{value}</p>
      </div>
    </div>
  </motion.div>
);

const Profile: React.FC = () => {
  const { user } = useContext(AppContext)!;
  const { t } = useTranslations();

  return (
    <div className="p-4 sm:p-6 bg-transparent min-h-full relative overflow-hidden">
      {/* Gradient Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-50/30 via-transparent to-purple-50/20 dark:from-brand-blue-950/20 dark:via-transparent dark:to-purple-950/10 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-8 relative z-10"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-400 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse-glow" />
          <img
            src={user.profilePhotoUrl}
            alt="User Profile"
            className="relative w-32 h-32 rounded-full object-cover shadow-2xl border-4 border-white dark:border-slate-800 ring-4 ring-brand-blue-200/50 dark:ring-brand-blue-800/50"
          />
        </div>
        <h2 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">{user.name}</h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Driver Profile</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover-lift relative z-10"
      >
        <div className="divide-y divide-slate-200/80 dark:divide-slate-700/50">
          <InfoRow label={t('profile_id')} value={user.idNumber} icon={IdCardIcon} index={0} />
          <InfoRow label={t('profile_address')} value={user.address} icon={LocationIcon} index={1} />
          <InfoRow label={t('profile_phone')} value={user.phone} icon={PhoneIcon} index={2} />
          <InfoRow label={t('profile_email')} value={user.email} icon={EmailIcon} index={3} />
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;