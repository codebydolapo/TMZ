import { defineType, defineField } from "sanity";
import category from './category'


export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Name'
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [
                {
                    type: 'block'
                },
            //     {
            //         type: 'image',
            //         fields: [
            //             {
            //                 type: 'text',
            //                 name: 'alt',
            //                 title: 'Alternative text',
            //                 description: `Some of your visitors cannot see images, 
            // be they blind, color-blind, low-sighted; 
            // alternative text is of great help for those 
            // people that can rely on it to have a good idea of 
            // what\'s on your page.`,
            //                 options: {
            //                     isHighlighted: true
            //                 }
            //             }
            //         ]
            //     }
            ]
        }),
        defineField({
            name: 'price',
            type: 'number',
            title: 'Price (Naira)',
            validation: Rule => Rule.min(1)
        }),
        defineField({
            name: 'availability',
            type: 'boolean',
            title: 'Available?',
        }),
        defineField({
            name: 'rating',
            type: 'number',
            title: 'Rating',
            validation: Rule => Rule.min(1).max(5)
        }),
        defineField({
            title: 'Category',
            name: 'category',
            type: 'reference',
            to: [{ type: "category" }],
        }),
        defineField({
            title: 'Images',
            name: 'images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    // to: [{ type: distributorType.name }],
                },
            ]
        }),
    ]
}