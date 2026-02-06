/**
 * Placeholder types for the Nagel Paul storefront.
 * These will be expanded as the application grows.
 */

export type Product = {
  id: string;
  title: string;
  handle: string;
  description: string | null;
  thumbnail: string | null;
  variants: ProductVariant[];
};

export type ProductVariant = {
  id: string;
  title: string;
  sku: string | null;
  prices: Price[];
};

export type Price = {
  amount: number;
  currency_code: string;
};

export type Category = {
  id: string;
  name: string;
  handle: string;
  description: string | null;
  parent_category_id: string | null;
};

export type Brand = {
  id: string;
  name: string;
  handle: string;
  logo: string | null;
};

export type CartItem = {
  id: string;
  variant_id: string;
  quantity: number;
  unit_price: number;
};

export type SearchResult = {
  id: string;
  title: string;
  handle: string;
  description: string | null;
  thumbnail: string | null;
};
