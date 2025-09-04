import { Page } from "@/payload-types";
import { GenerateTitle, GenerateURL } from "@payloadcms/plugin-seo/types";
import { getServerSideURL } from "./getURL";

export const generateTitle: GenerateTitle<Page> = ({ doc }) => {
  return doc?.name
    ? `${doc.name} | Payload Website Template`
    : "Payload Website Template";
};

export const generateURL: GenerateURL<Page> = ({ doc }) => {
  const url = getServerSideURL();

  return doc?.slug ? `${url}/${doc.slug}` : url;
};
