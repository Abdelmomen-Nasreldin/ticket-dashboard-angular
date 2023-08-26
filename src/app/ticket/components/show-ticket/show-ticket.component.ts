import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-show-ticket',
  templateUrl: './show-ticket.component.html',
  styleUrls: ['./show-ticket.component.scss'],
})
export class ShowTicketComponent {
  @Input() isRtlLanguage?: boolean;
}
