import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HeaderComponent } from "../header/header.component";
import { DashboardDetailsComponent } from "../dashboard-details/dashboard-details.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, DashboardDetailsComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(private auth: AuthService) {}
  ngOnInit(): void {
    const user = this.auth.getUserInfo();

  console.log(user?.name);
  console.log(user?.roleId);
  console.log(user?.empId);
  }

}
