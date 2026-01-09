import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {

  openItem: number | null = null;

  toggle(item: number): void {
    this.openItem = this.openItem === item ? null : item;
  }

  isOpen(item: number): boolean {
    return this.openItem === item;
  }
}
