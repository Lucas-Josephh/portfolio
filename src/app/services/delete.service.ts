import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DeleteDataService {
  private baseUrl = 'https://portfolio-back-ruddy.vercel.app';

  constructor(private http: HttpClient) {}

    deleteData(id: number, table: string): Observable<any> {
        return this.http.delete<any>(`${this.baseUrl}/deleteData`, {
            body: { id, table }
        });
    }
}
