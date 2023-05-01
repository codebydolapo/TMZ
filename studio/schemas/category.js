import { defineType, defineField } from "sanity";


export default {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Name'
        }),
    ]
}