export type StrapiPage = {
  id: number;
  attributes: { slug: string; locale: string };
};
export const filterStrapiPages = (data: StrapiPage[] = []) => {
  const IGNORE_PAGES = ["learning-center", "coming-soon"];
  return data.filter(
    (attr: StrapiPage) => !IGNORE_PAGES.includes(attr.attributes.slug)
  );
};
