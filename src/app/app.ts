import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EventFormComponent } from "./event-form/event-form";

@Component({
  selector: 'app-root',
  imports: [EventFormComponent],
  template: '<app-event-form></app-event-form>',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
