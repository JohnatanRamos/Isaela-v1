export interface IProduct {
  price: number;
  name: string;
  description: string;
  shortDescription: string;
  frontPage: string;
  images: string[];
  id: string;
  size?: 'XS' | 'S' | 'L' | 'M' | 'XL';
  idProduct?: string;
}
