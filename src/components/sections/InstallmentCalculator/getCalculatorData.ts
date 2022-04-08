import { useTranslation } from "next-i18next";
import { useMemo } from "react";
import { TFunction } from "i18next";
import {
  InstallmentCalculatorData,
  EmploymentType,
  TypeOfInvestment,
} from "./interfaces";
import { FormCondition, FormDefinition } from "../../common/DynamicForm";

export enum CalculatorKey {
  propertySize = "PROPERTY_SIZE",
  typeOfInvestment = "KIND_OF_INVESTMENT",
  typeOfEmployment = "TYPE_OF_EMPLOYMENT",
  isTwoPersons = "IS_TWO_PERSONS",
  typeOfEmploymentSecond = "TYPE_OF_EMPLOYMENT_SECOND",
  details = "DETAILS",
  calculationType = "CALCULATION_TYPE",
  quickCheck = "QUICK_CHECK",
}

export const CALCULATOR_ITEM_TYPES = {
  INPUTS: "INPUTS",
};

const employmentTypeCondition = (
  personIndex: number,
  ...employmentType: EmploymentType[]
): FormCondition<InstallmentCalculatorData> => {
  return (value) =>
    !!value.persons[personIndex] &&
    employmentType.includes(value.persons[personIndex].typeOfEmployment);
};

const not =
  (fn: Function) =>
  (...args: any[]) =>
    !fn(...args);

const or =
  (
    ...fn: FormCondition<InstallmentCalculatorData>[]
  ): FormCondition<InstallmentCalculatorData> =>
  (value) =>
    fn.some((f) => f(value));

const and =
  (
    ...fn: FormCondition<InstallmentCalculatorData>[]
  ): FormCondition<InstallmentCalculatorData> =>
  (value) =>
    fn.every((f) => f(value));

