import { Component } from '@angular/core';
import { fadeInOutAnimation } from './animations/itemAnimation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[fadeInOutAnimation]
})

export class AppComponent {
  title = 'fadeInOutAnimation';
  items=['item 1','item 2','item 3','item 4','item 5','item 6','item 7'];


  deleteItem(i) {
    this.items.splice(i,1);
  }
  
}
