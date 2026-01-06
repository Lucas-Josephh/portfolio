import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DeleteDataService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

    deleteData(id: number, table: string): Observable<any> {
        return this.http.delete<any>(`${this.baseUrl}/deleteData`, {
            body: { id, table }
        });
    }
}
