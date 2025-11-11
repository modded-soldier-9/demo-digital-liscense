
import { User, License, Fine, FineStatus } from '../types';

export const mockUser: User = {
  name: 'Naledi Themba',
  idNumber: '9204155012088',
  address: '123 Main Road, Sandton, Johannesburg, 2196',
  phone: '082 123 4567',
  email: 'naledi.themba@example.com',
  profilePhotoUrl: 'https://picsum.photos/200',
};

export const mockLicense: License = {
  licenseNumber: '9204155012088C',
  licenseClass: 'B (Code 08)',
  issueDate: '2021-10-25',
  expiryDate: '2026-10-24',
  restrictions: ['01 - Corrective lenses required'],
};

export const mockFines: Fine[] = [
  {
    id: 'F001',
    date: '2024-05-15',
    description: 'Exceeded speed limit (80 in a 60 zone)',
    amount: 500,
    status: FineStatus.Unpaid,
    location: 'N1 Highway, Midrand',
  },
  {
    id: 'F002',
    date: '2024-04-20',
    description: 'Disregarded a stop sign',
    amount: 750,
    status: FineStatus.Paid,
    location: 'Corner of Rivonia & Grayston, Sandton',
  },
  {
    id: 'F003',
    date: '2024-06-01',
    description: 'Using a mobile phone while driving',
    amount: 1000,
    status: FineStatus.Unpaid,
    location: 'M1 South, Johannesburg',
  },
  {
    id: 'F004',
    date: '2024-03-10',
    description: 'Expired license disc',
    amount: 250,
    status: FineStatus.Paid,
    location: 'William Nicol Drive, Fourways',
  },
   {
    id: 'F005',
    date: '2024-05-28',
    description: 'Illegal parking',
    amount: 300,
    status: FineStatus.Disputed,
    location: 'Melville, 7th Street',
  },
   {
    id: 'F006',
    date: '2024-06-12',
    description: 'Unroadworthy vehicle (tyres)',
    amount: 1500,
    status: FineStatus.Unpaid,
    location: 'N3 near Linksfield',
  },
  {
    id: 'F007',
    date: '2024-07-05',
    description: 'Traffic violation - Failure to yield',
    amount: 600,
    status: FineStatus.Disputed,
    location: 'R21 Highway, Kempton Park',
  },
];
