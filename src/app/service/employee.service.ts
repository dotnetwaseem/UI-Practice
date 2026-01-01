import { Roles } from './../models/Roles.model';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 private apiUrl = 'https://localhost:7291/api/employees';
 private http = inject(HttpClient); 

    // ✅ Fetch all roles
  getAllRoles(): Observable<Roles[]> {
    return this.http
      // .get<ApiResponse<Roles[]>>(this.apiUrl)
       .get<ApiResponse<Roles[]>>(`${this.apiUrl}/roles`)
      .pipe(
        map((response: { data: any; }) => response.data) // 👈 extract only data
      );
  }

   // 🔹 Get next employee code
  // getNextEmployeeCode() {
  //   return this.http.get<string>(`${this.apiUrl}/next-code`);
  // }
  getNextEmployeeCode() {
  return this.http.get(`${this.apiUrl}/next-code`,
    { responseType: 'text' }   
  );
}

}
