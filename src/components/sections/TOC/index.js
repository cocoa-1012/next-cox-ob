import React from "react";
import EmptyContainer from "../../common/EmptyContainer";
import Link from "next/link";
import StrapiSection from "../StrapiSection";

const data = {
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

/** Table of contents */
const TOC = ({ sections }) => {
  if (!sections) return <EmptyContainer />;

  const floatingCTASection = false;
  return (
    <div className="support-article-sidebar sticky-sidebar bg-light rounded-custom p-4 mt-5">
      <ul className="nav flex-column nav-pills support-article-tab accordion-list w-100">
        {sections
          .filter((section) => section.title)
          .map((section) => (
            <li className="nav-link" key={section.id}>
              <Link href={`#${section.id}`}>
                <a className="text-decoration-none">{section.title}</a>
              </Link>
            </li>
          ))}
      </ul>
      {floatingCTASection && <StrapiSection section={data} />}
    </div>
  );
};

export default TOC;
