import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UpdateDataService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  updateData(data: [any], id: number, table: string): Observable<[]> {
    return this.http.put<[]>(`${this.baseUrl}/updateData`, {data, id, table});
  }
}
