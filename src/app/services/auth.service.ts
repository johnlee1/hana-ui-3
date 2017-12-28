import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { ServiceConfig } from './config/service-config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

  constructor(private http: Http, private router: Router) {}

  confirm(token) {
    return this.http.get(ServiceConfig.URL + 'users/confirm/' + token)
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  login(input) {
    const body = JSON.stringify(input);
    return this.http.post(ServiceConfig.URL + 'users/login', body)
                    .map(ServiceConfig.extractData)
                    .map((res) => {
                      if (res.token) {
                        localStorage.setItem('hanaauthtoken', res.token);
                        localStorage.setItem('hanauserid', res.user_id);
                      }
                      return res;
                    })
                    .catch(ServiceConfig.handleError);
  }

  logout() {
    localStorage.removeItem('hanaauthtoken');
    localStorage.removeItem('hanauserid');
    return;
  }

  register(input) {
    const body = JSON.stringify(input);
    return this.http.post(ServiceConfig.URL + 'users', body)
                    .map(ServiceConfig.extractData)
                    .map((res) => {
                      if (res.token) {
                        localStorage.setItem('hanaauthtoken', res.token);
                        localStorage.setItem('hanauserid', res.user_id);
                      }
                      return res;
                    })
                    .catch(ServiceConfig.handleError);
  }

  updatePassword(input) {
    const body = JSON.stringify(input);
    return this.http.post(ServiceConfig.URL + 'users/password', body, { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

}
