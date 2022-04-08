import React, { useContext } from "react";
import Link from "next/link";
import Rating from "../Rating";
import { AppContext } from "../../lib/contextLib";
import * as cms from "../../lib/cms";

const ReviewTab = () => {
  const context = useContext(AppContext);

  const getInverseLogo = () => {
    return cms.getInverseLogo(context.siteData);
  };

  return (
    <>
      <div className="price-feature-col pricing-feature-info text-white left-radius p-5 order-1 order-lg-0">
        <Link href="/">
          <a className="mb-5 d-none d-xl-block d-lg-block">
            {getInverseLogo() && (
              <img
                src={getInverseLogo().url}
                alt={getInverseLogo().alt}
                className="img-fluid"
              />
            )}
          </a>
        </Link>
        <div className="customer-testimonial-wrap mt-60">
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="testimonial-tab-1"
              role="tabpanel"
            >
              <div className="testimonial-tab-content mb-4">
                <blockquote>
                  <h5>Best Advisors in the Industry</h5>
                  The team at Justhome is not out to pursuade you to get a bad
                  load. They really do look out for your best interest.
                </blockquote>
                <div className="author-info mt-4">
                  <h6 className="mb-0">John Doe</h6>
                  <span>Customer</span>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="testimonial-tab-2"
              role="tabpanel"
            >
              <div className="testimonial-tab-content mb-4">
                <div className="mb-2">
                  <Rating />
                </div>
                <blockquote>
                  <h5>Another Quote headline</h5>
                  This is the quote of someone else. Maybe Martin or Johannes?
                </blockquote>
                <div className="author-info mt-4">
                  <h6 className="mb-0">Johannes Fenner</h6>
                  <span className="small">CEO of Justhome</span>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="testimonial-tab-3"
              role="tabpanel"
            >
              <div className="testimonial-tab-content mb-4">
                <div className="mb-2">
                  <Rating />
                </div>
                <blockquote>
                  <h5>And another quote. Yeah!</h5>
                  Maybe another customer is saying this. Yada yada yada yada.
                  Yada yada yada yada. Yada yada yada yadaaaaaaa! Yada yada yada
                  yada.Yaaaaaddddaaaaaa!
                </blockquote>
                <div className="author-info mt-4">
                  <h6 className="mb-0">Jane Doe</h6>
                  <span className="small">Customer</span>
                </div>
              </div>
            </div>
          </div>
          <ul
            className="nav testimonial-tab-list mt-5"
            id="nav-tab"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="active"
                href="#testimonial-tab-1"
                data-bs-toggle="tab"
                data-bs-target="#testimonial-tab-1"
                role="tab"
                aria-selected="true"
              >
                <img
                  src="assets/img/testimonial/1.jpg"
                  className="img-fluid rounded-circle"
                  width="60"
                  alt="customer"
                />
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#testimonial-tab-2"
                data-bs-toggle="tab"
                data-bs-target="#testimonial-tab-2"
                role="tab"
                aria-selected="false"
              >
                <img
                  src="assets/img/testimonial/2.jpg"
                  className="img-fluid rounded-circle"
                  width="60"
                  alt="cto"
                />
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#testimonial-tab-3"
                data-bs-toggle="tab"
                data-bs-target="#testimonial-tab-3"
                role="tab"
                aria-selected="false"
              >
                <img
                  src="assets/img/testimonial/3.jpg"
                  className="img-fluid rounded-circle"
                  width="60"
                  alt="customer"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="row justify-content-center mt-60">
          <div className="col-12">
            <p>
              Another Tagline to convice you that you should create an account
            </p>
            <ul className="list-unstyled list-inline mb-0">
              <li className="list-inline-item">
                <img
                  src="assets/img/clients/client-logo-1.svg"
                  width="120"
                  alt="clients logo"
                  className="img-fluid py-3 me-3 customer-logo"
                />
              </li>
              <li className="list-inline-item">
                <img
                  src="assets/img/clients/client-logo-2.svg"
                  width="120"
                  alt="clients logo"
                  className="img-fluid py-3 me-3 customer-logo"
                />
              </li>
              <li className="list-inline-item">
                <img
                  src="assets/img/clients/client-logo-3.svg"
                  width="120"
                  alt="clients logo"
                  className="img-fluid py-3 me-3 customer-logo"
                />
              </li>
              <li className="list-inline-item">
                <img
                  src="assets/img/clients/client-logo-4.svg"
                  width="120"
                  alt="clients logo"
                  className="img-fluid py-3 me-3 customer-logo"
                />
              </li>
              <li className="list-inline-item">
                <img
                  src="assets/img/clients/client-logo-5.svg"
                  width="120"
                  alt="clients logo"
                  className="img-fluid py-3 me-3 customer-logo"
                />
              </li>
              <li className="list-inline-item">
                <img
                  src="assets/img/clients/client-logo-6.svg"
                  width="120"
                  alt="clients logo"
                  className="img-fluid py-3 me-3 customer-logo"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewTab;
