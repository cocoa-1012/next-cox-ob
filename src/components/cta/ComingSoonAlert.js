import React from "react";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import subscribe from "../../api/subscribe";
import { SUBSCRIBE } from "../../api/keys";
import SubmitWithSpinner from "../common/SubmitWithSpinner";
import InputWithError from "../common/InputWithError";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
});

const ComingSoonAlert = () => {
  const mutation = useMutation(SUBSCRIBE, subscribe);
  const { i18n } = useTranslation();
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { handleSubmit, reset, ...form } = useForm(formOptions);

  const onSubmit = async (data) => {
    mutation.mutate(
      {
        email: data.email,
        subscriptionType: "COMING_SOON_ALERT",
        country: "GERMANY",
        language: i18n.language,
      },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };

  return (
    <ComingSoonAlertForm
      mutation={mutation}
      handleSubmit={handleSubmit(onSubmit)}
      form={form}
    />
  );
};

export const ComingSoonAlertForm = ({ handleSubmit, mutation, form = {} }) => {
  const { t } = useTranslation();

  const { register, formState } = form;
  const errors = formState?.errors;
  const inputError = errors?.email || mutation?.error || null;
  const inputSuccess =
    !inputError && mutation?.isSuccess
      ? mutation?.data?.message || t("coming_soon_success_subscription")
      : null;

  return (
    <div className="form-block-banner m-auto mt-5">
      <form
        id="email-form2"
        name="email-form"
        className="subscribe-form d-flex"
        onSubmit={handleSubmit}
      >
        <div className="d-flex flex-column flex-grow-1 me-2">
          <InputWithError
            type="email"
            className="form-control me-2"
            name="email"
            data-name="email"
            placeholder={t("coming_soon_subscribe_email_placeholder")}
            id="csa-email"
            required=""
            register={{ ...(register && register("email")) }}
            error={inputError}
            successMessage={inputSuccess}
            data-testid="input"
          />
        </div>
        <div>
          <SubmitWithSpinner
            className={"coming-soon-alert-submit"}
            text={t("coming_soon_subscribe")}
            isFetch={mutation?.isLoading}
          />
        </div>
      </form>
    </div>
  );
};
export default ComingSoonAlert;
