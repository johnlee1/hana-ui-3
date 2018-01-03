import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ServiceConfig } from './config/service-config';

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  getQueue() {
    return this.http.get(ServiceConfig.URL + 'users/me/queue', { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

}
