import ProductCard from "@/views/ProductCard";
import { Products } from "@/utils/mock";
const AllProducts = () => {
    return (
        <div className="flex flex-wrap flex-col lg:flex-row gap-x-3 justify-center gap-y-5 mt-5 items-center">

            {
                Products.map(product => (
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
    );
};
export default AllProducts;