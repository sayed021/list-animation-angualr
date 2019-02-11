import { Component, OnInit } from '@angular/core';
import { ListAnimation } from './../animations/itemAnimation';

@Component({
  selector: 'app-another-list',
  templateUrl: './another-list.component.html',
  styleUrls: ['./another-list.component.scss'],
  animations:[ListAnimation]
})
export class AnotherListComponent implements OnInit {

  constructor() { }
  showitem=false;

  Listitems=['item 1','item 2','item 3','item 4','item 5','item 6','item 7'];



  ngOnInit() {
    
  }

  showToggle() {
    this.showitem= this.showitem ? false:true;
  }

  deleteItem(i) {
    this.Listitems.splice(i,1);
  }

}
