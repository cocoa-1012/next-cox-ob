import {
  InstallmentCalculatorData,
  EmploymentType,
  TypeOfInvestment,
} from "./interfaces";
import calculateBudget from "./calculateBudget";

const singlePersonInput: InstallmentCalculatorData = {
  typeOfInvestment: TypeOfInvestment.ownerOccupied,
  isTwoPersons: false,
  propertySize: 100,
  quickCheck: false,
  persons: [
    {
      typeOfEmployment: EmploymentType.employed,
      monthlySalary: 3333,
      numberOfMonthlySalaries: 12,
      incomeSelfEmployment: 0,
      pensionIncome: 0,
      rentalIncome: 0,
      parentalAllowance: 0,
      dividends: 0,
      statePayments: 0,
      otherIncome: 0,
    },
  ],
  expenses: {
    rent: 1111,
    food: 444,
    ratesForLoan: 111,
    leisure: 111,
    privateHealthInsurance: 222,
    vacation: 1332,
    mobility: 222,
    communication: 55,
    savings: 55,
    privatePension: 111,
    privateInsurance: 99,
    alimony: 44,
    otherExpenses: 111,
  },
};

const twoPersonInput: InstallmentCalculatorData = {
  typeOfInvestment: TypeOfInvestment.ownerOccupied,
  isTwoPersons: true,
  propertySize: 100,
  quickCheck: false,
  persons: [
    {
      typeOfEmployment: EmploymentType.employed,
      monthlySalary: 3333,
      numberOfMonthlySalaries: 12,
      incomeSelfEmployment: 0,
      pensionIncome: 0,
      rentalIncome: 0,
      parentalAllowance: 0,
      dividends: 0,
      statePayments: 0,
      otherIncome: 0,
    },
    {
      typeOfEmployment: EmploymentType.employed,
      monthlySalary: 3333,
      numberOfMonthlySalaries: 12,
      incomeSelfEmployment: 0,
      pensionIncome: 0,
      rentalIncome: 0,
      parentalAllowance: 0,
      dividends: 0,
      statePayments: 0,
      otherIncome: 0,
    },
  ],
  expenses: {
    rent: 1111,
    food: 444,
    ratesForLoan: 111,
    leisure: 111,
    privateHealthInsurance: 222,
    vacation: 1332,
    mobility: 222,
    communication: 55,
    savings: 55,
    privatePension: 111,
    privateInsurance: 99,
    alimony: 44,
    otherExpenses: 111,
  },
};

const inputFull: InstallmentCalculatorData = {
  typeOfInvestment: TypeOfInvestment.ownerOccupied,
  isTwoPersons: true,
  propertySize: 100,
  quickCheck: false,
  persons: [
    {
      typeOfEmployment: EmploymentType.employed,
      monthlySalary: 3333,
      numberOfMonthlySalaries: 12,
      incomeSelfEmployment: 2222,
      pensionIncome: 1111,
      rentalIncome: 222,
      parentalAllowance: 333,
      dividends: 111,
      statePayments: 444,
      otherIncome: 555,
    },
    {
      typeOfEmployment: EmploymentType.employed,
      monthlySalary: 3333,
      numberOfMonthlySalaries: 12,
      incomeSelfEmployment: 2222,
      pensionIncome: 1111,
      rentalIncome: 222,
      parentalAllowance: 333,
      dividends: 111,
      statePayments: 444,
      otherIncome: 555,
    },
  ],
  expenses: {
    rent: 1111,
    food: 444,
    ratesForLoan: 111,
    leisure: 111,
    privateHealthInsurance: 222,
    vacation: 1332,
    mobility: 222,
    communication: 55,
    savings: 55,
    privatePension: 111,
    privateInsurance: 99,
    alimony: 44,
    otherExpenses: 111,
  },
};

describe("Budget calculator", () => {
  describe("single person", () => {
    it("calculates the correct budget", () => {
      expect(calculateBudget(singlePersonInput)).toEqual({
        yearlyIncome: 39996,
        monthlyIncome: 3333,
        yearlyExpenses: 22752,
        monthlyExpenses: 1896,
        availableMonthlyRate: 1437,
      });
    });
  });

  describe("two persons", () => {
    it("calculates the correct budget", () => {
      expect(calculateBudget(twoPersonInput)).toEqual({
        yearlyIncome: 79992,
        monthlyIncome: 6666,
        yearlyExpenses: 22752,
        monthlyExpenses: 1896,
        availableMonthlyRate: 4770,
      });
    });
  });

  describe("full input", () => {
    it("calculates the correct budget", () => {
      expect(calculateBudget(inputFull)).toEqual({
        yearlyIncome: 189288,
        monthlyIncome: 15774,
        yearlyExpenses: 22752,
        monthlyExpenses: 1896,
        availableMonthlyRate: 13878,
      });
    });
  });
});
