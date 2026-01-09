import { Component } from '@angular/core';
import { Faq } from "../faq/faq";
import { Validators, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import { Router } from '@angular/router';

@Component({
  selector: 'app-freedemo',
  imports: [Faq, FormsModule, ReactiveFormsModule],
  templateUrl: './freedemo.html',
  styleUrl: './freedemo.css',
})
export class Freedemo {
demoForm:FormGroup;
isending = false
  constructor(private fb: FormBuilder, private router:Router) {
    this.demoForm = this.fb.group({
    name: ['', Validators.required],
    company: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(7)]],
    need: ['', Validators.required]
  });
  }
submit(): void {
    
  if (this.demoForm.invalid) {
      this.demoForm.markAllAsTouched();
      return;
    }
      this.isending =true

   emailjs.send(
      'service_zr6ml2l',
      'template_trxxff1',
      this.demoForm.value,
      '2rxwKTF0bQaZK3-jh'
    )
    .then(() => {
        this.isending =false
      this.router.navigate(['/thankyou'])
      alert('Demo request sent successfully!');
    
    })
    .catch(() => {
              this.isending =false
      alert('Failed to send message');
    });
  }
  }

