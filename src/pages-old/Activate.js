import React from "react";
import ReviewTab from "../components/tabs/ReviewTab";
import Layout from "../layout/Layout";
import SignUpConfirmationForm from "../components/SignUpConfirmationForm";
import Meta from "../components/common/Meta";

const Signup = () => {
  return (
    <Layout>
      <Meta />
      <section
        className="sign-up-in-section bg-dark ptb-60"
        style={{
          background:
            "url('assets/img/page-header-bg.svg')no-repeat right bottom",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="pricing-content-wrap bg-custom-light rounded-custom shadow-lg">
                <ReviewTab />
                <SignUpConfirmationForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Signup;
