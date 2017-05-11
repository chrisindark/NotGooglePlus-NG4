import { Component, OnInit, AfterViewChecked } from '@angular/core';

import { PostService } from './post.service';


@Component({
  selector: 'app-posts',
  template: `
    <div class="grid" *ngIf="posts && posts.length > 0">
      <div class="my-brick" *ngFor="let post of posts">
        <div class="well box">
          <div class="post">
            <div class="post__meta">
              <a href="/">+{{ post.user.username }}</a>
            </div>

            <div class="post__content">
              <p class="text__adjust">{{ post.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div *ngIf="!posts && posts.length == 0">
      <div class="no-posts-here">
        <em>There are no posts here.</em>
      </div>
    </div>

    <a class="btn btn-primary btn-fab btn-raised btn-add-new-post"
       href="javascript:void(0)">
      <i class="material-icons">add</i>
    </a>
  `,
  providers: [ PostService ]
})

export class PostComponent implements OnInit, AfterViewChecked {
  posts = [];

  constructor (
    private postsService: PostService
  ) {}

  ngOnInit () {
    this.postsService.all()
      .subscribe((res) => {
        this.posts = res.json().results;
        console.log(this.posts);
      });
  }

  ngAfterViewChecked () {
    if (this.posts && this.posts.length > 0) {
      // console.log(this.post);
    }
  }

  initMasonry () {
    // const grid = document.querySelector('.grid');
    // const msnry = new Masonry(grid, {
    //     itemSelector: '.mybrick',
    //     transitionDuration: '0.4s'
    // });
  }
}
