export enum EmploymentType {
  employed = "EMPLOYED",
  selfEmployed = "SELF_EMPLOYED",
  pensioner = "PENSIONERS",
  parentalLeave = "PARENTAL_LEAVE",
  student = "STUDENT",
  privateer = "PRIVATEER",
  civilServant = "CIVIL_SERVANT",
}

export enum TypeOfInvestment {
  ownerOccupied = "OWNER_OCCUPIED",
  investment = "INVESTMENT",
}

export interface InstallmentCalculatorData {
  quickCheck: boolean;
  typeOfInvestment: TypeOfInvestment;
  isTwoPersons: boolean;
  persons: CalculatorPerson[];
  expenses: CalculatorExpenses;
  propertySize: number;
}

export interface CalculatorPerson {
  typeOfEmployment: EmploymentType;
  monthlySalary: number;
  numberOfMonthlySalaries: number;
  incomeSelfEmployment: number;
  pensionIncome: number;
  rentalIncome: number;
  parentalAllowance: number;
  dividends: number;
  statePayments: number;
  otherIncome: number;
}

export interface CalculatorExpenses {
  rent: number;
  food: number;
  ratesForLoan: number;
  leisure: number;
  privateHealthInsurance: number;
  vacation: number;
  mobility: number;
  communication: number;
  savings: number;
  privatePension: number;
  privateInsurance: number;
  alimony: number;
  otherExpenses: number;
}
