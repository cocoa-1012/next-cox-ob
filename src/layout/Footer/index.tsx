import React, { useContext } from "react";
import { AppContext } from "../../lib/contextLib";
import CmsImage from "../../components/common/CmsImage";
import LanguageComponent from "./LanguageComponent";
import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";

const Footer = ({ footerLight, style, footerGradient }: any) => {
  const context = useContext(AppContext);
  return (
    <>
      <footer className="footer-section">
        <div
          className={`footer-top ${footerLight ? "footer-light" : "bg-dark"} ${
            footerGradient ? "bg-gradient" : ""
          }  text-white ptb-120`}
          style={style}
        >
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-12 col-lg-12 mt-4 mt-md-0 mt-lg-0">
                <div className="row">
                  <div className="col-md-2 col-lg-3 mt-2 text-black-50">
                    <CmsImage
                      image={
                        context?.siteData?.global?.data?.attributes?.inverseLogo
                      }
                      className="img-fluid logo-white"
                    />
                    <CmsImage
                      image={context?.siteData?.global?.data?.attributes?.logo}
                      className="img-fluid logo-color"
                    />
                  </div>
                  <div className="col-md-10 col-lg-9 mt-4 mt-md-0 mt-lg-0 text-black-50">
                    <div className="row justify-content-center">
                      <div className="col-6 col-md-3 col-lg-3 mt-4 mt-md-0 mt-lg-0 text-black-50">
                        <LanguageComponent />
                      </div>
                      <div className="col-6 col-md-9 col-lg-9 mt-4 mt-md-0 mt-lg-0 text-black-50 row">
                        <FooterLinks />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`footer-bottom ${
            footerLight ? "footer-light" : "bg-dark"
          } ${footerGradient ? "bg-gradient" : ""} text-white py-4`}
        >
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-7 col-lg-7">
                <div className="copyright-text">
                  <p className="mb-lg-0 mb-md-0">
                    {context?.siteData?.footer?.data?.attributes?.copyrightText}
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="footer-single-col text-start text-lg-end text-md-end">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
