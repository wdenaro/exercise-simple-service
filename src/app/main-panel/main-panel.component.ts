import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent implements OnInit {
  posts: any;

  constructor(private service: PostsService) { }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
        // console.log(this.posts);
      });
  }

  showDetail(country) {
    console.log(country);
  }

}
