import { Routes } from '@angular/router';

import { ArticlesComponent } from './articles.component';


export const ARTICLE_ROUTES: Routes = [
  {
    path: '',
    component: ArticlesComponent,
  },
  // {
  //   path: 'articles/:id',
  //   component: ArticleDetailComponent
  // },
];
