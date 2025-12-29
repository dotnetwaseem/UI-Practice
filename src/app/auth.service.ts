import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private apiUrl = 'https://localhost:7291/api/Auth';
  constructor(private http: HttpClient) {}
  
  login(data: any) {
    return this.http.post<any>(`${this.apiUrl}/login`, data);
  }
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
  getDecodedToken(): any {
  const token = this.getToken();
  if (!token) return null;

  const payload = token.split('.')[1];
  const decodedPayload = atob(payload);
  return JSON.parse(decodedPayload);
}

getUserInfo() {
  const decoded = this.getDecodedToken();
  if (!decoded) return null;

  return {
    username: decoded.sub,     // JwtRegisteredClaimNames.Sub
    roleId: decoded.RoleId,
    empId: decoded.EmpId,
    name: decoded.Name
  };
}

}
