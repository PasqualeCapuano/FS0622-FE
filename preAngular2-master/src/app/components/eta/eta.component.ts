import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-eta',
    templateUrl: './eta.component.html',
    styleUrls: ['./eta.component.scss']
})
export class EtaComponent implements OnInit {

    @Input() eta!: number;

    @Output() etaChange = new EventEmitter<number>();

    constructor() { }

    add() {
        this.eta++;
        this.etaChange.emit(this.eta);
    }

    sott() {
        this.eta--;
        this.etaChange.emit(this.eta);
    }

    ngOnInit(): void {
    }

}
