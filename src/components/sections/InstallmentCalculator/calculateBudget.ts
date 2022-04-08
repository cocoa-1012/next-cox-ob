import {
  InstallmentCalculatorData,
  CalculatorPerson,
  TypeOfInvestment,
} from "./interfaces";

const MAINTENANCE_PER_MONTH_PER_SQM = 2;
const NUMBER_OF_MONTHS_PER_YEAR = 12;

const parseNumber = (input: string | number, fallback = 0) => {
  const number = Number(input);
  return isNaN(number) ? fallback : number;
};

const add = (a: number, b: number): number => a + b;

const calculateIncome = (person: CalculatorPerson) => {
  const monthlySalary = parseNumber(person.monthlySalary);
  const numberOfMonthlySalaries = parseNumber(person.numberOfMonthlySalaries);

  const otherIncome = [
    person.incomeSelfEmployment,
    person.pensionIncome,
    person.dividends,
    person.rentalIncome,
    person.parentalAllowance,
    person.otherIncome,
  ]
    .map(parseNumber)
    .reduce(add, 0);

  return {
    monthlyIncome: monthlySalary + otherIncome,
    yearlyIncome:
      monthlySalary * numberOfMonthlySalaries +
      otherIncome * NUMBER_OF_MONTHS_PER_YEAR,
  };
};

const calculateExpenses = (data: InstallmentCalculatorData) => {
  const expenses = data.expenses;
  const vacationExpenses = parseNumber(expenses.vacation);

  let sumExpenses = [
    expenses.food,
    expenses.ratesForLoan,
    expenses.leisure,
    expenses.privateHealthInsurance,
    expenses.mobility,
    expenses.communication,
    expenses.savings,
    expenses.privatePension,
    expenses.privateInsurance,
    expenses.alimony,
    expenses.otherExpenses,
  ]
    .map(parseNumber)
    .reduce(add, 0);

  sumExpenses += parseNumber(data.propertySize) * MAINTENANCE_PER_MONTH_PER_SQM;

  if (data.typeOfInvestment === TypeOfInvestment.investment) {
    sumExpenses += parseNumber(expenses.rent);
  }

  return {
    monthlyExpenses:
      sumExpenses + Math.floor(vacationExpenses / NUMBER_OF_MONTHS_PER_YEAR),
    yearlyExpenses: sumExpenses * NUMBER_OF_MONTHS_PER_YEAR + vacationExpenses,
  };
};

const calculateBudget = (data: InstallmentCalculatorData) => {
  const firstPerson = data.persons[0];

  let { monthlyIncome, yearlyIncome } = calculateIncome(firstPerson);

  if (data.isTwoPersons) {
    const secondPersonIncome = calculateIncome(data.persons[1]);
    monthlyIncome += secondPersonIncome.monthlyIncome;
    yearlyIncome += secondPersonIncome.yearlyIncome;
  }

  const { monthlyExpenses, yearlyExpenses } = calculateExpenses(data);

  const availableMonthlyRate = Math.max(0, monthlyIncome - monthlyExpenses);

  return {
    monthlyIncome,
    yearlyIncome,
    monthlyExpenses,
    yearlyExpenses,
    availableMonthlyRate,
  };
};

export default calculateBudget;
