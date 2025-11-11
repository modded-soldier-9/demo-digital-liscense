import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useTranslations } from '../hooks/useTranslations';
import { motion } from 'framer-motion';

const LicenseDetail: React.FC<{ label: string; value: string | React.ReactNode }> = ({ label, value }) => (
  <div className="py-3">
    <p className="text-[10px] uppercase font-bold text-white/60 dark:text-white/50 tracking-[0.15em] mb-1.5">{label}</p>
    <p className="text-lg font-bold text-white tracking-wide">{value}</p>
  </div>
);

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};


const License: React.FC = () => {
  const { license, user } = useContext(AppContext)!;
  const { t } = useTranslations();

  return (
    <div className="p-4 sm:p-6 bg-transparent min-h-full relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-50/40 via-transparent to-indigo-50/30 dark:from-brand-blue-950/30 dark:via-transparent dark:to-indigo-950/20 pointer-events-none" />
      
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6 relative z-10"
      >
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{t('license_title')}</h1>
      </motion.header>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative z-10"
      >
        {/* Holographic Overlay Effect */}
        <div className="relative bg-gradient-to-br from-brand-blue-700 via-indigo-800 to-brand-blue-900 rounded-2xl shadow-2xl overflow-hidden">
          {/* Shimmer effect */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 shimmer" />
          </div>
          
          {/* Embossed effect with multiple layers */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
          
          <div className="relative p-6 text-white font-mono">
            {/* Header Section */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-xs font-black opacity-90 tracking-[0.2em] mb-1">SOUTH AFRICA</p>
                <p className="text-xl font-black tracking-wide">DRIVING LICENCE</p>
              </div>
              {/* Photo Frame with enhanced styling */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-lg blur-sm" />
                <div className="w-20 h-24 bg-slate-200/30 backdrop-blur-sm flex items-center justify-center rounded-lg border-2 border-white/40 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
                  <img src={user.profilePhotoUrl} alt="User" className="w-full h-full object-cover rounded-lg relative z-10" />
                </div>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-4">
              <LicenseDetail label={t('license_number')} value={license.licenseNumber} />
              <LicenseDetail label={t('license_class')} value={license.licenseClass} />
              <LicenseDetail label={t('license_issued')} value={formatDate(license.issueDate)} />
              <LicenseDetail label={t('license_expires')} value={formatDate(license.expiryDate)} />
            </div>

            {/* Restrictions Section */}
            <div className="mt-5 pt-4 border-t-2 border-white/30">
              <p className="text-[10px] uppercase font-bold text-white/60 tracking-[0.15em] mb-2">{t('license_restrictions')}</p>
              <div className="space-y-1">
                {license.restrictions.length > 0 ? (
                  license.restrictions.map((r, i) => (
                    <p key={i} className="text-sm font-semibold text-white tracking-wide">{r}</p>
                  ))
                ) : (
                  <p className="text-sm font-semibold text-white/80 tracking-wide">{t('license_no_restrictions')}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* 3D Shadow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-br from-brand-blue-600 to-indigo-800 rounded-2xl blur-xl opacity-50 -z-10 pointer-events-none" />
      </motion.div>
    </div>
  );
};

export default License;