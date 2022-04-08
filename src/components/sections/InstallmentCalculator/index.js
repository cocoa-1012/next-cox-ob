import React, { useState } from "react";
import { useTranslation } from "next-i18next";

import { useCalculatorQuestions } from "./getCalculatorData";
import Wizzard, { WizzardSteps, WizzardContext } from "../../common/Wizzard";
import ProgressStepper from "../../common/ProgressStepper";
import DynamicForm from "../../common/DynamicForm";
import InstallmentCalculatorResult from "./InstallmentCalculatorResult";

const InstallmentCalculator = () => {
  const { t } = useTranslation();
  const [answers, setAnswers] = useState({});
  const questions = useCalculatorQuestions();

  const submitAnswer = async (value, question, goto) => {
    setAnswers((prev) => ({ ...prev, ...value }));

    setTimeout(() => {
      const next =
        typeof question.goto === "function"
          ? question.goto(value)
          : question.goto;
      if (next) {
        const nextIndex = questions.findIndex((item) => item.key === next);
        goto(nextIndex);
      } else {
        goto(questions.length);
      }
    }, 500);
  };

  return (
    <Wizzard>
      <WizzardContext.Consumer>
        {({ goto, activeIndex, back, history }) => (
          <section className="container">
            <div className="row align-items-center mt-4">
              <div className="col-lg-3 ">
                {history.length > 0 && (
                  <button className="btn p-0" onClick={back}>
                    <i className="fa-solid fa-arrow-left me-2" />
                    {t("back")}
                  </button>
                )}
              </div>
              {activeIndex < questions.length && (
                <div className="col-lg-6 mt-3">
                  <ProgressStepper
                    currentStep={history.length}
                    steps={questions[activeIndex]?.steps}
                  />
                </div>
              )}
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6 mt-4">
                <WizzardSteps>
                  {[
                    ...questions.map((question, index) => (
                      <DynamicForm
                        key={index}
                        formDefinition={question}
                        onSubmit={(value) =>
                          submitAnswer(value, question, goto)
                        }
                        defaultValues={answers}
                      />
                    )),
                    <InstallmentCalculatorResult
                      key="result"
                      value={answers}
                    />,
                  ]}
                </WizzardSteps>
              </div>
            </div>
          </section>
        )}
      </WizzardContext.Consumer>
    </Wizzard>
  );
};

export default InstallmentCalculator;
