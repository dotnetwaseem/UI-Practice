import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { EmployeeService } from '../../service/employee.service';
import { Roles } from '../../models/Roles.model';

@Component({
  selector: 'app-addemployee',
  imports: [HeaderComponent],
  templateUrl: './addemployee.component.html',
  styleUrl: './addemployee.component.css'
})
export class AddemployeeComponent implements OnInit {
 roles: Roles[] = [];
 employeeCode = '';
  constructor(private employeeService:EmployeeService){}
  ngOnInit(): void {
    this.loadRoles();
    this.loadEmployeeCode()
  }
      loadRoles() {
        debugger;
        this.employeeService.getAllRoles().subscribe({
          next: (data) => {
          this.roles=data;
           console.log(this.roles);
           console.log(data);
          },
          error: (err) => {
            console.error('Error fetching roles', err);
          }
        });

        
}

 loadEmployeeCode() {
  debugger
    this.employeeService.getNextEmployeeCode().subscribe(code => {
      this.employeeCode = code;

    });
}
}
