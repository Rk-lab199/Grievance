import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onRegister(): void {
    if (this.registerForm.valid) {
      const { name, email, password } = this.registerForm.value;
      const user = { name, email, password };

      // Save user to localStorage
      localStorage.setItem('user', JSON.stringify(user));

      this.toastr.success('Registration successful!', 'Success');
      this.router.navigate(['/login']);
    } else {
      this.toastr.error('Please fill out the form correctly.', 'Error');
    }
  }
}

