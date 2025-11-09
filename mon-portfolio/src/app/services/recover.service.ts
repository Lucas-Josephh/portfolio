import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class GetDataService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

    getData(table: string, id?: number): Observable<any[]> {
        const params: any = { table };
        if(id) { params.id = id; }
        return this.http.get<any[]>(`${this.baseUrl}/getData`, { params });
    }
}
