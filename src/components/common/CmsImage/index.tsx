import classNames from "classnames";
import styles from "./CmsImage.module.scss";
import {
  Maybe,
  Scalars,
  UploadFileEntityResponse,
} from "../../../generated/graphql";

export const checkValidUrl = (string: string = "") => {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
};

const ImageSources = ({ formats }: { formats: Scalars["JSON"] }) => {
  return (
    <>
      {Object.keys(formats).map((key) => {
        const format = formats[key];
        let url = format["url"];
        const isValidUrl = checkValidUrl(url);
        if (!isValidUrl) {
          url = process.env.NEXT_PUBLIC_STRAPI_API_URL + url;
        }
        const width = format["width"];
        return (
          <source key={key} media={`(max-width: ${width}px)`} srcSet={url} />
        );
      })}
    </>
  );
};

const CmsImage = ({
  image,
  className,
}: {
  image?: Maybe<UploadFileEntityResponse>;
  className?: string;
}) => {
  if (!image) {
    return null;
  }

  const formats = image?.data?.attributes?.formats;

  const attributes = image?.data?.attributes;
  const isValidUrl = checkValidUrl(attributes?.url);

  const url = `${!isValidUrl ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ""}${
    attributes?.url
  }`;
  const altText = attributes?.alternativeText || "";
  const loading = "lazy";
  const imageClass = classNames(styles.image, className);

  return formats ? (
    <picture>
      <ImageSources formats={formats} />
      <img src={url} alt={altText} loading={loading} className={imageClass} />
    </picture>
  ) : (
    <img src={url} alt={altText} loading={loading} className={imageClass} />
  );
};

export default CmsImage;
