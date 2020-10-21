import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GameApp';
  oddNumber : number[] =[];
  evenNumber : number[] =[];

  OnIntervalFired(displayNumber:number){
   if(displayNumber % 2 === 0){
     this.evenNumber.push(displayNumber);
   }
   else{
     this.oddNumber.push(displayNumber);
   }
  }
}
