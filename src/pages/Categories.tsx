import { Link } from "react-router";
import { categories, products } from "../data/products";

export function Categories() {
  return (
    <>
      <h1>Flokkar</h1>
      <ul>
        {categories.map((category) => {
          const count = products.filter(
            (p) => p.category === category.name,
          ).length;
          return (
            <li>
              <Link to={`/categories/${category.slug}`}>
                {category.name} ({count})
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
