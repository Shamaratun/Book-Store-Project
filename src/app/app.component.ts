import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { AdminComponent } from './adminP/adminHeader/admin.component';
import { CustomerCrudComponent } from './customerCRUD/customerCRUD.component';
import { FormsModule } from '@angular/forms';
// import { NgModule } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent, AdminComponent, CustomerCrudComponent,FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bookstore';
}
  export class Book {
    id:number;
    title:string;
    author:string;
    genre:string;
    publisher:string;
    publicationDate:Date;
    price:number; 
    targetAudience:string;
    
  
  
    constructor(id:number,title:string,author:string,genre:string,publisher:string,publicationDate:Date,price:number,targetAudience:string) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.genre = genre;
      this.publisher = publisher;
      this.publicationDate = publicationDate;
      this.price = price;
      this.targetAudience = targetAudience;
  
    }}
