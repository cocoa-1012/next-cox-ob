import React from "react";
import { Link, Navigate } from "react-router-dom";
import { onError } from "../lib/errorLib";
import LoaderButton from "./LoaderButton";
import { AppContext } from "../lib/contextLib";
import { withTranslation } from "react-i18next";
import * as cms from "../lib/cms";

class SignUpConfirmationForm extends React.Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = {
      activationCode: "",
      isLoading: false,
    };
  }

  validateForm() {
    return this.state.activationCode.length > 0;
  }

  setActivationCode(event) {
    this.setState({ activationCode: event.target.value });
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
        {this.state.successful && <Navigate to="/login" replace={true} />}
        <div className="price-feature-col pricing-action-info p-5 right-radius bg-light order-0 order-lg-1">
          <Link to={"/"} className="mb-5 d-block d-xl-none d-lg-none">
            {logo && (
              <img src={logo.url} alt={logo.alt} className="img-fluid" />
            )}
          </Link>
          <h1 className="h3">{this.props.t("confirmation_title")}</h1>
          <p className="text-muted">{this.props.t("confirmation_subtitle")}</p>

          <form
            onSubmit={(event) => this.handleSubmit(event)}
            action="#"
            className="mt-5 register-form"
          >
            <div className="row">
              <div className="col-sm-12 ">
                <label htmlFor="code" className="mb-1">
                  {this.props.t("data_activation_code")}{" "}
                  <span className="text-danger">*</span>
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={this.props.t("data_activation_code")}
                    id="activationCode"
                    required
                    aria-label={this.props.t("data_activation_code")}
                    onChange={(e) => this.setActivationCode(e)}
                    value={this.state.activationCode}
                  />
                </div>
              </div>

              <div className="col-12">
                <LoaderButton
                  type="submit"
                  className="btn btn-primary mt-4 d-block w-100"
                  isLoading={this.state.isLoading}
                  disabled={!this.validateForm()}
                >
                  {this.props.t("action_activate")}
                </LoaderButton>
              </div>
            </div>

            <p className="text-center text-muted mt-4 mb-0 fw-medium font-monospace">
              {this.props.t("confirmation_already_done")}{" "}
              <Link to="/login" className="text-decoration-none">
                {this.props.t("action_login")}
              </Link>
            </p>
          </form>
        </div>
      </>
    );
  }
}

export default withTranslation()(SignUpConfirmationForm);
