import { Link, useParams, useSearchParams } from "react-router";
import { categories, products } from "../data/products";

export function CategoryDetail() {
  const { slug } = useParams();
  const category = categories.find((c) => c.slug === slug);

  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort");

  if (!category) {
    return (
      <>
        <h1>Flokkur finnst ekki</h1>
        <Link to="/categories">Allir flokkar</Link>
      </>
    );
  }

  const items = products.filter((p) => p.category === category.name);

  if (sort == "price") {
    items.sort((a, b) => a.price - b.price);
  }

  return (
    <div>
      <h1>{category.name}</h1>
      <div>
        <Link to={`/categories/${slug}?sort=price`}>Raða eftir verði</Link>
        <Link to={`/categories/${slug}`}>Upprunulega röð</Link>
      </div>
      <ul>
        {items.map((p) => (
          <li>
            <Link to={`/product/${p.id}`}>
              {p.name}: {p.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
