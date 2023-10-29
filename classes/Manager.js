const { Employees } = require("./Employees");

class Manager extends Employees {
  #employeesManaged;
  constructor(name, title, salary, isHired, department, employeesManaged = []) {
    super(name, title, salary, isHired);
    this.department = department;
    this.#employeesManaged = employeesManaged;
  }

  getEmployeesManaged() {
    return this.#employeesManaged;
  }

  setEmployeesManaged(employee) {
    this.#employeesManaged = employee;
  }
}

module.exports = {
  Manager,
};
