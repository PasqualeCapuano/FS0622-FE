import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
    selector: 'app-new-user',
    templateUrl: './new-user.component.html',
    styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

    @Output() onManCreated = new EventEmitter<User>();
    @Output() onWomanCreated = new EventEmitter<User>();

    newName = '';
    newSurname = '';
    newEta = 0;

    constructor() { }

    onAddMan() {
        this.onManCreated.emit({name: this.newName, surname: this.newSurname, sex: 'man', eta: this.newEta});
    }
    onAddWoman() {
        this.onWomanCreated.emit({name: this.newName, surname: this.newSurname, sex: 'woman', eta: this.newEta});
    }

    ngOnInit(): void {
    }

}
