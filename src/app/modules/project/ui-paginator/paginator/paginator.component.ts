import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SnackbarService } from 'src/app/modules/core';
import { PaginatorConfig } from '../interfaces/pagination-config.interface';

@Component({
  selector: 'koodaki-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  constructor(private snackbar: SnackbarService) {}
  @Input() config?: PaginatorConfig;
  @Output() changePage: EventEmitter<number> = new EventEmitter();

  get totalPages() {
    return this.config ? Math.floor(this.config.total / this.config.size) : 0;
  }

  onClickNext() {
    if (this.config && this.config.hasNext) {
      this.config.page += 1;
      this.changePage.emit(this.config.page);
    }
  }

  onClickPrevious() {
    if (this.config && this.config.page > 1) {
      this.config.page -= 1;
      this.changePage.emit(this.config.page);
    }
  }

  onChagePage(page: any) {
    const pageNumber = Number(page);
    if (pageNumber < 1) {
      const message: string = `شماره صفحه نمی تواند بیشتر از ۱ باشد`;
      this.snackbar.warn(message);
    } else if (pageNumber > this.totalPages) {
      const message: string = `شماره صفحه نمی تواند بیشتر از ${this.totalPages} باشد`;
      this.snackbar.warn(message);
    } else {
      this.changePage.emit(pageNumber);
    }
  }
}
