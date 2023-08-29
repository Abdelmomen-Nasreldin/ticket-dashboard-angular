import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowTicketComponent } from './components/show-ticket/show-ticket.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TranslateModule } from '@ngx-translate/core';
import { TableComponent } from './components/table/table.component';

import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

// import { TableModule } from 'primeng/table';
import { ChartComponent } from './components/chart/chart.component';
import { AreaChartModule  , LineChartModule, NgxChartsModule } from '@swimlane/ngx-charts';
import { PaginatorComponent } from './components/paginator/paginator.component';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {  MatSelectModule } from '@angular/material/select';
import {  MatOptionModule } from '@angular/material/core';

@NgModule({
  declarations: [
    ShowTicketComponent,
    TableComponent,
    TooltipComponent,
    ChartComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    NgxChartsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    AreaChartModule
  ],
  exports: [
    ShowTicketComponent,
    TableComponent,
    TooltipComponent,
    ChartComponent
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TicketModule {
  imageSrc = '../../../../assets/images/';
}
