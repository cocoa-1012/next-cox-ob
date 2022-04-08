import React from "react";
import CTA from "../cta/CTA";
import { ComponentBlocksCta, Maybe } from "../../generated/graphql";

const CTAList = ({
  list,
}: {
  list: Maybe<Maybe<ComponentBlocksCta>[]> | undefined;
}) => {
  if (!list || list.length === 0) {
    return null;
  }
  return (
    <>
      {list.map((item, index: number) => {
        if (!item) return null;
        return (
          <CTA key={index} isPrimary={item.isPrimary} ctaType={item.type} />
        );
      })}
    </>
  );
};

export default CTAList;
