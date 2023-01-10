import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/models/users';
import { getUsers } from 'src/app/service/users.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {

  u: Users | undefined

  constructor(private ar: ActivatedRoute) {
  }

  ngOnInit(): void {
    let x = this.ar.snapshot.params["id"];
    getUsers().then((users: Users[]) => {
      this.u = users.find((element) => {
        if(x == element.id) {

          return true;
        } else {
          return false;
          let error = document.getElementById('errore') as HTMLElement;
           error.innerHTML = "L'utente non esiste!";
        }
      })
    })
  }

}
