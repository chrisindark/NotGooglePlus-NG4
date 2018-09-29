import { Routes } from '@angular/router';

import { PostsComponent } from '../posts';


export const POST_ROUTES: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
  // {
  //   path: 'posts/:id',
  //   component: PostDetailComponent
  // },
];
