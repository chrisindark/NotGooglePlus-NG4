import { Routes } from '@angular/router';

import { PostsComponent } from './posts.component';


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
