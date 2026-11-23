import { Link } from "react-router";
import { products } from "../data/products";

export function Products() {
  return (
    <>
      <h1>Vörur</h1>
      <ul>
        {products.map((product) => (
          <li>
            <Link to={`/product/${product.id}`}>
              {product.name}: <b>{product.price}</b>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
