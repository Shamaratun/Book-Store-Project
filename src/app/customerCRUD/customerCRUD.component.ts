import { NgClass } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Customer {
  id: number;
  name: string;
  email: string;
  nid: number;
  phone: string;
  address: string;
}

@Component({
  selector: 'app-customer-crud',
  imports:[FormsModule],
  templateUrl: './customerCRUD.component.html',
  styleUrls: ['./customerCRUD.component.css']
})
export class CustomerCrudComponent implements OnInit {
  customer: Customer = { id: 0, name: '', email: '', nid: 0, phone: '', address: '' };
  isUpdate: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // If there is a customer object passed in the state, we populate it for updating
    const navigationState = this.router.getCurrentNavigation()?.extras.state;
    if (navigationState && navigationState['customer']) {
      this.customer = navigationState['customer'];
      this.isUpdate = true; // Set flag to true if we're editing an existing customer
    }
  }

  onSubmit(): void {
    // Here you can either add a new customer or update an existing one
    if (this.isUpdate) {
      // Update logic
      alert('Customer updated successfully');
    } else {
      // Add new customer logic
      alert('Customer added successfully');
    }

    // You may want to save the customer to localStorage or an API at this point
    // Example: localStorage.setItem('customers', JSON.stringify([...customersList, this.customer]));
  }
}
