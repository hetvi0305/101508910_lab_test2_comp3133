import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexapiService } from '../network/spacexapi';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './missiondetails.html',
  styleUrl: './missiondetails.css'
})
export class MissiondetailsComponent {

  mission: any;

  constructor(private route: ActivatedRoute,
            private service: SpacexapiService,
            private cdr: ChangeDetectorRef) {}

  loading = true;

ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const id = Number(params.get('id'));

    console.log("Route ID:", id);

    // ✅ RESET state every time
    this.mission = null;
    this.loading = true;

    this.service.getMissionByIdLocal(id).subscribe(data => {

      console.log("ALL DATA:", data);

      const found = data.find(m => m.flight_number === id);

      console.log("FOUND:", found);

      this.mission = found ? found : null;

      this.loading = false;
      this.cdr.detectChanges();
    });
  });
}
}