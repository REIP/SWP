import { Component } from '@angular/core';
import { PeopleService, Header, People } from '@swp/service';

@Component({
  selector: 'home-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'home';
  public resultSearchCriteria: People[];

  public onUpdateData(resultSearchCriteria: People[]) {
    this.resultSearchCriteria = resultSearchCriteria;
  }
}
