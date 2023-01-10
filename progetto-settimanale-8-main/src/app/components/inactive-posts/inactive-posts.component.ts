import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { getPosts } from 'src/app/service/posts.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {
  posts!: Post[]
  constructor() {


  }
  ngOnInit(): void {
    getPosts().then(posts => {
      console.log(posts)
      this.posts = posts
      this.inactivePosts()
      console.log(this.posts)
    })



  }





upload(id: number) {
  fetch('http://localhost:3000/lista' + '/' + id, {
    method: 'PATCH',
    body: JSON.stringify({
      active: true,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  location.reload();
  }

  inactivePosts() {
    this.posts = this.posts.filter(post => !post.active);
  }

  delete(id: number) {
    fetch('http://localhost:3000/lista' + '/' + id, {
    method: 'DELETE',
  })
  location.reload();
  }

    }

