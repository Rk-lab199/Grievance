import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-grievance-form',
  templateUrl: './grievance-form.component.html',
})
export class GrievanceFormComponent implements OnInit {
  grievanceForm!: FormGroup;
  fullName: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.fullName = user.name || '';

    this.grievanceForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      bothering: ['', [Validators.required, Validators.minLength(10)]],
      mood: ['', Validators.required],
      severity: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.grievanceForm.valid) {
      const formData = this.grievanceForm.value;

      // ✅ Include fullName in templateParams
      const templateParams = {
        fullName: this.fullName,
        title: formData.title,
        bothering: formData.bothering,
        mood: formData.mood,
        severity: formData.severity,
      };

      emailjs.send(
        'service_7d1nhxo',     // Your EmailJS service ID
        'template_q9yih01',    // Your EmailJS template ID
        templateParams,
        'MVojAQuzdLtVt68I2'    // Your EmailJS public key
      )
      .then(() => {
        this.toastr.success('Grievance submitted successfully!', 'Success');
        this.router.navigate(['/thank-you']);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        this.toastr.error('Failed to send grievance email.', 'Error');
      });

    } else {
      this.grievanceForm.markAllAsTouched();
      this.toastr.error('Please fill out the form correctly.', 'Validation Error');
    }
  }
}
