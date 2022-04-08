import React from "react";
import FeaturesWithImage from "./FeaturesWithImage";
import HeroFive from "./HeroFive";
import FaqOne from "./FaqOne";
import CtaTwo from "./CtaTwo";
import PageHeader from "./PageHeader";
import TextWithImage from "./TextWithImage";
import SimpleText from "./SimpleText";
import TestimonialsOne from "./TestimonialsOne";
import WorkProcessTwo from "./WorkProcessTwo";
import WorkProcessFour from "./WorkProcessFour";
import InstallmentCalculator from "./InstallmentCalculator";
import RichText from "./RichText";
import FloatingCTA from "./FloatingCTA";
import {
  Maybe,
  ArticleContentSectionsDynamicZone,
  PageContentSectionsDynamicZone,
} from "../../generated/graphql";

type StrapiSection =
  | Maybe<ArticleContentSectionsDynamicZone>
  | Maybe<PageContentSectionsDynamicZone>;

export type ISection = StrapiSection;

const StrapiSection = ({ section }: { section: ISection }) => {
  if (!section) return null;
  switch (section.__typename) {
    case "ComponentSectionsFeaturesWithImage":
      return <FeaturesWithImage data={section} />;
    case "ComponentSectionsHeroFive":
      return <HeroFive data={section} />;
    case "ComponentSectionsFaqOne":
      return <FaqOne data={section} />;
    case "ComponentSectionsFooterCta":
      return <CtaTwo data={section} />;
    case "ComponentSectionsSimpleHeader":
      return <PageHeader data={section} />;
    case "ComponentSectionsTextWithImage":
      return <TextWithImage data={section} />;
    case "ComponentSectionsSimpleText":
      return <SimpleText data={section} />;
    case "ComponentSectionsTestimonialsOne":
      return <TestimonialsOne data={section} />;
    case "ComponentSectionsWorkProcessTwo":
      return <WorkProcessTwo data={section} />;
    case "ComponentSectionsWorkProcessFour":
      return <WorkProcessFour data={section} />;
    case "ComponentSectionsInstallmentCalculator":
      return <InstallmentCalculator />;
    case "ComponentSectionsFloatingCta":
      return <FloatingCTA data={section} />;
    case "ComponentSectionsRichText":
      return <RichText data={section} />;

    default:
      console.warn("Unknown Section Layout:" + section.__typename);
      return null;
  }
};

export default StrapiSection;
