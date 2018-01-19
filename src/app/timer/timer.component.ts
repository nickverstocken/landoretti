import { Component, OnInit, Input, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
    private _time: number;
    private _timing: number = 1000;
    private _interval;
    @Output() expired: EventEmitter<any> = new EventEmitter();
    @Input()
    public set time(value: string | number) {

        this._time = parseInt(value as string, 10);
        this._startTimer();
    }

    @Input()
    public set timing(value: string | number) {
        this._timing = parseInt(value as string, 10);
        this._startTimer();
    }

    @Input()
    public format: string = '{dd} days {hh} hours {mm} minutes {ss} seconds';
    ngOnInit(){

    }
    ngOnDestroy(){
      this._stopTimer();
    }
    public get delta() {
        let date = new Date();
        return Math.max(0, Math.floor((this._time - date.getTime()) / 1000));
    }

    public get displayTime() {
        let days, hours, minutes, seconds, delta = this.delta, time = this.format;

        days = Math.floor(delta / 86400);
        delta -= days * 86400;
        hours = Math.floor(delta  / 3600) % 24;
        delta -= hours * 3600;
        minutes = Math.floor(delta  / 60) % 60;
        delta -= minutes * 60;
        seconds = delta % 60;

        time = time.replace('{dd}', days);
        time = time.replace('{hh}', hours);
        time = time.replace('{mm}', minutes);
        time = time.replace('{ss}', seconds);

        if(this.delta > 0){
            return time;
        }else{
          return 'x';
        }

    }

    constructor(private _changeDetector: ChangeDetectorRef) { }


    private _startTimer() {
        this._interval = setInterval(() => {
            this._changeDetector.detectChanges();
            if(this.delta <= 0) {

                this.expired.emit('expired');
                this._stopTimer();
            }
        }, this._timing);
    }

    private _stopTimer() {

        clearInterval(this._interval);
        this._interval = undefined;
    }
}
