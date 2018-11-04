import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared';
import { ArticlesComponent } from './articles.component';
import { ARTICLE_ROUTES } from './articles.routes';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ARTICLE_ROUTES)
  ],
  declarations: [
    ArticlesComponent
  ],
  exports: []
})

export class ArticlesModule {}
