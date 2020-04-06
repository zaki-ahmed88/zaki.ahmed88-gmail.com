import { Component, Input } from '@angular/core';
import { EmployeeService } from './Service/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-task';



  employees: Array<EmployeeService> = new Array();
  
  constructor(public employee: EmployeeService){};

  
  addEmployee()
  {
    
    this.employee = new EmployeeService();
    this.employees.push(this.employee);
    console.log(this.employees);

  }

  deleteEmployee(employee: EmployeeService)
  {
    this.employees.splice(this.employees.indexOf(this.employee), 1);
  }



}
