import { Component, HostListener } from '@angular/core';
import { Freedemo } from "../freedemo/freedemo";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [Freedemo,RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

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
  }
}
