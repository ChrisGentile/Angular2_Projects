"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Employee Database';
        this.employees = EMPLOYEES;
    }
    AppComponent.prototype.onSelect = function (employee) {
        this.selectedEmployee = employee;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"container\">\n        <h1>{{title}}</h1>\n        \n        <ul class=\"employees\">\n            <li *ngFor=\"let employee of employees\" (click)=\"onSelect(employee)\">\n             <span class=\"badge\">{{employee.id}}</span> {{employee.name}}\n            </li> \n        </ul>\n     </div>\n       <div *ngIf=\"selectedEmployee\">\n            <div class=\"hiddenContainer\">\n                \n                <strong>Name:</strong> {{selectedEmployee.name}}<br>\n                <strong>Job title:</strong> {{selectedEmployee.jobTitle}}<br>\n                <strong>Team:</strong> {{selectedEmployee.team}}<br>\n            \n            </div>\n            \n        </div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var Employee = (function () {
    function Employee() {
    }
    return Employee;
}());
exports.Employee = Employee;
var EMPLOYEES = [
    { id: 1, name: "Dmitri Farafonov", jobTitle: "IT Enterprise Architect", team: "NSA" },
    { id: 2, name: "Ravi Vemula", jobTitle: "IT Enterprise Architect", team: "NSA" },
    { id: 3, name: "Olga", jobTitle: "Senior Developer", team: "NSA" },
    { id: 2, name: "Ravi Vemula", jobTitle: "IT Enterprise Architect", team: "NSA" }
];
//# sourceMappingURL=app.component.js.map