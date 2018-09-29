import {Component, Input, Output, EventEmitter, OnInit, OnChanges} from '@angular/core';


@Component({
  selector: 'app-pagination',
  template: `
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li>
          <button (click)="previous()" [disabled]="disablePrevious()"
                  [ngClass]="{'disabled': disablePrevious()}" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        <li><a href="javascript:void(0);">1</a></li>
        <li><a href="javascript:void(0);">2</a></li>
        <li><a href="javascript:void(0);">3</a></li>
        <li><a href="javascript:void(0);">4</a></li>
        <li><a href="javascript:void(0);">5</a></li>
        <li>
          <button (click)="next()" [disabled]="disableNext()"
                  [ngClass]="{'disabled': disableNext()}" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  `
})

export class PaginationComponent implements OnInit, OnChanges {
  @Input()
  pageCount: number;
  page: number;
  @Input() totalCount: number;
  @Input() currentPage: number;
  @Input() limit: number;
  @Input() maxVisible: number;

  @Output() pageChanged = new EventEmitter();
  totalPages: number;
  showPages: Array<any> = [];
  start: number;
  end: number;

  constructor() {}

  ngOnInit() {
    this.showPages = [];
    this.start = 1;
    this.end = 1;
  }

  ngOnChanges(changes) {
    if (changes.totalCount && changes.totalCount.currentValue) {
      this.totalPages = Math.ceil(this.totalCount / this.limit);
      this.end = this.maxVisible >= this.totalPages
        ? this.totalPages : this.maxVisible;
    }
  }

  range() {
    this.showPages = [];
    const x = this.currentPage;
    let startPage;
    let endPage;
    if (this.totalPages >= this.maxVisible) {
      startPage = x - (Math.ceil(this.maxVisible / 2) - 1);
      if (this.maxVisible % 2 === 0) {
        endPage = x + (Math.ceil(this.maxVisible / 2));
      } else {
        endPage = x + (Math.ceil(this.maxVisible / 2) - 1);
      }

      if (startPage < 1) {
        endPage = endPage + (1 - startPage);
        startPage = 1;
      } else if (endPage > this.totalPages) {
        startPage = startPage - (endPage - this.totalPages);
        endPage = this.totalPages;
      }
    } else {
      startPage = 1;
      endPage = this.totalPages;
    }

    for (let i = startPage; i <= endPage; ++i) {
      this.showPages.push(i);
    }

    return this.showPages;
  }

  next() {
    this.page++;
    this.pageChanged.emit(this.page);
  }

  previous() {
    this.page--;
    this.pageChanged.emit(this.page);
  }

  disablePrevious(): boolean {
    return +this.page > 1;
    // return this.currentPage <= 1;
  }

  disableNext(): boolean {
    return +this.page < +this.pageCount;
    // return this.currentPage >= this.totalPages;
  }

  selectPage(pageNumber) {
    this.pageChanged.emit(pageNumber);
  }

}
