import { Component } from '@angular/core'

@Component({
    selector: 'my-employee',
    templateUrl:'app/employee/employee.component.html'
})
export class EmployeeComponent {
    firstName: string = 'Tom';
    lastName: string = 'Black';
    gender: string = 'meil';
    age:number=20
}