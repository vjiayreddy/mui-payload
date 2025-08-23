import { Block } from "payload";

export const HeroFeaturedProducts: Block = {
  slug: "heroFeaturedProducts",
  interfaceName: "HeroFeaturedProductsBlock",
  imageURL:"/api/media/file/hero-featured-products.png",
  labels: {
    plural: "HeroFeaturedProducts",
    singular: "HeroFeaturedProduct",
  },
  fields: [
    {
      name: "sectionOneTitle",
      label: "Section One Title",
      type: "text",
      required: true,
    },
    {
      name: "sectionOneDescription",
      label: "Section One Description",
      type: "textarea",
      required: true,
    },
    {
      name: "sectionOneButtonText",
      label: "Section One Button Text",
      type: "text",
      required: true,
    },
    {
      name: "sectionOneImage",
      label: "Section One Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "sectionTwoTitle",
      label: "Section Two Title",
      type: "text",
      required: true,
    },
    {
      name: "sectionTwoDescription",
      label: "Section Two Description",
      type: "textarea",
      required: true,
    },
    {
      name: "sectionTwoButtonText",
      label: "Section Two Button Text",
      type: "text",
      required: true,
    },
    {
      name: "sectionTwoImage",
      label: "Section Two Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "sectionThreeTitle",
      label: "Section Three Title",
      type: "text",
      required: true,
    },
    {
      name: "sectionThreeDescription",
      label: "Section Three Description",
      type: "textarea",
      required: true,
    },
    {
      name: "sectionThreeButtonText",
      label: "Section Three Button Text",
      type: "text",
      required: true,
    },
    {
      name: "sectionThreeImage",
      label: "Section Three Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "isPublished",
      type: "checkbox",
      defaultValue: false,
    },
  ],
};
