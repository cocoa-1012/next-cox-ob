import React from "react";

const HeroTitle = ({ subtitle, title, desc }) => {
  return (
    <>
      {subtitle ? <h5 className="text-warning">{subtitle}</h5> : ""}
      <h1 className={"fw-bold display-5"} data-aos="fade-up">
        {title}
      </h1>
      <h6
        className={"text-secondary font-weight-normal"}
        data-aos="fade-up"
        data-aos-delay="50"
      >
        {desc}
      </h6>
    </>
  );
};

export default HeroTitle;
