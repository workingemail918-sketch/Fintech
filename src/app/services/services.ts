import { Component } from '@angular/core';
import { Servicesswiper } from "../servicesswiper/servicesswiper";
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [Servicesswiper],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
    constructor(private router:Router){
    }
 navigatee(){
this.router.navigate([`/contact-us`]).then(()=>{
    scrollTo(0,500)

})
  }
}
