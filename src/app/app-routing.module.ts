import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './dashboard/home.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // pathMatch: 'full',
    children: [
      {
        path: '',
        component: PostComponent,
      }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
