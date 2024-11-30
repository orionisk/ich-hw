export namespace Finance {
  export class LoanCalculator {
    calculateMonthlyPayment(
      principal: number,
      annualRate: number,
      years: number
    ): number {
      const monthly = annualRate / 12 / 100;
      const totalMonths = years * 12;

      const x = Math.pow(1 + monthly, totalMonths);

      const monthlyPayment = (principal * (monthly * x)) / (x - 1);

      return monthlyPayment;
    }
  }

  export class TaxCalculator {
    calculateIncomeTax(income: number, taxRate: number): number {
      return income * (taxRate / 100);
    }
  }
}
