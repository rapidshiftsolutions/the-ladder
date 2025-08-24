import {TagIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const merchType = defineType({
  name: 'merch',
  title: 'Merchandise',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Product Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required().min(0),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'T-Shirts', value: 'tshirts'},
          {title: 'Hoodies & Sweatshirts', value: 'hoodies'},
          {title: 'Hats & Caps', value: 'hats'},
          {title: 'Decals & Stickers', value: 'decals'},
          {title: 'Accessories', value: 'accessories'},
          {title: 'Kids', value: 'kids'},
        ]
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'sizes',
      title: 'Available Sizes',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              {title: 'XS', value: 'xs'},
              {title: 'Small', value: 's'},
              {title: 'Medium', value: 'm'},
              {title: 'Large', value: 'l'},
              {title: 'XL', value: 'xl'},
              {title: 'XXL', value: 'xxl'},
              {title: 'XXXL', value: 'xxxl'},
              {title: 'One Size', value: 'onesize'},
            ]
          }
        }
      ],
      description: 'Select all available sizes for this item'
    }),
    defineField({
      name: 'colors',
      title: 'Available Colors',
      type: 'array',
      of: [
        {
          type: 'string',
        }
      ],
      description: 'List available colors (e.g., Black, White, Red, etc.)'
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: Rule => Rule.required(),
        })
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Additional Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            }
          ]
        }
      ],
      description: 'Additional product images (optional)'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Brief description of the product',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      description: 'Show this product prominently on the merch page',
      initialValue: false,
    }),
    defineField({
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      description: 'Is this item currently available?',
      initialValue: true,
    }),
    defineField({
      name: 'popular',
      title: 'Popular Item',
      type: 'boolean',
      description: 'Mark as a popular/best-selling item',
      initialValue: false,
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first (optional)',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      price: 'price',
      category: 'category',
      inStock: 'inStock',
      media: 'mainImage',
    },
    prepare(selection) {
      const {title, price, category, inStock} = selection
      const priceFormatted = price ? `$${price}` : 'No price'
      const stockStatus = inStock ? 'In Stock' : 'Out of Stock'
      const categoryFormatted = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'No category'
      
      return {
        ...selection, 
        subtitle: `${priceFormatted} - ${categoryFormatted} - ${stockStatus}`
      }
    },
  },
  orderings: [
    {
      title: 'Sort Order',
      name: 'sortOrder',
      by: [
        {field: 'sortOrder', direction: 'asc'},
        {field: 'title', direction: 'asc'}
      ]
    },
    {
      title: 'Price (Low to High)',
      name: 'priceAsc',
      by: [
        {field: 'price', direction: 'asc'}
      ]
    },
    {
      title: 'Price (High to Low)',
      name: 'priceDesc',
      by: [
        {field: 'price', direction: 'desc'}
      ]
    },
    {
      title: 'Category',
      name: 'category',
      by: [
        {field: 'category', direction: 'asc'},
        {field: 'title', direction: 'asc'}
      ]
    }
  ]
})