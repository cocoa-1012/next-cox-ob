import React, { FC, useMemo } from "react";
import calculateBudget from "./calculateBudget";
import { InstallmentCalculatorData } from "./interfaces";
import styles from "./InstallmentCalculatorResult.module.scss";
import { useTranslation } from "next-i18next";
interface InstallmentCalculatorResultProps {
  value: InstallmentCalculatorData;
}
const InstallmentCalculatorResult: FC<InstallmentCalculatorResultProps> = ({
  value,
}) => {
  const { t } = useTranslation();
  const result = useMemo(() => calculateBudget(value), [value]);

  return (
    <>
      <div className="row">
        <div className="col">
          <h3 className="lh-base mb-4 mt-2">
            {t("installment_calculator_result_section_1")}
          </h3>
        </div>
      </div>
      <div className="row flex-row-reverse">
        <div className="col-md-4 ">
          <img
            src="/assets/img/calculator/calculator_result.svg"
            className={styles.image}
            alt=""
          />
        </div>
        <div className="col-md-8">
          <p>{t("installment_calculator_result_section_2")}</p>
          <p>
            {t("installment_calculator_result_section_3", {
              rate: result.availableMonthlyRate,
            })}
          </p>
          <p>{t("installment_calculator_result_section_4")}</p>
        </div>
      </div>
    </>
  );
};

export default InstallmentCalculatorResult;
