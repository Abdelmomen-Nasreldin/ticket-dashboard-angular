import { Component, Input } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
changePageSize() {
throw new Error('Method not implemented.');
}
  @Input() isRtlLanguage?: boolean;
  // @Input() length?: number;
  // @Input() pageSize?: number;
  // @Input() pageSizeOptions?:  number[];

  totalItems = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 50];
  currentPage = 1;
  pagesToShow = 5;

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
}
