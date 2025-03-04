import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { AdminComponent } from './admin/admin.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent, AdminComponent],
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
