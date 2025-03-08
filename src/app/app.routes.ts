import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book/booklist/booklist.component'; // Import your BookList component
import { HeaderComponent } from './header/header.component'; // Import your Header component
import { BookCRUDComponent } from './book/book-crud/book-crud.component';
import { CustomerRegComponent } from './customer-reg/customer-reg.component';
import { AdminComponent } from './adminP/adminHeader/admin.component';
import { SorryComponent } from './message/sorry/sorry.component';
import { NotFoundComponent } from './message/not-found/not-found.component';
import { InvalidComponent } from './message/invalid/invalid.component';
import { SuccessComponent } from './message/success/success.component';
import { RegFormComponent } from './adminP/reg-form/reg-form.component';
import { CustomerListComponent } from './Customer/customer-list/customer-list.component';
import { CustomerCrudComponent } from './customerCRUD/customerCRUD.component';
import { CatagoryCRUDListComponent } from './book/catagory-crud-list/catagory-crud-list.component';
import { DashboardComponent } from './header/dashboard/dashboard.component';
import { IslamiBooklistComponent } from './book/islami-booklist/islami-booklist.component';
import { CustomerHeaderComponent } from './Customer/customer-header/customer-header.component';
import { WritersCRUDListComponent } from './book/writers-crud-list/writers-crud-list.component';
import { BookItemsComponent } from './book/book-items/book-items.component';

export const routes: Routes = [
  { path: 'header', component: HeaderComponent },  // You can set the default route to display the header
  { path: 'booklist', component: BookListComponent },  // Path for the BookList component
  { path: 'bookCRUD', component: BookCRUDComponent },  // Path for the BookCRUD component
  { path: 'customer-reg', component: CustomerRegComponent },
  {path: 'customerCRUD', component: CustomerCrudComponent},
  { path: 'customerListComponent', component: CustomerListComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'invalid', component: InvalidComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'sorry', component: SorryComponent },
  { path: 'category-crud-list', component: CatagoryCRUDListComponent },

   { path: 'dashboard', component: DashboardComponent },
   { path: 'islami-booklist', component: IslamiBooklistComponent },
   { path: 'customer-header', component: CustomerHeaderComponent },
  { path: 'writers-crud-list', component: WritersCRUDListComponent },
   { path: 'book-items', component: BookItemsComponent },
  // { path: 'sorry', component: SorryComponent },
  // { path: 'book-category', component: BookCategoryComponent },
  { path: 'reg-form', component: RegFormComponent },

    { path: 'admin', component: AdminComponent },

];


