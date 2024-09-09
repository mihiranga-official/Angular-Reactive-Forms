import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { group } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  myForm!: FormGroup

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['Janith', Validators.required],
      email: ['',[Validators.required,Validators.email]],
      message: ['',[Validators.required,Validators.minLength(5)]]
    });
  }

  onSubmit(form: FormGroup) {
    console.log('valid?', form.valid);
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);

  }
}
