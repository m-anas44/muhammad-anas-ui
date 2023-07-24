import ProductCard from "./ProductCard";
import { Products } from "@/utils/mock";
const ProductList = () => {
  const product_checks = Products.slice(2, 6);
  console.log(product_checks);
  return (
    <div>
      <div className="text-center py-5 pb-10 px-12">
        <h3 className="text-blue-800 font-bold">PRODUCTS</h3>
        <h1 className="font-bold text-[24px]">Check What We Have</h1>
      </div>
      <div className="flex flex-wrap gap-x-3 flex-row gap-y-5 justify-center items-center mb-3">
        {
          product_checks.map(product => (
            <ProductCard
              key={product.id}
              title={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
              id={product.id}
            />
          ))
        }
      </div>
    </div>
  );
};
export default ProductList;