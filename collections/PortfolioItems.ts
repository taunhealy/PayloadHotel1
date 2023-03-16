import { CollectionConfig } from 'payload/types';

export const PortfolioItems: CollectionConfig = {
  slug: 'portfolioItems',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: (): boolean => true, // Everyone can read Portfolio Items
  },
  fields: [
    {
      name: 'title',
      label: 'Page Title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      label: 'Featured Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'slug',
      label: 'Page Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
  ],
};

export default PortfolioItems;