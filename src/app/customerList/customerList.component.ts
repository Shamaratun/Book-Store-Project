
    import { Component, OnInit } from '@angular/core';
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
      selector: 'app-customer-list',
      templateUrl: './customerlist.component.html',
      styleUrls: ['./customerlist.component.css']
    })
    export class CustomerListComponent implements OnInit {
      customers: Customer[] = [];  // Array for storing the list of customers
      customer: any;
    
      // Track function for optimizing the rendering of lists (with trackBy for performance)
      trackCustomer(index: number, customer: Customer): number {
        return customer.id;
      }
    
      constructor(private router: Router) { }
    
      ngOnInit(): void {
        // Retrieve customers from localStorage with the correct key and assign to customers array
        const customersFromStorage = JSON.parse(localStorage.getItem('customer') || '[]'); // Change 'customer' to match your storage key
        this.customers = customersFromStorage;
      }
    
      // Method to handle the edit of a customer
      editCustomer(customer: Customer): void {
        // Send the selected customer as state to navigate to the customer edit form
        this.router.navigate(['/customerCRUD'], { state: { customer: customer } });
      }
    
      // Method to handle the deletion of a customer
      deleteCustomer(customerToDelete: Customer): void {
        if (confirm('Are you sure you want to delete this customer?')) {
          // Remove the customer from the customers array by filtering out the customer
          this.customers = this.customers.filter(customer => customer !== customerToDelete);
    
          // Update localStorage with the new list of customers
          localStorage.setItem('customer', JSON.stringify(this.customers));  // Change 'customer' to match your storage key
    
          alert('Customer deleted successfully');
        }
      }
    }
    