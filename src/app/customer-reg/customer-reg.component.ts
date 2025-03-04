import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer-reg.component.html',
  styleUrls: ['./customer-reg.component.css'],
})
export class CustomerRegComponent {
  // Initialize the form fields
  formData = {
    username: '',
    email: '',
    password: '',
  };

  // Flags for form validation errors
  errorMessages = {
    username: '',
    email: '',
    password: '',
  };

  constructor() {}

  // Handle form submission
  onSubmit(): void {
    // Clear previous error messages
    this.clearErrorMessages();

    // Perform basic client-side validation
    let isValid = true;

    // Validate username
    if (!this.formData.username) {
      this.errorMessages.username = 'Username is required';
      isValid = false;
    }

    // Validate email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!this.formData.email) {
      this.errorMessages.email = 'Email is required';
      isValid = false;
    } else if (!emailPattern.test(this.formData.email)) {
      this.errorMessages.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Validate password
    if (!this.formData.password) {
      this.errorMessages.password = 'Password is required';
      isValid = false;
    } else if (this.formData.password.length < 6) {
      this.errorMessages.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    // If form is valid, submit the data
    if (isValid) {
      console.log('Form submitted successfully!', this.formData);
      // Here you can make an API call to submit the form data, e.g., using a service
    } else {
      console.log('Form is invalid');
    }
  }

  // Clear all error messages
  clearErrorMessages(): void {
    this.errorMessages.username = '';
    this.errorMessages.email = '';
    this.errorMessages.password = '';
  }
}
