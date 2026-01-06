import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AddDataService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  addData(data: [any], table: string): Observable<[]> {
    return this.http.post<[]>(`${this.baseUrl}/addData`, {data, table});
  }
}
