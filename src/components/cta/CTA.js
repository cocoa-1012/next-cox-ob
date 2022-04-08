import React from "react";
import classNames from "classnames";

import CompareCTA from "./CompareCta";
import CreateAccountCta from "./CreateAccountCta";
import SubscribeCTA from "./SubsctibeCta";
import LearningCenterCta from "./LearningCenterCta";
import ComingSoonAlert from "./ComingSoonAlert";
import ApplicationProcessCta from "./ApplicationProcessCta/ApplicationProcessCta";

export const getCTAClassname = (isPrimary) => {
  return classNames(
    "btn",
    {
      "btn-primary me-3 my-3": isPrimary,
    },
    {
      "btn-outline-light ": !isPrimary,
    }
  );
};

export default class CTA extends React.Component {
  render() {
    if (!this.props.ctaType) return null;
    switch (this.props.ctaType) {
      case "NONE":
        return null;
      case "COMPARE_RATES":
        return <CompareCTA isPrimary={this.props.isPrimary} />;
      case "APPLICATION_PROCESS":
        return <ApplicationProcessCta isPrimary={this.props.isPrimary} />;
      case "CREATE_ACCOUNT":
        return <CreateAccountCta isPrimary={this.props.isPrimary} />;
      case "SUBSCRIBE":
        return <SubscribeCTA isPrimary={this.props.isPrimary} />;
      case "LEARNING_CENTER":
        return (
          <LearningCenterCta
            isPrimary={this.props.isPrimary}
            displayAsLink={this.props.displayAsLink}
          />
        );
      case "COMING_SOON_ALERT":
        return <ComingSoonAlert isPrimary={this.props.isPrimary} />;

      default:
        return null;
      // throw new TypeError("Unknown CTA Type:" + this.props.ctaType);
    }
  }
}
