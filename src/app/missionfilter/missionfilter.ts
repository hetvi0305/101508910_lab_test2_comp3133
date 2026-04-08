import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './missionfilter.html',
  styleUrl: './missionfilter.css'
})
export class MissionfilterComponent {

  @Output() filterChanged = new EventEmitter<any>();

  years = ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'];

  selectedYear: string | undefined;
  launchSuccess: boolean | undefined;
  landSuccess: boolean | undefined;

  selectYear(year: string) {
    this.selectedYear = year;
    this.emitFilters(year, this.launchSuccess, this.landSuccess);
  }

  selectLaunch(value: boolean) {
    this.launchSuccess = value;
    this.emitFilters(this.selectedYear, value, this.landSuccess);
  }

  selectLanding(value: boolean) {
    this.landSuccess = value;
    this.emitFilters(this.selectedYear, this.launchSuccess, value);
  }

  emitFilters(year?: string, launch?: boolean, land?: boolean) {
    this.filterChanged.emit({ year, launch, land });
  }
}