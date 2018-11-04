import { Component, OnInit, AfterViewChecked } from '@angular/core';

import {ArticleService} from '../../shared/services/article/article.service';



@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: [],
})

export class ArticlesComponent implements OnInit, AfterViewChecked {
  articles = [];

  constructor (
    private articleService: ArticleService
  ) {}

  ngOnInit () {
    console.log('Article component activated.');

    const filters = {};
    this.articleService.query(filters)
      .subscribe((res) => {
        // console.log(res);
        this.articles = res.results;
      });
  }

  ngAfterViewChecked () {
    if (this.articles && this.articles.length > 0) {
      // console.log(this.posts);
    }
  }

}
