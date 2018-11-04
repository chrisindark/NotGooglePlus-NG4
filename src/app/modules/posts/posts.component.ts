import { Component, OnInit, AfterViewChecked } from '@angular/core';

import {PostService} from '../../shared/services/post/post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: [],
})

export class PostsComponent implements OnInit, AfterViewChecked {
  posts = [];

  constructor (
    private postService: PostService
  ) {}

  ngOnInit () {
    console.log('Post component activated.');

    const filters = {};
    this.postService.query(filters)
      .subscribe((res) => {
        // console.log(res);
        this.posts = res.results;
      });
  }

  ngAfterViewChecked () {
    if (this.posts && this.posts.length > 0) {
      // console.log(this.posts);
    }
  }

}
