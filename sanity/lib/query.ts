import { Product } from "@/utils/types";
import { groq } from "next-sanity";
import { client } from "./client";

export async function getProducts(): Promise<Product[]> {

    const query = groq`*[_type == "products"]{
        _id, 
        _createdAt,
        name,
        "slug": slug.current,
        tagline,
        category,
        price,
        "image": image.asset->url,
    }`

    try {
        const fetchedProducts = await client.fetch(query, { cache: "no-store" })
        // console.log(fetchedProducts)
        return fetchedProducts
    }
    catch (error) {
        console.error("Error in fetching data", error)
        throw error
    }
}

export async function getCurrentProduct(slug: number): Promise<Product> {
    try {
        // console.log("slug value", slug)
        if (!slug) {
            throw new Error('slug is undefined or Empty')
        }
        const query = groq`*[_type == 'products' && slug.current == $slug][0]{
            _id, 
            _createdAt,
            name,
            "slug": slug.current,
            tagline,
            category,
            price,
            "image": image.asset->url,
        }`
        const result = await client.fetch(query, { slug: slug })
        if (!result) {
            throw new Error('Project not found!')
        }
        return result;
    } catch (error) {
        console.error("Error in fetching current data", error)
        throw error
    }
}

export async function getByCategory(category: string): Promise<Product[]> {
    const query = groq`*[_type == 'products' && category == $category]{
        _id, 
        _createdAt,
        name,
        "slug": slug.current,
        tagline,
        category,
        price,
        "image": image.asset->url,
    }`

    try {
        const categorizedProducts = await client.fetch(query, { category: category })
        return categorizedProducts
    } catch (error) {
        console.error("Error in categorizing products", error)
        throw error
    }
}