import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
 constructor(private router:Router){

 }
  navigatee(location:string){
    
this.router.navigate([`/${location}`]).then(()=>{
  scrollTo(0,1)
})
  }
}
