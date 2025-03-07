import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer-reg.component.html',
  styleUrls: ['./customer-reg.component.css'],
})
export class CustomerRegComponent {
  customer: any;
  Register(customer: any): void {
    if (confirm('Are you sure you want toregister as customer?')) {
  
  }
  alert(customer + " registered as customer");
  }
  }

