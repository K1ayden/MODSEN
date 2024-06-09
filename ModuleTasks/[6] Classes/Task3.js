class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    calculateAnnualSalary() {
      return this.salary * 12;
    }
  }
  
  class Manager extends Employee {
    constructor(name, salary, department) {
      super(name, salary);
      this.department = department;
    }
  
    calculateAnnualSalary() {
      const baseSalary = super.calculateAnnualSalary();
      const bonus = this.salary * 0.1; // 10% бонус
      return baseSalary + bonus;
    }
  }
  
  const manager1 = new Manager("Иван", 50000, "Маркетинг");
  const manager2 = new Manager("Мария", 60000, "Продажи");
  
  const annualSalary1 = manager1.calculateAnnualSalary();
  const annualSalary2 = manager2.calculateAnnualSalary();
  
  console.log(`Годовая зарплата Ивана: ${annualSalary1}`);
  console.log(`Годовая зарплата Марии: ${annualSalary2}`);
  