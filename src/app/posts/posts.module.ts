import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';
import { PostsComponent } from '../posts';
import { POST_ROUTES } from '../posts';


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
