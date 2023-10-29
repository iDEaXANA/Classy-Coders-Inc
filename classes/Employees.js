class Employees {
  #salary;
  #isHired;
  static allEmployees = [];
  constructor(name, title, salary, isHired) {
    this.name = name;
    this.title = title;
    this.#salary = salary;
    this.#isHired = isHired;
  }
  getSalary() {
    return this.#salary;
  }
  getStatus() {
    return this.#isHired;
  }

  setSalary(amount) {
    this.#salary = amount;
  }
  status(command) {
    if (command === "hire") {
      this.#isHired = true;
    } else if (command === "fire") {
      this.#isHired = false;
    }
  }
  static getEmployees() {
    return allEmployees;
  }
  static getTotalPayroll() {
    let totalSalary = 0;
    for (let i = 0; i < allEmployees.length; i++) {
      totalSalary += allEmployees[i].salary;
    }
    return totalSalary;
  }
}

module.exports = {
  Employees,
};
