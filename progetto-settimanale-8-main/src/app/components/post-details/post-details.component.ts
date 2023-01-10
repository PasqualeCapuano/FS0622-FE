import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { getPosts } from 'src/app/service/posts.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  p: Post | undefined
  constructor(private ar: ActivatedRoute) {
  }

  ngOnInit(): void {
    let x = this.ar.snapshot.params["id"];
    getPosts().then((posts: Post[]) => {
      this.p = posts.find((element) => {
        if(x == element.id) {

          return true;
        } else {
          return false;
        }
      })
    })
  }

}
