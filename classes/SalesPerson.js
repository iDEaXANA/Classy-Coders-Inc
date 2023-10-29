const Employees = require("./Employees");
class SalesPerson extends Employees {
  #totalSales;
  constructor(name, title, salary, isHired, clients, totalSales = 0) {
    super(name, title, salary, isHired);
    this.clients = clients;
    this.#totalSales = totalSales;
  }
  getSalesNumbers() {
    return this.#totalSales;
  }
  makeSale(amount) {
    this.#totalSales = amount;
  }
}

module.exports = {
  SalesPerson,
};
