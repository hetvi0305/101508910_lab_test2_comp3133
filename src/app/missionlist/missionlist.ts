import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacexapiService } from '../network/spacexapi';
import { Router } from '@angular/router';
import { MissionfilterComponent } from '../missionfilter/missionfilter';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, MissionfilterComponent],
  templateUrl: './missionlist.html',
  styleUrl: './missionlist.css'
})
export class MissionlistComponent {

  missions: any[] = [];

  constructor(private service: SpacexapiService,
              private router: Router) {}

  ngOnInit() {
    this.service.getAllMissions().subscribe(data => {
      this.missions = data;
    });
  }

  goToDetails(id: number) {
    this.router.navigate(['/mission', id]);
  }

  onFilter(filters: any) {
  console.log("FILTER RECEIVED:", filters);

  this.service.filterMissions(filters.year, filters.launch, filters.land)
    .subscribe(data => {
      this.missions = data;
    });
  }
}