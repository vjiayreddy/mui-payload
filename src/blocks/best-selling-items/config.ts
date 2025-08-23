import { Block } from "payload";

export const BestSellingItems: Block = {
  slug: "bestSellingItems",
  interfaceName: "BestSellingItemsBlock",
  imageURL: "/api/media/file/best-selling-items-block.png",
  fields: [
    {
      name: "label",
      type: "text",
      label: "Label",
    },
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      required: true,
    },
    {
      name: "products",
      type: "relationship",
      relationTo: "products",
      hasMany: true,
    },
    {
      name: "isPublished",
      type: "checkbox",
      defaultValue: false,
    },
  ],
  labels: {
    plural: "Best Selling Items",
    singular: "Best Selling Item",
  },
};
