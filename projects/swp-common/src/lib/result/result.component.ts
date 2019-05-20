import { Component, OnInit, Input } from '@angular/core';
import { People } from '@swp/service';


@Component({
  selector: 'swp-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input() resultSearchCriteria: People[];

  constructor() { }

  ngOnInit() {
  }

}
