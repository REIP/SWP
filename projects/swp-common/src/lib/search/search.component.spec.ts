import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  CalendarModule,
  DropdownModule,
  AutoCompleteModule,
  OverlayPanelModule,
  AccordionModule,
  Dropdown
} from 'primeng/primeng';
import { TableModule } from 'primeng/table';
// library
import { SwpServiceModule, PeopleService, PeopleServiceMock } from '@swp/service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [
        { provide: PeopleService, useClass: PeopleServiceMock }
      ],
      imports: [

        //Angular Modules
        ReactiveFormsModule,
        BrowserAnimationsModule,
        //PrimeNG Modules
        CalendarModule,
        DropdownModule,
        AutoCompleteModule,
        OverlayPanelModule,
        AccordionModule,


        //Service
        SwpServiceModule
      ],
      
    schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

/*    it('should create', () => {
    component.searchFormGroup.controls['gender'].setValue(component.listGender);
    fixture.detectChanges();
    let dropdwon = fixture.debugElement.query(By.directive(Dropdown));
    
    //dropdwon. selectItem(null, {label: '2', value: '2'});
    //dropdwon.onChange.emit({value: '2'});
    expect(component).toBeTruthy();
  });  */

  it('Entering value in input controls and emit output events', () => {

    const mockFirstName = {
      "name": "Luke Skywalker",
    };

    let user: any;
    //let firstNameEl: DebugElement = fixture.debugElement.query(By.css('p-autoComplete[id=txtFirstName]'));
    let submitEl: DebugElement = fixture.debugElement.query(By.css('p-button[id=btnSearchRequest]'));

    //firstNameEl.nativeElement.value = mockResponse;
    component.searchFormGroup.controls['firstName'].setValue(mockFirstName);
    
    // Subscribe to the Observable and store the user in a local variable.
    component.updateData.subscribe((value) => user = value);

    // This sync emits the event and the subscribe callback gets executed above
    submitEl.triggerEventHandler('click', null);
    // Now we can check to make sure the emitted value is correct
    expect(user[0].name).toBe("Luke Skywalker");
  });

});
