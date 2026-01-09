import { Component } from '@angular/core';
import { Faq } from "../faq/faq";
import { Meetteam } from "../meetteam/meetteam";

@Component({
  selector: 'app-about',
  imports: [Faq, Meetteam],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
