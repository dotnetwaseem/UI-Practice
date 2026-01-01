import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
 errorMessage: string | null = null;
  constructor(private auth: AuthService,  private router: Router) {}

  ngOnInit(): void {
   // alert("test")
  }
login() {
  const loginData = {
    username: this.username,
    password: this.password
  };

  this.auth.login(loginData).subscribe({
    next: (res) => {
      this.auth.saveToken(res.token);

      // ✅ Clear error if any
      this.errorMessage = null;

      // ✅ Redirect to dashboard
      this.router.navigate(['/dashboard']);
    },
    error: (err) => {
      // Backend message: "Invalid username or password."
      this.errorMessage = err.error;
    }
  });
}

 logout() {
    this.auth.logout();              // ✅ clear token
    this.router.navigate(['/login']); // ✅ redirect
  }

}
