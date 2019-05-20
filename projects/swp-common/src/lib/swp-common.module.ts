import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
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
import { ResultComponent } from './result/result.component';

// library
import { SwpServiceModule } from '@swp/service';

@NgModule({
  declarations: [SearchComponent, ResultComponent],
  imports: [

    //Angular Modules
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    //PrimeNG Modules
    CalendarModule,
    DropdownModule,
    AutoCompleteModule,
    OverlayPanelModule,
    AccordionModule,
    TableModule,

    //Service
    SwpServiceModule
  ],
  exports: [SearchComponent, ResultComponent]
})
export class SwpCommonModule { }
