import React from "react";
import { getParagraphIcon } from "../../helpers";

const Feature = ({ item, className }) => {
  return (
    <li className={className}>
      <span>
        <i className={getParagraphIcon(item)} />
        <span className={"ms-2"}>{item?.title}</span>
      </span>
    </li>
  );
};

export default Feature;
