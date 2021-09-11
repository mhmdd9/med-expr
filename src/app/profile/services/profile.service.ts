import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ContactInfoModel } from "src/models/contact-info.model";
import { UserModel } from "src/models/user.model";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  
  constructor(private http: HttpClient) {}

  saveUser(user: UserModel): Observable<any> {
    return this.http.post("http://localhost:8080/user", user);
  }

  findById(id: number): Observable<any> {
    return this.http.get("http://localhost:8080/user/" + id);
  }
}
