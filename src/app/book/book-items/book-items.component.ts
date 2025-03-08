import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-items',
  imports: [FormsModule, CommonModule],
  templateUrl: './book-items.component.html',
  styleUrl: './book-items.component.css'
})
export class BookItemsComponent implements OnInit {
    editWriter(writer: Writer): void {
        // Navigate to the writer CRUD form with the selected writer's data for editing
        this.router.navigate(['/book-items'], { state: { writer } });
      }
      
      deleteWriter(writerToDelete: Writer): void {
        if (confirm('Are you sure you want to delete this writer?')) {
          // Remove the writer from the list
          this.writers = this.writers.filter(writer => writer !== writerToDelete);
      
          // Update localStorage with the new list of writers
          localStorage.setItem('writers', JSON.stringify(this.writers));
      
          alert('Writer deleted successfully');
        }
      }
      
  writer: Writer = new Writer(0, '', '', 0, null);
  isUpdate = false;
  imageUrl: string | ArrayBuffer | null = null;
  writers: Writer[] = [];

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state?.['writer']) {
      this.writer = nav.extras.state['writer'];
      this.isUpdate = true;
    }
  }

  ngOnInit(): void {
    // Load writers from localStorage
    const savedWriters = localStorage.getItem('writers');
    if (savedWriters) {
      this.writers = JSON.parse(savedWriters);
    }
  }

  onSubmit() {
    let writers: Writer[] = JSON.parse(localStorage.getItem('writer') || '[]');

    if (this.isUpdate) {
      writers = writers.map((w) => (w.id === this.writer.id ? this.writer : w));
    } else {
      // Ensure that the ID is unique by checking the existing writers
      this.writer.id = writers.length ? Math.max(...writers.map(w => w.id)) + 1 : 1;
      writers.push(this.writer);
    }

    // Store the updated list in localStorage
    localStorage.setItem('writer', JSON.stringify(writers));

    // Reset form data
    this.writer = new Writer(0, '', '', 0, null);

    // Reload writers from localStorage
    this.writers = writers;
  }

  // Handle image file selection
  onImageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Check if file is an image type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (allowedTypes.includes(file.type)) {
        this.writer.imageUrl = file;
        const reader = new FileReader();
        reader.onload = () => {
          this.imageUrl = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        alert('Only image files are allowed!');
      }
    }
  }

AddToCart(writer: Writer): void {
  let cart: Writer[] = JSON.parse(localStorage.getItem('cart') || '[]');

  // Check if the writer's book is already in the cart
  const existingItem = cart.find(item => item.id === writer.id);
  if (existingItem) {
    alert('This book is already in your cart.');
    return;
  }

  cart.push(writer);
  localStorage.setItem('cart', JSON.stringify(cart));

  alert(`${writer.bookName} has been added to the cart.`);
}

DetailsOfBook(writer: Writer): void {
  this.router.navigate(['/book-details'], { state: { writer } });
}}
class Writer {
    constructor(
      public id: number,
      public writerName: string,
      public bookName: string,
      public price: number,
      public imageUrl: string | null
    ) { }
   
}