import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.scss']
})
export class AuctionsComponent implements OnInit {
    filters =[ {name: 'ending soonest', value: 'soonest'  },
        {name: 'ending latest' , value: 'latest'  },
        {name: 'new auctions', value: 'ended'  },
        {name: 'popular auctions', value: 'popular'  }];
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
            id: 3,
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
            status: 'pending'
        },
        {
            id:9,
            title: 'Dance of Time III',
            price: 8.900,
            end_date: '2018-05-09 16:10:03',
            year: '1979',
            artist: 'Salvador Dali',
            status: 'pending'
        }
    ]};
    advanced = ''
  constructor() { }
    toTimestamp(strDate){
        let datum = Date.parse(strDate);
        return datum;
    }
  ngOnInit() {
  }
    changeStatus(item, expired){
        this.items.data = this.items.data.filter(data => data.id !== item.id);
    }
    openAdvanced(){
        if(this.advanced === 'open'){
            this.advanced = '';
        }else{
            this.advanced = 'open';
        }

    }

}
