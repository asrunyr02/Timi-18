import { Link, useNavigate, useParams } from "react-router";
import { categories, products } from "../data/products";

export function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const navigate = useNavigate();
  if (!product) {
    return (
      <>
        <h1>Vara fannst ekki</h1>
        <Link to="/products">Til baka í vörur</Link>
      </>
    );
  }

  const category = categories.find((c) => c.name === product.category);

  return (
    <div>
      <h1>{product.name}</h1>
      {category && (
        <p>
          Flokkur:
          <Link to={`/categories/${category.slug}`}>{category.name}</Link>
        </p>
      )}

      <p>Verð: {product.price}</p>
      <button onClick={() => navigate(-1)}>Til baka</button>
    </div>
  );
}
