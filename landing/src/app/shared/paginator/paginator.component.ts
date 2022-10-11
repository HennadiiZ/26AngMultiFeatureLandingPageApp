import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  // numberOfPages = 5;
  // currentPage = 1;
  // pageOptions!: number[];
  //
  @Input() numberOfPages!: number;
  pageOptions!: number[];
  currentPage = 1;

  constructor() {
    this.pageOptions = [
      this.currentPage - 2,
      this.currentPage - 1,
      this.currentPage,
      this.currentPage + 1,
      this.currentPage + 2,
    ].filter(pageNumber => pageNumber >= 1 && pageNumber <= this.numberOfPages);
  }

  ngOnInit(): void {}

}
