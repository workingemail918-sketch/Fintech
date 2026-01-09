import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./footer/footer";
import { Navbar } from "./navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hmspj');
    scrolled = false

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 80;
  }
  backto(){
    console.log('click');
    
    scrollTo(0,1)
  }
}
