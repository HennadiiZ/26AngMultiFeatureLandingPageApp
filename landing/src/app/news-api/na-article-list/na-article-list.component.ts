import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/article.interface';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-na-article-list',
  templateUrl: './na-article-list.component.html',
  styleUrls: ['./na-article-list.component.scss']
})
export class NaArticleListComponent implements OnInit {
  articles!: Article[];

  constructor(private newsApiService: NewsApiService) {
    this.newsApiService.pagesOutput.subscribe(articles => {
      this.articles = articles;
    });

    this.newsApiService.getPage(1);
  }

  ngOnInit(): void {}

}
