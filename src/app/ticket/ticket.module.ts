import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowTicketComponent } from './components/show-ticket/show-ticket.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    ShowTicketComponent,
  ],
  imports: [
    CommonModule,
    TooltipComponent,
    TranslateModule.forChild(),

  ],
  exports: [
    ShowTicketComponent
  ]
})
export class TicketModule {
  imageSrc = '../../../../assets/images/';
}
