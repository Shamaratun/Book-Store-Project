// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-customer',
//   imports: [],
//   templateUrl: './customer.component.html',
//   styleUrl: './customer.component.css'
// })

// export class CustomerComponent implements OnInit {
//   customers: Customer[] = [];
//   selectedCustomer: Customer | null = null;

//   constructor(private customerService: CustomerService) {}

//   ngOnInit(): void {
//     this.loadCustomers();
//   }

//   // Load customers from the API
//   loadCustomers(): void {
//     this.customerService.getCustomers().subscribe(
//       (data) => {
//         this.customers = data;
//       },
//       (error) => {
//         console.error('Error fetching customer data', error);
//       }
//     );
//   }

//   // Update customer
//   updateCustomer(customer: Customer): void {
//     this.selectedCustomer = { ...customer };
//     // Here you would open a modal or navigate to an edit page
//     console.log('Update customer', customer);
//   }

//   // Delete customer
//   deleteCustomer(id: number): void {
//     if (confirm('Are you sure you want to delete this customer?')) {
//       this.customerService.deleteCustomer(id).subscribe(
//         () => {
//           this.customers = this.customers.filter((customer) => customer.id !== id);
//         },
//         (error) => {
//           console.error('Error deleting customer', error);
//         }
//       );
//     }
//   }
// }

