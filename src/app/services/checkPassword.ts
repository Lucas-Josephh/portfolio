import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CheckPasswordService {
  private baseUrl = 'https://portfolio-back-ruddy.vercel.app';

  constructor(private http: HttpClient) {}

  checkpass(password: string): Observable<{ exists: boolean }> {
    return this.http.post<{ exists: boolean }>(`${this.baseUrl}/checkpass`, { password });
  }
}
