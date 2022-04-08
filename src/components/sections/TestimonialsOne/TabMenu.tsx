import React from "react";
import { ComponentBlocksParagraph, Maybe } from "../../../generated/graphql";
import EmptyContainer from "../../common/EmptyContainer";

const TabImage = ({ paragraph }: { paragraph: ComponentBlocksParagraph }) => {
  let image = paragraph.image?.data?.attributes;
  if (!image) {
    return <EmptyContainer />;
  }
  return (
    <div className="testimonial-thumb me-3">
      <img
        src={image.url}
        alt={image.name}
        width="50"
        className="rounded-circle "
      />
    </div>
  );
};

const TabMenu = ({
  paragraph,
  index,
}: {
  paragraph?: Maybe<ComponentBlocksParagraph>;
  index: number;
}) => {
  if (!paragraph) return <EmptyContainer />;
  return (
    <li className="nav-item" role="presentation" key={index}>
      <div
        className={
          index === 0
            ? "nav-link d-flex align-items-center rounded-custom border border-light border-2 testimonial-tab-link active "
            : "nav-link d-flex align-items-center rounded-custom border border-light border-2 testimonial-tab-link"
        }
        data-bs-toggle="pill"
        data-bs-target={"#testimonial-tab-" + index}
        role="tab"
        aria-selected="false"
      >
        <TabImage paragraph={paragraph} />
        <div className="author-info">
          <h6 className="mb-0">{paragraph.title}</h6>
          <span>{paragraph.subTitle}</span>
        </div>
      </div>
    </li>
  );
};

export default TabMenu;
