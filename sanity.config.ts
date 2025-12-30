import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

export default defineConfig({
  name: 'default',
  title: 'Proofio CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: [
      {
        name: 'post',
        title: 'Blog Post',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
          },
          {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 4,
          },
          {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
          },
          {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
              list: [
                { title: 'Best Practices', value: 'Best Practices' },
                { title: 'Technical', value: 'Technical' },
                { title: 'SaaS', value: 'SaaS' },
                { title: 'Tutorial', value: 'Tutorial' },
              ],
            },
          },
          {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'alt',
                title: 'Alt Text',
                type: 'string',
              },
            ],
          },
          {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
              {
                type: 'block',
              },
              {
                type: 'image',
                fields: [
                  {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                  },
                ],
              },
            ],
          },
          {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'author' }],
          },
        ],
        preview: {
          select: {
            title: 'title',
            subtitle: 'category',
            media: 'mainImage',
          },
        },
      },
      {
        name: 'author',
        title: 'Author',
        type: 'document',
        fields: [
          {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
          },
          {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
        ],
        preview: {
          select: {
            title: 'name',
            media: 'image',
          },
        },
      },
    ],
  },
});

