import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

class Writer {
  constructor(
    public id: number,
    public writerName: string,
    public bookName: string,
    public price: number,
    public imageUrl: string | null
  ) { }
}

@Component({
  selector: 'app-writer-crud-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './writers-crud-list.component.html',
  styleUrls: ['./writers-crud-list.component.css']
})
export class WritersCRUDListComponent implements OnInit {
  Writers: Writer[] = [];
  w: Writer = new Writer(0, '', '', 0, null);
  isUpdate = false;
  imageUrl: string | ArrayBuffer | null = null;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state?.['writers']) {
      this.w = nav.extras.state['writers'];
      this.isUpdate = true;
    }
  }

  ngOnInit(): void {
    // Load writers from localStorage
    const savedWriters = JSON.parse(localStorage.getItem('writer') || '[]');
    if (savedWriters) {
      this.Writers = savedWriters;
    }
  }

  trackWriters(index: number, writer: Writer): number {
    return writer.id;
  }

  onSubmit(): void {
    let writers: Writer[] = JSON.parse(localStorage.getItem('writer') || '[]');

    if (this.isUpdate) {
      writers = writers.map((writer) => (writer.id === this.w.id ? this.w : writer));
    } else {
      // Ensure that the ID is unique by checking the existing writers
      this.w.id = writers.length ? Math.max(...writers.map(writer => writer.id)) + 1 : 1;
      writers.push(this.w);
    }

    // Store the updated list in localStorage
    localStorage.setItem('writer', JSON.stringify(writers));

    // Reset form data
    this.w = new Writer(0, '', '', 0, null);

    // Reload writers from localStorage
    this.Writers = writers;
  }

  DeleteWriter(writerToDelete: Writer): void {
    if (confirm('Are you sure you want to delete this writer?')) {
      // Remove the writer from the list
      this.Writers = this.Writers.filter(writer => writer !== writerToDelete);

      // Update localStorage with the new list of writers
      localStorage.setItem('writer', JSON.stringify(this.Writers));

      alert('Writer deleted successfully');
    }
  }

  onImageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Check if file is an image type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (allowedTypes.includes(file.type)) {
        this.w.imageUrl = URL.createObjectURL(file);
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
  }
}
