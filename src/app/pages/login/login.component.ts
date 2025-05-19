import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router, private toastr: ToastrService) {}

  onSubmit() {
    const storedUser = localStorage.getItem('user');

    if (!storedUser) {
      this.toastr.error('No registered user found. Please register first.', 'Login Failed');
      return;
    }

    const user = JSON.parse(storedUser);

    if (this.username === user.email && this.password === user.password) {
      this.toastr.success('Login successful!', 'Welcome');
      this.router.navigate(['/grievance']);
    } else {
      this.toastr.error('Invalid credentials. Please try again.', 'Login Failed');
    }
  }
}

