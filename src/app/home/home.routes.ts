import { Routes } from '@angular/router';

import { HomeComponent } from '../home';


export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    // pathMatch: 'full',
    // redirectTo: 'posts'
    children: [
      {
        path: 'posts',
        loadChildren: '../posts/posts.module#PostsModule',
      },
      // {
      //   path: 'articles',
      //   loadChildren: '../articles/articles.module#ArticlesModule'
      // }
    ]
  },
];
