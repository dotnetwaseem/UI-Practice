import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-storage-poc',
  imports: [FormsModule],
  templateUrl: './storage-poc.component.html',
  styleUrl: './storage-poc.component.css'
})
export class StoragePocComponent {
 userName = '';
  result = '';
  saveLocal() {
    localStorage.setItem('name', this.userName);
  }
  saveSession() {
    sessionStorage.setItem('name', this.userName);
  }

  readLocal() {
    this.result = localStorage.getItem('name') || '';
  }

  readSession() {
    this.result = sessionStorage.getItem('name') || '';
  }
}
