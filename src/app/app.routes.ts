import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book/booklist/booklist.component'; // Import your BookList component
import { HeaderComponent } from './header/header.component'; // Import your Header component
import { BookCRUDComponent } from './book/book-crud/book-crud.component';
import { CustomerRegComponent } from './customer-reg/customer-reg.component';
import { AdminComponent } from './admin/admin.component';


export const routes: Routes = [
  { path: 'header', component: HeaderComponent },  // You can set the default route to display the header
  { path: 'booklist', component: BookListComponent },  // Path for the BookList component
  { path: 'bookCRUD', component: BookCRUDComponent },  // Path for the BookCRUD component
   { path: 'customer-reg', component: CustomerRegComponent },  // Path for the CustomerReg component
   { path: 'admin', component: AdminComponent },
];


