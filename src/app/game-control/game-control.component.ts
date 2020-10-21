import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  @Output() IntervalFired = new EventEmitter<number>();
  i=0;

  constructor() { }

  ngOnInit(): void {
  }

  start(){
   this.interval = setInterval(()=>{this.IntervalFired.emit(this.i+1);this.i++},1000)
  };

  end(){
    clearInterval(this.interval);
  }

}
