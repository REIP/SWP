import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SelectItem, DataTable } from 'primeng/primeng';
import { Gender } from '../util/constants';
import { PeopleService, Header, People } from '@swp/service';

// library

@Component({
  selector: 'swp-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchFormGroup: FormGroup;
  public listGender: SelectItem[];
  public filteredFirstNameSingle: any[];
  public result: People[] = [];

  @Output() updateData: EventEmitter<People[]> = new EventEmitter();
  
  submitted = false;
  constructor(private fb: FormBuilder,
    private peopleService: PeopleService
  ) {
    this.buildFormGroup();
    this.listGender = [];
  }

  ngOnInit() {
    this.listGender.length = 0;
    this.fillGender();
  }

  private buildFormGroup() {
    this.searchFormGroup = this.fb.group({
      firstName: ['', Validators.required],
      gender: [''],
      created: ['']
    });
  }

  private fillGender(): void {
    this.listGender.push({
      label:
        (<HTMLInputElement>document.getElementById('NONE')).value, value: Gender.NONE
    });
    this.listGender.push({
      label:
        (<HTMLInputElement>document.getElementById('FEMALE')).value, value: Gender.FEMALE
    });
    this.listGender.push({
      label:
        (<HTMLInputElement>document.getElementById('MALE')).value, value: Gender.MALE
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.searchFormGroup.controls; }

  public onReset(): void {
    this.submitted = false;
    this.searchFormGroup.reset();
  }

  public onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.searchFormGroup.invalid) {
      return;
    }

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.searchFormGroup.value));


    this.peopleService.getPeople()
    .subscribe(data => { this.getListNamesByFilter(data) });

  }

  filterFirstNameSingle(event) {

    this.peopleService.getPeople()
      .subscribe(data => { this.getListNames(data, event) });
  }

  getListNames(data: Header, event: any) {
    var list: any[] = [];
    data.results.forEach(people => {
      if (people.name.toLowerCase().includes(event.query.toLowerCase())) {
        list.push(people);
      }
    });

    this.filteredFirstNameSingle = list;
  }

  getListNamesByFilter(data: Header) {
    var list: any[] = [];
    data.results.forEach(people => {
      if (people.name === this.searchFormGroup.controls['firstName'].value.name) {
        list.push(people);
      }
    });
    this.result = list;
    this.updateData.emit(this.result)
  }
}
