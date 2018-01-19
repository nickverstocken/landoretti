import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
    items = {'data' : [
        {
            id: 1,
            title: 'Expired item',
            price: 8.900,
            end_date: '2018-01-16 20:16:03',
            year: '1979',
            artist: 'Salvador Dali',
            status: 'pending'
        },
        {
            id: 2,
            title: 'Dance of Time III',
            price: 8.900,
            end_date: '2018-05-09 16:10:03',
            year: '1979',
            artist: 'Salvador Dali',
            status: 'pending'
        },
        {
            id: 4,
            title: 'Dance of Time III',
            price: 8.900,
            end_date: '2018-05-09 16:10:03',
            year: '1979',
            artist: 'Salvador Dali',
            status: 'pending'
        },
        {
            id: 5,
            title: 'Dance of Time III',
            price: 8.900,
            end_date: '2018-05-09 16:10:03',
            year: '1979',
            artist: 'Salvador Dali',
            status: 'pending'
        },
        {
            id: 6,
            title: 'Dance of Time III',
            price: 8.900,
            end_date: '2018-05-09 16:10:03',
            year: '1979',
            artist: 'Salvador Dali',
            status: 'pending'
        },
        {
            id: 7,
            title: 'Dance of Time III',
            price: 8.900,
            end_date: '2018-05-09 16:10:03',
            year: '1979',
            artist: 'Salvador Dali',
            status: 'pending'
        },
        {
            id: 8,
            title: 'Dance of Time III',
            price: 8.900,
            end_date: '2018-05-09 16:10:03',
            year: '1979',
            artist: 'Salvador Dali',
            status: 'sold'
        },
        {
            id:9,
            title: 'Dance of Time III',
            price: 8.900,
            end_date: '2018-05-09 16:10:03',
            year: '1979',
            artist: 'Salvador Dali',
            status: 'sold'
        }
    ]};
    data = [];
    filters =[ {name: 'all (' + this.items.data.length + ')', value: 'all'  },
        {name: 'active (' + this.items.data.filter(item => item.status === 'pending').length + ')' , value: 'pending'  },
        {name: 'ended (' + this.items.data.filter(item => item.status === 'sold' || item.status === 'expired').length + ')', value: 'ended'  } ];
  constructor() { }
    filterTable(value){
      switch (value) {
          case 'all': {
              this.data = this.items.data;
              break;
          }
          case 'ended' : {
              this.data = this.items.data.filter(item => item.status === 'sold' || item.status === 'expired');
              break;
          }
          default: {
              this.data = this.items.data.filter(item => item.status === value);
      }
      }


    }
  ngOnInit() {
        this.data = this.items.data;
  }
    isExpired(item){

    }
}
