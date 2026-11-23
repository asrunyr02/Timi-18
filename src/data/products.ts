export type Category = {
  slug: string;
  name: string;
};

export const categories: Category[] = [
  { slug: "eldhus", name: "Eldhús" },
  { slug: "svefn", name: "Sofa" },
  { slug: "dót", name: "Leikföng" },
];

export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
};

export const products: Product[] = [
  { id: 1, name: "Brauð", price: 458, category: "eldhus" },
  { id: 2, name: "Dýna", price: 15000, category: "svefn" },
  { id: 3, name: "Koddi", price: 2500, category: "svefn" },
  { id: 4, name: "Ostur", price: 1200, category: "eldhus" },
  { id: 5, name: "Bangsi", price: 890, category: "dot" },
  { id: 6, name: "Dúkka", price: 499, category: "dot" },
];
