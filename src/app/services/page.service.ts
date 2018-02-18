import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ServiceConfig } from './config/service-config';

// for search
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

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
    return this.http.post(ServiceConfig.URL + 'pages', body, { headers: ServiceConfig.createHeader() })
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

  search(terms: Observable<string>) {
    return terms.debounceTime(400)
                .distinctUntilChanged()
                .switchMap(terms => terms.length > 0 ? this.searchPages(terms) : Observable.of([]));
  }

  searchPages(query) {
    return this.http.get(ServiceConfig.URL + 'pages/search/' + query, { headers: ServiceConfig.createHeader() })
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

  joinPage(page_id, page_code) {
    return this.http.put(ServiceConfig.URL + 'pages/join/' + page_id + '/' + page_code, '', { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

}
