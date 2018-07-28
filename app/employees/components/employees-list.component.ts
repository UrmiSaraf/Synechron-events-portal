import { Component } from '@angular/core';

import { Employee } from "../models/employee";
import { ENGINE_METHOD_CIPHERS } from 'constants';

@Component({
    selector: 'employees-list',
    templateUrl: '../views/employees-list.component.html'
})

export class EmployeesListComponent {
    constructor() { }
    title: string = "Synechron Employees List!";
    subTitle: string = "Core Development Team!";
    selectedEmployee: Employee;
    onEmployeeSelection(emp: Employee): void {
        this.selectedEmployee = emp;
        console.log(this.selectedEmployee);
    }
    synechronEmployees: Employee[] = [
        {
            employeeId: 2378,
            employeeName: "Pravinkumar R. D.",
            address: "Suncity A8/404",
            city: "Pune",
            email: "pravin@gmail.com",
            phone: "+91 2372837",
            avatar: "images/noimage.png"
        },
        {
            employeeId: 2379,
            employeeName: "Manish Kaushik",
            address: "Mooncity A8/404",
            city: "Raipur",
            email: "manish@gmail.com",
            phone: "+91 3483984",
            avatar: "images/noimage.png"
        },
        {
            employeeId: 2380,
            employeeName: "John Mark",
            address: "Redcity A8/404",
            city: "Lonson",
            email: "johnm@gmail.com",
            phone: "+231 3849349",
            avatar: "images/noimage.png"
        },
        {
            employeeId: 2381,
            employeeName: "Maria Andrus",
            address: "Greencity A8/404",
            city: "Berlin",
            email: "maria@gmail.com",
            phone: "+478 3849348",
            avatar: "images/noimage.png"
        },
    ];
}