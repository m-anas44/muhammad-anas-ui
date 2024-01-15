export default {
    name: 'products',
    type: 'document',
    title: 'Products',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' }
        },
        {
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot : true},
            fields: [
                {
                    name: "alt",
                    title: "Alt (optional)",
                    type: "string",
                }
            ]
        }
    ]
}