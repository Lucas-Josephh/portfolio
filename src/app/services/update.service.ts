import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UpdateDataService {
  private baseUrl = 'https://portfolio-back-ruddy.vercel.app';

  constructor(private http: HttpClient) {}

  updateData(data: [any], id: number, table: string): Observable<[]> {
    return this.http.put<[]>(`${this.baseUrl}/updateData`, {data, id, table});
  }
}
