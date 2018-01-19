import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss']
})
export class TableFilterComponent implements OnInit {
  @Input() items: any[];
  @Output() filter: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  changeFilter(item, event){
    let element = event.target;
    $('a.selected').removeClass('selected');
    $(element).addClass('selected');
    this.filter.emit(item.value);
  }
}
