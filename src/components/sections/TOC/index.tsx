import React, { useEffect, useState } from "react";
import StrapiSection from "../StrapiSection";
import Link from "../../Link";

const data: any = {
  __typename: "ComponentSectionsFloatingCta",
  CTA: [
    {
      isPrimary: true,
      type: "COMPARE_RATES",
    },
    {
      type: "LEARNING_CENTER",
    },
  ],
  title: "Auf geht's ins Eigenheim",
  subTitle: "Finde mit uns die ideale Immobilienfinanzierung.",
};

const getHeadingId = (heading: string) => {
  return heading.toLowerCase().replace(/ /g, "_");
};

/** Table of contents */
const TOC = () => {
  const [TOCSections, setTOCSections] = useState<any[] | undefined>();

  useEffect(() => {
    const headers: any = document.getElementsByTagName("h2");
    const headerArr = [...headers];
    headerArr.forEach((el) => {
      el.id = getHeadingId(el.textContent);
    });
    setTOCSections(headerArr);
  }, []);

  if (!TOCSections) return null;

  const floatingCTASection = false;
  return (
    <div className="support-article-sidebar sticky-sidebar bg-light rounded-custom p-4 mt-5">
      <ul className="nav flex-column nav-pills support-article-tab accordion-list w-100">
        {TOCSections.map((el, index) => {
          return (
            <li key={index} className="nav-link">
              <Link
                to={`#${getHeadingId(el.textContent)}`}
                className="text-decoration-none cursor-pointer"
              >
                {el.textContent}
              </Link>
            </li>
          );
        })}
      </ul>
      {floatingCTASection && <StrapiSection section={data} />}
    </div>
  );
};

export default TOC;
