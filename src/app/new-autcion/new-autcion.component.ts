import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-new-autcion',
    templateUrl: './new-autcion.component.html',
    styleUrls: ['./new-autcion.component.scss']
})
export class NewAutcionComponent implements OnInit {

    options = [
        {
            value: '1',
            name: 'Abstract'
        },
        {
            value: '2',
            name: 'African'
        },
        {
            value: '3',
            name: 'Conceptual'
        },
        {
            value: '4',
            name: 'Contemporary'
        },
        {
            value: '5',
            name: 'Emerging'
        },
        {
            value: '6',
            name: 'Figurative'
        },
        {
            value: '7',
            name: 'Middle Eastern Contemporary'
        },
        {
            value: '8',
            name: 'Minimalism'
        },
        {
            value: '9',
            name: 'Modern'
        },
        {
            value: '10',
            name: 'Pop'
        },
        {
            value: '11',
            name: 'Urban'
        },
        {
            value: '12',
            name: 'vintage'
        }
    ]

    constructor() {
    }

    ngOnInit() {
    }

}
