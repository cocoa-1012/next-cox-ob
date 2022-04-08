import React, { FC } from "react";
import CTA from "../../cta/CTA";
import EmptyContainer from "../../common/EmptyContainer";
import { ComponentSectionsFloatingCta } from "../../../generated/graphql";

const FloatingCTA: FC<{ data: ComponentSectionsFloatingCta }> = ({ data }) => {
  if (!data.CTA) {
    return <EmptyContainer />;
  }
  return (
    <div className="pt-5 row">
      {data.CTA.map((cta) => {
        if (!cta) return <EmptyContainer />;
        const { isPrimary, type } = cta;
        return (
          <div className="col-lg-12 mb-4">
            <CTA isPrimary={isPrimary} ctaType={type} />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingCTA;
