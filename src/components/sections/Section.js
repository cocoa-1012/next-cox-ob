import React from "react";
import CtaTwo from "./CtaTwo";
import FaqOne from "./FaqOne";
import FeaturesWithImage from "./FeaturesWithImage";
import FloatingCTA from "./FloatingCTA";
import HeroFive from "./HeroFive";
import InstallmentCalculator from "./InstallmentCalculator";
import PageHeader from "./PageHeader";
import SimpleText from "./SimpleText";
import TestimonialsOne from "./TestimonialsOne";
import TextWithImage from "./TextWithImage";
import WorkProcessFour from "./WorkProcessFour";
import WorkProcessTwo from "./WorkProcessTwo";

export default class Section extends React.Component {
  render() {
    if (!this.props.section) return;
    switch (this.props.section.layout) {
      case "FEATURES_WITH_IMAGE":
        return <FeaturesWithImage data={this.props.section} />;
      case "FAQ_ONE":
        return <FaqOne data={this.props.section} />;
      case "FOOTER_CTA":
        return <CtaTwo data={this.props.section} />;
      case "HERO_FIVE":
        return <HeroFive data={this.props.section} />;
      case "SIMPLE_HEADER":
        return <PageHeader data={this.props.section} />;
      case "TEXT_WITH_IMAGE":
        return <TextWithImage data={this.props.section} />;
      case "SIMPLE_TEXT":
        return <SimpleText data={this.props.section} />;
      case "TESTIMONIALS_ONE":
        return <TestimonialsOne data={this.props.section} />;
      case "WORK_PROCESS_TWO":
        return <WorkProcessTwo data={this.props.section} />;
      case "WORK_PROCESS_FOUR":
        return <WorkProcessFour data={this.props.section} />;
      case "INSTALLMENT_CALCULATOR":
        return <InstallmentCalculator data={this.props.section} />;
      case "FLOATING_CTA":
        return <FloatingCTA data={this.props.section} />;

      default:
        console.warn("Unknown Section Layout:" + this.props.section.layout);
        return null;
    }
  }
}
