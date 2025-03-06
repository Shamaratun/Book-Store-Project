import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

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
  imports: [RouterModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit   {
  customers: Customer[] = [];  // Array for storing the list of customers
  customer: any;

  // Track function for optimizing the rendering of lists (with trackBy for performance)
  trackCustomer(index: number, customer: Customer): number {
    return customer.id;
  }

  constructor(private router: Router) { }

  ngOnInit() {
   
    const customersFromStorage = JSON.parse(localStorage.getItem('customer') || '[]'); // Change 'customer' to match your storage key
    this.customers = customersFromStorage;
  }

  
  editCustomer(customer: Customer){

    this.router.navigate(['/customerCRUD'], { state: { customer: customer } });
  }

  deleteCustomer(customerToDelete: Customer){
    if (confirm('Are you sure you want to delete this customer?')) {
      
      this.customers = this.customers.filter(customer => customer !== customerToDelete);

    
      localStorage.setItem('customer', JSON.stringify(this.customers));  // Change 'customer' to match your storage key

      alert('Customer deleted successfully');
    }
  }
}




