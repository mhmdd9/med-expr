import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpecInfoModel } from 'src/models/spec-info.model';

@Injectable({
  providedIn: 'root'
})
export class SpecInfoService {
  constructor(private http: HttpClient) { }
  
  saveSpecInfo(entity: SpecInfoModel) {
    this.http.post("http://localhost:8080/user/spec-info", entity).subscribe();
  }

  findById(userId: number): Observable<any> {
    return this.http.get("http://localhost:8080/user/spec-info/" + userId);
  }
}
