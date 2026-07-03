export type CategoryId =
  | 'emlak'
  | 'vasita'
  | 'elektronik'
  | 'ev-bahce'
  | 'giyim'
  | 'is-ilanlari';

export interface Category {
  id: CategoryId;
  title: string;
  icon: string;
  color: string;
}

export interface Listing {
  id: string;
  title: string;
  price: number;
  location: string;
  category: CategoryId;
  postedAt: string;
  description: string;
  seller: string;
  emoji: string;
  featured?: boolean;
}
