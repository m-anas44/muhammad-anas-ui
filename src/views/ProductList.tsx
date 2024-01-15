import { getProducts } from "../../sanity/lib/query";
import ProductCard from "./ProductCard";
const ProductList = async() => {
  const product_checks = await getProducts();
  const sliced_products = product_checks.slice(0, 4)
  return (
    <div>
      <div className="text-center py-5 pb-10 px-12">
        <h3 className="text-blue-800 font-bold">PRODUCTS</h3>
        <h1 className="font-bold text-[24px]">Check What We Have</h1>
      </div>
      <div className="flex flex-wrap gap-x-3 flex-row gap-y-5 justify-center items-center mb-3">
        {
          sliced_products.map((product, index) => (
            <ProductCard
              key={index}
              slug={product.slug}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
            />
          ))
        }
      </div>
    </div>
  );
};
export default ProductList;