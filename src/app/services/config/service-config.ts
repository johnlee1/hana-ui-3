import { Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from './../../../environments/environment';

export class ServiceConfig {

  static URL = environment.api_url;

  public static createHeader() {
  const headers = new Headers();
    const authToken = localStorage.getItem('hanaauthtoken');
    headers.append('hanaauthtoken', `${authToken}`);
    return headers;
  }

  public static extractData(res: Response) {
    return res.json() || { };
  }

  public static handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

}
