
import { Language } from '../types';

type Translations = {
  [lang in Language]: {
    [key: string]: string;
  };
};

export const translations: Translations = {
  [Language.English]: {
    // Nav
    nav_profile: 'Profile',
    nav_license: "License",
    nav_fines: 'Fines',
    nav_settings: 'Settings',
    // Profile
    profile_title: 'User Profile',
    profile_name: 'Full Name',
    profile_id: 'ID Number',
    profile_address: 'Address',
    profile_phone: 'Phone',
    profile_email: 'Email',
    // License
    license_title: "Digital Driver's License",
    license_number: 'License Number',
    license_class: 'License Class',
    license_issued: 'Issue Date',
    license_expires: 'Expiry Date',
    license_restrictions: 'Restrictions',
    license_no_restrictions: 'None',
    // Fines
    fines_title: 'Fine Tracker',
    fines_total: 'Total Fines',
    fines_outstanding: 'Outstanding',
    fines_filter_by_status: 'Filter by Status:',
    fines_sort_by: 'Sort by:',
    fines_date: 'Date',
    fines_amount: 'Amount',
    fines_status_all: 'All',
    fines_status_paid: 'Paid',
    fines_status_unpaid: 'Unpaid',
    fines_status_disputed: 'Disputed',
    fines_no_fines_found: 'No fines found matching your criteria.',
    // Settings
    settings_title: 'Settings',
    settings_language: 'App Language',
    settings_app_info: 'App Information',
    settings_version: 'Version',
    settings_build: 'Build',
  },
  [Language.Afrikaans]: {
    // Nav
    nav_profile: 'Profiel',
    nav_license: "Lisensie",
    nav_fines: 'Boetes',
    nav_settings: 'Instellings',
    // Profile
    profile_title: 'Gebruikersprofiel',
    profile_name: 'Volle Naam',
    profile_id: 'ID-nommer',
    profile_address: 'Adres',
    profile_phone: 'Telefoon',
    profile_email: 'E-pos',
    // License
    license_title: "Digitale Bestuurderslisensie",
    license_number: 'Lisensienommer',
    license_class: 'Lisensieklas',
    license_issued: 'Uitreikingsdatum',
    license_expires: 'Vervaldatum',
    license_restrictions: 'Beperkings',
    license_no_restrictions: 'Geen',
    // Fines
    fines_title: 'Boetevorder',
    fines_total: 'Totale Boetes',
    fines_outstanding: 'Uitstaande',
    fines_filter_by_status: 'Filtreer volgens Status:',
    fines_sort_by: 'Sorteer volgens:',
    fines_date: 'Datum',
    fines_amount: 'Bedrag',
    fines_status_all: 'Alles',
    fines_status_paid: 'Betaal',
    fines_status_unpaid: 'Onbetaal',
    fines_status_disputed: 'Dispuut',
    fines_no_fines_found: 'Geen boetes gevind wat aan u kriteria voldoen nie.',
    // Settings
    settings_title: 'Instellings',
    settings_language: 'App-taal',
    settings_app_info: 'App-inligting',
    settings_version: 'Weergawe',
    settings_build: 'Bou',
  },
  [Language.isiZulu]: {
    // Nav
    nav_profile: 'Iphrofayili',
    nav_license: "Ilayisensi",
    nav_fines: 'Izinhlawulo',
    nav_settings: 'Izilungiselelo',
    // Profile
    profile_title: 'Iphrofayili Yomsebenzisi',
    profile_name: 'Igama Egcwele',
    profile_id: 'Inombolo Kamazisi',
    profile_address: 'Ikheli',
    profile_phone: 'Ucingo',
    profile_email: 'I-imeyili',
    // License
    license_title: "Ilayisensi Yokushayela Yedijithali",
    license_number: 'Inombolo Yelayisensi',
    license_class: 'Isigaba Selayisensi',
    license_issued: 'Usuku Lokukhishwa',
    license_expires: 'Usuku Lokuphelelwa',
    license_restrictions: 'Imikhawulo',
    license_no_restrictions: 'Akukho',
    // Fines
    fines_title: 'Isilandeleli Sezinhlawulo',
    fines_total: 'Izinhlawulo Seziphelele',
    fines_outstanding: 'Okusele',
    fines_filter_by_status: 'Hlunga Ngesimo:',
    fines_sort_by: 'Hlela ngo:',
    fines_date: 'Usuku',
    fines_amount: 'Inani',
    fines_status_all: 'Konke',
    fines_status_paid: 'Kukhokhelwe',
    fines_status_unpaid: 'Akukhokhelwe',
    fines_status_disputed: 'Kuphikisiwe',
    fines_no_fines_found: 'Azikho izinhlawulo ezitholakele ezifana nemibandela yakho.',
    // Settings
    settings_title: 'Izilungiselelo',
    settings_language: 'Ulimi Lwe-App',
    settings_app_info: 'Ulwazi Lwe-App',
    settings_version: 'Inguqulo',
    settings_build: 'Ukwakhiwa',
  },
  // --- Adding stubs for other languages for completeness ---
  [Language.isiNdebele]: { nav_profile: 'Iphrofayili' },
  [Language.isiXhosa]: { nav_profile: 'Iprofayile' },
  [Language.Sepedi]: { nav_profile: 'Profense' },
  [Language.Sesotho]: { nav_profile: 'Boemo' },
  [Language.Setswana]: { nav_profile: 'Profense' },
  [Language.siSwati]: { nav_profile: 'Iphrofayili' },
  [Language.Tshivenda]: { nav_profile: 'Pfurofaili' },
  [Language.Xitsonga]: { nav_profile: 'P furofayili' },
};

// Fallback mechanism: Fill missing translations with English
Object.values(Language).forEach(lang => {
  if (lang !== Language.English) {
    Object.keys(translations[Language.English]).forEach(key => {
      if (!translations[lang][key]) {
        translations[lang][key] = translations[Language.English][key];
      }
    });
  }
});
