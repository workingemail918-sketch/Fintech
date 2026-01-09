import { Component, HostListener } from '@angular/core';
import { Menu } from "../menu/menu";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [Menu, RouterLinkActive, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

    mobileMenuOpen = false;
  scrolled = false
  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
   @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 80;
  }
  ismenu = false
toggleMenu() {
  this.ismenu = !this.ismenu
  if (!this.ismenu) {
    setTimeout(() => {
          this.tryagain()
    }, 100);
  }
  console.log(this.ismenu);
  
  }
tryagain(){
  this.ismenu = true
}
}
