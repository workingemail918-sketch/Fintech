import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thankyou',
  imports: [],
  templateUrl: './thankyou.html',
  styleUrl: './thankyou.css',
})
export class Thankyou implements OnInit{
  ngOnInit(): void {
    scrollTo(0,1)
  }

}
