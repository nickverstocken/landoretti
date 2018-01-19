import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-actiontable',
  templateUrl: './actiontable.component.html',
  styleUrls: ['./actiontable.component.scss']
})
export class ActiontableComponent implements OnInit {
  @Input() data: any[];
  @Output() pushToExpired: EventEmitter<any> = new EventEmitter();
  @Input() filter: string;
  @Input() checkboxes = false;
  constructor() { }

  ngOnInit() {
  }
  toTimestamp(strDate){
        let datum = Date.parse(strDate);
        return datum;
    }
    changeStatus(item, status){
        item.status = status;
        this.pushToExpired.emit(item);
    if(this.filter !== 'expired' && this.filter !== 'all'){
        console.log('expired');
        this.data = this.data.filter(data => data.id !== item.id);
    }
    }
}
