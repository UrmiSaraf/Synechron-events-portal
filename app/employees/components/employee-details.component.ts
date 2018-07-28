import { Component, Input } from '@angular/core';

import { Employee } from "../models/employee";

@Component({
    selector: 'employee-details',
    templateUrl: '../views/employee-details.component.html'
})

export class EmployeeDetailsComponent {
    constructor() { }
    title: string = "Details of - ";
    @Input() employee: Employee;
}