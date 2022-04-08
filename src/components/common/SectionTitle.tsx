import React from "react";
import classNames from "classnames";
import { Maybe } from "../../generated/graphql";

type SectionTitleProps = {
  subtitle?: Maybe<string>;
  background?: Maybe<string>;
  title?: Maybe<string>;
  centerAlign?: Maybe<boolean>;
  description?: Maybe<string>;
  extraClass?: Maybe<string>;
};

const SectionTitle = ({
  subtitle,
  background,
  title,
  centerAlign,
  description,
  extraClass = "section-heading",
}: SectionTitleProps) => {
  return (
    <>
      {subtitle ? (
        <div
          className={classNames(extraClass, {
            "text-center": centerAlign,
          })}
          data-aos="fade-up"
        >
          {subtitle ? (
            <h4
              className={classNames(
                "h5",
                {
                  "text-warning": "DARK" === background,
                },
                {
                  "text-primary": "DARK" !== background,
                }
              )}
            >
              {subtitle}
            </h4>
          ) : null}
          {title ? <h2>{title}</h2> : null}
          {description ? <p>{description}</p> : null}
        </div>
      ) : (
        <div
          className={classNames(extraClass, {
            "text-center": centerAlign,
          })}
          data-aos="fade-up"
        >
          {title && <h3>{title}</h3>}
          {description && <p>{description}</p>}
        </div>
      )}
    </>
  );
};

export default SectionTitle;
