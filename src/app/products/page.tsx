import ProductCard from "@/views/ProductCard";
import { getProducts } from "../../../sanity/lib/query";

const AllProducts = async() => {
    const allProducts = await getProducts()
    return (
        <div className="flex flex-wrap flex-col lg:flex-row gap-x-3 justify-center gap-y-5 mt-5 items-center">

            {
                allProducts.map((product, index) => (
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
    );
};
export default AllProducts;