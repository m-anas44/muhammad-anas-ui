import { Products } from "@/utils/mock";
import ProductCard from "@/views/ProductCard";
const getProductByCategory = (category: string) => {
    return (
        Products.filter((product) => product.category === category)
    );
};
const Page = ({ params }: { params: { slug: string } }) => {
    const result = getProductByCategory(params.slug);
    return (
        <div className="flex justify-center gap-x-3 flex-wrap flex-col lg:flex-row gap-y-5 mt-5 items-center">
            {
                result.length > 0 ? (
                    result.map((product) => (
                        <ProductCard
                            key={product.id}
                            title={product.name}
                            price={product.price}
                            image={product.image}
                            category={product.category}
                            id={product.id}
                        />
                    ))
                ) : (<p>No Products Found</p>)
            }
        </div>
    );
};
export default Page;
