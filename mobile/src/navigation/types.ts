import { CategoryId } from '../types';

export type RootStackParamList = {
  Tabs: undefined;
  ListingDetail: { id: string };
  CategoryListings: { categoryId: CategoryId };
};

export type TabParamList = {
  Home: undefined;
  Search: undefined;
  PostAd: undefined;
  Favorites: undefined;
  Profile: undefined;
};
