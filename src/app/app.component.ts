import { SearchService } from './search.service';
import { Component, EventEmitter } from '@angular/core';

@Component({
  // hier muss was zum Selektor
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Addressadministration';

  constructor(public search: SearchService) {
  }

  suchen() {
    this.search.searchChanged.emit(this.search.value);
  }
}
