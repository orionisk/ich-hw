export abstract class Account {
  protected balance: number = 0;

  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;

  getBalance(): number {
    return this.balance;
  }
}

export class SavingsAccount extends Account {
  constructor(private interestRate: number) {
    super();
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      throw new Error('Insufficient funds');
    }
  }

  addInterest(): void {
    this.balance += this.balance * this.interestRate;
  }
}

export class CheckingAccount extends Account {
  constructor(private transactionFee: number) {
    super();
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    const totalAmount = amount + this.transactionFee;
    if (totalAmount <= this.balance) {
      this.balance -= totalAmount;
    } else {
      throw new Error('Insufficient funds');
    }
  }
}
