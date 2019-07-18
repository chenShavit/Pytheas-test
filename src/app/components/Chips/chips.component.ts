import {Component} from '@angular/core';
import {TripService} from './../../trip.service';
/**
 * @title Chips with input
 */
@Component({
  selector: 'chips',
  templateUrl: 'chips.component.html',
  styleUrls: ['chips.component.scss']
})
export class ChipsComponent {
  selectable: boolean = true;
lenChipsRow:number;
tags:any;
  constructor( public tripService:TripService) {
    this.tripService.getTags();
   
  }

  ngOnInit() {
  }
  selectedpreferences: any[] = [];
  isSelected(pre: any): boolean {
    this.tripService.selectedTags.push(pre);
    return pre.isClicked = !pre.isClicked;
  }
  
}