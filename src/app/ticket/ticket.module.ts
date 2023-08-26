import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowTicketComponent } from './components/show-ticket/show-ticket.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TranslateModule } from '@ngx-translate/core';
import { TableComponent } from './components/table/table.component';

import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { TableModule } from 'primeng/table';
import { ChartComponent } from './components/chart/chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    ShowTicketComponent,
    TableComponent,
    TooltipComponent,
    ChartComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    TableModule,
    NgxChartsModule,

  ],
  exports: [
    ShowTicketComponent,
    TableComponent,
    TooltipComponent,
    ChartComponent
  ]
})
export class TicketModule {
  imageSrc = '../../../../assets/images/';
}
