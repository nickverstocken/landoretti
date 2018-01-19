import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-auction-detail',
  templateUrl: './auction-detail.component.html',
  styleUrls: ['./auction-detail.component.scss']
})
export class AuctionDetailComponent implements OnInit {
    items = {'data' : [
        {
            id: 1,
            title: 'Expired item',
            price: 8.900,
            end_date: '2018-05-09 16:10:03',
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
            title: 'Expired item',
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
        }
    ]};
  constructor() { }

    slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, infinite: true, dots: false, autoplay: false};
    slideConfig2 = {"slidesToShow": 3, "slidesToScroll": 3, infinite: true, dots: false, autoplay: false, asNavFor: '.carousel', focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    slideConfig3 = {"slidesToShow": 4, "slidesToScroll": 4, infinite: true, dots: false, autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
  ngOnInit() {
  }
    toTimestamp(strDate){
        let datum = Date.parse(strDate);
        return datum;
    }
}
