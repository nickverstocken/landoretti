import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myauctions',
  templateUrl: './myauctions.component.html',
  styleUrls: ['./myauctions.component.scss']
})
export class MyauctionsComponent implements OnInit {
  items = {'data' : [
      {
          id: 1,
          title: 'Expired item',
          price: 8.900,
          end_date: '2018-01-16 20:16:03',
          year: '1979',
          artist: 'Salvador Dali',
          status: 'expired'
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
          status: 'Expired'
      },
      {
          id: 5,
          title: 'Dance of Time III',
          price: 8.900,
          end_date: '2018-05-09 16:10:03',
          year: '1979',
          artist: 'Salvador Dali',
          status: 'refused'
      },
      {
          id: 6,
          title: 'Dance of Time III',
          price: 8.900,
          end_date: '2018-05-09 16:10:03',
          year: '1979',
          artist: 'Salvador Dali',
          status: 'expired'
      },
      {
          id: 7,
          title: 'Dance of Time III',
          price: 8.900,
          end_date: '2018-05-09 16:10:03',
          year: '1979',
          artist: 'Salvador Dali',
          status: 'sold'
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
  sold: any[];
  pending: any[];
  active: any[];
  refused: any[];
  expired: any[];
  constructor() { }

  ngOnInit() {
    this.sold = this.items.data.filter(
        item => item.status === 'sold');
      this.pending = this.items.data.filter(
          item => item.status === 'pending');
      this.active = this.items.data.filter(
          item => item.status === 'active');
      this.refused = this.items.data.filter(
          item => item.status === 'refused');
      this.expired = this.items.data.filter(
          item => item.status === 'expired');
  }
  pushToExpired(item){
      item.status = 'expired';
        this.expired.push(item);
        console.log(this.expired);
  }

}
