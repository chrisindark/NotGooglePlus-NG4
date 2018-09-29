import { Component, OnInit, AfterViewChecked } from '@angular/core';

import { PostService } from '../posts';


@Component({
  selector: 'app-posts',
  template: `
    <h2>POSTS</h2>
    <div class="col-md-offset-1 col-md-10 col-xs-12">
      <md-grid-list cols="2">
        <md-grid-tile *ngFor="let post of posts">

          <md-card class="example-card">
            <md-card-header>
              <div md-card-avatar class="example-header-image"
                style=""></div>
              <md-card-title>+{{ post.user.username }}</md-card-title>
              <md-card-subtitle>{{ post.created_at }}</md-card-subtitle>
            </md-card-header>
            <img md-card-image *ngIf="!!post.file" src="{{ post.file.file }}">
            <md-card-header>
              <md-card-title>{{ post.title }}</md-card-title>
              <md-card-content>{{ post.content }}</md-card-content>
            </md-card-header>

            <md-card-actions>
              <button md-button>LIKE</button>
              <button md-button>SHARE</button>
            </md-card-actions>

          </md-card>

        </md-grid-tile>
      </md-grid-list>
    </div>

    <!--<div *ngIf="!posts && posts.length == 0">-->
      <!--<div class="no-posts-here">-->
        <!--<em>There are no posts here.</em>-->
      <!--</div>-->
    <!--</div>-->

    <!--<button md-fab class="btn-add-new-post">-->
      <!--<md-icon>add</md-icon>-->
    <!--</button>-->
  `,
  providers: [ PostService ]
})

export class PostsComponent implements OnInit, AfterViewChecked {
  public posts = [];

  constructor (
    private postService: PostService
  ) {}

  ngOnInit () {
    // console.log('component loaded');
    this.postService.all()
      .subscribe((res) => {
        this.posts = res.json().results;
        // console.log(this.posts);
      });
  }

  ngAfterViewChecked () {
    if (this.posts && this.posts.length > 0) {
      // console.log(this.posts);
    }
  }

}
