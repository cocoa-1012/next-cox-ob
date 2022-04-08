import React from "react";
import { Link, Navigate } from "react-router-dom";
import { AppContext } from "../lib/contextLib";
import { onError } from "../lib/errorLib";
import LoaderButton from "./LoaderButton";
import { withTranslation } from "react-i18next";
import * as cms from "../lib/cms";

class LoginScreen extends React.Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoading: false,
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  setEmail(event) {
    this.setState({ email: event.target.value });
  }
  setPassword(event) {
    this.setState({ password: event.target.value });
  }

  //utility function for waiting, since we currently dont have the backend for receiving the request:
  delay = (ms) => new Promise((res) => setTimeout(res, ms));

  async handleSubmit(event) {
    const context = this.context;
    event.preventDefault();
    this.setState({ isLoading: true });
    try {
      //call backend
      await this.delay(500);
      context.setUserAuthenticated(true);
      this.setState({ isLoading: false });
    } catch (e) {
      onError(e);
      this.setState({ isLoading: false });
    }
  }

  render() {
    const context = this.context;
    const noLoginPossible = context.isAuthenticated && !context.isInitializing;
    const inverseLogo = cms.getInverseLogo(context.siteData);

    return (
      <>
        {noLoginPossible && <Navigate to="/" replace={true} />}
        <section
          className="sign-up-in-section bg-dark ptb-60"
          style={{
            background:
              "url('assets/img/page-header-bg.svg')no-repeat right bottom",
          }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-5 col-md-8 col-12">
                <Link to={"/"} className="mb-4 d-block text-center">
                  {inverseLogo && (
                    <img
                      src={inverseLogo.url}
                      alt={inverseLogo.alt}
                      className="img-fluid"
                    />
                  )}
                </Link>
                <div className="register-wrap p-5 bg-light shadow rounded-custom">
                  <h1 className="h3">{this.props.t("login_title")}</h1>
                  <p className="text-muted">{this.props.t("login_subtitle")}</p>

                  <div className="action-btns">
                    <Link
                      to="#"
                      className="btn google-btn bg-white shadow-sm mt-4 d-block d-flex align-items-center text-decoration-none justify-content-center"
                    >
                      <img
                        src="assets/img/thirdparty/google-icon.svg"
                        alt="google"
                        className="me-3"
                      />
                      <span>{this.props.t("action_login_google")}</span>
                    </Link>
                  </div>
                  <div className="position-relative d-flex align-items-center justify-content-center mt-4 py-4">
                    <span className="divider-bar"></span>
                    <h6 className="position-absolute text-center divider-text bg-light mb-0">
                      {this.props.t("or")}
                    </h6>
                  </div>
                  <form
                    onSubmit={(event) => this.handleSubmit(event)}
                    className="mt-4 register-form"
                  >
                    <div className="row">
                      <div className="col-sm-12">
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
                            required
                            aria-label={this.props.t("data_email")}
                            value={this.state.email}
                            onChange={(event) => this.setEmail(event)}
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
                            className="form-control"
                            placeholder={this.props.t("data_password")}
                            id="password"
                            required
                            aria-label={this.props.t("data_password")}
                            value={this.state.password}
                            onChange={(event) => this.setPassword(event)}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <LoaderButton
                          type="submit"
                          isLoading={this.state.isLoading}
                          disabled={!this.validateForm()}
                          className="btn btn-primary mt-3 d-block w-100"
                        >
                          {this.props.t("action_login")}
                        </LoaderButton>
                      </div>
                    </div>
                    <p className="font-monospace fw-medium text-center text-muted mt-3 pt-4 mb-0">
                      {this.props.t("login_no_account_yet")}
                      <br />
                      <Link to="/signup" className="text-decoration-none">
                        {this.props.t("link_signup_today")}
                      </Link>
                      <br />
                      <Link
                        to="/password-reset"
                        className="text-decoration-none"
                      >
                        {this.props.t("link_password_forget")}
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withTranslation()(LoginScreen);
