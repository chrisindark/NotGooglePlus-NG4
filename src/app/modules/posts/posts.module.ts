import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared';
import { PostsComponent } from './posts.component';
import { POST_ROUTES } from './posts.routes';


@NgModule({
    imports: [
      SharedModule,
      RouterModule.forChild(POST_ROUTES)
    ],
    declarations: [
        PostsComponent
    ],
    exports: []
})

export class PostsModule {}
