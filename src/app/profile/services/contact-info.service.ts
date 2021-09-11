import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactInfoModel } from 'src/models/contact-info.model';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {

  constructor(private http: HttpClient) { }

  saveContactInfo(entity: ContactInfoModel) {
    this.http.post("http://localhost:8080/user/contact-info", entity).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  findByUserId(userId: number): Observable<any> {
    return this.http.get("http://localhost:8080/user/contact-info/findByUserId/" + userId);
  }
}
