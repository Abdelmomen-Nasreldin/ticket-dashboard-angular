import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Directionality } from '@angular/cdk/bidi';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  id: number;
  type: string;
  location: string;
  price: string;
  ticketNumber: string;
  cinemaName: string;
  personCount: number;
  purchaseFrequency: string;
  customer: {
    name: string;
    phoneNumber: string;
    avatar: string;
  };
  ticket: string
}
const ticketData: PeriodicElement[] = [
  {
    id: 1,
    type: 'cinema',
    location: 'صيدناوي مول , برج العرب',
    price: '$40',
    ticketNumber: 'C-101',
    cinemaName: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
    personCount: 1,
    purchaseFrequency: 'مرة واحدة',
    customer: {
      name: 'أحمد محمود',
      phoneNumber: '0123456789',
      avatar: 'https://via.placeholder.com/30x30',
    },
    ticket : "رقم 22"
  },
  {
    id: 2,
    type: 'cinema',
    location: 'صيدناوي مول , برج العرب',
    price: '$30',
    ticketNumber: 'C-102',
    cinemaName: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
    personCount: 1,
    purchaseFrequency: 'مرة واحدة',
    customer: {
      name: 'محمد الغريب',
      phoneNumber: '0123456789',
      avatar: 'https://via.placeholder.com/30x30',
    },
    ticket : "رقم 22"

  },
  {
    id: 3,
    type: 'cinema',
    location: 'صيدناوي مول , برج العرب',
    price: '$45',
    ticketNumber: 'C-102',
    cinemaName: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
    personCount: 1,
    purchaseFrequency: 'مرة واحدة',
    customer: {
      name: 'محمد الغريب',
      phoneNumber: '0123456789',
      avatar: 'https://via.placeholder.com/30x30',
    },
    ticket : "رقم 22"

  },
  {
    id: 4,
    type: 'cinema',
    location: 'صيدناوي مول , برج العرب',
    price: '$54',
    ticketNumber: 'C-103',
    cinemaName: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
    personCount: 1,
    purchaseFrequency: 'مرة واحدة',
    customer: {
      name: 'محمد الغريب',
      phoneNumber: '0123456789',
      avatar: 'https://via.placeholder.com/30x30',
    },
    ticket : "رقم 22"

  },

  // Add more ticket data objects here...
];

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit {
  @Input() isRtlLanguage?: boolean;
  // @Input() totalItems: number;
  // @Input() itemsPerPage: number;
  // @Output() pageChange = new EventEmitter<number>();
  itemsPerPage= 5;
  totalItems = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 50];
  currentPage = 1;
  pagesToShow = 5;
  displayedColumns: string[] = [
    'id',
    'user',
    'ticketNumber',
    'price',
    'cinemaName',
    'personCount',
    'purchaseFrequency',
    "ticket"
  ];
//

// totalItems = 100;
// pageSize = 10;
// pageSizeOptions: number[] = [5, 10, 25, 50];
// currentPage = 1;
// pagesToShow = 5;

get pageNumbers(): number[] {
  const totalPages = Math.ceil(this.totalItems / this.pageSize);
  const startPage = Math.max(this.currentPage - Math.floor(this.pagesToShow / 2), 1);
  const endPage = Math.min(startPage + this.pagesToShow - 1, totalPages);
  return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
}

goToPage(page: number): void {
  if (page >= 1 && page <= Math.ceil(this.totalItems / this.pageSize)) {
    this.currentPage = page;
  }
}

previousPage(): void {
  if (this.currentPage > 1) {
    this.currentPage--;
  }
}

nextPage(): void {
  if (this.currentPage < Math.ceil(this.totalItems / this.pageSize)) {
    this.currentPage++;
  }
}

pageChange(event: any): void {
  this.currentPage = event.pageIndex + 1;
}

//
  // dataSource : PeriodicElement[] = ticketData
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dir: Directionality) {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ticketData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  // onPageChange(event: any) {
  //   this.pageChange.emit(event.pageIndex + 1);
  // }
}
