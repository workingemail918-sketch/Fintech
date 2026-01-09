import { Component } from '@angular/core';
import { Service } from '../service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  constructor(private router:Router){

  }
     mobileMenuOpen = false;
ismenu = true

  scrolled = false
  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
 
toggleMenu() {
  this.ismenu = false  
  }
  navigatee(location:string){
this.router.navigate([`/${location}`]).then(()=>{
    scrollTo(0,1)

  this.ismenu = false
})
  }
}