const getCalculatorData = (t: TFunction): FormDefinition[] => [
  {
    steps: 4,
    key: CalculatorKey.typeOfInvestment,
    goto: CalculatorKey.propertySize,
    title: t("calculator_installment_title"),
    description: t("calculator_installment_description"),
    sections: [
      {
        title: t("calculator_installment_investment_title"),
        fields: [
          {
            component: "TOGGLE_BUTTON",
            name: "typeOfInvestment",
            options: [
              {
                value: TypeOfInvestment.ownerOccupied,
                label: t("label_owner_occupied"),
              },
              {
                value: TypeOfInvestment.investment,
                label: t("label_investment"),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    steps: 4,
    key: CalculatorKey.propertySize,
    goto: CalculatorKey.typeOfEmployment,
    submit: t("form_button_next"),
    sections: [
      {
        title: t("calculator_installment_property_size_title"),
        fields: [
          {
            component: "INPUT",
            name: "propertySize",
            placeholder: "0",
            type: "number",
            label: t("label_property_size"),
            rules: { required: true },
            errorMessage: t("error_property_size"),
          },
        ],
      },
    ],
  },
  {
    steps: 4,
    key: CalculatorKey.typeOfEmployment,
    goto: CalculatorKey.isTwoPersons,
    sections: [
      {
        title: t("calculator_installment_employment_title"),
        fields: [
          {
            component: "TOGGLE_BUTTON",
            name: "persons[0].typeOfEmployment",
            options: [
              {
                value: EmploymentType.employed,
                label: t("label_employed"),
              },
              {
                value: EmploymentType.selfEmployed,
                label: t("label_self_employed"),
              },
              {
                value: EmploymentType.pensioner,
                label: t("label_pensioner"),
              },
              {
                value: EmploymentType.parentalLeave,
                label: t("label_parental_leave"),
              },
              {
                value: EmploymentType.student,
                label: t("label_student"),
              },
              {
                value: EmploymentType.privateer,
                label: t("label_privateer"),
              },
              {
                value: EmploymentType.civilServant,
                label: t("label_civil_servant"),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    steps: 4,
    key: CalculatorKey.isTwoPersons,
    goto(value: InstallmentCalculatorData) {
      return value.isTwoPersons
        ? CalculatorKey.typeOfEmploymentSecond
        : CalculatorKey.details;
    },
    sections: [
      {
        title: t("calculator_installment_persons_title"),
        fields: [
          {
            component: "TOGGLE_BUTTON",
            name: "isTwoPersons",
            options: [
              {
                value: false,
                label: t("label_one_person"),
              },
              {
                value: true,
                label: t("label_two_persons"),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: CalculatorKey.typeOfEmploymentSecond,
    steps: 5,
    goto: CalculatorKey.details,
    sections: [
      {
        title: t("calculator_installment_second_employment_title"),
        fields: [
          {
            component: "TOGGLE_BUTTON",
            name: "persons[1].typeOfEmployment",
            options: [
              {
                value: EmploymentType.employed,
                label: t("label_employed"),
              },
              {
                value: EmploymentType.selfEmployed,
                label: t("label_self_employed"),
              },
              {
                value: EmploymentType.pensioner,
                label: t("label_pensioner"),
              },
              {
                value: EmploymentType.parentalLeave,
                label: t("label_parental_leave"),
              },
              {
                value: EmploymentType.student,
                label: t("label_student"),
              },
              {
                value: EmploymentType.privateer,
                label: t("label_privateer"),
              },
              {
                value: EmploymentType.civilServant,
                label: t("label_civil_servant"),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: CalculatorKey.details,
    submit: t("calculator_installment_calculate_button"),
    goto: "",
    sections: [
      {
        title: t("calculator_installment_income_title"),
        fields: [
          {
            component: "INPUT",
            type: "number",
            name: "persons[0].monthlySalary",
            label: t("label_monthly_income"),
            placeholder: "0",
            condition: employmentTypeCondition(
              0,
              EmploymentType.employed,
              EmploymentType.student
            ),
          },
          {
            component: "INPUT",
            type: "number",
            label: t("label_number_of_salaries"),
            name: "persons[0].numberOfMonthlySalaries",
            defaultValue: 12,
            condition: employmentTypeCondition(
              0,
              EmploymentType.employed,
              EmploymentType.student
            ),
          },
          {
            component: "INPUT",
            type: "number",
            label: t("label_income_self_employment"),
            name: "persons[0].incomeSelfEmployment",
            placeholder: "0",
            condition: employmentTypeCondition(0, EmploymentType.selfEmployed),
          },
          {
            component: "INPUT",
            type: "number",
            label: t("label_pension_income"),
            name: "persons[0].pensionIncome",
            placeholder: "0",
            condition: employmentTypeCondition(0, EmploymentType.pensioner),
          },
          {
            component: "INPUT",
            type: "number",
            name: "persons[0].dividends",
            label: t("label_dividends_income"),
            placeholder: "0",
            condition: employmentTypeCondition(0, EmploymentType.privateer),
          },
          {
            component: "INPUT",
            type: "number",
            name: "persons[0].rentalIncome",
            label: t("label_rental_income"),
            placeholder: "0",
            condition: employmentTypeCondition(0, EmploymentType.privateer),
          },
          {
            component: "INPUT",
            type: "number",
            name: "persons[0].parentalAllowance",
            label: t("label_parental_allowance"),
            placeholder: "0",
            condition: employmentTypeCondition(0, EmploymentType.parentalLeave),
          },
        ],
      },
      {
        title: t("calculator_installment_more_revenue"),
        collapsable: true,
        fields: [
          {
            component: "INPUT",
            type: "number",
            name: "persons[0].monthlySalary",
            label: t("label_monthly_income"),
            placeholder: "0",
            condition: not(
              employmentTypeCondition(
                0,
                EmploymentType.employed,
                EmploymentType.student
              )
            ),
          },
          {
            component: "INPUT",
            type: "number",
            label: t("label_number_of_salaries"),
            name: "persons[0].numberOfMonthlySalaries",
            defaultValue: 12,
            condition: not(
              employmentTypeCondition(
                0,
                EmploymentType.employed,
                EmploymentType.student
              )
            ),
          },
          {
            component: "INPUT",
            type: "number",
            label: t("label_income_self_employment"),
            name: "persons[0].incomeSelfEmployment",
            placeholder: "0",
            condition: not(
              employmentTypeCondition(0, EmploymentType.selfEmployed)
            ),
          },
          {
            component: "INPUT",
            type: "number",
            name: "persons[0].dividends",
            label: t("label_dividends_income"),
            placeholder: "0",
            condition: not(
              employmentTypeCondition(0, EmploymentType.privateer)
            ),
          },
          {
            component: "INPUT",
            type: "number",
            name: "persons[0].rentalIncome",
            label: t("label_rental_income"),
            placeholder: "0",
            condition: not(
              employmentTypeCondition(0, EmploymentType.privateer)
            ),
          },
          {
            component: "INPUT",
            type: "number",
            name: "persons[0].parentalAllowance",
            label: t("label_parental_allowance"),
            placeholder: "0",
            condition: not(
              employmentTypeCondition(0, EmploymentType.parentalLeave)
            ),
          },
          {
            component: "INPUT",
            type: "number",
            name: "persons[0].childAllowance",
            label: t("label_child_allowance"),
            placeholder: "0",
          },
        ],
      },
      {
        title: t("calculator_installment_income_second_person_title"),
        condition(value: any) {
          return value.isTwoPersons;
        },
        fields: [
          {
            component: "INPUT",
            type: "number",
            name: "persons[1].monthlySalary",
            label: t("label_monthly_income"),
            placeholder: "0",
            condition: employmentTypeCondition(
              1,
              EmploymentType.employed,
              EmploymentType.student
            ),
          },
          {
            component: "INPUT",
            type: "number",
            label: t("label_number_of_salaries"),
            name: "persons[1].numberOfMonthlySalaries",
            defaultValue: 12,
            condition: employmentTypeCondition(
              1,
              EmploymentType.employed,
              EmploymentType.student
            ),
          },
          {
            component: "INPUT",
            type: "number",
            label: t("label_income_self_employment"),
            name: "persons[1].incomeSelfEmployment",
            placeholder: "0",
            condition: employmentTypeCondition(1, EmploymentType.selfEmployed),
          },
          {
            component: "INPUT",
            type: "number",
            label: t("label_pension_income"),
            name: "persons[1].pensionIncome",
            placeholder: "0",
            condition: employmentTypeCondition(1, EmploymentType.pensioner),
          },
          {
            component: "INPUT",
            type: "number",
            name: "persons[1].dividends",
            label: t("label_dividends_income"),
            placeholder: "0",
            condition: employmentTypeCondition(1, EmploymentType.privateer),
          },
          {
            component: "INPUT",
            type: "number",
            name: "persons[1].rentalIncome",
            label: t("label_rental_income"),
            placeholder: "0",
            condition: employmentTypeCondition(1, EmploymentType.privateer),
          },
        ],
      },
      {
        title: t("calculator_installment_more_revenue_second_person"),
        collapsable: true,
        condition(value: any) {
          return value.isTwoPersons;
        },
        fields: [
          {
            component: "INPUT",
            type: "number",
            name: "persons[1].monthlySalary",
            label: t("label_monthly_income"),
            placeholder: "0",
            condition: not(
              employmentTypeCondition(
                1,
                EmploymentType.employed,
                EmploymentType.student
              )
            ),
          },
          {
            component: "INPUT",
            type: "number",
            label: t("label_number_of_salaries"),
            name: "persons[1].numberOfMonthlySalaries",
            defaultValue: 12,
            condition: not(
              employmentTypeCondition(
                1,
                EmploymentType.employed,
                EmploymentType.student
              )
            ),
          },
          {
            component: "INPUT",
            type: "number",
            label: t("label_income_self_employment"),
            name: "persons[1].incomeSelfEmployment",
            placeholder: "0",
            condition: not(
              employmentTypeCondition(1, EmploymentType.selfEmployed)
            ),
          },
          {
            component: "INPUT",
            type: "number",
            name: "persons[1].dividends",
            label: t("label_dividends_income"),
            placeholder: "0",
            condition: not(
              employmentTypeCondition(1, EmploymentType.privateer)
            ),
          },
          {
            component: "INPUT",
            type: "number",
            name: "persons[1].rentalIncome",
            label: t("label_rental_income"),
            placeholder: "0",
            condition: not(
              employmentTypeCondition(1, EmploymentType.privateer)
            ),
          },
          {
            component: "INPUT",
            type: "number",
            name: "persons[1].parentalAllowance",
            label: t("label_parental_allowance"),
            placeholder: "0",
            condition: not(
              employmentTypeCondition(1, EmploymentType.parentalLeave)
            ),
          },
          {
            component: "INPUT",
            type: "number",
            name: "persons[1].childAllowance",
            label: t("label_child_allowance"),
            placeholder: "0",
          },
        ],
      },
      {
        title: t("calculator_installment_expenses"),
        fields: [
          {
            component: "INPUT",
            type: "number",
            name: "expenses.privateHealthInsurance",
            label: t("label_expenses_private_health_insurance"),
            placeholder: "0",
            condition: or(
              employmentTypeCondition(0, EmploymentType.selfEmployed),
              employmentTypeCondition(1, EmploymentType.selfEmployed)
            ),
          },
          {
            component: "INPUT",
            type: "number",
            name: "expenses.food",
            label: t("label_expenses_food"),
            placeholder: "0",
          },
          {
            component: "INPUT",
            type: "number",
            name: "expenses.leisure",
            label: t("label_expenses_leisure"),
            placeholder: "0",
          },
          {
            component: "INPUT",
            type: "number",
            name: "expenses.mobility",
            label: t("label_expenses_mobility"),
            placeholder: "0",
          },
          {
            component: "INPUT",
            type: "number",
            name: "expenses.vacation",
            label: t("label_expenses_vacation"),
            placeholder: "0",
          },
          {
            component: "INPUT",
            type: "number",
            name: "expenses.communication",
            label: t("label_expenses_communication"),
            placeholder: "0",
          },
        ],
      },
      {
        title: t("label_expenses_other"),
        collapsable: true,
        fields: [
          {
            component: "INPUT",
            type: "number",
            name: "expenses.savings",
            label: t("label_expenses_savings"),
            placeholder: "0",
          },
          {
            component: "INPUT",
            type: "number",
            name: "expenses.ratesForLoan",
            label: t("label_expenses_loan"),
            placeholder: "0",
          },
          {
            component: "INPUT",
            type: "number",
            name: "expenses.privateHealthInsurance",
            label: t("label_expenses_private_health_insurance"),
            placeholder: "0",
            condition: and(
              not(employmentTypeCondition(0, EmploymentType.selfEmployed)),
              not(employmentTypeCondition(1, EmploymentType.selfEmployed))
            ),
          },
          {
            component: "INPUT",
            type: "number",
            name: "expenses.privatePension",
            label: t("label_expenses_private_pension"),
            placeholder: "0",
          },
          {
            component: "INPUT",
            type: "number",
            name: "expenses.privateInsurance",
            label: t("label_expenses_private_insurance"),
            placeholder: "0",
          },
          {
            component: "INPUT",
            type: "number",
            name: "expenses.alimony",
            label: t("label_expenses_alimony"),
            placeholder: "0",
          },
          {
            component: "INPUT",
            type: "number",
            name: "expenses.otherExpenses",
            label: t("label_expenses_other"),
            placeholder: "0",
          },
        ],
      },
    ],
  },
];

export const useCalculatorQuestions = () => {
  const { t } = useTranslation();

  const getData = useMemo(() => {
    return getCalculatorData(t);
  }, [t]);
  return getData;
};
