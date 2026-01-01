import { Component, OnInit } from '@angular/core';

import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
   nameMessage: string | null = null;
  constructor(private auth:AuthService,private router: Router){}
  ngOnInit(): void {
    const user = this.auth.getUserInfo();
    this.nameMessage=user?.name;
  }
   logout() {
    this.auth.logout();              // ✅ clear token
    this.router.navigate(['/login']); // ✅ redirect
  }
}
