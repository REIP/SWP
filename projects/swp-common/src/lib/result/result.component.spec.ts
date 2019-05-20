import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultComponent } from './result.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  CalendarModule,
  DropdownModule,
  AutoCompleteModule,
  OverlayPanelModule,
  AccordionModule
} from 'primeng/primeng';
import { TableModule } from 'primeng/table';


describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultComponent],
      imports: [
        TableModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

/*   it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
