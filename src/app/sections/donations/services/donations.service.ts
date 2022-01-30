import { Donation, NewDonation } from './../models/donation.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonationsService {

  constructor(
    private http: HttpClient,
  ) { }

  create(donation: NewDonation) {
    return this.http.post<void>(`donations`, donation)
  }
  get(id: string) {
    return this.http.get<string>(`donations/${id}`)
  }
  getList(): Observable<Donation[]> {
    return this.http.get<Donation[]>(`donations`);
  }
  update(donation: Donation) {
    return this.http.put<void>(`donations/${donation.id}`, donation)
  }
  delete(id: string) {
    return this.http.delete<void>(`donations/${id}`)
  }
}
