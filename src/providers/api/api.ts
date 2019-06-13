import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { heartbeat } from '../../app/utilities/urls';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
    
  }

  heartbeat(): Observable <any> {

    const url = heartbeat;
    const params = new HttpParams();
    const result = this.http.get<any>(url);
    return result;

  }

}
