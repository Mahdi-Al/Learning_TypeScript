class Department {

name: string;
employees: string[] = [];

    constructor(n: string) {

        
    }
    addEmployee(employees:string){
      this.employees.push(employees)
    }
    printEmployee() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}