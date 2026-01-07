import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class PasswordExistService {
  private baseUrl = 'https://portfolio-back-ruddy.vercel.app';

  constructor(private http: HttpClient) {}

  passExist(): Observable<{ exists: boolean }> {
    return this.http.get<{ exists: boolean }>(`${this.baseUrl}/passExist`);
  }
}
