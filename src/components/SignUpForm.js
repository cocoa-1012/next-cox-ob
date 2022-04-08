import React from "react";
import { Link, Navigate } from "react-router-dom";
import LoaderButton from "../components/LoaderButton";
import { onError } from "../lib/errorLib";
import { AppContext } from "../lib/contextLib";

import { Trans, withTranslation } from "react-i18next";
import * as cms from "../lib/cms";

class SignUpForm extends React.Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      tacOptIn: false,
      isLoading: false,
      successful: false,
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword &&
      this.state.tacOptIn
    );
  }

  setEmail(event) {
    this.setState({ email: event.target.value });
  }
  setPassword(event) {
    this.setState({ password: event.target.value });
  }
  setPasswordConfirmation(event) {
    this.setState({ confirmPassword: event.target.value });
  }

  setTACOptIn(event) {
    this.setState({ tacOptIn: event.target.value });
  }

  //utility function for waiting, since we currently dont have the backend for receiving the request:
  delay = (ms) => new Promise((res) => setTimeout(res, ms));

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ isLoading: true });
    try {
      //call backend
      await this.delay(500);

      //missing: check if we are really successful
      this.setState({ isLoading: false, successful: true });
    } catch (e) {
      onError(e);
      this.setState({ isLoading: false });
    }
  }

  render() {
    const context = this.context;
    const logo = cms.getLogo(context.siteData);

    return (
      <>
        {this.state.successful && <Navigate to="/activate" replace={true} />}
        <div className="price-feature-col pricing-action-info p-5 right-radius bg-light order-0 order-lg-1">
          <Link to={"/"} className="mb-5 d-block d-xl-none d-lg-none">
            {logo && (
              <img src={logo.url} alt={logo.alt} className="img-fluid" />
            )}
          </Link>
          <h1 className="h3">{this.props.t("signup_title")}</h1>
          <p className="text-muted">{this.props.t("signup_subtitle")}</p>

          <form
            action="#"
            className="mt-5 register-form"
            onSubmit={(event) => this.handleSubmit(event)}
          >
            <div className="row">
              <div className="col-sm-12 ">
                <label htmlFor="email" className="mb-1">
                  {this.props.t("data_email")}{" "}
                  <span className="text-danger">*</span>
                </label>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder={this.props.t("data_email")}
                    id="email"
                    value={this.state.email}
                    onChange={(event) => this.setEmail(event)}
                    required
                    aria-label={this.props.t("data_email")}
                  />
                </div>
              </div>

              <div className="col-sm-12">
                <label htmlFor="password" className="mb-1">
                  {this.props.t("data_password")}{" "}
                  <span className="text-danger">*</span>
                </label>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={(event) => this.setPassword(event)}
                    className="form-control"
                    placeholder={this.props.t("data_password")}
                    id="password"
                    required
                    aria-label={this.props.t("data_password")}
                  />
                </div>
              </div>

              <div className="col-sm-12">
                <label htmlFor="password" className="mb-1">
                  {this.props.t("data_password_repeat")}{" "}
                  <span className="text-danger">*</span>
                </label>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    onChange={(event) => this.setPasswordConfirmation(event)}
                    value={this.state.confirmPassword}
                    className="form-control"
                    placeholder={this.props.t("data_password_repeat")}
                    id="passwordConfirmation"
                    required
                    aria-label={this.props.t("data_password_repeat")}
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="form-check d-flex">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    onChange={(event) => this.setTACOptIn(event)}
                    value={this.state.tacOptIn}
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    <Trans i18nKey="tac_confirm">
                      I have read and agree to the{" "}
                      <Link to="#" className="text-decoration-none">
                        Terms and Conditions
                      </Link>
                      .
                    </Trans>
                  </label>
                </div>
              </div>
              <div className="col-12">
                <LoaderButton
                  type="submit"
                  className="btn btn-primary mt-4 d-block w-100"
                  isLoading={this.state.isLoading}
                  disabled={!this.validateForm()}
                >
                  {this.props.t("action_signup")}
                </LoaderButton>
              </div>
            </div>
            <div className="position-relative d-flex align-items-center justify-content-center mt-4 py-4">
              <span className="divider-bar"></span>
              <h6 className="position-absolute text-center divider-text bg-light mb-0">
                {this.props.t("or")}
              </h6>
            </div>
            <div className="action-btns">
              <Link
                to="#"
                className="btn google-btn mt-4 d-block bg-white shadow-sm d-flex align-items-center text-decoration-none justify-content-center"
              >
                <img
                  src="assets/img/thirdparty/google-icon.svg"
                  alt="google"
                  className="me-3"
                />
                <span>{this.props.t("action_signup_google")}</span>
              </Link>
            </div>
            <p className="text-center text-muted mt-4 mb-0 fw-medium font-monospace">
              <Trans i18nKey="direct_to_login">
                Already have an account?{" "}
                <Link to="/login" className="text-decoration-none">
                  Sign in
                </Link>
              </Trans>
            </p>
          </form>
        </div>
      </>
    );
  }
}

export default withTranslation()(SignUpForm);
