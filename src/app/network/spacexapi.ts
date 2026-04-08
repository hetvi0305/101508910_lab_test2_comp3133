import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  private baseUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getMissionByIdLocal(flight_number: number) {
    return this.http.get<any[]>(this.baseUrl);
  }

  // ✅ Get all missions
  getAllMissions(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // ✅ Get mission by flight number
  getMissionByFlightNumber(flight_number: number) {
  return this.http.get<any[]>(`${this.baseUrl}?flight_number=${flight_number}`);
  }

  // ✅ Filter by multiple conditions
filterMissions(year?: string, launch?: boolean, land?: boolean) {

  let url = this.baseUrl + '?';

  if (year) {
    url += `launch_year=${year}&`;
  }

  if (launch !== undefined) {
    url += `launch_success=${launch}&`;
  }

  if (land !== undefined) {
    url += `land_success=${land}`;
  }

  return this.http.get<any[]>(url);
}
}