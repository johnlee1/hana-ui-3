import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ServiceConfig } from './config/service-config';

// for search
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class PageService {

  constructor(private http: Http) {}

  getPage(page_id) {
    return this.http.get(ServiceConfig.URL + 'pages/' + page_id, { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  createPage(input) {
    const body = JSON.stringify(input);
    return this.http.post(ServiceConfig.URL + 'pages/', body, { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  updatePage(input, page_id) {
    const body = JSON.stringify(input);
    return this.http.put(ServiceConfig.URL + 'pages/' + page_id, body, { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  deletePage(page_id) {
    return this.http.delete(ServiceConfig.URL + 'pages/' + page_id, { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  getPages() {
    return this.http.get(ServiceConfig.URL + 'pages/me', { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  refreshCode(page_id) {
      const body = JSON.stringify({});
      return this.http.put(ServiceConfig.URL + 'pages/refresh_code' + page_id, body, { headers: ServiceConfig.createHeader() })
                 .map(ServiceConfig.extractData)
                 .catch(ServiceConfig.handleError);
  }

  search(terms: Observable<string>) {
    return terms.debounceTime(400)
                .distinctUntilChanged()
                .switchMap(term => this.searchPages(term));
  }

  searchPages(query) {
    const queryString = `?q=${query}`;
    return this.http.get(ServiceConfig.URL + 'pages/search' + queryString, { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  searchCode(query) {
    const queryString = `?q=${query}`;
    return this.http.get(ServiceConfig.URL + 'pages/search/code' + queryString, { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  followPage(page_id) {
    return this.http.put(ServiceConfig.URL + 'pages/follow/' + page_id, '', { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  unfollowPage(page_id) {
    return this.http.put(ServiceConfig.URL + 'pages/unfollow/' + page_id, '', { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

}
