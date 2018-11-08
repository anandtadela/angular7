import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges {
  @Input() rating:number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  starWidth:number;
  ngOnChanges():void {
    this.starWidth = (this.rating*92)/5;
  }
  onClick(): void {
    this.ratingClicked.emit(`${this.rating}`);
  }
  ngOnInit() {
  }

}
