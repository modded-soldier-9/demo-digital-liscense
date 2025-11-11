
export interface User {
  name: string;
  idNumber: string;
  address: string;
  phone: string;
  email: string;
  profilePhotoUrl: string;
}

export interface License {
  licenseNumber: string;
  licenseClass: string;
  issueDate: string;
  expiryDate: string;
  restrictions: string[];
}

export enum FineStatus {
  Paid = 'Paid',
  Unpaid = 'Unpaid',
  Disputed = 'Disputed',
}

export interface Fine {
  id: string;
  date: string;
  description: string;
  amount: number;
  status: FineStatus;
  location: string;
}

export enum Language {
  Afrikaans = 'af',
  English = 'en',
  isiNdebele = 'nr',
  isiXhosa = 'xh',
  isiZulu = 'zu',
  Sepedi = 'nso',
  Sesotho = 'st',
  Setswana = 'tn',
  siSwati = 'ss',
  Tshivenda = 've',
  Xitsonga = 'ts',
}

export const LanguageNames: { [key in Language]: string } = {
  [Language.Afrikaans]: 'Afrikaans',
  [Language.English]: 'English',
  [Language.isiNdebele]: 'isiNdebele',
  [Language.isiXhosa]: 'isiXhosa',
  [Language.isiZulu]: 'isiZulu',
  [Language.Sepedi]: 'Sepedi',
  [Language.Sesotho]: 'Sesotho',
  [Language.Setswana]: 'Setswana',
  [Language.siSwati]: 'siSwati',
  [Language.Tshivenda]: 'Tshivenda',
  [Language.Xitsonga]: 'Xitsonga',
};
