import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ServiceConfig } from './config/service-config';

@Injectable()
export class ListService {

  constructor(private http: Http) {}

  getList(list_id) {
    return this.http.get(ServiceConfig.URL + 'lists/' + list_id, { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  createList(input) {
    const body = JSON.stringify(input);
    return this.http.post(ServiceConfig.URL + 'lists', body, { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  addPost(input, list_id) {
    const body = JSON.stringify(input);
    return this.http.put(ServiceConfig.URL + 'lists/addPost/' + list_id, body, { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  deletePage(page_id) {
    return this.http.delete(ServiceConfig.URL + 'pages/' + page_id, { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  getLists() {
    return this.http.get(ServiceConfig.URL + 'lists/me', { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

  removePost(input, list_id) {
      const body = JSON.stringify(input);
      return this.http.put(ServiceConfig.URL + 'lists/removePost/' + list_id, body, { headers: ServiceConfig.createHeader() })
                 .map(ServiceConfig.extractData)
                 .catch(ServiceConfig.handleError);
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

  joinPage(page_id, page_code) {
    return this.http.put(ServiceConfig.URL + 'pages/join/' + page_id + '/' + page_code, '', { headers: ServiceConfig.createHeader() })
                    .map(ServiceConfig.extractData)
                    .catch(ServiceConfig.handleError);
  }

}
