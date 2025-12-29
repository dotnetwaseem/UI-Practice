import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoragePocComponent } from "./storage-poc/storage-poc.component";
import { LoginComponent } from "./login/login.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'storage-poc';
}
