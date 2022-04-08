import { NextSeo } from "next-seo";
import EmptyContainer from "./common/EmptyContainer";
import { checkValidUrl } from "./common/CmsImage";
import Head from "next/head";
import { ComponentSharedSeo, Maybe } from "../generated/graphql";

const SEO = ({ seoData }: { seoData?: Maybe<ComponentSharedSeo> }) => {
  if (!seoData) {
    return <EmptyContainer />;
  }
  const openGraph = seoData.openGraph;
  const twitter = seoData.twitter;
  let imageUrl = seoData.metaImage?.data?.attributes?.url || "";
  const isValidUrl = checkValidUrl(imageUrl);
  if (!isValidUrl) {
    imageUrl = (process.env.NEXT_PUBLIC_STRAPI_API_URL || "") + imageUrl;
  }
  return (
    <>
      <NextSeo
        title={seoData.metaTitle}
        description={seoData.metaDescription}
        canonical={seoData.canonicalURL || ""}
        openGraph={{
          url: openGraph?.url || "",
          title: openGraph?.title || "",
          description: openGraph?.description || "",
          images: [
            {
              url: imageUrl,
              width: openGraph?.imageWidth || 800,
              height: openGraph?.imageHeight || 600,
              alt: "Og Image Alt",
              type: "image/png",
            },
          ],
          site_name: openGraph?.siteName || "",
        }}
        twitter={{
          handle: twitter?.handle || "@handle",
          site: twitter?.site || "@site",
          cardType: twitter?.cardType || "summary_large_image",
        }}
      />
      <Head>
        <meta
          name="viewport"
          content={
            seoData.metaViewport || "width=device-width, initial-scale=1"
          }
        />
        <meta name="keywords" content={seoData.keywords || ""} />
        <meta name="robots" content={seoData.metaRobots || "index,follow"} />
      </Head>
    </>
  );
};

export default SEO;
