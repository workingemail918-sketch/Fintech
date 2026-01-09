import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
contactForm:FormGroup;
  constructor(private fb: FormBuilder, private router:Router) {
    this.contactForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    company: ['', Validators.required],
    service: ['', Validators.required],
    need: ['', Validators.required]
  });

  }

  submit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    
    emailjs.send(
      'service_zr6ml2l',
      'template_9i31pao',
      this.contactForm.value,
      '2rxwKTF0bQaZK3-jh'
    )

    .then(() => {
    this.router.navigate(['/thankyou'])
    alert('Demo request sent successfully!');
  
  })
  .catch(() => {
    alert('Failed to send message');
  });


  }


}
