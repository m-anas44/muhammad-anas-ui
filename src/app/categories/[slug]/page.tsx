import ProductCard from "@/views/ProductCard";
import { getByCategory } from "../../../../sanity/lib/query";

const Page = async ({ params }: { params: { slug: string } }) => {
    try {
        const result = await getByCategory(params.slug);

        if (!result) {
            // Handle the case where no products are found for the category
            return <p className="text-center mt-8">No Products Found</p>;
        }

        if (result.length > 0) {
            return (
                <div className="flex justify-center gap-x-3 flex-wrap flex-col lg:flex-row gap-y-5 mt-5 items-center">
                    {result.map((product) => (
                        <ProductCard
                            key={product.slug}
                            name={product.name}
                            slug={product.slug}
                            category={product.category}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>
            );
        } else {
            return <p className="text-center mt-8">No Products Found</p>;
        }
    } catch (error) {
        console.error("Error fetching products:", error);
        return <p>Error fetching products</p>;
    }
};

export default Page;
