import { Component } from '@angular/core';



@Component({
  selector: 'my-app',
  template: `
    <div class="container">
        <h1>{{title}}</h1>
        
        <ul class="employees">
            <li *ngFor="let employee of employees" (click)="onSelect(employee)">
             <span class="badge">{{employee.id}}</span> {{employee.name}}
            </li> 
        </ul>
     </div>
       <div *ngIf="selectedEmployee">
            <div class="hiddenContainer">
                
                <strong>Name:</strong> {{selectedEmployee.name}}<br>
                <strong>Job title:</strong> {{selectedEmployee.jobTitle}}<br>
                <strong>Team:</strong> {{selectedEmployee.team}}<br>
            
            </div>
            
        </div>
`

})
export class AppComponent {
  title = 'Employee Database';
  public employees = EMPLOYEES;
  selectedEmployee: Employee;
  onSelect(employee : Employee){
    this.selectedEmployee = employee;
  }
}

export class Employee{
  id: number;
  name: string;
  jobTitle: string;
  team: string;


}

const EMPLOYEES : Employee[] = [
  {id: 1, name: "Dmitri Farafonov", jobTitle : "IT Enterprise Architect", team: "NSA"},
  {id: 2, name: "Ravi Vemula", jobTitle : "IT Enterprise Architect", team: "NSA"},
  {id: 3, name: "Olga", jobTitle : "Senior Developer", team: "NSA"},
  {id: 2, name: "Ravi Vemula", jobTitle : "IT Enterprise Architect", team: "NSA"}
];


