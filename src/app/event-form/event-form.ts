import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.html',
  imports: [ReactiveFormsModule, CommonModule]
})
export class EventFormComponent {
  private formBuilder = inject(FormBuilder);
  eventForm = this.formBuilder.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$')
    ]],
    eventName: ['', Validators.required],
    eventDate: ['', Validators.required],
    terms: [false, Validators.requiredTrue]
  });

  onSubmit() {
    return
  }
}