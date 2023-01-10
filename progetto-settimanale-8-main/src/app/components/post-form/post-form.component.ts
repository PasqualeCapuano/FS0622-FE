import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  constructor() {


   }

  ngOnInit(): void {
  }
  registra(titolo: string, body: string, type: string, author: string) {
    if (titolo != "" && body != "" && type != "" && author  != "") {
      let data = {
        body: body,
        title: titolo,
        active: true,
        type: type,
        author: author
      }
      this.addData(data);
      location.reload();
    }
  }

  addData(data: any) {
    fetch('http://localhost:3000/lista', {
        method: 'POST',
        headers: {
            'content-type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
    });
}


  }

