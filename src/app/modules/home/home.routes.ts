import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';


export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full',
      },
      {
        path: 'posts',
        loadChildren: '../posts/posts.module#PostsModule',
      },
      {
        path: 'articles',
        loadChildren: '../articles/articles.module#ArticlesModule',
      },
    ]
  },
];
