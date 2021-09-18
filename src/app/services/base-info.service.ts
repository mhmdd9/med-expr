import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseInfoService {

  constructor(private http: HttpClient) {}

  findAllByTopicCode(topicCode: number): Observable<any> {
    return this.http.get("http://localhost:8080/baseInfo/findAll/" + topicCode);
  }
}
