
import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { Directionality } from '@angular/cdk/bidi';

export interface PeriodicElement {
  id: number,
  type: string;
  location: string;
  price: string;
  ticketNumber: string;
  cinemaName: string;
  personCount: number;
  purchaseFrequency: string;
  customer: {
    name: string,
    phoneNumber: string,
    avatar: string,
  };

}
const ticketData: PeriodicElement[] = [
  {
    id: 1,
    type: "cinema",
    location: "صيدناوي مول , برج العرب",
    price: "$40",
    ticketNumber: "C-101",
    cinemaName: "سينما مصر , مول العرب , برج الأطنان , سرايا القبة",
    personCount: 1,
    purchaseFrequency: "مرة واحدة",
    customer: {
      name: "أحمد محمود",
      phoneNumber: "0123456789",
      avatar: "https://via.placeholder.com/30x30",
    },
  },
  {
    id: 2,
    type: "cinema",
    location: "صيدناوي مول , برج العرب",
    price: "$30",
    ticketNumber: "C-102",
    cinemaName: "سينما مصر , مول العرب , برج الأطنان , سرايا القبة",
    personCount: 1,
    purchaseFrequency: "مرة واحدة",
    customer: {
      name: "محمد الغريب",
      phoneNumber: "0123456789",
      avatar: "https://via.placeholder.com/30x30",
    },
  },
  {
    id: 3,
    type: "cinema",
    location: "صيدناوي مول , برج العرب",
    price: "$45",
    ticketNumber: "C-102",
    cinemaName: "سينما مصر , مول العرب , برج الأطنان , سرايا القبة",
    personCount: 1,
    purchaseFrequency: "مرة واحدة",
    customer: {
      name: "محمد الغريب",
      phoneNumber: "0123456789",
      avatar: "https://via.placeholder.com/30x30",
    },
  },
  {
    id: 4,
    type: "cinema",
    location: "صيدناوي مول , برج العرب",
    price: "$54",
    ticketNumber: "C-103",
    cinemaName: "سينما مصر , مول العرب , برج الأطنان , سرايا القبة",
    personCount: 1,
    purchaseFrequency: "مرة واحدة",
    customer: {
      name: "محمد الغريب",
      phoneNumber: "0123456789",
      avatar: "https://via.placeholder.com/30x30",
    },
  },
  // Add more ticket data objects here...
];

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {
  @Input() isRtlLanguage?: boolean;

  displayedColumns: string[] = ["id",'user', 'ticketNumber', 'price', 'cinemaName', "personCount", "purchaseFrequency"];
dataSource : PeriodicElement[] = ticketData
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private dir: Directionality) {}

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
}




