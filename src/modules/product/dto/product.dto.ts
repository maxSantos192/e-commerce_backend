export type ProductDTO = {
  id: number;
  name: string;
  sku: string;
  category_id: number;
  description: string;
  large_description: string;
  price: number;
  discount_price?: number;
  discount_percent?: number;
  total_price: number;
  is_new?: boolean;
  image_link?: string;
  other_image_link?: string;
};
