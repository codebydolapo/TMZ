import { defineField, defineType } from "sanity"
import { TagIcon } from '@sanity/icons'
import React from 'react'



// export default defineType({
//   name: 'product',
//   type: 'document',
//   title: 'Product',
//   icon: TagIcon,
//   groups: [
//     {
//       name: 'theme',
//       title: 'Theme',
//     },
//     {
//       default: true,
//       name: 'editorial',
//       title: 'Editorial',
//     },
//     {
//       name: 'seo',
//       title: 'SEO',
//     },
//   ],
//   fields: [
//     defineField({
//       name: 'name',
//       type: 'string',
//       title: 'Name'
//     }),
//   ],
//   preview: {
//     select: {
//       active: 'active',
//       seoImage: 'seo.image',
//       title: 'title',
//     },
//     prepare(selection) {
//       const { seoImage, title } = selection

//       return {
//         media: seoImage,
//         title,
//       }
//     },
//   },
// })

export default {
  name: 'product',
  type: 'document',
	title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    }
  ]
}